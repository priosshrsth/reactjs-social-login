/**
 *
 * LoginSocialMicrosoft
 *
 */
import React from 'react';
import { IResolveParams, objectType, TypeCrossFunction } from '../';
interface Props {
    scope?: string;
    state?: string;
    client_id: string;
    className?: string;
    redirect_uri: string;
    response_type?: string;
    response_mode?: string;
    code_challenge?: string;
    children?: React.ReactNode;
    onLoginStart?: () => void;
    onLogoutSuccess?: () => void;
    onReject: (reject: string | objectType) => void;
    code_challenge_method?: 'plain' | 's256'[];
    onResolve: ({ provider, data }: IResolveParams) => void;
    tenant?: 'common' | 'organizations' | 'consumers';
    prompt?: 'login' | 'none' | 'consent' | 'select_account';
}
export declare const LoginSocialMicrosoft: React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
