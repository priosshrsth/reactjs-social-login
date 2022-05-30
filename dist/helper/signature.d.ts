interface RequestTokenResponse {
    oauth_token: string;
    oauth_token_secret: string;
    oauth_callback_confirmed?: string;
}
export declare const requestTokenSignature: ({ method, apiUrl, callbackUrl, consumerKey, consumerSecret }: {
    method: string;
    apiUrl: string;
    callbackUrl: string;
    consumerKey: string;
    consumerSecret: string;
}) => string;
export declare const accessTokenSignature: ({ consumerKey, consumerSecret, oauthToken, oauthVerifier, method, apiUrl }: {
    method: string;
    apiUrl: string;
    consumerKey: string;
    consumerSecret: string;
    oauthToken: string;
    oauthVerifier: string;
}) => string;
export declare const profileSignature: ({ consumerKey, consumerSecret, oauthToken, oauthTokenSecret, method, apiUrl }: {
    method: string;
    apiUrl: string;
    consumerKey: string;
    consumerSecret: string;
    oauthToken: string;
    oauthTokenSecret: string;
}) => string;
export declare const parseOAuthRequestToken: (responseText: string) => RequestTokenResponse;
export {};
