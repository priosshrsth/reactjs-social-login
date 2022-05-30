/**
 *
 * LoginSocialAmazon
 *
 */
import React from 'react';
import { IResolveParams, objectType, TypeCrossFunction } from '../';
interface Props {
    scope?: string;
    state?: string;
    client_id: string;
    className?: string;
    redirect_uri?: string;
    response_type?: string;
    scope_data?: objectType;
    children?: React.ReactNode;
    onLoginStart?: () => void;
    onLogoutSuccess?: () => void;
    onReject: (reject: string | objectType) => void;
    onResolve: ({ provider, data }: IResolveParams) => void;
}
export declare const LoginSocialAmazon: React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
