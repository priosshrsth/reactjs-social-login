/**
 *
 * LoginSocialInstagram
 *
 */
import React from 'react';
import { objectType, IResolveParams, TypeCrossFunction } from '../';
interface Props {
    scope?: string;
    state?: string;
    client_id: string;
    className?: string;
    client_secret: string;
    redirect_uri: string;
    response_type?: string;
    children?: React.ReactNode;
    onLogoutSuccess?: () => void;
    onLoginStart?: () => void;
    onReject: (reject: string | objectType) => void;
    onResolve: ({ provider, data }: IResolveParams) => void;
}
export declare const LoginSocialInstagram: React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
