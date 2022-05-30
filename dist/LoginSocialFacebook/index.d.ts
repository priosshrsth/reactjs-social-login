/**
 *
 * LoginSocialFacebook
 *
 */
import React from 'react';
import { objectType, IResolveParams, TypeCrossFunction } from '../';
interface Props {
    appId: string;
    scope?: string;
    state?: boolean;
    xfbml?: boolean;
    cookie?: boolean;
    version?: string;
    language?: string;
    auth_type?: string;
    className?: string;
    isDisabled?: boolean;
    onLoginStart?: () => void;
    onLogoutSuccess?: () => void;
    onReject: (reject: string | objectType) => void;
    onResolve: ({ provider, data }: IResolveParams) => void;
    redirect_uri?: string;
    fieldsProfile?: string;
    response_type?: string;
    return_scopes?: boolean;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
