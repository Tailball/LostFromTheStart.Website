"use strict";var precacheConfig=[["/index.html","71564edd8352c846aaafd8bd0866bbc9"],["/static/css/main.a24a0a15.css","0885c01094cea9b2dd52db27cef9a708"],["/static/js/main.6d328ab9.js","d836dfb580812ad0daae418c820df3fe"],["/static/media/Dark-Halftone-Screen-Small.fffbe2a2.png","fffbe2a2a7c4b61bb422d7c6344b4ca4"],["/static/media/album cover.bf362cac.jpg","bf362cac8eeff1aca762127d79216c55"],["/static/media/album-echoavenue.00b4b443.jpg","00b4b4431bd80590c723a1189bcdce9e"],["/static/media/album-fewandfarbetween.dda7b875.jpg","dda7b875f454c023329d874de532709a"],["/static/media/beardedpunklogo.479394c1.png","479394c1353ec7051cf0b57446999ec8"],["/static/media/bg1.ab742989.jpg","ab742989206816606d12ba792e520baa"],["/static/media/bg2-1.961ed45f.jpg","961ed45f0161d6f89b941ae0c82a8371"],["/static/media/bg2-2.480dffa6.jpg","480dffa6749932fc70730b81a110f660"],["/static/media/bg2.a9371de4.jpg","a9371de4e156b04671ca3a7506851b1d"],["/static/media/bg3.263f43ae.jpg","263f43aea06812bbd329cc64d6941320"],["/static/media/bg4.759fddd7.jpg","759fddd7fb61c8fabd1eed770af7b015"],["/static/media/bg5.0da493de.jpg","0da493ded6605c01e402a45d2faaf664"],["/static/media/fun-hilde.26265a12.jpg","26265a12bb61180998df8d07a03626f7"],["/static/media/hildepic.90adf1fd.jpg","90adf1fd3508557d1b09414ef02c657f"],["/static/media/jochenpic.807ac094.jpg","807ac0946693a85b981ec2974c97b198"],["/static/media/logo.e2efe0ac.png","e2efe0ace3aded8a54a8bd97b81a40bf"],["/static/media/robbypic.0ff049a6.jpg","0ff049a615730d867120d3525cfe46c4"],["/static/media/robsonpic.2b372910.jpg","2b37291098519dcb8bd5862e78fe30e5"],["/static/media/seppepic.09f6c22f.jpg","09f6c22f2b63089d607e3fb5203e6b52"],["/static/media/video-commonplace.f7cec3d1.jpg","f7cec3d1586cd025c934d5cab01ed3f4"],["/static/media/video-mourningafter.842bf056.jpg","842bf056a7a6b0a29f89705c89567465"],["/static/media/video-nostalgicfordisaster.1c7f0958.jpg","1c7f0958f3b6b37f0d88d93c20cc88d1"],["/static/media/video-offthehook.4e93e9a3.jpg","4e93e9a37a0ac1448c3aa5fcdf20b239"],["/static/media/video-outofleftfield.3bce09c7.jpg","3bce09c7e48a18b3aecf39ee6c1f2551"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});