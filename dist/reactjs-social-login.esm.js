import e,{memo as t,forwardRef as o,useState as n,useEffect as r,useCallback as i,useImperativeHandle as c}from"react";import{enc as a,HmacSHA1 as s}from"crypto-js";function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var l=window,h=t(o(function(t,o){var a=t.state,s=void 0===a?"":a,d=t.client_id,h=t.className,m=t.redirect_uri,f=t.scope,p=void 0===f?"profile":f,g=t.scope_data,v=void 0===g?{profile:{essential:!0}}:g,_=t.response_type,w=void 0===_?"token":_,y=t.children,b=t.onReject,k=t.onResolve,S=t.onLogoutSuccess,L=t.onLoginStart,P=n(!1),j=P[0],E=P[1],I=n(!1),R=I[0],z=I[1],T=n(!1),N=T[0],C=T[1];r(function(){!R&&F()},[R]);var U=i(function(){return!!document.getElementById("amazon-login")},[]),x=i(function(e,t,o,n,r){void 0===t&&(t="script");var i=e.createElement(t);i.id=o,i.src=n,i.async=!0,i.defer=!0;var c=document.getElementsByTagName("script")[0];c&&c.parentNode&&c.parentNode.insertBefore(i,c),i.onload=r},[]),A=i(function(e){try{return fetch("https://api.amazon.com/user/profile",{headers:{Authorization:"Bearer "+e.access_token}}).then(function(e){return e.json()}).then(function(t){k({provider:"amazon",data:u({},t,e)})}).catch(function(e){b(e)}).finally(function(){C(!1),E(!0)}),Promise.resolve()}catch(e){return Promise.reject(e)}},[b,k]),B=i(function(e){return A(e)},[A]),O=i(function(e){C(!1),b(e)},[b]),F=i(function(){U()?z(!0):x(document,"script","amazon-login","https://assets.loginwithamazon.com/sdk/na/login1.js",function(){l.amazon.Login.setClientId(d),z(!0)})},[U,d,x]),G=i(function(){!N&&R&&(C(!0),l.amazon?(L&&L(),l.amazon.Login.authorize({scope:p,scope_data:v,response_type:w,redirect_uri:m,state:s},function(e){e.error?O(e.error):B(e)})):(C(!1),F(),b("Google SDK isn't loaded!")))},[N,R,F,b,L,p,v,w,m,s,O,B]);return c(o,function(){return{onLogout:function(){j?(E(!1),l.amazon.Login.logout(),S&&S()):console.log("You must login before logout.")}}}),e.createElement("div",{className:h,onClick:G},y)})),m=window,f=t(o(function(t,o){var a=t.appId,s=t.scope,d=void 0===s?"email,public_profile":s,l=t.state,h=void 0===l||l,f=t.xfbml,p=void 0===f||f,g=t.cookie,v=void 0===g||g,_=t.version,w=void 0===_?"v2.7":_,y=t.language,b=void 0===y?"en_EN":y,k=t.auth_type,S=void 0===k?"":k,L=t.className,P=t.onLoginStart,j=t.onLogoutSuccess,E=t.onReject,I=t.onResolve,R=t.redirect_uri,z=t.fieldsProfile,T=void 0===z?"id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender":z,N=t.response_type,C=void 0===N?"code":N,U=t.return_scopes,x=void 0===U||U,A=t.children,B=n(!1),O=B[0],F=B[1],G=n(!1),H=G[0],M=G[1],Y=n(!1),K=Y[0],D=Y[1];r(function(){!H&&W()},[H]);var q=i(function(e,t){var o=e.createElement("script");o.id="facebook-jssdk",o.src="https://connect.facebook.net/en_EN/sdk.js";var n=e.getElementsByTagName("script")[0];n&&n.parentNode&&n.parentNode.insertBefore(o,n),t()},[]),V=i(function(){return!!document.getElementById("facebook-jssdk")},[]),J=i(function(e,t){var o=window;o.fbAsyncInit=function(){o.FB&&o.FB.init(u({},e)),M(!0);var n=t.getElementById("fb-root");n||((n=t.createElement("div")).id="fb-root",t.body.appendChild(n))}},[]),$=i(function(e){m.FB.api("/me",{locale:b,fields:T},function(t){F(!0),D(!1),I({provider:"facebook",data:u({},e,t)})})},[T,b,I]),Q=i(function(e){e.authResponse?$(e.authResponse):E(e)},[$,E]),W=i(function(){V()?M(!0):q(document,function(){J({appId:a,xfbml:p,version:w,state:h,cookie:v,redirect_uri:R,response_type:C},document)})},[h,a,p,v,w,J,R,C,q,V]),X=i(function(){!K&&H&&(D(!0),m.FB?(P&&P(),m.FB.login(Q,{scope:d,return_scopes:x,auth_type:S})):(D(!1),W(),E("Fb isn't loaded!")))},[K,H,W,E,P,Q,d,x,S]);return c(o,function(){return{onLogout:function(){O?(console.log("🚀 ~ file: index.tsx ~ line 202 ~ useImperativeHandle ~ isLogged",O),F(!1),j&&j(),m.FB.logout()):console.log("You must login before logout.")}}}),e.createElement("div",{className:L,onClick:X},A)})),p=window,g=t(o(function(t,o){var a=t.client_id,s=t.scope,d=void 0===s?"email profile":s,l=t.prompt,h=void 0===l?"select_account":l,m=t.ux_mode,f=t.className,g=void 0===f?"":f,v=t.login_hint,_=void 0===v?"":v,w=t.access_type,y=void 0===w?"online":w,b=t.onLogoutFailure,k=t.onLogoutSuccess,S=t.onLoginStart,L=t.onReject,P=t.onResolve,j=t.redirect_uri,E=void 0===j?"/":j,I=t.cookie_policy,R=void 0===I?"single_host_origin":I,z=t.hosted_domain,T=void 0===z?"":z,N=t.discoveryDocs,C=void 0===N?"":N,U=t.children,x=t.fetch_basic_profile,A=void 0===x||x,B=n(!1),O=B[0],F=B[1],G=n(!1),H=G[0],M=G[1],Y=n(!1),K=Y[0],D=Y[1],q=n(null),V=q[0],J=q[1],$=n(""),Q=$[0],W=$[1];r(function(){!H&&te()},[H]);var X=i(function(){return!!document.getElementById("google-login")},[]),Z=i(function(e,t,o,n,r){void 0===t&&(t="script");var i=e.createElement(t);i.id=o,i.src=n,i.async=!0,i.defer=!0;var c=document.getElementsByTagName("script")[0];c&&c.parentNode&&c.parentNode.insertBefore(i,c),i.onload=r},[]),ee=i(function(e){F(!0),D(!1),W(null==e?void 0:e.access_token),P({provider:"google",data:e})},[P]),te=i(function(){X()?M(!0):Z(document,"script","google-login","https://accounts.google.com/gsi/client",function(){var e=p.google.accounts.oauth2.initTokenClient(u({},{client_id:a,cookie_policy:R,login_hint:_,hosted_domain:T,fetch_basic_profile:A,discoveryDocs:C,ux_mode:m,redirect_uri:E,access_type:y,scope:d,immediate:!0,prompt:h},{callback:ee}));J(e),M(!0)})},[X,Z,a,h,R,_,T,A,C,m,E,y,d,ee]),oe=i(function(){!K&&H&&(D(!0),p.google?(S&&S(),V&&V.requestAccessToken()):(D(!1),te(),L("Google SDK isn't loaded!")))},[V,K,H,te,S,L]);return c(o,function(){return{onLogout:function(){O&&Q?(F(!1),p.google.accounts.oauth2.revoke(Q,function(e){e.error?(console.log(e.error),b&&b()):k&&k()})):console.log("You must login before logout.")}}}),e.createElement("div",{className:g,onClick:oe},U)})),v=t(o(function(t,o){var a=t.state,s=void 0===a?"":a,l=t.scope,h=void 0===l?"repo,gist":l,m=t.client_id,f=t.client_secret,p=t.className,g=void 0===p?"":p,v=t.redirect_uri,_=t.allow_signup,w=void 0!==_&&_,y=t.children,b=t.onReject,k=t.onResolve,S=t.onLoginStart,L=t.onLogoutSuccess,P=n(!1),j=P[0],E=P[1],I=n(!1),R=I[0],z=I[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_github")&&t&&(localStorage.setItem("github",t),window.close())},[]);var T=i(function(e){fetch("https://cors.bridged.cc/https://api.github.com//user",{method:"GET",headers:{Authorization:"token "+e.access_token,"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.json()}).then(function(t){E(!0),z(!1),k({provider:"github",data:u({},t,e)})}).catch(function(e){z(!1),b(e)})},[b,k]),N=i(function(e){var t={code:e,state:s,redirect_uri:v,client_id:m,client_secret:f},o=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"});fetch("https://cors.bridged.cc/https://github.com/login/oauth/access_token",{method:"POST",headers:o,body:new URLSearchParams(t)}).then(function(e){return e.text()}).then(function(e){z(!1);for(var t,o={},n=function(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return d(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(e,void 0):void 0}}(e))){o&&(e=o);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(o=e[Symbol.iterator]()).next.bind(o)}(new URLSearchParams(e));!(t=n()).done;){var r=t.value;o[r[0]]=r[1]}o.access_token?T(o):b("no data")}).catch(function(e){z(!1),b(e)})},[m,f,T,b,v,s]),C=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"github"===n&&o&&N(o))}catch(e){return Promise.reject(e)}},[N]),U=i(function(){window.removeEventListener("storage",U,!1);var e=localStorage.getItem("github");e&&(z(!0),C({provider:"github",type:"code",code:e}),localStorage.removeItem("instagram"))},[C]),x=i(function(){if(!R){S&&S(),window.addEventListener("storage",U,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://github.com/login/oauth/authorize?client_id="+m+"&scope="+h+"&state="+s+"_github&redirect_uri="+v+"&allow_signup="+w,"Github","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}},[R,S,U,m,h,s,v,w]);return c(o,function(){return{onLogout:function(){j?(E(!1),L&&L()):console.log("You must login before logout.")}}}),e.createElement("div",{className:g,onClick:x},y)})),_=t(o(function(t,o){var a=t.state,s=void 0===a?"":a,d=t.client_id,l=t.client_secret,h=t.className,m=t.redirect_uri,f=t.scope,p=void 0===f?"user_profile,user_media":f,g=t.response_type,v=void 0===g?"code":g,_=t.children,w=t.onLogoutSuccess,y=t.onReject,b=t.onResolve,k=t.onLoginStart,S=n(!1),L=S[0],P=S[1],j=n(!1),E=j[0],I=j[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_instagram")&&t&&(localStorage.setItem("instagram",t),window.close())},[]);var R=i(function(e){fetch("https://cors.bridged.cc/https://graph.instagram.com//me?fields=id,username,account_type,media_count&access_token="+e.access_token,{method:"GET",headers:{"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.json()}).then(function(t){P(!0),I(!1),b({provider:"instagram",data:u({},t,e)})}).catch(function(e){I(!1),y(e)})},[y,b]),z=i(function(e){var t={grant_type:"authorization_code",code:e,redirect_uri:m,client_id:d,client_secret:l},o=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"});fetch("https://cors.bridged.cc/https://api.instagram.com/oauth/access_token",{method:"POST",headers:o,body:new URLSearchParams(t)}).then(function(e){return e.json()}).then(function(e){e.access_token?R(e):y("no data")}).catch(function(e){y(e)}).finally(function(){I(!1)})},[d,l,R,y,m]),T=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"instagram"===n&&o&&z(o))}catch(e){return Promise.reject(e)}},[z]),N=i(function(){window.removeEventListener("storage",N,!1);var e=localStorage.getItem("instagram");e&&(I(!0),T({provider:"instagram",type:"code",code:e}),localStorage.removeItem("instagram"))},[T]),C=i(function(){if(!E){k&&k(),window.addEventListener("storage",N,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://api.instagram.com/oauth/authorize?response_type="+v+"&client_id="+d+"&scope="+p+"&state="+s+"_instagram&redirect_uri="+m,"Instagram","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}},[E,k,N,v,d,p,s,m]);return c(o,function(){return{onLogout:function(){L?(P(!1),w&&w()):console.log("You must login before logout.")}}}),e.createElement("div",{className:h,onClick:C},_)})),w=t(o(function(t,o){var a=t.tenant,s=void 0===a?"common":a,d=t.state,l=void 0===d?"":d,h=t.client_id,m=t.className,f=t.redirect_uri,p=t.scope,g=void 0===p?"profile openid email":p,v=t.response_type,_=void 0===v?"code":v,w=t.response_mode,y=void 0===w?"query":w,b=t.children,k=t.code_challenge,S=void 0===k?"19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9":k,L=t.code_challenge_method,P=void 0===L?"plain":L,j=t.prompt,E=void 0===j?"select_account":j,I=t.onLogoutSuccess,R=t.onLoginStart,z=t.onReject,T=t.onResolve,N=n(!1),C=N[0],U=N[1],x=n(!1),A=x[0],B=x[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_microsoft")&&t&&(localStorage.setItem("microsoft",t),window.close())},[]);var O=i(function(e){fetch("https://graph.microsoft.com/v1.0/me",{method:"GET",headers:{Authorization:"Bearer "+e.access_token}}).then(function(e){return e.json()}).then(function(t){B(!1),U(!0),T({provider:"microsoft",data:u({},t,e)})}).catch(function(e){B(!1),z(e)})},[z,T]),F=i(function(e){var t={code:e,scope:g,client_id:h,redirect_uri:f,code_verifier:S,grant_type:"authorization_code"},o=new Headers({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"});fetch("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/token",{method:"POST",headers:o,body:new URLSearchParams(t)}).then(function(e){return e.json()}).then(function(e){e.access_token?O(e):(B(!1),z("no data"))}).catch(function(e){B(!1),z(e)})},[g,s,z,h,O,f,S]),G=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"microsoft"===n&&o&&F(o))}catch(e){return Promise.reject(e)}},[F]),H=i(function(){window.removeEventListener("storage",H,!1);var e=localStorage.getItem("microsoft");e&&(B(!0),G({provider:"microsoft",type:"code",code:e}),localStorage.removeItem("microsoft"))},[G]),M=i(function(){if(!A){R&&R(),window.addEventListener("storage",H,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://login.microsoftonline.com/"+s+"/oauth2/v2.0/authorize?client_id="+h+"\n        &response_type="+_+"\n        &redirect_uri="+f+"\n        &response_mode="+y+"\n        &scope="+g+"\n        &state="+l+"_microsoft\n        &prompt="+E+"\n        &code_challenge="+S+"\n        &code_challenge_method="+P,"Microsoft","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}},[A,R,H,s,h,_,f,y,g,l,E,S,P]);return c(o,function(){return{onLogout:function(){C?(U(!1),I&&I()):console.log("You must login before logout.")}}}),e.createElement("div",{className:m,onClick:M},b)})),y=t(o(function(t,o){var a=t.state,s=void 0===a?"":a,d=t.scope,l=void 0===d?"r_liteprofile":d,h=t.client_id,m=t.client_secret,f=t.className,p=void 0===f?"":f,g=t.redirect_uri,v=t.response_type,_=void 0===v?"code":v,w=t.children,y=t.onLoginStart,b=t.onLogoutSuccess,k=t.onReject,S=t.onResolve,L=n(!1),P=L[0],j=L[1],E=n(!1),I=E[0],R=E[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_linkedin")&&t&&(localStorage.setItem("linkedin",t),window.close())},[]);var z=i(function(e){fetch("https://api.allorigins.win/get?url="+encodeURIComponent("https://api.linkedin.com/v2/me?oauth2_access_token="+e.access_token+"&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"),{method:"GET"}).then(function(e){return e.json()}).then(function(t){var o=u({},e);if(t.contents){var n=JSON.parse(t.contents);"object"==typeof e&&Object.entries(n).map(function(e){o[e[0]]=e[1]})}j(!0),R(!1),S({provider:"linkedin",data:o})}).catch(function(e){R(!1),k(e)})},[k,S]),T=i(function(e){var t={code:e,grant_type:"authorization_code",redirect_uri:g,client_id:h,client_secret:m},o=new Headers({"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"});fetch("https://cors.bridged.cc/https://www.linkedin.com/oauth/v2/accessToken",{method:"POST",headers:o,body:new URLSearchParams(t)}).then(function(e){return e.json()}).then(function(e){z(e)}).catch(function(e){R(!1),k(e)})},[h,m,z,k,g]),N=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"linkedin"===n&&o&&T(o))}catch(e){return Promise.reject(e)}},[T]),C=i(function(){window.removeEventListener("storage",C,!1);var e=localStorage.getItem("linkedin");e&&(R(!0),N({provider:"linkedin",type:"code",code:e}),localStorage.removeItem("linkedin"))},[N]),U=i(function(){if(!I){y&&y(),window.addEventListener("storage",C,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.linkedin.com/oauth/v2/authorization?response_type="+_+"&client_id="+h+"&scope="+l+"&state="+s+"_linkedin&redirect_uri="+g,"Linkedin","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}},[I,y,C,_,h,l,s,g]);return c(o,function(){return{onLogout:function(){P?(j(!1),b&&b()):console.log("You must login before logout.")}}}),e.createElement("div",{className:p,onClick:U},w)})),b=t(o(function(t,o){var a=t.state,s=void 0===a?"":a,d=t.scope,l=void 0===d?"":d,h=t.client_id,m=t.client_secret,f=t.className,p=void 0===f?"":f,g=t.redirect_uri,v=t.children,_=t.onLoginStart,w=t.onLogoutSuccess,y=t.onReject,b=t.onResolve,k=n(!1),S=k[0],L=k[1],P=n(!1),j=P[0],E=P[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("code"),o=e.searchParams.get("state");null!=o&&o.includes("_pinterest")&&t&&(localStorage.setItem("pinterest",t),window.close())},[]);var I=i(function(e){fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/user_account",{method:"GET",headers:{Authorization:"Bearer "+e.access_token,"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.json()}).then(function(t){L(!0),E(!1),b({provider:"pinterest",data:u({},e,t)})}).catch(function(e){return y(e)})},[y,b]),R=i(function(e){try{var t={code:e,redirect_uri:g,grant_type:"authorization_code"},o=[];for(var n in t){var r=encodeURIComponent(n),i=encodeURIComponent(t[n]);o.push(r+"="+i)}return o=o.join("&"),Promise.resolve(fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/oauth/token",{method:"POST",headers:{Authorization:"Basic "+btoa(h+":"+m),"Content-Type":"application/x-www-form-urlencoded","x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"},body:o}).then(function(e){return e.json()}).catch(function(e){return y(e)})).then(function(e){I(e)})}catch(e){return Promise.reject(e)}},[h,m,I,y,g]),z=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"pinterest"===n&&o&&R(o))}catch(e){return Promise.reject(e)}},[R]),T=i(function(){window.removeEventListener("storage",T,!1);var e=localStorage.getItem("pinterest");e&&(E(!0),z({provider:"pinterest",type:"code",code:e}),localStorage.removeItem("pinterest"))},[z]),N=i(function(){if(!j){_&&_(),window.addEventListener("storage",T,!1);var e=window.screen.width/2-225,t=window.screen.height/2-365;window.open("https://www.pinterest.com/oauth/?client_id="+h+"&scope="+l+"&state="+s+"_pinterest&redirect_uri="+g+"&response_type=code&scope=boards:read,pins:read,user_accounts:read","Pinterest","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+t+", left="+e)}},[j,_,T,h,l,s,g]);return c(o,function(){return{onLogout:function(){S?(L(!1),w&&w()):console.log("You must login before logout.")}}}),e.createElement("div",{className:p,onClick:N},v)})),k=function(e,t,o,n,r){void 0===r&&(r="");var i=Object.keys(e).sort().reduce(function(t,o){return t+"&"+o+"="+e[o]},"").substr(1),c=t.toUpperCase()+"&"+encodeURIComponent(o)+"&"+encodeURIComponent(i),d=encodeURIComponent(n)+"&"+encodeURIComponent(r),l=a.Base64.stringify(s(c,d)),h=u({},e,{oauth_signature:encodeURIComponent(l)});return Object.keys(h).sort().reduce(function(e,t){return e+","+t+'="'+h[t]+'"'},"").substr(1)},S=function(e){return e.split("&").reduce(function(e,t){var o,n=t.split("=");return u({},e,((o={})[n[0]]=n[1],o))},{})},L="https://api.twitter.com",P=t(o(function(t,o){var a=t.client_id,s=t.client_secret,d=t.className,l=void 0===d?"":d,h=t.redirect_uri,m=t.children,f=t.onLoginStart,p=t.onLogoutSuccess,g=t.onReject,v=t.onResolve,_=n(!1),w=_[0],y=_[1],b=n(!1),P=b[0],j=b[1];r(function(){var e=new URL(window.location.href),t=e.searchParams.get("oauth_verifier"),o=e.searchParams.get("oauth_token");o&&t&&(localStorage.setItem("twitter",t+"&"+o),window.close())},[]);var E=i(function(e){var t,o,n,r,i,c,d,l=(o=(t={method:"GET",apiUrl:L+"/1.1/account/verify_credentials.json",consumerKey:a,consumerSecret:s,oauthToken:e.oauth_token,oauthTokenSecret:e.oauth_token_secret}).consumerSecret,n=t.oauthToken,r=t.oauthTokenSecret,i=t.method,c=t.apiUrl,d={oauth_consumer_key:t.consumerKey,oauth_nonce:Math.random().toString(36).replace(/[^a-z]/,"").substr(2),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:(Date.now()/1e3).toFixed(),oauth_token:n,oauth_version:"1.0"},k(d,i,c,o,r));fetch("https://cors.bridged.cc/https://api.twitter.com/1.1/account/verify_credentials.json",{method:"GET",headers:{Authorization:"OAuth "+l,"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.json()}).then(function(t){y(!0),v({provider:"twitter",data:u({},e,t)}),j(!1)}).catch(function(e){return g(e)})},[a,s,g,v]),I=i(function(e){try{var t=e.split("&"),o=(r=(n={method:"POST",apiUrl:L+"/oauth/access_token",consumerKey:a,consumerSecret:s,oauthToken:t[1],oauthVerifier:t[0]}).consumerSecret,c=n.method,u=n.apiUrl,d={oauth_consumer_key:n.consumerKey,oauth_version:"1.0",oauth_signature_method:"HMAC-SHA1",oauth_token:n.oauthToken,oauth_verifier:i=n.oauthVerifier,oauth_timestamp:(Date.now()/1e3).toFixed(),oauth_nonce:Math.random().toString(36).replace(/[^a-z]/,"").substr(2)},k(d,c,u,r,i));return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/oauth/access_token",{method:"POST",headers:{Authorization:"OAuth "+o,"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.text()}).then(function(e){return S(e)}).catch(function(e){return g(e)})).then(function(e){e&&E(e)})}catch(e){return Promise.reject(e)}var n,r,i,c,u,d},[a,s,E,g]),R=i(function(e){var t=e.type,o=e.code,n=e.provider;try{return Promise.resolve("code"===t&&"twitter"===n&&o&&I(o))}catch(e){return Promise.reject(e)}},[I]),z=i(function(){window.removeEventListener("storage",z,!1);var e=localStorage.getItem("twitter");e&&(j(!0),R({provider:"twitter",type:"code",code:e}),localStorage.removeItem("twitter"))},[R]),T=i(function(){try{var e=function(){if(!P){f&&f();var e=function(e){var t=e.method,o=e.apiUrl,n=e.consumerSecret,r={oauth_consumer_key:e.consumerKey,oauth_version:"1.0",oauth_signature_method:"HMAC-SHA1",oauth_callback:e.callbackUrl,oauth_timestamp:(Date.now()/1e3).toFixed(),oauth_nonce:Math.random().toString(36).replace(/[^a-z]/,"").substr(2)};return k(r,t,o,n)}({method:"POST",apiUrl:L+"/oauth/request_token",callbackUrl:h,consumerKey:a,consumerSecret:s});return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/oauth/request_token",{method:"POST",headers:{Authorization:"OAuth "+e,"x-cors-grida-api-key":"875c0462-6309-4ddf-9889-5227b1acc82c"}}).then(function(e){return e.text()}).catch(function(e){return g(e)})).then(function(e){if(e){var t=S(e);window.addEventListener("storage",z,!1);var o=window.screen.width/2-225,n=window.screen.height/2-365;window.open(L+"/oauth/authenticate?oauth_token="+t.oauth_token,"twitter","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top="+n+", left="+o)}})}}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},[P,f,h,a,s,g,z]);return c(o,function(){return{onLogout:function(){w?(y(!1),p&&p()):console.log("You must login before logout.")}}}),e.createElement("div",{className:l,onClick:T},m)}));export{h as LoginSocialAmazon,f as LoginSocialFacebook,v as LoginSocialGithub,g as LoginSocialGoogle,_ as LoginSocialInstagram,y as LoginSocialLinkedin,w as LoginSocialMicrosoft,b as LoginSocialPinterest,P as LoginSocialTwitter};