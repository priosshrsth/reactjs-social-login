/* eslint-disable camelcase */
/**
 *
 * LoginSocialGoogle
 *
 */
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'
import { objectType, IResolveParams, TypeCrossFunction } from '../'

interface Props {
  scope?: string
  prompt?: string
  ux_mode?: string
  client_id: string
  className?: string
  login_hint?: string
  access_type?: string
  redirect_uri?: string
  cookie_policy?: string
  hosted_domain?: string
  discoveryDocs?: string
  children?: React.ReactNode
  onLoginStart?: () => void
  onLogoutSuccess?: () => void
  onLogoutFailure?: () => void
  onReject: (reject: string | objectType) => void
  fetch_basic_profile?: boolean
  onResolve: ({ provider, data }: IResolveParams) => void
}

// const SCOPE = ''
// const JS_SRC = 'https://apis.google.com/js/api.js'
const JS_SRC = 'https://accounts.google.com/gsi/client'
const SCRIPT_ID = 'google-login'
const _window = window as any

const LoginSocialGoogle = forwardRef(
  (
    {
      client_id,
      scope = 'email profile',
      prompt = 'select_account',
      ux_mode,
      className = '',
      login_hint = '',
      access_type = 'online',
      onLogoutFailure,
      onLogoutSuccess,
      onLoginStart,
      onReject,
      onResolve,
      redirect_uri = '/',
      cookie_policy = 'single_host_origin',
      hosted_domain = '',
      discoveryDocs = '',
      children,
      fetch_basic_profile = true
    }: Props,
    ref: React.Ref<TypeCrossFunction>
  ) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isSdkLoaded, setIsSdkLoaded] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [instance, setInstance] = useState<any>(null!)
    const [token, setToken] = useState<string>('')

    useEffect(() => {
      !isSdkLoaded && load()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSdkLoaded])

    const checkIsExistsSDKScript = useCallback(() => {
      return !!document.getElementById(SCRIPT_ID)
    }, [])

    const insertScriptGoogle = useCallback(
      (
        d: HTMLDocument,
        s: string = 'script',
        id: string,
        jsSrc: string,
        cb: () => void
      ) => {
        const ggScriptTag: any = d.createElement(s)
        ggScriptTag.id = id
        ggScriptTag.src = jsSrc
        ggScriptTag.async = true
        ggScriptTag.defer = true
        const scriptNode = document.getElementsByTagName('script')![0]
        scriptNode &&
          scriptNode.parentNode &&
          scriptNode.parentNode.insertBefore(ggScriptTag, scriptNode)
        ggScriptTag.onload = cb
      },
      []
    )

    const handleResponse = useCallback(
      (res: objectType) => {
        setIsLogged(true)
        setIsProcessing(false)
        setToken(res?.access_token)
        // _window.google.accounts.id.initialize({
        //   client_id,
        //   auto_select: true,
        //   callback: (value: any) =>
        //     console.log('🚀 ~ file: index.tsx ~ line 113 ~ value', value)
        // })
        // _window.google.accounts.id.prompt()
        const data: objectType = res
        onResolve({
          provider: 'google',
          data
        })
      },
      [onResolve]
    )

    const load = useCallback(() => {
      if (checkIsExistsSDKScript()) {
        setIsSdkLoaded(true)
      } else {
        insertScriptGoogle(document, 'script', SCRIPT_ID, JS_SRC, () => {
          const params = {
            client_id,
            cookie_policy,
            login_hint,
            hosted_domain,
            fetch_basic_profile,
            discoveryDocs,
            ux_mode,
            redirect_uri,
            access_type,
            scope,
            immediate: true,
            prompt
          }
          var client = _window.google.accounts.oauth2.initTokenClient({
            ...params,
            callback: handleResponse
          })
          setInstance(client)
          setIsSdkLoaded(true)
        })
      }
    }, [
      checkIsExistsSDKScript,
      insertScriptGoogle,
      client_id,
      prompt,
      cookie_policy,
      login_hint,
      hosted_domain,
      fetch_basic_profile,
      discoveryDocs,
      ux_mode,
      redirect_uri,
      access_type,
      scope,
      handleResponse
    ])

    const loginGoogle = useCallback(() => {
      if (isProcessing || !isSdkLoaded) return
      setIsProcessing(true)
      if (!_window.google) {
        setIsProcessing(false)
        load()
        onReject("Google SDK isn't loaded!")
      } else {
        onLoginStart && onLoginStart()
        if (instance) instance.requestAccessToken()
      }
    }, [instance, isProcessing, isSdkLoaded, load, onLoginStart, onReject])

    useImperativeHandle(ref, () => ({
      onLogout: () => {
        if (isLogged && token) {
          setIsLogged(false)
          var auth2 = _window.google.accounts.oauth2
          auth2.revoke(token, (done: any) => {
            if (done.error) {
              console.log(done.error)
              onLogoutFailure && onLogoutFailure()
            } else onLogoutSuccess && onLogoutSuccess()
          })
        } else {
          console.log('You must login before logout.')
        }
      }
    }))

    return (
      <div className={className} onClick={loginGoogle}>
        {children}
      </div>
    )
  }
)

export default memo(LoginSocialGoogle)
