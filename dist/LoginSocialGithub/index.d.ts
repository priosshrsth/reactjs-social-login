/**
 *
 * LoginSocialGithub
 *
 */
import React from 'react';
import { IResolveParams, objectType, TypeCrossFunction } from '../';
interface Props {
    state?: string;
    scope?: string;
    client_id: string;
    className?: string;
    redirect_uri: string;
    client_secret: string;
    allow_signup?: boolean;
    children?: React.ReactNode;
    onLoginStart?: () => void;
    onLogoutSuccess?: () => void;
    onReject: (reject: string | objectType) => void;
    onResolve: ({ provider, data }: IResolveParams) => void;
}
export declare const LoginSocialGithub: React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
