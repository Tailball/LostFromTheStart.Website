"use strict";var precacheConfig=[["/index.html","b59150307a840d90810957f7257e3bbc"],["/static/css/main.68954cff.css","cabce419a22a8cde419c4bdc27c51fd9"],["/static/js/main.5be05292.js","6975f6c2623d0d0e327644b3e4d68912"],["/static/media/Dark-Halftone-Screen-Small.fffbe2a2.png","fffbe2a2a7c4b61bb422d7c6344b4ca4"],["/static/media/album cover.bf362cac.jpg","bf362cac8eeff1aca762127d79216c55"],["/static/media/album-echoavenue.00b4b443.jpg","00b4b4431bd80590c723a1189bcdce9e"],["/static/media/album-fewandfarbetween.dda7b875.jpg","dda7b875f454c023329d874de532709a"],["/static/media/beardedpunklogo.479394c1.png","479394c1353ec7051cf0b57446999ec8"],["/static/media/bg1.ab742989.jpg","ab742989206816606d12ba792e520baa"],["/static/media/bg2-1.961ed45f.jpg","961ed45f0161d6f89b941ae0c82a8371"],["/static/media/bg2-2.480dffa6.jpg","480dffa6749932fc70730b81a110f660"],["/static/media/bg2.a9371de4.jpg","a9371de4e156b04671ca3a7506851b1d"],["/static/media/bg3.263f43ae.jpg","263f43aea06812bbd329cc64d6941320"],["/static/media/bg4.759fddd7.jpg","759fddd7fb61c8fabd1eed770af7b015"],["/static/media/bg5.0da493de.jpg","0da493ded6605c01e402a45d2faaf664"],["/static/media/fun-hilde.26265a12.jpg","26265a12bb61180998df8d07a03626f7"],["/static/media/hildepic.2e6223cd.jpg","2e6223cd5f746ed1742b79adb0a57a7f"],["/static/media/jochenpic.d5874b81.jpg","d5874b81c9c61965054a42f590199ddd"],["/static/media/logo.e2efe0ac.png","e2efe0ace3aded8a54a8bd97b81a40bf"],["/static/media/robbypic.eca4803e.jpg","eca4803ecbe10485dd0d5007c918a8d6"],["/static/media/sebpic.8fdb3d04.jpg","8fdb3d048ce7002104ea0eb4109a7af1"],["/static/media/seppepic.e6b653be.jpg","e6b653be964d6389dee055e099ed1edb"],["/static/media/video-aprilshowers.48ef3883.jpg","48ef3883fe16e79f67dc7259dd5600a6"],["/static/media/video-commonplace.f7cec3d1.jpg","f7cec3d1586cd025c934d5cab01ed3f4"],["/static/media/video-medley.7a041e39.jpg","7a041e3918b817209cdc80db68bad262"],["/static/media/video-mourningafter.842bf056.jpg","842bf056a7a6b0a29f89705c89567465"],["/static/media/video-nostalgicfordisaster.1c7f0958.jpg","1c7f0958f3b6b37f0d88d93c20cc88d1"],["/static/media/video-offthehook.4e93e9a3.jpg","4e93e9a37a0ac1448c3aa5fcdf20b239"],["/static/media/video-outofleftfield.3bce09c7.jpg","3bce09c7e48a18b3aecf39ee6c1f2551"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});