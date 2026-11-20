// Dusk Dunes sync server (Cloudflare Worker + one KV namespace named DD).
// It never sees a password or readable settings: the game sends a slow-hashed login value and an encrypted blob.
const CORS={'access-control-allow-origin':'*','access-control-allow-headers':'content-type','access-control-allow-methods':'GET,POST,OPTIONS'};
const json=(o,s)=>new Response(JSON.stringify(o),{status:s||200,headers:Object.assign({'content-type':'application/json'},CORS)});
const b64=b=>{let s='';new Uint8Array(b).forEach(c=>s+=String.fromCharCode(c));return btoa(s)};
const sha=async s=>b64(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
const same=(a,b)=>{if(a.length!==b.length)return false;let d=0;for(let i=0;i<a.length;i++)d|=a.charCodeAt(i)^b.charCodeAt(i);return d===0};
const okBlob=x=>x&&typeof x.iv==='string'&&typeof x.ct==='string'&&x.iv.length<64&&x.ct.length<300000;
export default{async fetch(req,env){
  if(req.method==='OPTIONS')return new Response(null,{headers:CORS});
  if(req.method==='GET')return json({ok:1,dd:2});
  if(req.method!=='POST')return json({e:'method'},405);
  let b;try{b=await req.json()}catch(e){return json({e:'bad request'},400)}
  const n=String(b.n||''),low=n.toLowerCase(),auth=String(b.auth||'');
  if(!/^[a-z0-9_-]{3,20}$/.test(low)||auth.length<20||auth.length>100)return json({e:'bad request'},400);
  const key='u:'+low,fk='f:'+low;let u=await env.DD.get(key,'json');
  const fails=+(await env.DD.get(fk)||0);if(fails>=8)return json({e:'too many attempts'},429);
  const verify=async()=>{const ok=u?same(await sha(u.salt+'|'+auth),u.vh):(await sha('x|'+auth),false);if(!ok)await env.DD.put(fk,String(fails+1),{expirationTtl:900});else if(fails)await env.DD.delete(fk);return ok};
  if(b.a==='reg'){if(u)return json({e:'taken'},409);if(!okBlob(b.blob))return json({e:'bad request'},400);const salt=b64(crypto.getRandomValues(new Uint8Array(16)));await env.DD.put(key,JSON.stringify({n,salt,vh:await sha(salt+'|'+auth),ver:1,blob:b.blob}));return json({ok:1,ver:1})}
  if(!await verify())return json({e:'bad credentials'},401);
  if(b.a==='login')return json({ok:1,n:u.n,ver:u.ver,blob:u.blob});
  if(b.a==='save'){if(!okBlob(b.blob))return json({e:'bad request'},400);const v=+b.ver||0;if(v<=u.ver)return json({e:'conflict',ver:u.ver},409);u.ver=v;u.blob=b.blob;await env.DD.put(key,JSON.stringify(u));return json({ok:1,ver:v})}
  if(b.a==='chpw'){const a2=String(b.auth2||'');if(a2.length<20||a2.length>100||!okBlob(b.blob))return json({e:'bad request'},400);const salt=b64(crypto.getRandomValues(new Uint8Array(16)));u.salt=salt;u.vh=await sha(salt+'|'+a2);u.ver+=1;u.blob=b.blob;await env.DD.put(key,JSON.stringify(u));return json({ok:1,ver:u.ver})}
  if(b.a==='del'){await env.DD.delete(key);return json({ok:1})}
  return json({e:'bad request'},400)}};
