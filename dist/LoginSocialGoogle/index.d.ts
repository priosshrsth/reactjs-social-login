/**
 *
 * LoginSocialGoogle
 *
 */
import React from 'react';
import { objectType, IResolveParams, TypeCrossFunction } from '../';
interface Props {
    scope?: string;
    prompt?: string;
    ux_mode?: string;
    client_id: string;
    className?: string;
    login_hint?: string;
    access_type?: string;
    redirect_uri?: string;
    cookie_policy?: string;
    hosted_domain?: string;
    discoveryDocs?: string;
    children?: React.ReactNode;
    onLoginStart?: () => void;
    onLogoutSuccess?: () => void;
    onLogoutFailure?: () => void;
    onReject: (reject: string | objectType) => void;
    fetch_basic_profile?: boolean;
    onResolve: ({ provider, data }: IResolveParams) => void;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TypeCrossFunction>>>;
export default _default;
