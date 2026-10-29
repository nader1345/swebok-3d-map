(()=>{var uf=0,xh=1,df=2;var Au=0,Cu=1,vl=2,Hn=3,Sn=0,Ye=1,Bn=2,si=0,ss=1,yh=2,vh=3,Mh=4,ff=5,Mi=100,pf=101,mf=102,gf=103,_f=104,xf=200,yf=201,vf=202,Mf=203,Ja=204,Ka=205,Ef=206,wf=207,Sf=208,bf=209,Tf=210,Rf=211,Af=212,Cf=213,If=214,Qa=0,ja=1,tc=2,cs=3,ec=4,nc=5,ic=6,sc=7,Iu=0,Pf=1,Df=2,ri=0,Lf=1,Uf=2,Nf=3,Ml=4,Ff=5,Hf=6,Of=7;var Pu=300,ls=301,hs=302,rc=303,oc=304,No=306,ac=1e3,Si=1001,cc=1002,pn=1003,Bf=1004;var br=1005;var je=1006,ga=1007;var bi=1008;var Gn=1009,Du=1010,Lu=1011,Ys=1012,El=1013,Ti=1014,kn=1015,ir=1016,wl=1017,Sl=1018,us=1020,Uu=35902,Nu=1021,Fu=1022,fn=1023,Hu=1024,Ou=1025,rs=1026,ds=1027,Bu=1028,bl=1029,ku=1030,Tl=1031;var Rl=1033,Qr=33776,jr=33777,to=33778,eo=33779,lc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,yc=37811,vc=37812,Mc=37813,Ec=37814,wc=37815,Sc=37816,bc=37817,Tc=37818,Rc=37819,Ac=37820,Cc=37821,no=36492,Ic=36494,Pc=36495,zu=36283,Dc=36284,Lc=36285,Uc=36286;var io=2300,Nc=2301,_a=2302,Eh=2400,wh=2401,Sh=2402;var kf=3200,zf=3201;var Vu=0,Vf=1,ii="",He="srgb",xs="srgb-linear",Fo="linear",he="srgb";var Vi=7680;var bh=519,Gf=512,Wf=513,Xf=514,Gu=515,qf=516,Yf=517,$f=518,Zf=519,Th=35044;var Rh="300 es",zn=2e3,so=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xa=Math.PI/180,Fc=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Jf(i,t){return(i%t+t)%t}function ya(i,t,e){return(1-e)*i+e*t}function Fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],y=s[0],g=s[3],f=s[6],b=s[1],x=s[4],v=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*y+a*b+c*C,r[3]=o*g+a*x+c*T,r[6]=o*f+a*v+c*R,r[1]=l*y+h*b+u*C,r[4]=l*g+h*x+u*T,r[7]=l*f+h*v+u*R,r[2]=d*y+p*b+m*C,r[5]=d*g+p*x+m*T,r[8]=d*f+p*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new Kt;function Wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=ro("canvas");return i.style.display="block",i}var Ah={};function zs(i){i in Ah||(Ah[i]=!0,console.warn(i))}function Qf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ch=[.64,.33,.3,.6,.15,.06],Ih=[.2126,.7152,.0722],Ph=[.3127,.329],Dh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[xs]:{primaries:Ch,whitePoint:Ph,transfer:Fo,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ih,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Ch,whitePoint:Ph,transfer:he,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ih,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});var Gi,Hc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=ro("canvas")),Gi.width=t.width,Gi.height=t.height;let n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ep=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ma(s[o].image)):r.push(Ma(s[o]))}else r=Ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,tn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=je,o=bi,a=fn,c=Gn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ys(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Pu;tn.DEFAULT_ANISOTROPY=1;var Ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],y=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,v=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+y)/4,D=(m+g)/4;return x>v&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=R/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==m){let g=1-a,f=c*d+l*p+h*m+u*y,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,f*b);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let v=a*b;if(c=c*g+d*v,l=l*g+p*v,h=h*g+m*v,u=u*g+y*v,g===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-a*p,t[e+2]=l*m+h*p+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new N,Uh=new mn,Ri=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Rr.subVectors(this.max,Hs),Wi.subVectors(t.a,Hs),Xi.subVectors(t.b,Hs),qi.subVectors(t.c,Hs),Kn.subVectors(Xi,Wi),Qn.subVectors(qi,Xi),pi.subVectors(Wi,qi);let e=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!wa(e,Wi,Xi,qi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Wi,Xi,qi,Rr))?!1:(Ar.crossVectors(Kn,Qn),e=[Ar.x,Ar.y,Ar.z],wa(e,Wi,Xi,qi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,Tr=new Ri,Wi=new N,Xi=new N,qi=new N,Kn=new N,Qn=new N,pi=new N,Hs=new N,Rr=new N,Ar=new N,mi=new N;function wa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ip=new Ri,Os=new N,Sa=new N,fs=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Sa)),this.expandByPoint(Os.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new N,ba=new N,Cr=new N,jn=new N,Ta=new N,Ir=new N,Ra=new N,$s=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=jn.dot(this.direction),c=-jn.dot(Cr),l=jn.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(Cr,d),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),Ir.subVectors(n,t),Ra.crossVectors(Ta,Ir);let o=this.direction.dot(Ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let c=a*this.direction.dot(Ir.crossVectors(jn,Ir));if(c<0)return null;let l=a*this.direction.dot(Ta.cross(jn));if(l<0||c+l>o)return null;let h=-a*jn.dot(Ra);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,m,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,y,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,y,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,m=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,y=l*u;e[0]=d+y*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,m=a*h,y=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,m=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,p=o*l,m=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ti.crossVectors(n,Ke),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ti.crossVectors(n,Ke)),ti.normalize(),Pr.crossVectors(Ke,ti),s[0]=ti.x,s[4]=Pr.x,s[8]=Ke.x,s[1]=ti.y,s[5]=Pr.y,s[9]=Ke.y,s[2]=ti.z,s[6]=Pr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],y=n[6],g=n[10],f=n[14],b=n[3],x=n[7],v=n[11],C=n[15],T=s[0],R=s[4],D=s[8],S=s[12],E=s[1],P=s[5],V=s[9],B=s[13],G=s[2],Z=s[6],k=s[10],j=s[14],F=s[3],st=s[7],ct=s[11],et=s[15];return r[0]=o*T+a*E+c*G+l*F,r[4]=o*R+a*P+c*Z+l*st,r[8]=o*D+a*V+c*k+l*ct,r[12]=o*S+a*B+c*j+l*et,r[1]=h*T+u*E+d*G+p*F,r[5]=h*R+u*P+d*Z+p*st,r[9]=h*D+u*V+d*k+p*ct,r[13]=h*S+u*B+d*j+p*et,r[2]=m*T+y*E+g*G+f*F,r[6]=m*R+y*P+g*Z+f*st,r[10]=m*D+y*V+g*k+f*ct,r[14]=m*S+y*B+g*j+f*et,r[3]=b*T+x*E+v*G+C*F,r[7]=b*R+x*P+v*Z+C*st,r[11]=b*D+x*V+v*k+C*ct,r[15]=b*S+x*B+v*j+C*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],y=t[7],g=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+y*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],y=t[13],g=t[14],f=t[15],b=u*g*l-y*d*l+y*c*p-a*g*p-u*c*f+a*d*f,x=m*d*l-h*g*l-m*c*p+o*g*p+h*c*f-o*d*f,v=h*y*l-m*u*l+m*a*p-o*y*p-h*a*f+o*u*f,C=m*u*c-h*y*c-m*a*d+o*y*d+h*a*g-o*u*g,T=e*b+n*x+s*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=b*R,t[1]=(y*d*r-u*g*r-y*s*p+n*g*p+u*s*f-n*d*f)*R,t[2]=(a*g*r-y*c*r+y*s*l-n*g*l-a*s*f+n*c*f)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*R,t[4]=x*R,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*f-e*c*f)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*R,t[8]=v*R,t[9]=(m*u*r-h*y*r-m*n*p+e*y*p+h*n*f-e*u*f)*R,t[10]=(o*y*r-m*a*r+m*n*l-e*y*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*R,t[12]=C*R,t[13]=(h*y*s-m*u*s+m*n*d-e*y*d-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*y*s-m*n*c+e*y*c+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,y=o*h,g=o*u,f=a*u,b=c*l,x=c*h,v=c*u,C=n.x,T=n.y,R=n.z;return s[0]=(1-(y+f))*C,s[1]=(p+v)*C,s[2]=(m-x)*C,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+x)*R,s[9]=(g-b)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,m;if(a===zn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===so)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,m,y;if(a===zn)m=(o+r)*u,y=-2*u;else if(a===so)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new N,un=new ue,sp=new N(0,0,0),rp=new N(1,1,1),ti=new N,Pr=new N,Ke=new N,Nh=new ue,Fh=new mn,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},op=0,Hh=new N,$i=new mn,Un=new ue,Dr=new N,Bs=new N,ap=new N,cp=new mn,Oh=new N(1,0,0),Bh=new N(0,1,0),kh=new N(0,0,1),zh={type:"added"},lp={type:"removed"},Zi={type:"childadded",child:null},Aa={type:"childremoved",child:null},Ie=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new rn,n=new mn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Bs,Dr,this.up):Un.lookAt(Dr,Bs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new N,Nn=new N,Ca=new N,Fn=new N,Ji=new N,Ki=new N,Vh=new N,Ia=new N,Pa=new N,Da=new N,La=new Ee,Ua=new Ee,Na=new Ee,Ei=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Nn.subVectors(n,e),Ca.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(Nn),c=dn.dot(Ca),l=Nn.dot(Nn),h=Nn.dot(Ca),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return La.setScalar(0),Ua.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Nn.subVectors(t,e),dn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),Ki.subVectors(r,n),Ia.subVectors(t,n);let c=Ji.dot(Ia),l=Ki.dot(Ia);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,s);let h=Ji.dot(Pa),u=Ki.dot(Pa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ji,o);Da.subVectors(t,r);let p=Ji.dot(Da),m=Ki.dot(Da);if(m>=0&&p<=m)return e.copy(r);let y=p*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ki,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Vh.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(Vh,a);let f=1/(g+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Jf(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fa(o,r,t+1/3),this.g=Fa(o,r,t),this.b=Fa(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=Xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return se.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Oe(Fe.r*255,0,255))*65536+Math.round(Oe(Fe.g*255,0,255))*256+Math.round(Oe(Fe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=He){se.fromWorkingColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Lr);let n=ya(ei.h,Lr.h,e),s=ya(ei.s,Lr.s,e),r=ya(ei.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Xt;Xt.NAMES=Xu;var hp=0,Xn=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ys(),this.name="",this.blending=ss,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Ka,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qn=class extends Xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new N,Ur=new pt,$e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}};var co=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},up=0,sn=new ue,Ha=new Ie,Qi=new N,Qe=new Ri,ks=new Ri,Ce=new N,Be=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?lo:co)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Qe.min,ks.min),Qe.expandByPoint(Ce),Ce.addVectors(Qe.max,ks.max),Qe.expandByPoint(Ce)):(Qe.expandByPoint(ks.min),Qe.expandByPoint(ks.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(t,l),Ce.add(Qi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new N,c[D]=new N;let l=new N,h=new N,u=new N,d=new pt,p=new pt,m=new pt,y=new N,g=new N;function f(D,S,E){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),a[D].add(y),a[S].add(y),a[E].add(y),c[D].add(g),c[S].add(g),c[E].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,S=b.length;D<S;++D){let E=b[D],P=E.start,V=E.count;for(let B=P,G=P+V;B<G;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new N,v=new N,C=new N,T=new N;function R(D){C.fromBufferAttribute(s,D),T.copy(C);let S=a[D];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(T,S);let P=v.dot(c[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,P)}for(let D=0,S=b.length;D<S;++D){let E=b[D],P=E.start,V=E.count;for(let B=P,G=P+V;B<G;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new ue,gi=new $s,Nr=new fs,Wh=new N,Fr=new N,Hr=new N,Or=new N,Oa=new N,Br=new N,Xh=new N,kr=new N,_=class extends Ie{constructor(t=new Be,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Oa.fromBufferAttribute(u,t),o?Br.addScaledVector(Oa,h):Br.addScaledVector(Oa.sub(e),h))}e.add(Br)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Nr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Nr,Wh)===null||gi.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],f=o[g.materialIndex],b=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=b,C=x;v<C;v+=3){let T=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);s=zr(this,f,t,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let b=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=zr(this,o,t,n,l,h,u,b,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],f=o[g.materialIndex],b=Math.max(g.start,p.start),x=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=b,C=x;v<C;v+=3){let T=v,R=v+1,D=v+2;s=zr(this,f,t,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){let b=g,x=g+1,v=g+2;s=zr(this,o,t,n,l,h,u,b,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function dp(i,t,e,n,s,r,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Sn,a),c===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:i}}function zr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Hr),i.getVertexPosition(l,Or);let h=dp(i,t,e,n,Fr,Hr,Or,Xh);if(h){let u=new N;Ei.getBarycoord(Xh,Fr,Hr,Or,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Ei.getNormal(Fr,Hr,Or,d.normal),h.face=d,h.barycoord=u}return h}var ai=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function m(y,g,f,b,x,v,C,T,R,D,S){let E=v/R,P=C/D,V=v/2,B=C/2,G=T/2,Z=R+1,k=D+1,j=0,F=0,st=new N;for(let ct=0;ct<k;ct++){let et=ct*P-B;for(let xt=0;xt<Z;xt++){let Ut=xt*E-V;st[y]=Ut*b,st[g]=et*x,st[f]=G,l.push(st.x,st.y,st.z),st[y]=0,st[g]=0,st[f]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(xt/R),u.push(1-ct/D),j+=1}}for(let ct=0;ct<D;ct++)for(let et=0;et<R;et++){let xt=d+et+Z*ct,Ut=d+et+Z*(ct+1),J=d+(et+1)+Z*(ct+1),it=d+(et+1)+Z*ct;c.push(xt,Ut,it),c.push(Ut,J,it),F+=6}a.addGroup(p,F,S),p+=F,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function fp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var pp={clone:ps,merge:Ve},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ho=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new N,qh=new pt,Yh=new pt,Ge=class extends ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,ts=1,kc=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(ji,ts,t,e);s.layers=this.layers,this.add(s);let r=new Ge(ji,ts,t,e);r.layers=this.layers,this.add(r);let o=new Ge(ji,ts,t,e);o.layers=this.layers,this.add(o);let a=new Ge(ji,ts,t,e);a.layers=this.layers,this.add(a);let c=new Ge(ji,ts,t,e);c.layers=this.layers,this.add(c);let l=new Ge(ji,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},uo=class extends tn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zc=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:si});r.uniforms.tEquirect.value=e;let o=new _(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=je),new kc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ba=new N,_p=new N,xp=new Kt,On=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(_p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xp.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new fs,Vr=new N,Js=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],y=s[10],g=s[11],f=s[12],b=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-p,v-f).normalize(),n[1].setComponents(c+r,d+l,g+p,v+f).normalize(),n[2].setComponents(c+o,d+h,g+m,v+b).normalize(),n[3].setComponents(c-o,d-h,g-m,v-b).normalize(),n[4].setComponents(c-a,d-u,g-y,v-x).normalize(),e===zn)n[5].setComponents(c+a,d+u,g+y,v+x).normalize();else if(e===so)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],y=u[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var fo=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],m=[],y=[],g=[];for(let f=0;f<h;f++){let b=f*d-o;for(let x=0;x<l;x++){let v=x*u-r;m.push(v,-b,0),y.push(0,0,1),g.push(x/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){let x=b+l*f,v=b+l*(f+1),C=b+1+l*(f+1),T=b+1+l*f;p.push(x,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Tp,aomap_pars_fragment:Rp,batching_pars_vertex:Ap,batching_vertex:Cp,begin_vertex:Ip,beginnormal_vertex:Pp,bsdfs:Dp,iridescence_fragment:Lp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:kp,color_pars_vertex:zp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:$p,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Kp,envmap_fragment:Qp,envmap_common_pars_fragment:jp,envmap_pars_fragment:t0,envmap_pars_vertex:e0,envmap_physical_pars_fragment:d0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:o0,gradientmap_pars_fragment:a0,lightmap_pars_fragment:c0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:_0,lights_physical_pars_fragment:x0,lights_fragment_begin:y0,lights_fragment_maps:v0,lights_fragment_end:M0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:b0,map_fragment:T0,map_pars_fragment:R0,map_particle_fragment:A0,map_particle_pars_fragment:C0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:P0,morphinstance_vertex:D0,morphcolor_vertex:L0,morphnormal_vertex:U0,morphtarget_pars_vertex:N0,morphtarget_vertex:F0,normal_fragment_begin:H0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:$0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:K0,dithering_pars_fragment:Q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:om,skinning_vertex:am,skinnormal_vertex:cm,specularmap_fragment:lm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:ym,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Sm,depth_vert:bm,depth_frag:Tm,distanceRGBA_vert:Rm,distanceRGBA_frag:Am,equirect_vert:Cm,equirect_frag:Im,linedashed_vert:Pm,linedashed_frag:Dm,meshbasic_vert:Lm,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Fm,meshmatcap_vert:Hm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Vm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:$m,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Km,sprite_frag:Qm},yt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ve([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ve([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ve([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ve([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ve([yt.lights,yt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Gr={r:0,b:0,g:0},xi=new rn,jm=new ue;function tg(i,t,e,n,s,r,o){let a=new Xt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function y(b){let x=!1,v=m(b);v===null?f(a,c):v&&v.isColor&&(f(v,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,x){let v=m(x);v&&(v.isCubeTexture||v.mapping===No)?(h===void 0&&(h=new _(new ai(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ps(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(xi)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _(new fo(2,2),new bn({name:"BackgroundMaterial",uniforms:ps(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,x){b.getRGB(Gr,qu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:y,addToRenderList:g}}function eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,P,V,B,G){let Z=!1,k=u(B,V,P);r!==k&&(r=k,l(r.object)),Z=p(E,B,V,G),Z&&m(E,B,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(E,P,V,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,P,V){let B=V.wireframe===!0,G=n[E.id];G===void 0&&(G={},n[E.id]=G);let Z=G[P.id];Z===void 0&&(Z={},G[P.id]=Z);let k=Z[B];return k===void 0&&(k=d(c()),Z[B]=k),k}function d(E){let P=[],V=[],B=[];for(let G=0;G<e;G++)P[G]=0,V[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,P,V,B){let G=r.attributes,Z=P.attributes,k=0,j=V.getAttributes();for(let F in j)if(j[F].location>=0){let ct=G[F],et=Z[F];if(et===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),ct===void 0||ct.attribute!==et||et&&ct.data!==et.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function m(E,P,V,B){let G={},Z=P.attributes,k=0,j=V.getAttributes();for(let F in j)if(j[F].location>=0){let ct=Z[F];ct===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor));let et={};et.attribute=ct,ct&&ct.data&&(et.data=ct.data),G[F]=et,k++}r.attributes=G,r.attributesNum=k,r.index=B}function y(){let E=r.newAttributes;for(let P=0,V=E.length;P<V;P++)E[P]=0}function g(E){f(E,0)}function f(E,P){let V=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;V[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),G[E]!==P&&(i.vertexAttribDivisor(E,P),G[E]=P)}function b(){let E=r.newAttributes,P=r.enabledAttributes;for(let V=0,B=P.length;V<B;V++)P[V]!==E[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function x(E,P,V,B,G,Z,k){k===!0?i.vertexAttribIPointer(E,P,V,G,Z):i.vertexAttribPointer(E,P,V,B,G,Z)}function v(E,P,V,B){y();let G=B.attributes,Z=V.getAttributes(),k=P.defaultAttributeValues;for(let j in Z){let F=Z[j];if(F.location>=0){let st=G[j];if(st===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(st=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(st=E.instanceColor)),st!==void 0){let ct=st.normalized,et=st.itemSize,xt=t.get(st);if(xt===void 0)continue;let Ut=xt.buffer,J=xt.type,it=xt.bytesPerElement,Mt=J===i.INT||J===i.UNSIGNED_INT||st.gpuType===El;if(st.isInterleavedBufferAttribute){let ft=st.data,zt=ft.stride,Yt=st.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<F.locationSize;Wt++)f(F.location+Wt,ft.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<F.locationSize;Wt++)g(F.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Wt=0;Wt<F.locationSize;Wt++)x(F.location+Wt,et/F.locationSize,J,ct,zt*it,(Yt+et/F.locationSize*Wt)*it,Mt)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<F.locationSize;ft++)f(F.location+ft,st.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<F.locationSize;ft++)g(F.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let ft=0;ft<F.locationSize;ft++)x(F.location+ft,et/F.locationSize,J,ct,et*it,et/F.locationSize*ft*it,Mt)}}else if(k!==void 0){let ct=k[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(F.location,ct);break;case 3:i.vertexAttrib3fv(F.location,ct);break;case 4:i.vertexAttrib4fv(F.location,ct);break;default:i.vertexAttrib1fv(F.location,ct)}}}}b()}function C(){D();for(let E in n){let P=n[E];for(let V in P){let B=P[V];for(let G in B)h(B[G].object),delete B[G];delete P[V]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let V in P){let B=P[V];for(let G in B)h(B[G].object),delete B[G];delete P[V]}delete n[E.id]}function R(E){for(let P in n){let V=n[P];if(V[E.id]===void 0)continue;let B=V[E.id];for(let G in B)h(B[G].object),delete B[G];delete V[E.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function ng(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y]*d[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let D=R===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function sg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new On,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,x=b*4,v=f.clippingState||null;c.value=v,v=h(m,d,x,p);for(let C=0;C!==x;++C)v[C]=e[C];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,m!==!0||g===null){let f=p+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,v=p;x!==y;++x,v+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function rg(i){let t=new WeakMap;function e(o,a){return a===rc?o.mapping=ls:a===oc&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===rc||a===oc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new zc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var po=class extends ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,$h=[.125,.215,.35,.446,.526,.582],wi=20,ka=new po,Zh=new Xt,za=null,Va=0,Ga=0,Wa=!1,vi=(1+Math.sqrt(5))/2,es=1/vi,Jh=[new N(-vi,es,0),new N(vi,es,0),new N(-es,0,vi),new N(es,0,vi),new N(0,vi,-es),new N(0,vi,es),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Va,Ga),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:ir,format:fn,colorSpace:xs,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(r)),this._blurMaterial=ag(r,t,e)}return s}_compileMaterial(t){let e=new _(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){let a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=ri,h.autoClear=!1;let p=new qn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new _(new ai,p),y=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,y=!0):(p.color.copy(Zh),y=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;Wr(s,b*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jh[(s-r-1)%Jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wi-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):wi;g>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);let f=[],b=0;for(let R=0;R<wi;++R){let D=R/y,S=Math.exp(-D*D/2);f.push(S),R===0?b+=S:R<g&&(b+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let v=this._sizeLods[s],C=3*v*(s>x-ns?s-x+ns:0),T=4*(this._cubeSize-v);Wr(e,C,T,3*v,2*v),c.setRenderTarget(e),c.render(u,ka)}};function og(i){let t=[],e=[],n=[],s=i,r=i-ns+1+$h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ns?c=$h[o-i+ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,y=3,g=2,f=1,b=new Float32Array(y*m*p),x=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,D=T>2?0:-1,S=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(S,y*m*T),x.set(d,g*m*T);let E=[T,T,T,T,T,T];v.set(E,f*m*T)}let C=new Be;C.setAttribute("position",new $e(b,y)),C.setAttribute("uv",new $e(x,g)),C.setAttribute("faceIndex",new $e(v,f)),t.push(C),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ag(i,t,e){let n=new Float32Array(wi),s=new N(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function jh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===rc||c===oc,h=c===ls||c===hs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new mo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new mo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let y=p[m];for(let g=0,f=y.length;g<f;g++)t.update(y[g],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,y=0;if(p!==null){let b=p.array;y=p.version;for(let x=0,v=b.length;x<v;x+=3){let C=b[x+0],T=b[x+1],R=b[x+2];d.push(C,T,T,R,R,C)}}else if(m!==void 0){let b=m.array;y=m.version;for(let x=0,v=b.length/3-1;x<v;x+=3){let C=x+0,T=x+1,R=x+2;d.push(C,T,T,R,R,C)}}else return;let g=new(Wu(d)?lo:co)(d,1);g.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ug(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*y[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fg(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],x=0;p===!0&&(x=1),m===!0&&(x=2),y===!0&&(x=3);let v=a.attributes.position.count*x,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*C*4*u),R=new ao(T,v,C,u);R.type=kn,R.needsUpdate=!0;let D=x*4;for(let E=0;E<u;E++){let P=g[E],V=f[E],B=b[E],G=v*C*4*E;for(let Z=0;Z<P.count;Z++){let k=Z*D;p===!0&&(s.fromBufferAttribute(P,Z),T[G+k+0]=s.x,T[G+k+1]=s.y,T[G+k+2]=s.z,T[G+k+3]=0),m===!0&&(s.fromBufferAttribute(V,Z),T[G+k+4]=s.x,T[G+k+5]=s.y,T[G+k+6]=s.z,T[G+k+7]=0),y===!0&&(s.fromBufferAttribute(B,Z),T[G+k+8]=s.x,T[G+k+9]=s.y,T[G+k+10]=s.z,T[G+k+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new pt(v,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function pg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var go=class extends tn{constructor(t,e,n,s,r,o,a,c,l,h=rs){if(h!==rs&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Ti),n===void 0&&h===ds&&(n=us),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$u=new tn,tu=new go(1,1),Zu=new ao,Ju=new Bc,Ku=new uo,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Re(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Ae(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Re(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Ae(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Re(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Ae(e,n)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=Gu,r=tu):r=$u,e.setTexture2D(t||r,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ju,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ku,s)}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zu,s)}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return Rg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ng(i,t){i.uniform1fv(this.addr,t)}function Fg(i,t){let e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){let e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Og(i,t){let e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Bg(i,t){let e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kg(i,t){let e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){let e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vg(i,t){i.uniform1iv(this.addr,t)}function Gg(i,t){i.uniform2iv(this.addr,t)}function Wg(i,t){i.uniform3iv(this.addr,t)}function Xg(i,t){i.uniform4iv(this.addr,t)}function qg(i,t){i.uniform1uiv(this.addr,t)}function Yg(i,t){i.uniform2uiv(this.addr,t)}function $g(i,t){i.uniform3uiv(this.addr,t)}function Zg(i,t){i.uniform4uiv(this.addr,t)}function Jg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$u,r[o])}function Kg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ju,r[o])}function Qg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ku,r[o])}function jg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zu,r[o])}function t_(i){switch(i){case 5126:return Ng;case 35664:return Fg;case 35665:return Hg;case 35666:return Og;case 35674:return Bg;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return $g;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return jg}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ug(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xa=/(\w+)(\])?(\[|\.)?/g;function ou(i,t){i.seq.push(t),i.map[t.id]=t}function e_(i,t,e){let n=i.name,s=n.length;for(Xa.lastIndex=0;;){let r=Xa.exec(n),o=Xa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ou(e,l===void 0?new Vc(a,i,t):new Gc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wc(a),ou(e,u)),e=u}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);e_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var n_=37297,i_=0;function s_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var cu=new Kt;function r_(i){se._getMatrix(cu,se.workingColorSpace,i);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+s_(i.getShaderSource(t),o)}else return s}function o_(i,t){let e=r_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a_(i,t){let e;switch(t){case Lf:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case Ml:e="ACESFilmic";break;case Hf:e="AgX";break;case Of:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new N;function c_(){se.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function h_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vs(i){return i!==""}function hu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(d_,p_)}var f_=new Map;function p_(i,t){let e=te[t];if(e===void 0){let n=f_.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}var m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(m_,g_)}function g_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function __(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function v_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function M_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=__(e),l=x_(e),h=y_(e),u=v_(e),d=M_(e),p=l_(e),m=h_(r),y=s.createProgram(),g,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),f.length>0&&(f+=`
`)):(g=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),f=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?te.tonemapping_pars_fragment:"",e.toneMapping!==ri?a_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Xc(o),o=hu(o,e),o=uu(o,e),a=Xc(a),a=hu(a,e),a=uu(a,e),o=du(o),a=du(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=b+g+o,v=b+f+a,C=au(s,s.VERTEX_SHADER,x),T=au(s,s.FRAGMENT_SHADER,v);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(T).trim(),Z=!0,k=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{let j=lu(s,C,"vertex"),F=lu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+j+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||G==="")&&(k=!1);k&&(P.diagnostics={runnable:Z,programLog:V,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:f}})}s.deleteShader(C),s.deleteShader(T),D=new as(s,y),S=u_(s,y)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,n_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var w_=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yc(t),e.set(t,n)),n}},Yc=class{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}};function S_(i,t,e,n,s,r,o){let a=new Zs,c=new qc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,E,P,V,B){let G=V.fog,Z=B.geometry,k=S.isMeshStandardMaterial?V.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),F=j&&j.mapping===No?j.image.height:null,st=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,et=ct!==void 0?ct.length:0,xt=0;Z.morphAttributes.position!==void 0&&(xt=1),Z.morphAttributes.normal!==void 0&&(xt=2),Z.morphAttributes.color!==void 0&&(xt=3);let Ut,J,it,Mt;if(st){let le=wn[st];Ut=le.vertexShader,J=le.fragmentShader}else Ut=S.vertexShader,J=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);let ft=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Yt=B.isInstancedMesh===!0,Wt=B.isBatchedMesh===!0,ie=!!S.map,ot=!!S.matcap,ut=!!j,U=!!S.aoMap,Bt=!!S.lightMap,lt=!!S.bumpMap,It=!!S.normalMap,mt=!!S.displacementMap,Vt=!!S.emissiveMap,At=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,W=S.clearcoat>0,tt=S.dispersion>0,at=S.iridescence>0,nt=S.sheen>0,Lt=S.transmission>0,Et=w&&!!S.anisotropyMap,Ct=W&&!!S.clearcoatMap,ee=W&&!!S.clearcoatNormalMap,ht=W&&!!S.clearcoatRoughnessMap,Pt=at&&!!S.iridescenceMap,Gt=at&&!!S.iridescenceThicknessMap,qt=nt&&!!S.sheenColorMap,Dt=nt&&!!S.sheenRoughnessMap,ne=!!S.specularMap,jt=!!S.specularColorMap,de=!!S.specularIntensityMap,H=Lt&&!!S.transmissionMap,wt=Lt&&!!S.thicknessMap,K=!!S.gradientMap,rt=!!S.alphaMap,Tt=S.alphaTest>0,St=!!S.alphaHash,Zt=!!S.extensions,Me=ri;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Me=i.toneMapping);let Ue={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Ut,fragmentShader:J,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&B._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&B.instanceColor!==null,instancingMorph:Yt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xs,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:ot,envMap:ut,envMapMode:ut&&j.mapping,envMapCubeUVHeight:F,aoMap:U,lightMap:Bt,bumpMap:lt,normalMap:It,displacementMap:d&&mt,emissiveMap:Vt,normalMapObjectSpace:It&&S.normalMapType===Vf,normalMapTangentSpace:It&&S.normalMapType===Vu,metalnessMap:At,roughnessMap:I,anisotropy:w,anisotropyMap:Et,clearcoat:W,clearcoatMap:Ct,clearcoatNormalMap:ee,clearcoatRoughnessMap:ht,dispersion:tt,iridescence:at,iridescenceMap:Pt,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:qt,sheenRoughnessMap:Dt,specularMap:ne,specularColorMap:jt,specularIntensityMap:de,transmission:Lt,transmissionMap:H,thicknessMap:wt,gradientMap:K,opaque:S.transparent===!1&&S.blending===ss&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:Tt,alphaHash:St,combine:S.combine,mapUv:ie&&y(S.map.channel),aoMapUv:U&&y(S.aoMap.channel),lightMapUv:Bt&&y(S.lightMap.channel),bumpMapUv:lt&&y(S.bumpMap.channel),normalMapUv:It&&y(S.normalMap.channel),displacementMapUv:mt&&y(S.displacementMap.channel),emissiveMapUv:Vt&&y(S.emissiveMap.channel),metalnessMapUv:At&&y(S.metalnessMap.channel),roughnessMapUv:I&&y(S.roughnessMap.channel),anisotropyMapUv:Et&&y(S.anisotropyMap.channel),clearcoatMapUv:Ct&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(S.sheenRoughnessMap.channel),specularMapUv:ne&&y(S.specularMap.channel),specularColorMapUv:jt&&y(S.specularColorMap.channel),specularIntensityMapUv:de&&y(S.specularIntensityMap.channel),transmissionMapUv:H&&y(S.transmissionMap.channel),thicknessMapUv:wt&&y(S.thicknessMap.channel),alphaMapUv:rt&&y(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(It||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(ie||rt),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:Vt&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bn,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function f(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function b(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let E=m[S.type],P;if(E){let V=wn[E];P=pp.clone(V.uniforms)}else P=S.uniforms;return P}function C(S,E){let P;for(let V=0,B=h.length;V<B;V++){let G=h[V];if(G.cacheKey===E){P=G,++P.usedTimes;break}}return P===void 0&&(P=new E_(i,E,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:D}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,y,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=y,f.group=g),t++,f}function a(u,d,p,m,y,g){let f=o(u,d,p,m,y,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,y,g){let f=o(u,d,p,m,y,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||T_),n.length>1&&n.sort(d||pu),s.length>1&&s.sort(d||pu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function R_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mu,i.set(n,[o])):s>=r.length?(o=new mu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Xt};break;case"SpotLight":e={position:new N,direction:new N,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function C_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var I_=0;function P_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D_(i){let t=new A_,e=C_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,b=0,x=0,v=0,C=0,T=0,R=0;l.sort(P_);for(let S=0,E=l.length;S<E;S++){let P=l[S],V=P.color,B=P.intensity,G=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],B);R++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,F=e.get(P);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=k,p++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(V).multiplyScalar(B),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[y]=k;let j=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=j.matrix,P.castShadow){let F=e.get(P);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,n.spotShadow[y]=F,n.spotShadowMap[y]=Z,v++}y++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(V).multiplyScalar(B),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let j=P.shadow,F=e.get(P);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==x||D.numSpotShadows!==v||D.numSpotMaps!==C||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=p,D.pointLength=m,D.spotLength=y,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=x,D.numSpotShadows=v,D.numSpotMaps=C,D.numLightProbes=R,n.version=I_++)}function c(l,h){let u=0,d=0,p=0,m=0,y=0,g=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let x=l[f];if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function gu(i){let t=new D_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function L_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gu(i),t.set(s,[a])):r>=o.length?(a=new gu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $c=class extends Xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zc=class extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F_(i,t,e){let n=new Js,s=new pt,r=new pt,o=new Ee,a=new $c({depthPacking:zf}),c=new Zc,l={},h=e.maxTextureSize,u={[Sn]:Ye,[Ye]:Sn,[Bn]:Bn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Be;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new _(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let f=this.type;this.render=function(T,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(si),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=f!==Hn&&this.type===Hn,G=f===Hn&&this.type!==Hn;for(let Z=0,k=T.length;Z<k;Z++){let j=T[Z],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let st=F.getFrameExtents();if(s.multiply(st),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,F.mapSize.y=r.y)),F.map===null||B===!0||G===!0){let et=this.type!==Hn?{minFilter:pn,magFilter:pn}:{};F.map!==null&&F.map.dispose(),F.map=new Wn(s.x,s.y,et),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let ct=F.getViewportCount();for(let et=0;et<ct;et++){let xt=F.getViewport(et);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),V.viewport(o),F.updateMatrices(j,et),n=F.getFrustum(),v(R,D,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Hn&&b(F,D),F.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,P)};function b(T,R){let D=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,D,p,y,null)}function x(T,R,D,S){let E=null,P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=E.uuid,B=R.uuid,G=l[V];G===void 0&&(G={},l[V]=G);let Z=G[B];Z===void 0&&(Z=E.clone(),G[B]=Z,R.addEventListener("dispose",C)),E=Z}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Hn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=i.properties.get(E);V.light=D}return E}function v(T,R,D,S,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let B=t.update(T),G=T.material;if(Array.isArray(G)){let Z=B.groups;for(let k=0,j=Z.length;k<j;k++){let F=Z[k],st=G[F.materialIndex];if(st&&st.visible){let ct=x(T,st,S,E);T.onBeforeShadow(i,T,R,D,B,ct,F),i.renderBufferDirect(D,null,B,ct,T,F),T.onAfterShadow(i,T,R,D,B,ct,F)}}}else if(G.visible){let Z=x(T,G,S,E);T.onBeforeShadow(i,T,R,D,B,Z,null),i.renderBufferDirect(D,null,B,Z,T,null),T.onAfterShadow(i,T,R,D,B,Z,null)}}let V=T.children;for(let B=0,G=V.length;B<G;B++)v(V[B],R,D,S,E)}function C(T){T.target.removeEventListener("dispose",C);for(let D in l){let S=l[D],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var H_={[Qa]:ja,[tc]:ic,[ec]:sc,[cs]:nc,[ja]:Qa,[ic]:tc,[sc]:ec,[nc]:cs};function O_(i,t){function e(){let H=!1,wt=new Ee,K=null,rt=new Ee(0,0,0,0);return{setMask:function(Tt){K!==Tt&&!H&&(i.colorMask(Tt,Tt,Tt,Tt),K=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,St,Zt,Me,Ue){Ue===!0&&(Tt*=Me,St*=Me,Zt*=Me),wt.set(Tt,St,Zt,Me),rt.equals(wt)===!1&&(i.clearColor(Tt,St,Zt,Me),rt.copy(wt))},reset:function(){H=!1,K=null,rt.set(-1,0,0,0)}}}function n(){let H=!1,wt=!1,K=null,rt=null,Tt=null;return{setReversed:function(St){if(wt!==St){let Zt=t.get("EXT_clip_control");wt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Me=Tt;Tt=null,this.setClear(Me)}wt=St},getReversed:function(){return wt},setTest:function(St){St?ft(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(St){K!==St&&!H&&(i.depthMask(St),K=St)},setFunc:function(St){if(wt&&(St=H_[St]),rt!==St){switch(St){case Qa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case nc:i.depthFunc(i.GEQUAL);break;case ic:i.depthFunc(i.GREATER);break;case sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=St}},setLocked:function(St){H=St},setClear:function(St){Tt!==St&&(wt&&(St=1-St),i.clearDepth(St),Tt=St)},reset:function(){H=!1,K=null,rt=null,Tt=null,wt=!1}}}function s(){let H=!1,wt=null,K=null,rt=null,Tt=null,St=null,Zt=null,Me=null,Ue=null;return{setTest:function(le){H||(le?ft(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(le){wt!==le&&!H&&(i.stencilMask(le),wt=le)},setFunc:function(le,cn,In){(K!==le||rt!==cn||Tt!==In)&&(i.stencilFunc(le,cn,In),K=le,rt=cn,Tt=In)},setOp:function(le,cn,In){(St!==le||Zt!==cn||Me!==In)&&(i.stencilOp(le,cn,In),St=le,Zt=cn,Me=In)},setLocked:function(le){H=le},setClear:function(le){Ue!==le&&(i.clearStencil(le),Ue=le)},reset:function(){H=!1,wt=null,K=null,rt=null,Tt=null,St=null,Zt=null,Me=null,Ue=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,b=null,x=null,v=null,C=null,T=null,R=new Xt(0,0,0),D=0,S=!1,E=null,P=null,V=null,B=null,G=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=j>=2);let st=null,ct={},et=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ut=new Ee().fromArray(et),J=new Ee().fromArray(xt);function it(H,wt,K,rt){let Tt=new Uint8Array(4),St=i.createTexture();i.bindTexture(H,St),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<K;Zt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(wt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return St}let Mt={};Mt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(cs),lt(!1),It(xh),ft(i.CULL_FACE),U(si);function ft(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function zt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Yt(H,wt){return u[H]!==wt?(i.bindFramebuffer(H,wt),u[H]=wt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Wt(H,wt){let K=p,rt=!1;if(H){K=d.get(wt),K===void 0&&(K=[],d.set(wt,K));let Tt=H.textures;if(K.length!==Tt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Zt=Tt.length;St<Zt;St++)K[St]=i.COLOR_ATTACHMENT0+St;K.length=Tt.length,rt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,rt=!0);rt&&i.drawBuffers(K)}function ie(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let ot={[Mi]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};ot[gf]=i.MIN,ot[_f]=i.MAX;let ut={[xf]:i.ZERO,[yf]:i.ONE,[vf]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function U(H,wt,K,rt,Tt,St,Zt,Me,Ue,le){if(H===si){y===!0&&(zt(i.BLEND),y=!1);return}if(y===!1&&(ft(i.BLEND),y=!0),H!==ff){if(H!==g||le!==S){if((f!==Mi||v!==Mi)&&(i.blendEquation(i.FUNC_ADD),f=Mi,v=Mi),le)switch(H){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,x=null,C=null,T=null,R.set(0,0,0),D=0,g=H,S=le}return}Tt=Tt||wt,St=St||K,Zt=Zt||rt,(wt!==f||Tt!==v)&&(i.blendEquationSeparate(ot[wt],ot[Tt]),f=wt,v=Tt),(K!==b||rt!==x||St!==C||Zt!==T)&&(i.blendFuncSeparate(ut[K],ut[rt],ut[St],ut[Zt]),b=K,x=rt,C=St,T=Zt),(Me.equals(R)===!1||Ue!==D)&&(i.blendColor(Me.r,Me.g,Me.b,Ue),R.copy(Me),D=Ue),g=H,S=!1}function Bt(H,wt){H.side===Bn?zt(i.CULL_FACE):ft(i.CULL_FACE);let K=H.side===Ye;wt&&(K=!K),lt(K),H.blending===ss&&H.transparent===!1?U(si):U(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let rt=H.stencilWrite;a.setTest(rt),rt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){E!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),E=H)}function It(H){H!==uf?(ft(i.CULL_FACE),H!==P&&(H===xh?i.cullFace(i.BACK):H===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),P=H}function mt(H){H!==V&&(k&&i.lineWidth(H),V=H)}function Vt(H,wt,K){H?(ft(i.POLYGON_OFFSET_FILL),(B!==wt||G!==K)&&(i.polygonOffset(wt,K),B=wt,G=K)):zt(i.POLYGON_OFFSET_FILL)}function At(H){H?ft(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function I(H){H===void 0&&(H=i.TEXTURE0+Z-1),st!==H&&(i.activeTexture(H),st=H)}function w(H,wt,K){K===void 0&&(st===null?K=i.TEXTURE0+Z-1:K=st);let rt=ct[K];rt===void 0&&(rt={type:void 0,texture:void 0},ct[K]=rt),(rt.type!==H||rt.texture!==wt)&&(st!==K&&(i.activeTexture(K),st=K),i.bindTexture(H,wt||Mt[H]),rt.type=H,rt.texture=wt)}function W(){let H=ct[st];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(H){Ut.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ut.copy(H))}function Dt(H){J.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function ne(H,wt){let K=l.get(wt);K===void 0&&(K=new WeakMap,l.set(wt,K));let rt=K.get(H);rt===void 0&&(rt=i.getUniformBlockIndex(wt,H.name),K.set(H,rt))}function jt(H,wt){let rt=l.get(wt).get(H);c.get(wt)!==rt&&(i.uniformBlockBinding(wt,rt,H.__bindingPointIndex),c.set(wt,rt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ct={},u={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,b=null,x=null,v=null,C=null,T=null,R=new Xt(0,0,0),D=0,S=!1,E=null,P=null,V=null,B=null,G=null,Ut.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:zt,bindFramebuffer:Yt,drawBuffers:Wt,useProgram:ie,setBlending:U,setMaterial:Bt,setFlipSided:lt,setCullFace:It,setLineWidth:mt,setPolygonOffset:Vt,setScissorTest:At,activeTexture:I,bindTexture:w,unbindTexture:W,compressedTexImage2D:tt,compressedTexImage3D:at,texImage2D:Pt,texImage3D:Gt,updateUBOMapping:ne,uniformBlockBinding:jt,texStorage2D:ee,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Lt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ct,scissor:qt,viewport:Dt,reset:de}}function _u(i,t,e,n){let s=B_(n);switch(e){case Nu:return i*t;case Hu:return i*t;case Ou:return i*t*2;case Bu:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case ku:return i*t*2/s.components*s.byteLength;case Tl:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Rl:return i*t*4/s.components*s.byteLength;case Qr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(t,8)/4;case lc:case uc:return Math.max(i,8)*Math.max(t,8)/2;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zu:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B_(i){switch(i){case Gn:case Du:return{byteLength:1,components:1};case Ys:case Lu:case ir:return{byteLength:2,components:1};case wl:case Sl:return{byteLength:2,components:4};case Ti:case El:case kn:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return p?new OffscreenCanvas(I,w):ro("canvas")}function y(I,w,W){let tt=1,at=At(I);if((at.width>W||at.height>W)&&(tt=W/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let nt=Math.floor(tt*at.width),Lt=Math.floor(tt*at.height);u===void 0&&(u=m(nt,Lt));let Et=w?m(nt,Lt):u;return Et.width=nt,Et.height=Lt,Et.getContext("2d").drawImage(I,0,0,nt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+nt+"x"+Lt+")."),Et}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function g(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,w,W,tt,at=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=w;if(w===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),w===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),W===i.UNSIGNED_INT&&(nt=i.RGB32UI),W===i.BYTE&&(nt=i.RGB8I),W===i.SHORT&&(nt=i.RGB16I),W===i.INT&&(nt=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),W===i.UNSIGNED_INT&&(nt=i.RGBA32UI),W===i.BYTE&&(nt=i.RGBA8I),W===i.SHORT&&(nt=i.RGBA16I),W===i.INT&&(nt=i.RGBA32I)),w===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),w===i.RGBA){let Lt=at?Fo:se.getTransfer(tt);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=Lt===he?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(I,w){let W;return I?w===null||w===Ti||w===us?W=i.DEPTH24_STENCIL8:w===kn?W=i.DEPTH32F_STENCIL8:w===Ys&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===us?W=i.DEPTH_COMPONENT24:w===kn?W=i.DEPTH_COMPONENT32F:w===Ys&&(W=i.DEPTH_COMPONENT16),W}function C(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==pn&&I.minFilter!==je?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){let w=I.target;w.removeEventListener("dispose",T),D(w),w.isVideoTexture&&h.delete(w)}function R(I){let w=I.target;w.removeEventListener("dispose",R),E(w)}function D(I){let w=n.get(I);if(w.__webglInit===void 0)return;let W=I.source,tt=d.get(W);if(tt){let at=tt[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(I),Object.keys(tt).length===0&&d.delete(W)}n.remove(I)}function S(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let W=I.source,tt=d.get(W);delete tt[w.__cacheKey],o.memory.textures--}function E(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let at=0;at<w.__webglFramebuffer[tt].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[tt][at]);else i.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[tt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let W=I.textures;for(let tt=0,at=W.length;tt<at;tt++){let nt=n.get(W[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(I)}let P=0;function V(){P=0}function B(){let I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function G(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Z(I,w){let W=n.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){let tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,I,w);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function k(I,w){let W=n.get(I);if(I.version>0&&W.__version!==I.version){J(W,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function j(I,w){let W=n.get(I);if(I.version>0&&W.__version!==I.version){J(W,I,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function F(I,w){let W=n.get(I);if(I.version>0&&W.__version!==I.version){it(W,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}let st={[ac]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[cc]:i.MIRRORED_REPEAT},ct={[pn]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},et={[Gf]:i.NEVER,[Zf]:i.ALWAYS,[Wf]:i.LESS,[Gu]:i.LEQUAL,[Xf]:i.EQUAL,[$f]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function xt(I,w){if(w.type===kn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===je||w.magFilter===ga||w.magFilter===br||w.magFilter===bi||w.minFilter===je||w.minFilter===ga||w.minFilter===br||w.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ct[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ct[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pn||w.minFilter!==br&&w.minFilter!==bi||w.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ut(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));let tt=w.source,at=d.get(tt);at===void 0&&(at={},d.set(tt,at));let nt=G(w);if(nt!==I.__cacheKey){at[nt]===void 0&&(at[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[nt].usedTimes++;let Lt=at[I.__cacheKey];Lt!==void 0&&(at[I.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(w)),I.__cacheKey=nt,I.__webglTexture=at[nt].texture}return W}function J(I,w,W){let tt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=i.TEXTURE_3D);let at=Ut(I,w),nt=w.source;e.bindTexture(tt,I.__webglTexture,i.TEXTURE0+W);let Lt=n.get(nt);if(nt.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+W);let Et=se.getPrimaries(se.workingColorSpace),Ct=w.colorSpace===ii?null:se.getPrimaries(w.colorSpace),ee=w.colorSpace===ii||Et===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ht=y(w.image,!1,s.maxTextureSize);ht=Vt(w,ht);let Pt=r.convert(w.format,w.colorSpace),Gt=r.convert(w.type),qt=x(w.internalFormat,Pt,Gt,w.colorSpace,w.isVideoTexture);xt(tt,w);let Dt,ne=w.mipmaps,jt=w.isVideoTexture!==!0,de=Lt.__version===void 0||at===!0,H=nt.dataReady,wt=C(w,ht);if(w.isDepthTexture)qt=v(w.format===ds,w.type),de&&(jt?e.texStorage2D(i.TEXTURE_2D,1,qt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,qt,ht.width,ht.height,0,Pt,Gt,null));else if(w.isDataTexture)if(ne.length>0){jt&&de&&e.texStorage2D(i.TEXTURE_2D,wt,qt,ne[0].width,ne[0].height);for(let K=0,rt=ne.length;K<rt;K++)Dt=ne[K],jt?H&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Gt,Dt.data):e.texImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,Pt,Gt,Dt.data);w.generateMipmaps=!1}else jt?(de&&e.texStorage2D(i.TEXTURE_2D,wt,qt,ht.width,ht.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Pt,Gt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,qt,ht.width,ht.height,0,Pt,Gt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,qt,ne[0].width,ne[0].height,ht.depth);for(let K=0,rt=ne.length;K<rt;K++)if(Dt=ne[K],w.format!==fn)if(Pt!==null)if(jt){if(H)if(w.layerUpdates.size>0){let Tt=_u(Dt.width,Dt.height,w.format,w.type);for(let St of w.layerUpdates){let Zt=Dt.data.subarray(St*Tt/Dt.data.BYTES_PER_ELEMENT,(St+1)*Tt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,St,Dt.width,Dt.height,1,Pt,Zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,qt,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,ht.depth,Pt,Gt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,qt,Dt.width,Dt.height,ht.depth,0,Pt,Gt,Dt.data)}else{jt&&de&&e.texStorage2D(i.TEXTURE_2D,wt,qt,ne[0].width,ne[0].height);for(let K=0,rt=ne.length;K<rt;K++)Dt=ne[K],w.format!==fn?Pt!==null?jt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?H&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,Pt,Gt,Dt.data):e.texImage2D(i.TEXTURE_2D,K,qt,Dt.width,Dt.height,0,Pt,Gt,Dt.data)}else if(w.isDataArrayTexture)if(jt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,qt,ht.width,ht.height,ht.depth),H)if(w.layerUpdates.size>0){let K=_u(ht.width,ht.height,w.format,w.type);for(let rt of w.layerUpdates){let Tt=ht.data.subarray(rt*K/ht.data.BYTES_PER_ELEMENT,(rt+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,Pt,Gt,Tt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,ht.width,ht.height,ht.depth,0,Pt,Gt,ht.data);else if(w.isData3DTexture)jt?(de&&e.texStorage3D(i.TEXTURE_3D,wt,qt,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Pt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,qt,ht.width,ht.height,ht.depth,0,Pt,Gt,ht.data);else if(w.isFramebufferTexture){if(de)if(jt)e.texStorage2D(i.TEXTURE_2D,wt,qt,ht.width,ht.height);else{let K=ht.width,rt=ht.height;for(let Tt=0;Tt<wt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,qt,K,rt,0,Pt,Gt,null),K>>=1,rt>>=1}}else if(ne.length>0){if(jt&&de){let K=At(ne[0]);e.texStorage2D(i.TEXTURE_2D,wt,qt,K.width,K.height)}for(let K=0,rt=ne.length;K<rt;K++)Dt=ne[K],jt?H&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Pt,Gt,Dt):e.texImage2D(i.TEXTURE_2D,K,qt,Pt,Gt,Dt);w.generateMipmaps=!1}else if(jt){if(de){let K=At(ht);e.texStorage2D(i.TEXTURE_2D,wt,qt,K.width,K.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,qt,Pt,Gt,ht);g(w)&&f(tt),Lt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function it(I,w,W){if(w.image.length!==6)return;let tt=Ut(I,w),at=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let nt=n.get(at);if(at.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);let Lt=se.getPrimaries(se.workingColorSpace),Et=w.colorSpace===ii?null:se.getPrimaries(w.colorSpace),Ct=w.colorSpace===ii||Lt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ee=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,Pt=[];for(let rt=0;rt<6;rt++)!ee&&!ht?Pt[rt]=y(w.image[rt],!0,s.maxCubemapSize):Pt[rt]=ht?w.image[rt].image:w.image[rt],Pt[rt]=Vt(w,Pt[rt]);let Gt=Pt[0],qt=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type),ne=x(w.internalFormat,qt,Dt,w.colorSpace),jt=w.isVideoTexture!==!0,de=nt.__version===void 0||tt===!0,H=at.dataReady,wt=C(w,Gt);xt(i.TEXTURE_CUBE_MAP,w);let K;if(ee){jt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ne,Gt.width,Gt.height);for(let rt=0;rt<6;rt++){K=Pt[rt].mipmaps;for(let Tt=0;Tt<K.length;Tt++){let St=K[Tt];w.format!==fn?qt!==null?jt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,0,0,St.width,St.height,qt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,ne,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,0,0,St.width,St.height,qt,Dt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,ne,St.width,St.height,0,qt,Dt,St.data)}}}else{if(K=w.mipmaps,jt&&de){K.length>0&&wt++;let rt=At(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ne,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt[rt].width,Pt[rt].height,qt,Dt,Pt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,Pt[rt].width,Pt[rt].height,0,qt,Dt,Pt[rt].data);for(let Tt=0;Tt<K.length;Tt++){let Zt=K[Tt].image[rt].image;jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,0,0,Zt.width,Zt.height,qt,Dt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,ne,Zt.width,Zt.height,0,qt,Dt,Zt.data)}}else{jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,qt,Dt,Pt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,qt,Dt,Pt[rt]);for(let Tt=0;Tt<K.length;Tt++){let St=K[Tt];jt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,0,0,qt,Dt,St.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,ne,qt,Dt,St.image[rt])}}}g(w)&&f(i.TEXTURE_CUBE_MAP),nt.__version=at.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Mt(I,w,W,tt,at,nt){let Lt=r.convert(W.format,W.colorSpace),Et=r.convert(W.type),Ct=x(W.internalFormat,Lt,Et,W.colorSpace),ee=n.get(w),ht=n.get(W);if(ht.__renderTarget=w,!ee.__hasExternalTextures){let Pt=Math.max(1,w.width>>nt),Gt=Math.max(1,w.height>>nt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,Ct,Pt,Gt,w.depth,0,Lt,Et,null):e.texImage2D(at,nt,Ct,Pt,Gt,0,Lt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,at,ht.__webglTexture,0,lt(w)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,at,ht.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(I,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let tt=w.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,nt=v(w.stencilBuffer,at),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=lt(w);It(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,nt,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,I)}else{let tt=w.textures;for(let at=0;at<tt.length;at++){let nt=tt[at],Lt=r.convert(nt.format,nt.colorSpace),Et=r.convert(nt.type),Ct=x(nt.internalFormat,Lt,Et,nt.colorSpace),ee=lt(w);W&&It(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Ct,w.width,w.height):It(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let at=tt.__webglTexture,nt=lt(w);if(w.depthTexture.format===rs)It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(w.depthTexture.format===ds)It(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Yt(I){let w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let tt=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){let at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=tt}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");zt(w.__webglFramebuffer,I)}else if(W){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=i.createRenderbuffer(),ft(w.__webglDepthbuffer[tt],I,!1);else{let at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ft(w.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(I,w,W){let tt=n.get(I);w!==void 0&&Mt(tt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Yt(I)}function ie(I){let w=I.texture,W=n.get(I),tt=n.get(w);I.addEventListener("dispose",R);let at=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=w.version,o.memory.textures++),nt){W.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[Et]=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)W.__webglFramebuffer[Et][Ct]=i.createFramebuffer()}else W.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let Et=0;Et<w.mipmaps.length;Et++)W.__webglFramebuffer[Et]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Et=0,Ct=at.length;Et<Ct;Et++){let ee=n.get(at[Et]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&It(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Et=0;Et<at.length;Et++){let Ct=at[Et];W.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Et]);let ee=r.convert(Ct.format,Ct.colorSpace),ht=r.convert(Ct.type),Pt=x(Ct.internalFormat,ee,ht,Ct.colorSpace,I.isXRRenderTarget===!0),Gt=lt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,W.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),xt(i.TEXTURE_CUBE_MAP,w);for(let Et=0;Et<6;Et++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)Mt(W.__webglFramebuffer[Et][Ct],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ct);else Mt(W.__webglFramebuffer[Et],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);g(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Et=0,Ct=at.length;Et<Ct;Et++){let ee=at[Et],ht=n.get(ee);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),xt(i.TEXTURE_2D,ee),Mt(W.__webglFramebuffer,I,ee,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),g(ee)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,tt.__webglTexture),xt(Et,w),w.mipmaps&&w.mipmaps.length>0)for(let Ct=0;Ct<w.mipmaps.length;Ct++)Mt(W.__webglFramebuffer[Ct],I,w,i.COLOR_ATTACHMENT0,Et,Ct);else Mt(W.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,Et,0);g(w)&&f(Et),e.unbindTexture()}I.depthBuffer&&Yt(I)}function ot(I){let w=I.textures;for(let W=0,tt=w.length;W<tt;W++){let at=w[W];if(g(at)){let nt=b(I),Lt=n.get(at).__webglTexture;e.bindTexture(nt,Lt),f(nt),e.unbindTexture()}}}let ut=[],U=[];function Bt(I){if(I.samples>0){if(It(I)===!1){let w=I.textures,W=I.width,tt=I.height,at=i.COLOR_BUFFER_BIT,nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(I),Et=w.length>1;if(Et)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);let ee=n.get(w[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,W,tt,0,0,W,tt,at,i.NEAREST),c===!0&&(ut.length=0,U.length=0,ut.push(i.COLOR_ATTACHMENT0+Ct),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(nt),U.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ct]);let ee=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function lt(I){return Math.min(s.maxSamples,I.samples)}function It(I){let w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Vt(I,w){let W=I.colorSpace,tt=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==xs&&W!==ii&&(se.getTransfer(W)===he?(tt!==fn||at!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=Wt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=It}function z_(i,t){function e(n,s=ii){let r,o=se.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ir)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===fn)return i.RGBA;if(n===Hu)return i.LUMINANCE;if(n===Ou)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Bu)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Rl)return i.RGBA_INTEGER;if(n===Qr||n===jr||n===to||n===eo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Ec||n===wc||n===Sc||n===bc||n===Tc||n===Rc||n===Ac||n===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===Ic||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===Dc||n===Lc||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jc=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},X=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},V_={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new X,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new X,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new X,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),f=this._getHandJoint(l,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new X;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:G_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,y=new Kc,g=e.getContextAttributes(),f=null,b=null,x=[],v=[],C=new pt,T=null,R=new Ge;R.viewport=new Ee;let D=new Ge;D.viewport=new Ee;let S=[R,D],E=new Jc,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=x[J];return it===void 0&&(it=new Gs,x[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=x[J];return it===void 0&&(it=new Gs,x[J]=it),it.getGripSpace()},this.getHand=function(J){let it=x[J];return it===void 0&&(it=new Gs,x[J]=it),it.getHandSpace()};function B(J){let it=v.indexOf(J.inputSource);if(it===-1)return;let Mt=x[it];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,l||o),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<x.length;J++){let it=v[J];it!==null&&(v[J]=null,x[J].disconnect(it))}P=null,V=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Wn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,Mt=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?ds:rs,Mt=g.stencil?us:Ti);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Wn(d.textureWidth,d.textureHeight,{format:fn,type:Gn,depthTexture:new go(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(J){for(let it=0;it<J.removed.length;it++){let Mt=J.removed[it],ft=v.indexOf(Mt);ft>=0&&(v[ft]=null,x[ft].disconnect(Mt))}for(let it=0;it<J.added.length;it++){let Mt=J.added[it],ft=v.indexOf(Mt);if(ft===-1){for(let Yt=0;Yt<x.length;Yt++)if(Yt>=v.length){v.push(Mt),ft=Yt;break}else if(v[Yt]===null){v[Yt]=Mt,ft=Yt;break}if(ft===-1)break}let zt=x[ft];zt&&zt.connect(Mt)}}let k=new N,j=new N;function F(J,it,Mt){k.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);let ft=k.distanceTo(j),zt=it.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,Wt=zt[14]/(zt[10]-1),ie=zt[14]/(zt[10]+1),ot=(zt[9]+1)/zt[5],ut=(zt[9]-1)/zt[5],U=(zt[8]-1)/zt[0],Bt=(Yt[8]+1)/Yt[0],lt=Wt*U,It=Wt*Bt,mt=ft/(-U+Bt),Vt=mt*-U;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Vt),J.translateZ(mt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let At=Wt+mt,I=ie+mt,w=lt-Vt,W=It+(ft-Vt),tt=ot*ie/I*At,at=ut*ie/I*At;J.projectionMatrix.makePerspective(w,W,tt,at,At,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function st(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,Mt=J.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),E.near=D.near=R.near=it,E.far=D.far=R.far=Mt,(P!==E.near||V!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,V=E.far),R.layers.mask=J.layers.mask|2,D.layers.mask=J.layers.mask|4,E.layers.mask=R.layers.mask|D.layers.mask;let ft=J.parent,zt=E.cameras;st(E,ft);for(let Yt=0;Yt<zt.length;Yt++)st(zt[Yt],ft);zt.length===2?F(E,R,D):E.projectionMatrix.copy(R.projectionMatrix),ct(J,E,ft)};function ct(J,it,Mt){Mt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let et=null;function xt(J,it){if(h=it.getViewerPose(l||o),m=it,h!==null){let Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ft=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,ft=!0);for(let Yt=0;Yt<Mt.length;Yt++){let Wt=Mt[Yt],ie=null;if(p!==null)ie=p.getViewport(Wt);else{let ut=u.getViewSubImage(d,Wt);ie=ut.viewport,Yt===0&&(t.setRenderTargetTextures(b,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(b))}let ot=S[Yt];ot===void 0&&(ot=new Ge,ot.layers.enable(Yt),ot.viewport=new Ee,S[Yt]=ot),ot.matrix.fromArray(Wt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Wt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ie.x,ie.y,ie.width,ie.height),Yt===0&&(E.matrix.copy(ot.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ft===!0&&E.cameras.push(ot)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Yt=u.getDepthInformation(Mt[0]);Yt&&Yt.isValid&&Yt.texture&&y.init(t,Yt,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){let ft=v[Mt],zt=x[Mt];ft!==null&&zt!==void 0&&zt.update(ft,it,l||o)}et&&et(J,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Ut=new Yu;Ut.setAnimationLoop(xt),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},yi=new rn,X_=new ue;function q_(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,qu(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,b,x):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ye&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ye&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),x=b.envMap,v=b.envMapRotation;x&&(g.envMap.value=x,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(yi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=x*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){let v=x.program;n.uniformBlockBinding(b,v)}function l(b,x){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let C=x.program;n.updateUBOMapping(b,C);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let x=u();b.__bindingPointIndex=x;let v=i.createBuffer(),C=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=s[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=v.length;T<R;T++){let D=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,E=D.length;S<E;S++){let P=D[S];if(p(P,T,S,C)===!0){let V=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],G=0;for(let Z=0;Z<B.length;Z++){let k=B[Z],j=y(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,V+G,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,x,v,C){let T=b.value,R=x+"_"+v;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let D=C[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return C[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function m(b){let x=b.uniforms,v=0,C=16;for(let R=0,D=x.length;R<D;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,P=S.length;E<P;E++){let V=S[E],B=Array.isArray(V.value)?V.value:[V.value];for(let G=0,Z=B.length;G<Z;G++){let k=B[G],j=y(k),F=v%C,st=F%j.boundary,ct=F+st;v+=st,ct!==0&&C-ct<j.storage&&(v+=C-ct),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=j.storage}}}let T=v%C;return T>0&&(v+=C-T),b.__size=v,b.__cache={},this}function y(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function g(b){let x=b.target;x.removeEventListener("dispose",g);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var _o=class{constructor(t={}){let{canvas:e=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,f=null,b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=ri,this.toneMappingExposure=1;let v=this,C=!1,T=0,R=0,D=null,S=-1,E=null,P=new Ee,V=new Ee,B=null,G=new Xt(0),Z=0,k=e.width,j=e.height,F=1,st=null,ct=null,et=new Ee(0,0,k,j),xt=new Ee(0,0,k,j),Ut=!1,J=new Js,it=!1,Mt=!1,ft=new ue,zt=new ue,Yt=new N,Wt=new Ee,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function ut(){return D===null?F:1}let U=n;function Bt(A,O){return e.getContext(A,O)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",St,!1),U===null){let O="webgl2";if(U=Bt(O,A),U===null)throw Bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let lt,It,mt,Vt,At,I,w,W,tt,at,nt,Lt,Et,Ct,ee,ht,Pt,Gt,qt,Dt,ne,jt,de,H;function wt(){lt=new lg(U),lt.init(),jt=new z_(U,lt),It=new ig(U,lt,t,jt),mt=new O_(U,lt),It.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Vt=new dg(U),At=new b_,I=new k_(U,lt,mt,At,It,jt,Vt),w=new rg(v),W=new cg(v),tt=new yp(U),de=new eg(U,tt),at=new hg(U,tt,Vt,de),nt=new pg(U,at,tt,Vt),qt=new fg(U,It,I),ht=new sg(At),Lt=new S_(v,w,W,lt,It,de,ht),Et=new q_(v,At),Ct=new R_,ee=new L_(lt),Gt=new tg(v,w,W,mt,nt,p,c),Pt=new F_(v,nt,It),H=new Y_(U,Vt,It,mt),Dt=new ng(U,lt,Vt),ne=new ug(U,lt,Vt),Vt.programs=Lt.programs,v.capabilities=It,v.extensions=lt,v.properties=At,v.renderLists=Ct,v.shadowMap=Pt,v.state=mt,v.info=Vt}wt();let K=new Qc(v,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(k,j,!1))},this.getSize=function(A){return A.set(k,j)},this.setSize=function(A,O,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,j=O,e.width=Math.floor(A*F),e.height=Math.floor(O*F),q===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(k*F,j*F).floor()},this.setDrawingBufferSize=function(A,O,q){k=A,j=O,F=q,e.width=Math.floor(A*q),e.height=Math.floor(O*q),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,O,q,Y){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,O,q,Y),mt.viewport(P.copy(et).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,O,q,Y){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,O,q,Y),mt.scissor(V.copy(xt).multiplyScalar(F).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){mt.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){ct=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(A=!0,O=!0,q=!0){let Y=0;if(A){let z=!1;if(D!==null){let dt=D.texture.format;z=dt===Rl||dt===Tl||dt===bl}if(z){let dt=D.texture.type,bt=dt===Gn||dt===Ti||dt===Ys||dt===us||dt===wl||dt===Sl,Nt=Gt.getClearColor(),Ft=Gt.getClearAlpha(),$t=Nt.r,Jt=Nt.g,Ht=Nt.b;bt?(m[0]=$t,m[1]=Jt,m[2]=Ht,m[3]=Ft,U.clearBufferuiv(U.COLOR,0,m)):(y[0]=$t,y[1]=Jt,y[2]=Ht,y[3]=Ft,U.clearBufferiv(U.COLOR,0,y))}else Y|=U.COLOR_BUFFER_BIT}O&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ct.dispose(),ee.dispose(),At.dispose(),w.dispose(),W.dispose(),nt.dispose(),de.dispose(),H.dispose(),Lt.dispose(),K.dispose(),K.removeEventListener("sessionstart",hh),K.removeEventListener("sessionend",uh),fi.stop()};function rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let A=Vt.autoReset,O=Pt.enabled,q=Pt.autoUpdate,Y=Pt.needsUpdate,z=Pt.type;wt(),Vt.autoReset=A,Pt.enabled=O,Pt.autoUpdate=q,Pt.needsUpdate=Y,Pt.type=z}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){let O=A.target;O.removeEventListener("dispose",Zt),Me(O)}function Me(A){Ue(A),At.remove(A)}function Ue(A){let O=At.get(A).programs;O!==void 0&&(O.forEach(function(q){Lt.releaseProgram(q)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,q,Y,z,dt){O===null&&(O=ie);let bt=z.isMesh&&z.matrixWorld.determinant()<0,Nt=cf(A,O,q,Y,z);mt.setMaterial(Y,bt);let Ft=q.index,$t=1;if(Y.wireframe===!0){if(Ft=at.getWireframeAttribute(q),Ft===void 0)return;$t=2}let Jt=q.drawRange,Ht=q.attributes.position,re=Jt.start*$t,fe=(Jt.start+Jt.count)*$t;dt!==null&&(re=Math.max(re,dt.start*$t),fe=Math.min(fe,(dt.start+dt.count)*$t)),Ft!==null?(re=Math.max(re,0),fe=Math.min(fe,Ft.count)):Ht!=null&&(re=Math.max(re,0),fe=Math.min(fe,Ht.count));let me=fe-re;if(me<0||me===1/0)return;de.setup(z,Y,Nt,q,Ft);let Xe,oe=Dt;if(Ft!==null&&(Xe=tt.get(Ft),oe=ne,oe.setIndex(Xe)),z.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*ut()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(z.isLine){let kt=Y.linewidth;kt===void 0&&(kt=1),mt.setLineWidth(kt*ut()),z.isLineSegments?oe.setMode(U.LINES):z.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else z.isPoints?oe.setMode(U.POINTS):z.isSprite&&oe.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let kt=z._multiDrawStarts,Pn=z._multiDrawCounts,ae=z._multiDrawCount,ln=Ft?tt.get(Ft).bytesPerElement:1,zi=At.get(Y).currentProgram.getUniforms();for(let Je=0;Je<ae;Je++)zi.setValue(U,"_gl_DrawID",Je),oe.render(kt[Je]/ln,Pn[Je])}else if(z.isInstancedMesh)oe.renderInstances(re,me,z.count);else if(q.isInstancedBufferGeometry){let kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pn=Math.min(q.instanceCount,kt);oe.renderInstances(re,me,Pn)}else oe.render(re,me)};function le(A,O,q){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,Sr(A,O,q),A.side=Sn,A.needsUpdate=!0,Sr(A,O,q),A.side=Bn):Sr(A,O,q)}this.compile=function(A,O,q=null){q===null&&(q=A),f=ee.get(q),f.init(O),x.push(f),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){let Nt=dt[bt];le(Nt,q,z),Y.add(Nt)}else le(dt,q,z),Y.add(dt)}),x.pop(),f=null,Y},this.compileAsync=function(A,O,q=null){let Y=this.compile(A,O,q);return new Promise(z=>{function dt(){if(Y.forEach(function(bt){At.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){z(A);return}setTimeout(dt,10)}lt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let cn=null;function In(A){cn&&cn(A)}function hh(){fi.stop()}function uh(){fi.start()}let fi=new Yu;fi.setAnimationLoop(In),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(A){cn=A,K.setAnimationLoop(A),A===null?fi.stop():fi.start()},K.addEventListener("sessionstart",hh),K.addEventListener("sessionend",uh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,D),f=ee.get(A,x.length),f.init(O),x.push(f),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,it=ht.init(this.clippingPlanes,Mt),g=Ct.get(A,b.length),g.init(),b.push(g),K.enabled===!0&&K.isPresenting===!0){let dt=v.xr.getDepthSensingMesh();dt!==null&&ma(dt,O,-1/0,v.sortObjects)}ma(A,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(st,ct),ot=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ot&&Gt.addToRenderList(g,A),this.info.render.frame++,it===!0&&ht.beginShadows();let q=f.state.shadowsArray;Pt.render(q,A,O),it===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,z=g.transmissive;if(f.setupLights(),O.isArrayCamera){let dt=O.cameras;if(z.length>0)for(let bt=0,Nt=dt.length;bt<Nt;bt++){let Ft=dt[bt];fh(Y,z,A,Ft)}ot&&Gt.render(A);for(let bt=0,Nt=dt.length;bt<Nt;bt++){let Ft=dt[bt];dh(g,A,Ft,Ft.viewport)}}else z.length>0&&fh(Y,z,A,O),ot&&Gt.render(A),dh(g,A,O);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(v,A,O),de.resetDefaultState(),S=-1,E=null,x.pop(),x.length>0?(f=x[x.length-1],it===!0&&ht.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ma(A,O,q,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Y&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);let bt=nt.update(A),Nt=A.material;Nt.visible&&g.push(A,bt,Nt,q,Wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){let bt=nt.update(A),Nt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Wt.copy(bt.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){let Ft=bt.groups;for(let $t=0,Jt=Ft.length;$t<Jt;$t++){let Ht=Ft[$t],re=Nt[Ht.materialIndex];re&&re.visible&&g.push(A,bt,re,q,Wt.z,Ht)}}else Nt.visible&&g.push(A,bt,Nt,q,Wt.z,null)}}let dt=A.children;for(let bt=0,Nt=dt.length;bt<Nt;bt++)ma(dt[bt],O,q,Y)}function dh(A,O,q,Y){let z=A.opaque,dt=A.transmissive,bt=A.transparent;f.setupLightsView(q),it===!0&&ht.setGlobalState(v.clippingPlanes,q),Y&&mt.viewport(P.copy(Y)),z.length>0&&wr(z,O,q),dt.length>0&&wr(dt,O,q),bt.length>0&&wr(bt,O,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function fh(A,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Wn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?ir:Gn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let dt=f.state.transmissionRenderTarget[Y.id],bt=Y.viewport||P;dt.setSize(bt.z,bt.w);let Nt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(G),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),ot&&Gt.render(q);let Ft=v.toneMapping;v.toneMapping=ri;let $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),it===!0&&ht.setGlobalState(v.clippingPlanes,Y),wr(A,q,Y),I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ht=0,re=O.length;Ht<re;Ht++){let fe=O[Ht],me=fe.object,Xe=fe.geometry,oe=fe.material,kt=fe.group;if(oe.side===Bn&&me.layers.test(Y.layers)){let Pn=oe.side;oe.side=Ye,oe.needsUpdate=!0,ph(me,q,Y,Xe,oe,kt),oe.side=Pn,oe.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(dt),I.updateRenderTargetMipmap(dt))}v.setRenderTarget(Nt),v.setClearColor(G,Z),$t!==void 0&&(Y.viewport=$t),v.toneMapping=Ft}function wr(A,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,dt=A.length;z<dt;z++){let bt=A[z],Nt=bt.object,Ft=bt.geometry,$t=Y===null?bt.material:Y,Jt=bt.group;Nt.layers.test(q.layers)&&ph(Nt,O,q,Ft,$t,Jt)}}function ph(A,O,q,Y,z,dt){A.onBeforeRender(v,O,q,Y,z,dt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,O,q,Y,A,dt),z.transparent===!0&&z.side===Bn&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,v.renderBufferDirect(q,O,Y,z,A,dt),z.side=Sn,z.needsUpdate=!0,v.renderBufferDirect(q,O,Y,z,A,dt),z.side=Bn):v.renderBufferDirect(q,O,Y,z,A,dt),A.onAfterRender(v,O,q,Y,z,dt)}function Sr(A,O,q){O.isScene!==!0&&(O=ie);let Y=At.get(A),z=f.state.lights,dt=f.state.shadowsArray,bt=z.state.version,Nt=Lt.getParameters(A,z.state,dt,O,q),Ft=Lt.getProgramCacheKey(Nt),$t=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?W:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Zt),$t=new Map,Y.programs=$t);let Jt=$t.get(Ft);if(Jt!==void 0){if(Y.currentProgram===Jt&&Y.lightsStateVersion===bt)return gh(A,Nt),Jt}else Nt.uniforms=Lt.getUniforms(A),A.onBeforeCompile(Nt,v),Jt=Lt.acquireProgram(Nt,Ft),$t.set(Ft,Jt),Y.uniforms=Nt.uniforms;let Ht=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=ht.uniform),gh(A,Nt),Y.needsLights=hf(A),Y.lightsStateVersion=bt,Y.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Jt,Y.uniformsList=null,Jt}function mh(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=as.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function gh(A,O){let q=At.get(A);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function cf(A,O,q,Y,z){O.isScene!==!0&&(O=ie),I.resetTextureUnits();let dt=O.fog,bt=Y.isMeshStandardMaterial?O.environment:null,Nt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:xs,Ft=(Y.isMeshStandardMaterial?W:w).get(Y.envMap||bt),$t=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Jt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,fe=!!q.morphAttributes.color,me=ri;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=v.toneMapping);let Xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=Xe!==void 0?Xe.length:0,kt=At.get(Y),Pn=f.state.lights;if(it===!0&&(Mt===!0||A!==E)){let nn=A===E&&Y.id===S;ht.setState(Y,A,nn)}let ae=!1;Y.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Pn.state.version||kt.outputColorSpace!==Nt||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==Ft||Y.fog===!0&&kt.fog!==dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ht.numPlanes||kt.numIntersection!==ht.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==Jt||kt.morphTargets!==Ht||kt.morphNormals!==re||kt.morphColors!==fe||kt.toneMapping!==me||kt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,kt.__version=Y.version);let ln=kt.currentProgram;ae===!0&&(ln=Sr(Y,O,z));let zi=!1,Je=!1,Us=!1,ge=ln.getUniforms(),En=kt.uniforms;if(mt.useProgram(ln.program)&&(zi=!0,Je=!0,Us=!0),Y.id!==S&&(S=Y.id,Je=!0),zi||E!==A){mt.buffers.depth.getReversed()?(ft.copy(A.projectionMatrix),jf(ft),tp(ft),ge.setValue(U,"projectionMatrix",ft)):ge.setValue(U,"projectionMatrix",A.projectionMatrix),ge.setValue(U,"viewMatrix",A.matrixWorldInverse);let Zn=ge.map.cameraPosition;Zn!==void 0&&Zn.setValue(U,Yt.setFromMatrixPosition(A.matrixWorld)),It.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Je=!0,Us=!0)}if(z.isSkinnedMesh){ge.setOptional(U,z,"bindMatrix"),ge.setOptional(U,z,"bindMatrixInverse");let nn=z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ge.setValue(U,"boneTexture",nn.boneTexture,I))}z.isBatchedMesh&&(ge.setOptional(U,z,"batchingTexture"),ge.setValue(U,"batchingTexture",z._matricesTexture,I),ge.setOptional(U,z,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",z._indirectTexture,I),ge.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",z._colorsTexture,I));let Ns=q.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&qt.update(z,q,ln),(Je||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,ge.setValue(U,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(En.envMap.value=Ft,En.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),Je&&(ge.setValue(U,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&lf(En,Us),dt&&Y.fog===!0&&Et.refreshFogUniforms(En,dt),Et.refreshMaterialUniforms(En,Y,F,j,f.state.transmissionRenderTarget[A.id]),as.upload(U,mh(kt),En,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(as.upload(U,mh(kt),En,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(U,"center",z.center),ge.setValue(U,"modelViewMatrix",z.modelViewMatrix),ge.setValue(U,"normalMatrix",z.normalMatrix),ge.setValue(U,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let nn=Y.uniformsGroups;for(let Zn=0,Jn=nn.length;Zn<Jn;Zn++){let _h=nn[Zn];H.update(_h,ln),H.bind(_h,ln)}}return ln}function lf(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function hf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,O,q){At.get(A.texture).__webglTexture=O,At.get(A.depthTexture).__webglTexture=q;let Y=At.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let q=At.get(A);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,q=0){D=A,T=O,R=q;let Y=!0,z=null,dt=!1,bt=!1;if(A){let Ft=At.get(A);if(Ft.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Ft.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Ft.__hasExternalTextures)I.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ht=A.depthTexture;if(Ft.__boundDepthTexture!==Ht){if(Ht!==null&&At.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);let Jt=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[O])?z=Jt[O][q]:z=Jt[O],dt=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?z=At.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?z=Jt[q]:z=Jt,P.copy(A.viewport),V.copy(A.scissor),B=A.scissorTest}else P.copy(et).multiplyScalar(F).floor(),V.copy(xt).multiplyScalar(F).floor(),B=Ut;if(mt.bindFramebuffer(U.FRAMEBUFFER,z)&&Y&&mt.drawBuffers(A,z),mt.viewport(P),mt.scissor(V),mt.setScissorTest(B),dt){let Ft=At.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ft.__webglTexture,q)}else if(bt){let Ft=At.get(A.texture),$t=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ft.__webglTexture,q||0,$t)}S=-1},this.readRenderTargetPixels=function(A,O,q,Y,z,dt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){mt.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Ft=A.texture,$t=Ft.format,Jt=Ft.type;if(!It.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&q>=0&&q<=A.height-z&&U.readPixels(O,q,Y,z,jt.convert($t),jt.convert(Jt),dt)}finally{let Ft=D!==null?At.get(D).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,O,q,Y,z,dt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){let Ft=A.texture,$t=Ft.format,Jt=Ft.type;if(!It.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-Y&&q>=0&&q<=A.height-z){mt.bindFramebuffer(U.FRAMEBUFFER,Nt);let Ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(O,q,Y,z,jt.convert($t),jt.convert(Jt),0);let re=D!==null?At.get(D).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,re);let fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qf(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(Ht),U.deleteSync(fe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,q=0){A.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-q),z=Math.floor(A.image.width*Y),dt=Math.floor(A.image.height*Y),bt=O!==null?O.x:0,Nt=O!==null?O.y:0;I.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,bt,Nt,z,dt),mt.unbindTexture()},this.copyTextureToTexture=function(A,O,q=null,Y=null,z=0){A.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],O=arguments[2],z=arguments[3]||0,q=null);let dt,bt,Nt,Ft,$t,Jt,Ht,re,fe,me=A.isCompressedTexture?A.mipmaps[z]:A.image;q!==null?(dt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Ft=q.min.x,$t=q.min.y,Jt=q.isBox3?q.min.z:0):(dt=me.width,bt=me.height,Nt=me.depth||1,Ft=0,$t=0,Jt=0),Y!==null?(Ht=Y.x,re=Y.y,fe=Y.z):(Ht=0,re=0,fe=0);let Xe=jt.convert(O.format),oe=jt.convert(O.type),kt;O.isData3DTexture?(I.setTexture3D(O,0),kt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),kt=U.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Pn=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),zi=U.getParameter(U.UNPACK_SKIP_ROWS),Je=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),U.pixelStorei(U.UNPACK_SKIP_ROWS,$t),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jt);let Us=A.isDataArrayTexture||A.isData3DTexture,ge=O.isDataArrayTexture||O.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let En=At.get(A),Ns=At.get(O),nn=At.get(En.__renderTarget),Zn=At.get(Ns.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,nn.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Nt;Jn++)Us&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(A).__webglTexture,z,Jt+Jn),A.isDepthTexture?(ge&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(O).__webglTexture,z,fe+Jn),U.blitFramebuffer(Ft,$t,dt,bt,Ht,re,dt,bt,U.DEPTH_BUFFER_BIT,U.NEAREST)):ge?U.copyTexSubImage3D(kt,z,Ht,re,fe+Jn,Ft,$t,dt,bt):U.copyTexSubImage2D(kt,z,Ht,re,fe+Jn,Ft,$t,dt,bt);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(kt,z,Ht,re,fe,dt,bt,Nt,Xe,oe,me.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,z,Ht,re,fe,dt,bt,Nt,Xe,me.data):U.texSubImage3D(kt,z,Ht,re,fe,dt,bt,Nt,Xe,oe,me):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Ht,re,dt,bt,Xe,oe,me.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Ht,re,me.width,me.height,Xe,me.data):U.texSubImage2D(U.TEXTURE_2D,z,Ht,re,dt,bt,Xe,oe,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,zi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je),z===0&&O.generateMipmaps&&U.generateMipmap(kt),mt.unbindTexture()},this.copyTextureToTexture3D=function(A,O,q=null,Y=null,z=0){return A.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],O=arguments[3],z=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,q,Y,z)},this.initRenderTarget=function(A){At.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,mt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var xo=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ks=class extends Xn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new ue,jc=new $s,qr=new fs,Yr=new N,yo=class extends Ie{constructor(t=new Be,e=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;xu.copy(s).invert(),jc.copy(t.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=d,y=p;m<y;m++){let g=l.getX(m);Yr.fromBufferAttribute(u,g),yu(Yr,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,y=p;m<y;m++)Yr.fromBufferAttribute(u,m),yu(Yr,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,t,e,n,s,r,o){let a=jc.distanceSqToPoint(i);if(a<e){let c=new N;jc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ms=class extends tn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,c=new ue;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Oe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Oe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tl=class extends Qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $r=new N,qa=new Cl,Ya=new Cl,$a=new Cl,el=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),l=$r);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),qa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,y,g),Ya.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,y,g),$a.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(c),Ya.calc(c),$a.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function $_(i,t){let e=1-i;return e*e*t}function Z_(i,t){return 2*(1-i)*i*t}function J_(i,t){return i*i*t}function Ws(i,t,e,n){return $_(i,t)+Z_(i,e)+J_(i,n)}function K_(i,t){let e=1-i;return e*e*e*t}function Q_(i,t){let e=1-i;return 3*e*e*i*t}function j_(i,t){return 3*(1-i)*i*i*t}function tx(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return K_(i,t)+Q_(i,e)+j_(i,n)+tx(i,s)}var vo=class extends on{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nl=class extends on{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends on{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends on{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends on{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gs=class extends on{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vu(a,c.x,l.x,h.x,u.x),vu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:el,CubicBezierCurve:vo,CubicBezierCurve3:nl,EllipseCurve:Qs,LineCurve:Mo,LineCurve3:il,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:gs,SplineCurve:wo}),sl=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}},bo=class extends sl{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Qs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var To=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ci=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,y=[],g=n/2,f=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function b(){let v=new N,C=new N,T=0,R=(e-t)/n;for(let D=0;D<=r;D++){let S=[],E=D/r,P=E*(e-t)+t;for(let V=0;V<=s;V++){let B=V/s,G=B*c+a,Z=Math.sin(G),k=Math.cos(G);C.x=P*Z,C.y=-E*n+g,C.z=P*k,u.push(C.x,C.y,C.z),v.set(Z,R,k).normalize(),d.push(v.x,v.y,v.z),p.push(B,1-E),S.push(m++)}y.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let E=y[S][D],P=y[S+1][D],V=y[S+1][D+1],B=y[S][D+1];(t>0||S!==0)&&(h.push(E,P,B),T+=3),(e>0||S!==r-1)&&(h.push(P,V,B),T+=3)}l.addGroup(f,T,0),f+=T}function x(v){let C=m,T=new pt,R=new N,D=0,S=v===!0?t:e,E=v===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*E,0),d.push(0,E,0),p.push(.5,.5),m++;let P=m;for(let V=0;V<=s;V++){let G=V/s*c+a,Z=Math.cos(G),k=Math.sin(G);R.x=S*k,R.y=g*E,R.z=S*Z,u.push(R.x,R.y,R.z),d.push(0,E,0),T.x=Z*.5+.5,T.y=k*.5*E+.5,p.push(T.x,T.y),m++}for(let V=0;V<s;V++){let B=C+V,G=P+V;v===!0?h.push(G,G+1,B):h.push(G+1,G,B),D+=3}l.addGroup(f,D,v===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ro=class i extends ci{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gn=class extends bo{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new bo().fromJSON(s))}return this}},ex={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Qu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=ox(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return js(r,o,e,a,c,p,0),o}};function Qu(i,t,e,n,s){let r,o;if(s===_x(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Mu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mu(r,i[r],i[r+1],o);return o&&Oo(o,o.next)&&(er(o),o=o.next),o}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||ve(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ux(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ix(i,n,s,r):nx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),er(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=sx(Ai(i),t,e),js(i,t,e,n,s,r,2)):o===2&&rx(i,t,e,n,s,r):js(Ai(i),t,e,n,s,r,1);break}}}function nx(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&is(s,a,r,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ix(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,f=rl(p,m,t,e,n),b=rl(y,g,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=b;){if(x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&is(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&is(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&is(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&is(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oo(s,r)&&ju(s,n,n.next,r)&&tr(s,r)&&tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return Ai(n)}function rx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let c=td(o,a);o=Ai(o,o.next),c=Ai(c,c.next),js(o,t,e,n,s,r,0),js(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ox(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(fx(l));for(s.sort(ax),r=0;r<s.length;r++)e=cx(s[r],e);return e}function ax(i,t){return i.x-t.x}function cx(i,t){let e=lx(i,t);if(!e)return t;let n=td(e,i);return Ai(n,n.next),Ai(e,e.next)}function lx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&is(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),tr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&hx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function hx(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function ux(i,t,e,n){let s=i;do s.z===0&&(s.z=rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dx(s)}function dx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function px(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mx(i,t)&&(tr(i,t)&&tr(t,i)&&gx(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Oo(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oo(i,t){return i.x===t.x&&i.y===t.y}function ju(i,t,e,n){let s=Jr(ve(i,t,e)),r=Jr(ve(i,t,n)),o=Jr(ve(e,n,i)),a=Jr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Zr(i,e,t)||r===0&&Zr(i,n,t)||o===0&&Zr(e,i,n)||a===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function mx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ju(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function gx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){let e=new ol(i.i,i.x,i.y),n=new ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){let s=new ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _x(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),wu(n,t);let o=t.length;e.forEach(Eu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,wu(n,e[c]);let a=ex.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ao=class i extends Be{constructor(t=new gn([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:xx,x,v=!1,C,T,R,D;f&&(x=f.getSpacedPoints(h),v=!0,d=!1,C=f.computeFrenetFrames(h,!1),T=new N,R=new N,D=new N),d||(g=0,p=0,m=0,y=0);let S=a.extractPoints(l),E=S.shape,P=S.holes;if(!qs.isClockWise(E)){E=E.reverse();for(let ot=0,ut=P.length;ot<ut;ot++){let U=P[ot];qs.isClockWise(U)&&(P[ot]=U.reverse())}}let B=qs.triangulateShape(E,P),G=E;for(let ot=0,ut=P.length;ot<ut;ot++){let U=P[ot];E=E.concat(U)}function Z(ot,ut,U){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ut,U)}let k=E.length,j=B.length;function F(ot,ut,U){let Bt,lt,It,mt=ot.x-ut.x,Vt=ot.y-ut.y,At=U.x-ot.x,I=U.y-ot.y,w=mt*mt+Vt*Vt,W=mt*I-Vt*At;if(Math.abs(W)>Number.EPSILON){let tt=Math.sqrt(w),at=Math.sqrt(At*At+I*I),nt=ut.x-Vt/tt,Lt=ut.y+mt/tt,Et=U.x-I/at,Ct=U.y+At/at,ee=((Et-nt)*I-(Ct-Lt)*At)/(mt*I-Vt*At);Bt=nt+mt*ee-ot.x,lt=Lt+Vt*ee-ot.y;let ht=Bt*Bt+lt*lt;if(ht<=2)return new pt(Bt,lt);It=Math.sqrt(ht/2)}else{let tt=!1;mt>Number.EPSILON?At>Number.EPSILON&&(tt=!0):mt<-Number.EPSILON?At<-Number.EPSILON&&(tt=!0):Math.sign(Vt)===Math.sign(I)&&(tt=!0),tt?(Bt=-Vt,lt=mt,It=Math.sqrt(w)):(Bt=mt,lt=Vt,It=Math.sqrt(w/2))}return new pt(Bt/It,lt/It)}let st=[];for(let ot=0,ut=G.length,U=ut-1,Bt=ot+1;ot<ut;ot++,U++,Bt++)U===ut&&(U=0),Bt===ut&&(Bt=0),st[ot]=F(G[ot],G[U],G[Bt]);let ct=[],et,xt=st.concat();for(let ot=0,ut=P.length;ot<ut;ot++){let U=P[ot];et=[];for(let Bt=0,lt=U.length,It=lt-1,mt=Bt+1;Bt<lt;Bt++,It++,mt++)It===lt&&(It=0),mt===lt&&(mt=0),et[Bt]=F(U[Bt],U[It],U[mt]);ct.push(et),xt=xt.concat(et)}for(let ot=0;ot<g;ot++){let ut=ot/g,U=p*Math.cos(ut*Math.PI/2),Bt=m*Math.sin(ut*Math.PI/2)+y;for(let lt=0,It=G.length;lt<It;lt++){let mt=Z(G[lt],st[lt],Bt);ft(mt.x,mt.y,-U)}for(let lt=0,It=P.length;lt<It;lt++){let mt=P[lt];et=ct[lt];for(let Vt=0,At=mt.length;Vt<At;Vt++){let I=Z(mt[Vt],et[Vt],Bt);ft(I.x,I.y,-U)}}}let Ut=m+y;for(let ot=0;ot<k;ot++){let ut=d?Z(E[ot],xt[ot],Ut):E[ot];v?(R.copy(C.normals[0]).multiplyScalar(ut.x),T.copy(C.binormals[0]).multiplyScalar(ut.y),D.copy(x[0]).add(R).add(T),ft(D.x,D.y,D.z)):ft(ut.x,ut.y,0)}for(let ot=1;ot<=h;ot++)for(let ut=0;ut<k;ut++){let U=d?Z(E[ut],xt[ut],Ut):E[ut];v?(R.copy(C.normals[ot]).multiplyScalar(U.x),T.copy(C.binormals[ot]).multiplyScalar(U.y),D.copy(x[ot]).add(R).add(T),ft(D.x,D.y,D.z)):ft(U.x,U.y,u/h*ot)}for(let ot=g-1;ot>=0;ot--){let ut=ot/g,U=p*Math.cos(ut*Math.PI/2),Bt=m*Math.sin(ut*Math.PI/2)+y;for(let lt=0,It=G.length;lt<It;lt++){let mt=Z(G[lt],st[lt],Bt);ft(mt.x,mt.y,u+U)}for(let lt=0,It=P.length;lt<It;lt++){let mt=P[lt];et=ct[lt];for(let Vt=0,At=mt.length;Vt<At;Vt++){let I=Z(mt[Vt],et[Vt],Bt);v?ft(I.x,I.y+x[h-1].y,x[h-1].x+U):ft(I.x,I.y,u+U)}}}J(),it();function J(){let ot=s.length/3;if(d){let ut=0,U=k*ut;for(let Bt=0;Bt<j;Bt++){let lt=B[Bt];zt(lt[2]+U,lt[1]+U,lt[0]+U)}ut=h+g*2,U=k*ut;for(let Bt=0;Bt<j;Bt++){let lt=B[Bt];zt(lt[0]+U,lt[1]+U,lt[2]+U)}}else{for(let ut=0;ut<j;ut++){let U=B[ut];zt(U[2],U[1],U[0])}for(let ut=0;ut<j;ut++){let U=B[ut];zt(U[0]+k*h,U[1]+k*h,U[2]+k*h)}}n.addGroup(ot,s.length/3-ot,0)}function it(){let ot=s.length/3,ut=0;Mt(G,ut),ut+=G.length;for(let U=0,Bt=P.length;U<Bt;U++){let lt=P[U];Mt(lt,ut),ut+=lt.length}n.addGroup(ot,s.length/3-ot,1)}function Mt(ot,ut){let U=ot.length;for(;--U>=0;){let Bt=U,lt=U-1;lt<0&&(lt=ot.length-1);for(let It=0,mt=h+g*2;It<mt;It++){let Vt=k*It,At=k*(It+1),I=ut+Bt+Vt,w=ut+lt+Vt,W=ut+lt+At,tt=ut+Bt+At;Yt(I,w,W,tt)}}}function ft(ot,ut,U){c.push(ot),c.push(ut),c.push(U)}function zt(ot,ut,U){Wt(ot),Wt(ut),Wt(U);let Bt=s.length/3,lt=b.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);ie(lt[0]),ie(lt[1]),ie(lt[2])}function Yt(ot,ut,U,Bt){Wt(ot),Wt(ut),Wt(Bt),Wt(ut),Wt(U),Wt(Bt);let lt=s.length/3,It=b.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);ie(It[0]),ie(It[1]),ie(It[3]),ie(It[1]),ie(It[2]),ie(It[3])}function Wt(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function ie(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,t.options)}},xx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(d,1-m),new pt(y,1-f)]:[new pt(a,1-c),new pt(h,1-u),new pt(p,1-m),new pt(g,1-f)]}};function yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _n=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,p=[],m=[],y=[],g=[];for(let f=0;f<=n;f++){let b=[],x=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(T+v,1-x),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let x=h[f][b+1],v=h[f][b],C=h[f+1][b],T=h[f+1][b+1];(f!==0||o>0)&&p.push(x,v,T),(f!==n-1||c<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let y=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let y=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,b=(s+1)*p+m;o.push(y,g,b),o.push(g,f,b)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Co=class i extends Be{constructor(t=new gs(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new pt,h=new N,u=[],d=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function y(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),b(),f()}function g(x){h=t.getPointAt(x/e,h);let v=o.normals[x],C=o.binormals[x];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,D=Math.sin(R),S=-Math.cos(R);c.x=S*v.x+D*C.x,c.y=S*v.y+D*C.y,c.z=S*v.z+D*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){let C=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),R=(s+1)*x+v,D=(s+1)*(x-1)+v;m.push(C,T,D),m.push(T,R,D)}}function b(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Io=class extends Xn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Ci=class extends Xn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends _s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=t,a=2*e-n;break;case Sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wh:o=t,c=2*n-e;break;case Sh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),y=m*m,g=y*m,f=-d*g+2*d*y-d*m,b=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,x=(-1-p)*g+(1.5+p)*y+.5*m,v=p*g-p*y;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+b*o[l+C]+x*o[c+C]+v*o[u+C];return r}},cl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ll=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Kr(e,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Kr(t.times,Array),values:Kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case Nc:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return Nc;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&vx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Nc;var Ii=class extends xn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=io;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends xn{};hl.prototype.ValueTypeName="color";var ul=class extends xn{};ul.prototype.ValueTypeName="number";var dl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Po=class extends xn{InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends xn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=io;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends xn{};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Mx=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Lo=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Za=new ue,Su=new N,bu=new N,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _l=class extends gl{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Il="\\[\\]\\.:\\/",Ex=new RegExp("["+Il+"]","g"),Pl="[^"+Il+"]",wx="[^"+Il.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Pl),bx=/(WCOD+)?/.source.replace("WCOD",wx),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),Ax=new RegExp("^"+Sx+bx+Tx+Rx+"$"),Cx=["material","materials","bones","map"],xl=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(t){let e=Ax.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=xl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var Tu=new ue,Uo=class{constructor(t,e,n=0,s=1/0){this.ray=new $s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(Ru),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yl(t[s],this,n,e);return n.sort(Ru),n}};function Ru(i,t){return i.distance-t.distance}function yl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)yl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Bo=class extends Ie{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new pt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ms=new N,ed=new ue,nd=new ue,id=new N,sd=new N,ko=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(m,y){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ed.copy(y.matrixWorldInverse),nd.multiplyMatrices(y.projectionMatrix,ed),h(m,m,y),p(m)},this.setSize=function(m,y){n=m,s=y,r=n/2,o=s/2,c.style.width=m+"px",c.style.height=y+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let y=0,g=m.children.length;y<g;y++)l(m.children[y])}function h(m,y,g){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){Ms.setFromMatrixPosition(m.matrixWorld),Ms.applyMatrix4(nd);let f=Ms.z>=-1&&Ms.z<=1&&m.layers.test(g.layers)===!0,b=m.element;b.style.display=f===!0?"":"none",f===!0&&(m.onBeforeRender(e,y,g),b.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Ms.x*r+r)+"px,"+(-Ms.y*o+o)+"px)",b.parentNode!==c&&c.appendChild(b),m.onAfterRender(e,y,g));let x={distanceToCameraSquared:u(g,m)};a.objects.set(m,x)}for(let f=0,b=m.children.length;f<b;f++)h(m.children[f],y,g)}function u(m,y){return id.setFromMatrixPosition(m.matrixWorld),sd.setFromMatrixPosition(y.matrixWorld),id.distanceToSquared(sd)}function d(m){let y=[];return m.traverseVisible(function(g){g.isCSS2DObject&&y.push(g)}),y}function p(m){let y=d(m).sort(function(f,b){if(f.renderOrder!==b.renderOrder)return b.renderOrder-f.renderOrder;let x=a.objects.get(f).distanceToCameraSquared,v=a.objects.get(b).distanceToCameraSquared;return x-v}),g=y.length;for(let f=0,b=y.length;f<b;f++)y[f].element.style.zIndex=g-f}}};var sr=new N;function an(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;sr.copy(t),sr[n]=0,sr.normalize();let l=.5*o/(o+a),h=1-sr.angleTo(i)/c;return Math.sign(sr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Rn=class extends ai{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,c=new N,l=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,m=new N,y=.5/s;for(let g=0,f=0;g<h.length;g+=3,f+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[f+0]=an(m,c,"z","y",r,n),d[f+1]=1-an(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[f+0]=1-an(m,c,"z","y",r,n),d[f+1]=1-an(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[f+0]=1-an(m,c,"x","z",r,t),d[f+1]=an(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[f+0]=1-an(m,c,"x","z",r,t),d[f+1]=1-an(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[f+0]=1-an(m,c,"x","y",r,t),d[f+1]=1-an(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[f+0]=an(m,c,"x","y",r,t),d[f+1]=1-an(m,c,"y","x",r,e);break}}};var rr={};function or(i,t){return rr[i]||(rr[i]=t())}function li(i,t={}){return new Ci({color:i,roughness:.55,metalness:.12,...t})}function zo(i,t){let e=new Xt(i),n={};return e.getHSL(n),e.setHSL(n.h,Math.min(1,n.s*1.05),Math.min(.92,Math.max(.08,n.l+t))),e.getHex()}function M(i,t,e=!0){return t.castShadow=e,t.receiveShadow=!0,i.add(t),t}function L(i,t,e,n=.08,s=3){return or(`rbx_${i}_${t}_${e}_${n}`,()=>new Rn(i,t,e,s,n))}function Ot(i,t,e,n=24){return or(`cyl_${i}_${t}_${e}_${n}`,()=>new ci(i,t,e,n))}function vt(i,t=24,e=16){return or(`sph_${i}_${t}_${e}`,()=>new _n(i,t,e))}function _e(i,t,e=12,n=32){return or(`tor_${i}_${t}`,()=>new Tn(i,t,e,n))}function be(i,t,e=20){return or(`cone_${i}_${t}`,()=>new Ro(i,t,e))}function hi(i,t=.12,e=.03){let n="ex_"+i.uuid+t+e;if(rr[n])return rr[n];let s=new Ao(i,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e*.85,bevelOffset:0,bevelSegments:2,curveSegments:12});return s.center(),rr[n]=s}function Q(i){return{main:li(i),lite:li(zo(i,.22)),dark:li(zo(i,-.22)),accent:li(zo(i,.32),{roughness:.4,metalness:.22}),gloss:li(zo(i,.12),{roughness:.35,metalness:.28})}}var $={};$.clipboard=i=>{let t=new X,e=Q(i);M(t,new _(L(.72,.95,.12,.06),e.main)),M(t,new _(L(.32,.16,.14,.04),e.lite)).position.set(0,.48,.02);for(let n=0;n<3;n++){let s=.22-n*.22;M(t,new _(L(.12,.12,.06,.03),e.accent)).position.set(-.2,s,.08),M(t,new _(L(.36,.06,.05,.02),e.dark)).position.set(.08,s,.08)}return t};$.speech=i=>{let t=new X,e=Q(i);M(t,new _(L(.7,.48,.18,.12),e.main)).position.y=.08;let n=M(t,new _(be(.14,.28,16),e.main));return n.rotation.z=Math.PI,n.position.set(-.12,-.28,0),M(t,new _(vt(.05,12,8),e.accent)).position.set(-.16,.1,.12),M(t,new _(vt(.05,12,8),e.accent)).position.set(0,.1,.12),M(t,new _(vt(.05,12,8),e.accent)).position.set(.16,.1,.12),t};$.document=i=>{let t=new X,e=Q(i);M(t,new _(L(.62,.85,.1,.05),e.main)),M(t,new _(L(.18,.18,.08,.02),e.lite)).position.set(.2,.32,.04);for(let n=0;n<4;n++)M(t,new _(L(.4-n%2*.1,.05,.04,.02),e.dark)).position.set(-.02,.15-n*.16,.07);return t};$.checkbadge=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.46,.46,.16,36),e.main)),M(t,new _(Ot(.34,.34,.1,32),e.lite)).position.y=.1,M(t,new _(Ot(.46,.46,.05,36),e.dark)).position.y=-.1;let n=M(t,new _(L(.11,.3,.1,.03),e.accent));n.rotation.z=.55,n.position.set(-.08,-.02,.16);let s=M(t,new _(L(.11,.44,.1,.03),e.accent));return s.rotation.z=-.72,s.position.set(.12,.04,.16),M(t,new _(L(.12,.28,.06,.02),e.gloss)).position.set(-.12,-.48,0),M(t,new _(L(.12,.28,.06,.02),e.dark)).position.set(.12,-.48,0),t};$.search=i=>{let t=new X,e=Q(i);M(t,new _(L(.5,.65,.1,.04),e.lite)).position.set(-.32,.02,-.14);for(let s=0;s<3;s++)M(t,new _(L(.08,.08,.05,.02),e.accent)).position.set(-.48,.2-s*.18,-.06),M(t,new _(L(.28,.06,.05,.02),e.dark)).position.set(-.22,.2-s*.18,-.06);M(t,new _(_e(.26,.11,16,36),e.main)).position.set(.18,.16,.1),M(t,new _(Ot(.16,.16,.07,24),e.gloss)).position.set(.18,.16,.12);let n=M(t,new _(L(.16,.62,.16,.05),e.dark));return n.rotation.z=-.65,n.position.set(.5,-.3,.1),M(t,new _(vt(.1,12,8),e.accent)).position.set(.68,-.52,.1),t};$.magnifier=$.search;$.manage=i=>{let t=new X,e=Q(i);M(t,new _(L(1,.78,.16,.06),e.main)),M(t,new _(L(1.02,.1,.18,.03),e.dark)).position.y=.4;for(let n=0;n<3;n++){let s=-.32+n*.32;M(t,new _(L(.26,.58,.08,.03),e.dark)).position.set(s,-.02,.1),M(t,new _(L(.2,.06,.06,.02),e.gloss)).position.set(s,.28,.16);for(let r=0;r<2;r++)M(t,new _(L(.2,.14,.08,.03),r?e.accent:e.lite)).position.set(s,.1-r*.22,.18)}return t};$.lightbulb=i=>{let t=new X,e=Q(i);return M(t,new _(vt(.34,28,20),e.main)).position.y=.16,M(t,new _(vt(.18,16,12),e.accent)).position.set(.12,.28,.22),M(t,new _(Ot(.15,.2,.2,16),e.dark)).position.y=-.22,M(t,new _(L(.24,.1,.16,.03),e.lite)).position.y=-.36,M(t,new _(L(.18,.06,.12,.02),e.gloss)).position.y=-.44,t};$.toolbox=i=>{let t=new X,e=Q(i);M(t,new _(L(.95,.5,.62,.08),e.main)).position.y=-.04,M(t,new _(L(1,.16,.66,.05),e.dark)).position.y=.26;let n=M(t,new _(_e(.22,.06,12,28),e.gloss));n.rotation.x=Math.PI/2,n.position.y=.46,M(t,new _(L(.18,.12,.1,.03),e.accent)).position.set(0,.16,.34);let s=M(t,new _(L(.1,.48,.1,.03),e.lite));s.rotation.z=.4,s.position.set(-.26,.44,.05),M(t,new _(L(.3,.14,.16,.04),e.accent)).position.set(-.38,.62,.05);let r=M(t,new _(Ot(.04,.04,.42,10),e.gloss));return r.rotation.z=-.35,r.position.set(.22,.48,.08),M(t,new _(L(.12,.08,.08,.02),e.lite)).position.set(.34,.64,.08),t};$.building=i=>{let t=new X,e=Q(i);M(t,new _(L(.7,.85,.5,.05),e.main)).position.y=.05;for(let n of[-.22,0,.22])M(t,new _(Ot(.06,.06,.7,12),e.lite)).position.set(n,.05,.28);M(t,new _(L(.78,.1,.55,.03),e.accent)).position.y=.52;for(let n=0;n<2;n++)for(let s=0;s<2;s++)M(t,new _(L(.14,.14,.04,.02),e.dark)).position.set(-.14+s*.28,.2-n*.28,.26);return t};$.layers=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=M(t,new _(L(.75-n*.08,.16,.55-n*.06,.05),n===1?e.lite:n===2?e.accent:e.main));s.position.y=-.22+n*.22}return t};$.process=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=-.38+n*.38;M(t,new _(Ot(.2,.2,.22,24),n===1?e.lite:e.main)).position.set(s,0,0),M(t,new _(Ot(.12,.12,.08,16),e.accent)).position.set(s,.14,0)}for(let n of[-.19,.19]){let s=M(t,new _(be(.1,.18,12),e.gloss));s.rotation.z=-Math.PI/2,s.position.set(n,.02,.12)}return M(t,new _(L(.9,.08,.35,.03),e.dark)).position.y=-.28,t};$.evaluate=i=>{let t=new X,e=Q(i);M(t,new _(L(.78,.62,.14,.06),e.main));for(let n=0;n<4;n++){let s=.16+n*.1;M(t,new _(L(.1,s,.1,.03),n===3?e.accent:e.lite)).position.set(-.24+n*.16,-.18+s/2,.12)}return M(t,new _(vt(.09,12,8),e.gloss)).position.set(.28,.2,.14),t};$.blueprint=i=>{let t=new X,e=Q(i);M(t,new _(L(.85,.65,.08,.04),e.main));for(let n=0;n<3;n++)M(t,new _(L(.7,.03,.04,.01),e.dark)).position.set(0,.18-n*.16,.06),M(t,new _(L(.03,.5,.04,.01),e.dark)).position.set(-.22+n*.22,0,.06);return t};$.compass=i=>{let t=new X,e=Q(i);M(t,new _(vt(.1,16,12),e.lite));let n=M(t,new _(be(.1,.7,16),e.main));n.position.set(.22,.22,0),n.rotation.z=-.7;let s=M(t,new _(be(.1,.7,16),e.dark));return s.position.set(-.22,.22,0),s.rotation.z=.7,t};$.star=i=>{let t=new X,e=Q(i),n=new gn;for(let s=0;s<5;s++){let r=s*2*Math.PI/5-Math.PI/2,o=r+Math.PI/5,a=.42,c=.18;n[s===0?"moveTo":"lineTo"](Math.cos(r)*a,Math.sin(r)*a),n.lineTo(Math.cos(o)*c,Math.sin(o)*c)}return n.closePath(),M(t,new _(hi(n,.14,.04),e.main)),t};$.brackets=i=>{let t=new X,e=Q(i),n=new gn;n.moveTo(.15,.4),n.lineTo(-.25,0),n.lineTo(.15,-.4),n.lineTo(.28,-.28),n.lineTo(-.05,0),n.lineTo(.28,.28),n.closePath();let s=M(t,new _(hi(n,.16,.03),e.main));s.position.x=-.28;let r=n.clone(),o=M(t,new _(hi(r,.16,.03),e.lite));return o.scale.x=-1,o.position.x=.28,M(t,new _(L(.2,.1,.12,.03),e.accent)).position.y=-.05,t};$.code=i=>{let t=new X,e=Q(i);M(t,new _(L(.8,.55,.14,.06),e.main));for(let n=0;n<3;n++)M(t,new _(L(.35+n%2*.15,.07,.06,.02),e.accent)).position.set(-.08,.14-n*.14,.1);return t};$.pyramid=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=.85-n*.22;M(t,new _(L(s,.2,s*.7,.04),n===2?e.accent:n===1?e.lite:e.main)).position.y=-.28+n*.24}return t};$.flask=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.42,.42,.12,32),e.main)),M(t,new _(Ot(.3,.3,.1,28),e.lite)).position.y=.06,M(t,new _(Ot(.16,.16,.1,24),e.accent)).position.y=.1,M(t,new _(vt(.08,12,8),e.dark)).position.set(0,.16,.02),t};$.target=$.flask;$.gauge=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.42,.42,.14,32),e.main)),M(t,new _(Ot(.32,.32,.08,28),e.lite)).position.y=.08;let n=M(t,new _(L(.08,.32,.06,.02),e.accent));return n.position.set(.05,.12,.12),n.rotation.z=-.6,M(t,new _(vt(.07,12,8),e.dark)).position.set(0,.08,.14),t};$.server=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=.28-n*.28;M(t,new _(L(.8,.22,.45,.04),e.main)).position.y=s,M(t,new _(vt(.05,10,8),e.accent)).position.set(.28,s,.26),M(t,new _(L(.35,.04,.04,.01),e.dark)).position.set(-.1,s,.26)}M(t,new _(Ot(.16,.16,.1,16),e.lite)).position.set(.42,.35,.2);for(let n=0;n<6;n++){let s=n/6*Math.PI*2;M(t,new _(L(.07,.12,.06,.02),e.dark)).position.set(.42+Math.cos(s)*.18,.35+Math.sin(s)*.18,.22)}return t};$.rocket=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.18,.22,.55,20),e.main)).position.y=.05,M(t,new _(be(.18,.32,16),e.accent)).position.y=.48;for(let n of[-1,1])M(t,new _(L(.08,.28,.22,.02),e.dark)).position.set(n*.22,-.2,0);return M(t,new _(be(.12,.2,12),e.lite)).position.y=-.4,t.children[t.children.length-1].rotation.x=Math.PI,t};$.plan=i=>{let t=new X,e=Q(i);return M(t,new _(L(.75,.7,.1,.05),e.main)),M(t,new _(L(.55,.08,.06,.02),e.accent)).position.set(0,.2,.08),M(t,new _(L(.4,.08,.06,.02),e.dark)).position.set(-.05,0,.08),M(t,new _(L(.48,.08,.06,.02),e.lite)).position.set(0,-.2,.08),t};$.control=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.5,.2,.06),e.main)),M(t,new _(Ot(.12,.12,.1,16),e.accent)).position.set(-.18,.05,.12),M(t,new _(Ot(.12,.12,.1,16),e.lite)).position.set(.18,.05,.12),M(t,new _(L(.35,.08,.08,.03),e.dark)).position.set(0,-.14,.12),t};$.wrench=i=>{let t=new X,e=Q(i),n=M(t,new _(L(.14,.75,.14,.05),e.main));return n.rotation.z=.5,M(t,new _(_e(.18,.07,10,20),e.dark)).position.set(-.28,.32,0),M(t,new _(L(.28,.14,.14,.04),e.lite)).position.set(.28,-.32,0),t};$.keyIssues=i=>{let t=new X,e=Q(i),n=new gn;return n.moveTo(0,.48),n.lineTo(.48,-.38),n.lineTo(-.48,-.38),n.closePath(),M(t,new _(hi(n,.14,.04),e.main)),M(t,new _(L(.1,.28,.08,.03),e.dark)).position.set(0,.02,.12),M(t,new _(vt(.07,10,8),e.accent)).position.set(0,-.22,.12),t};$.techniques=i=>{let t=new X,e=Q(i),n=M(t,new _(L(.12,.7,.12,.04),e.main));n.rotation.z=.55,M(t,new _(_e(.14,.06,10,18),e.dark)).position.set(-.26,.28,0);let s=M(t,new _(Ot(.05,.05,.65,10),e.lite));return s.rotation.z=-.55,s.position.set(.08,0,.05),M(t,new _(L(.14,.12,.1,.03),e.accent)).position.set(.32,-.28,.05),M(t,new _(Ot(.16,.16,.1,14),e.gloss)).position.set(.05,.05,.18),t};$.gitbranch=i=>{let t=new X,e=Q(i);M(t,new _(vt(.12,14,10),e.main)).position.set(0,-.32,0),M(t,new _(vt(.12,14,10),e.lite)).position.set(0,.05,0),M(t,new _(vt(.12,14,10),e.accent)).position.set(.28,.35,0),M(t,new _(L(.08,.4,.08,.03),e.dark)).position.set(0,-.14,0);let n=M(t,new _(L(.08,.35,.08,.03),e.dark));return n.rotation.z=-.7,n.position.set(.14,.2,0),t};$.idtag=i=>{let t=new X,e=Q(i);return M(t,new _(L(.55,.7,.1,.06),e.main)),M(t,new _(_e(.08,.035,8,16),e.lite)).position.set(0,.4,.02),M(t,new _(L(.3,.08,.05,.02),e.accent)).position.set(0,.05,.08),M(t,new _(L(.22,.08,.05,.02),e.dark)).position.set(0,-.15,.08),t};$.gate=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.12,.12,.85,16),e.dark)).position.y=0,M(t,new _(vt(.14,14,10),li(15158332))).position.set(0,.28,.1),M(t,new _(vt(.14,14,10),li(15844367))).position.set(0,0,.1),M(t,new _(vt(.14,14,10),li(3066993))).position.set(0,-.28,.1),t};$.status=i=>{let t=new X,e=Q(i);M(t,new _(L(.75,.55,.12,.05),e.main));for(let n=0;n<3;n++)M(t,new _(vt(.08,10,8),n===0?e.accent:e.lite)).position.set(-.22+n*.22,.08,.1),M(t,new _(L(.35,.05,.04,.02),e.dark)).position.set(.05,-.05-n*.12,.1);return t};$.audit=i=>{let t=new X,e=Q(i);M(t,new _(L(.65,.8,.1,.05),e.main)),M(t,new _(_e(.18,.05,10,20),e.accent)).position.set(.08,-.1,.1);let n=M(t,new _(L(.08,.25,.06,.02),e.dark));return n.rotation.z=-.6,n.position.set(.28,-.28,.1),t};$.package=i=>{let t=new X,e=Q(i);M(t,new _(L(.7,.55,.55,.05),e.main)),M(t,new _(L(.12,.58,.58,.02),e.accent)).position.set(0,0,0),M(t,new _(L(.72,.12,.58,.02),e.lite)).position.y=.05;let n=M(t,new _(be(.12,.25,12),e.dark));return n.position.set(.45,.35,0),n.rotation.z=-Math.PI/2,t};$.gantt=i=>{let t=new X,e=Q(i);M(t,new _(L(.85,.7,.1,.05),e.main));let n=[.5,.35,.55];for(let s=0;s<3;s++)M(t,new _(L(n[s],.12,.08,.03),s===1?e.accent:e.lite)).position.set(-.12+(.5-n[s])/2,.18-s*.2,.08);return t};$.scope=i=>{let t=new X,e=Q(i);return M(t,new _(_e(.35,.08,12,28),e.main)),M(t,new _(vt(.14,16,12),e.accent)),t};$.execute=i=>{let t=new X,e=Q(i),n=new gn;return n.moveTo(-.15,-.35),n.lineTo(.4,0),n.lineTo(-.15,.35),n.closePath(),M(t,new _(hi(n,.16,.04),e.main)),t};$.review=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.55,.12,.05),e.main)),M(t,new _(vt(.12,12,8),e.lite)).position.set(-.18,.05,.1),M(t,new _(vt(.12,12,8),e.accent)).position.set(.05,.05,.1),M(t,new _(L(.4,.08,.06,.02),e.dark)).position.set(0,-.16,.1),t};$.closure=i=>{let t=new X,e=Q(i);return M(t,new _(L(.65,.45,.35,.05),e.main)),M(t,new _(L(.7,.1,.4,.03),e.dark)).position.y=.22,M(t,new _(_e(.1,.04,8,14),e.accent)).position.set(0,.32,.05),t};$.cycle=i=>{let t=new X,e=Q(i);M(t,new _(_e(.35,.09,12,36),e.main));let n=M(t,new _(be(.12,.22,12),e.accent));n.position.set(.35,.1,0),n.rotation.z=-1.2;let s=M(t,new _(be(.12,.22,12),e.lite));return s.position.set(-.35,-.1,0),s.rotation.z=1.9,t};$.lifecycle=i=>{let t=new X,e=Q(i);for(let n=0;n<4;n++){let s=n/4*Math.PI*2-Math.PI/2;M(t,new _(vt(.12,12,8),n%2?e.accent:e.main)).position.set(Math.cos(s)*.32,Math.sin(s)*.32,0)}return M(t,new _(_e(.32,.04,8,28),e.dark)),t};$.improve=i=>{let t=new X,e=Q(i);for(let s=0;s<3;s++)M(t,new _(L(.22,.2+s*.18,.3,.04),s===2?e.accent:e.main)).position.set(-.25+s*.25,-.2+s*.09,0);let n=M(t,new _(be(.1,.22,12),e.lite));return n.position.set(.35,.35,0),n.rotation.z=-.5,t};$.model=i=>{let t=new X,e=Q(i);return M(t,new _(L(.35,.28,.18,.05),e.main)).position.set(0,.28,0),M(t,new _(L(.3,.25,.16,.04),e.lite)).position.set(-.28,-.2,0),M(t,new _(L(.3,.25,.16,.04),e.accent)).position.set(.28,-.2,0),M(t,new _(L(.06,.25,.06,.02),e.dark)).position.set(-.14,.05,0),M(t,new _(L(.06,.25,.06,.02),e.dark)).position.set(.14,.05,0),t};$.uml=i=>{let t=new X,e=Q(i);return M(t,new _(L(.48,.4,.16,.04),e.main)).position.set(-.22,.18,0),M(t,new _(L(.48,.12,.1,.02),e.accent)).position.set(-.22,.32,.1),M(t,new _(L(.48,.4,.16,.04),e.lite)).position.set(.22,-.18,0),M(t,new _(L(.48,.12,.1,.02),e.accent)).position.set(.22,-.04,.1),M(t,new _(L(.08,.28,.08,.02),e.dark)).position.set(0,0,0),t};$.methods=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.2,.2,.05),e.main)).position.y=.25,M(t,new _(L(.55,.2,.2,.05),e.lite)),M(t,new _(L(.4,.2,.2,.05),e.accent)).position.y=-.25,t};$.medal=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.32,.32,.14,28),e.main)).position.y=-.1,M(t,new _(Ot(.22,.22,.08,24),e.accent)).position.y=-.02,M(t,new _(L(.14,.4,.08,.02),e.lite)).position.set(-.1,.35,0),M(t,new _(L(.14,.4,.08,.02),e.dark)).position.set(.1,.35,0),t};$.shield=i=>{let t=new X,e=Q(i),n=new gn;return n.moveTo(0,.45),n.lineTo(.38,.28),n.lineTo(.35,-.1),n.quadraticCurveTo(.3,-.4,0,-.5),n.quadraticCurveTo(-.3,-.4,-.35,-.1),n.lineTo(-.38,.28),n.closePath(),M(t,new _(hi(n,.16,.04),e.main)),M(t,new _(vt(.1,12,8),e.dark)).position.set(0,.05,.12),M(t,new _(L(.06,.16,.06,.02),e.dark)).position.set(0,-.1,.12),t};$.lock=i=>{let t=new X,e=Q(i);M(t,new _(L(.55,.45,.35,.06),e.main)).position.y=-.12;let n=M(t,new _(_e(.18,.07,10,20),e.dark));return n.position.y=.2,M(t,new _(Ot(.07,.07,.12,12),e.accent)).position.set(0,-.05,.2),t};$.org=i=>{let t=new X,e=Q(i),n=new gn;return n.moveTo(0,.42),n.lineTo(.32,.26),n.lineTo(.28,-.05),n.quadraticCurveTo(.22,-.32,0,-.4),n.quadraticCurveTo(-.22,-.32,-.28,-.05),n.lineTo(-.32,.26),n.closePath(),M(t,new _(hi(n,.12,.03),e.main)).position.y=.08,M(t,new _(vt(.1,12,8),e.accent)).position.set(0,.18,.12),M(t,new _(L(.22,.16,.1,.03),e.lite)).position.set(0,-.02,.12),M(t,new _(vt(.09,10,8),e.dark)).position.set(-.28,-.28,.05),M(t,new _(vt(.09,10,8),e.dark)).position.set(.28,-.28,.05),t};$.domain=i=>{let t=new X,e=Q(i);return M(t,new _(vt(.38,28,20),e.main)),M(t,new _(_e(.4,.03,8,32),e.dark)).rotation.x=Math.PI/2,M(t,new _(_e(.4,.03,8,32),e.lite)).rotation.y=Math.PI/2,M(t,new _(L(.28,.22,.16,.04),e.accent)).position.set(.28,-.22,.28),M(t,new _(_e(.1,.04,8,16),e.dark)).position.set(.28,-.05,.28),t};$.handshake=i=>{let t=new X,e=Q(i);return M(t,new _(L(.35,.2,.25,.06),e.main)).position.set(-.2,0,0),M(t,new _(L(.35,.2,.25,.06),e.lite)).position.set(.2,0,0),M(t,new _(L(.55,.18,.28,.06),e.accent)).position.set(0,.02,.05),t};$.certificate=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.55,.1,.04),e.main)),M(t,new _(Ot(.12,.12,.08,20),e.accent)).position.set(0,-.05,.08),M(t,new _(L(.4,.06,.05,.02),e.dark)).position.set(0,.15,.08),t};$.people=i=>{let t=new X,e=Q(i);for(let[n,s]of[[-.25,e.main],[0,e.accent],[.25,e.lite]])M(t,new _(vt(.12,12,8),s)).position.set(n,.22,0),M(t,new _(L(.2,.3,.16,.06),s)).position.set(n,-.08,0);return t};$.chat=i=>{let t=new X,e=Q(i);return M(t,new _(L(.55,.35,.16,.1),e.main)).position.set(-.1,.12,0),M(t,new _(L(.5,.32,.14,.1),e.lite)).position.set(.15,-.18,.05),t};$.coins=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++)M(t,new _(Ot(.28-n*.02,.28-n*.02,.1,28),n===2?e.accent:e.main)).position.y=-.2+n*.12;return M(t,new _(L(.1,.25,.1,.02),e.lite)).position.set(.4,-.1,0),M(t,new _(L(.1,.4,.1,.02),e.dark)).position.set(.55,-.02,0),t};$.decide=i=>{let t=new X,e=Q(i),n=new gn;return n.moveTo(0,.45),n.lineTo(.4,0),n.lineTo(0,-.45),n.lineTo(-.4,0),n.closePath(),M(t,new _(hi(n,.14,.04),e.main)),t};$.profit=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++)M(t,new _(L(.18,.25+n*.18,.18,.04),n===2?e.accent:e.main)).position.set(-.25+n*.25,-.15+n*.09,0);return t};$.nonprofit=i=>{let t=new X,e=Q(i);M(t,new _(vt(.22,16,12),e.main)).position.set(-.14,.12,0),M(t,new _(vt(.22,16,12),e.main)).position.set(.14,.12,0);let n=M(t,new _(be(.32,.45,16),e.lite));return n.rotation.x=Math.PI,n.position.y=-.15,t};$.present=i=>{let t=new X,e=Q(i);return M(t,new _(L(.55,.12,.4,.03),e.dark)).position.y=-.2,M(t,new _(vt(.2,16,12),e.accent)).position.set(-.1,.05,0),M(t,new _(L(.12,.35,.12,.03),e.lite)).position.set(.2,.05,0),t};$.multiattr=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=n/3*Math.PI*2;M(t,new _(L(.28,.2,.16,.04),n===0?e.accent:e.main)).position.set(Math.cos(s)*.28,Math.sin(s)*.28,0)}return t};$.intangible=i=>{let t=new X,e=Q(i),n=M(t,new _(be(.38,.28,6),e.main));n.position.y=.22;let s=M(t,new _(be(.38,.5,6),e.lite));return s.rotation.x=Math.PI,s.position.y=-.08,M(t,new _(vt(.1,12,8),e.accent)).position.set(.12,.1,.22),t};$.calculator=i=>{let t=new X,e=Q(i);M(t,new _(L(.55,.75,.12,.05),e.main)),M(t,new _(L(.4,.16,.06,.02),e.lite)).position.set(0,.22,.08);for(let n=0;n<2;n++)for(let s=0;s<3;s++)M(t,new _(L(.1,.1,.05,.02),e.accent)).position.set(-.15+s*.15,.02-n*.16,.08);return t};$.related=i=>{let t=new X,e=Q(i),n=M(t,new _(_e(.2,.07,12,24),e.main));n.rotation.y=.4,n.position.set(-.18,0,0);let s=M(t,new _(_e(.2,.07,12,24),e.accent));return s.rotation.y=-.4,s.position.set(.18,0,0),M(t,new _(vt(.08,10,8),e.lite)).position.set(0,.05,.12),t};$.chip=i=>{let t=new X,e=Q(i);M(t,new _(L(.55,.55,.14,.05),e.main)),M(t,new _(L(.3,.3,.1,.03),e.accent)).position.y=.02;for(let n=0;n<4;n++){let s=n/4*Math.PI*2;M(t,new _(L(.08,.2,.05,.01),e.dark)).position.set(Math.cos(s)*.38,Math.sin(s)*.38,0)}return t};$.cpu=$.chip;$.system=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.2,.4,.04),e.main)).position.y=-.25,M(t,new _(L(.5,.45,.12,.04),e.lite)).position.y=.1,M(t,new _(L(.55,.08,.08,.02),e.accent)).position.y=.38,t};$.tree=i=>{let t=new X,e=Q(i);return M(t,new _(vt(.12,12,8),e.accent)).position.set(0,.35,0),M(t,new _(vt(.1,10,8),e.main)).position.set(-.25,0,0),M(t,new _(vt(.1,10,8),e.lite)).position.set(.25,0,0),M(t,new _(vt(.1,10,8),e.main)).position.set(-.35,-.35,0),M(t,new _(vt(.1,10,8),e.lite)).position.set(-.15,-.35,0),M(t,new _(L(.06,.35,.06,.02),e.dark)).position.set(0,.15,0),M(t,new _(L(.5,.06,.06,.02),e.dark)).position.set(0,0,0),t};$.window=i=>{let t=new X,e=Q(i);return M(t,new _(L(.8,.55,.1,.04),e.main)),M(t,new _(L(.8,.12,.12,.03),e.dark)).position.y=.22,M(t,new _(vt(.05,8,6),e.accent)).position.set(.28,.22,.08),M(t,new _(L(.55,.08,.04,.01),e.lite)).position.set(-.05,0,.08),M(t,new _(L(.4,.08,.04,.01),e.lite)).position.set(-.1,-.14,.08),t};$.database=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.32,.32,.55,28),e.main)),M(t,new _(Ot(.32,.32,.08,28),e.lite)).position.y=.28,M(t,new _(Ot(.32,.32,.08,28),e.accent)).position.y=-.28,t};$.network=i=>{let t=new X,e=Q(i),n=[[0,.3],[-.32,-.15],[.32,-.15],[0,-.35]];return n.forEach((s,r)=>M(t,new _(vt(.1,10,8),r===0?e.accent:e.main)).position.set(s[0],s[1],0)),[[0,1],[0,2],[1,3],[2,3]].forEach(([s,r])=>{let o=n[r][0]-n[s][0],a=n[r][1]-n[s][1],c=Math.hypot(o,a),l=M(t,new _(L(.05,c,.05,.02),e.dark));l.position.set((n[s][0]+n[r][0])/2,(n[s][1]+n[r][1])/2,0),l.rotation.z=Math.atan2(o,a)}),t};$.human=i=>{let t=new X,e=Q(i);return M(t,new _(vt(.18,16,12),e.main)).position.y=.28,M(t,new _(L(.4,.4,.25,.1),e.lite)).position.y=-.1,t};$.neural=i=>{let t=new X,e=Q(i);return[[-.3,[-.2,.2]],[0,[-.3,0,.3]],[.3,[-.2,.2]]].forEach((s,r)=>s[1].forEach(o=>{M(t,new _(vt(.08,10,8),r===1?e.accent:e.main)).position.set(s[0],o,0)})),t};$.sigma=i=>{let t=new X,e=Q(i);M(t,new _(L(.55,.12,.16,.03),e.main)).position.y=.32,M(t,new _(L(.55,.12,.16,.03),e.main)).position.y=-.32;let n=M(t,new _(L(.14,.55,.16,.03),e.lite));return n.rotation.z=.5,n.position.set(.05,0,0),t};$.logic=i=>{let t=new X,e=Q(i);return M(t,new _(L(.5,.35,.2,.05),e.main)),M(t,new _(Ot(.08,.08,.2,12),e.dark)).position.set(-.35,.08,0),M(t,new _(Ot(.08,.08,.2,12),e.dark)).position.set(-.35,-.08,0),M(t,new _(Ot(.08,.08,.25,12),e.accent)).position.set(.4,0,0),t};$.proof=i=>{let t=new X,e=Q(i);M(t,new _(L(.6,.75,.1,.04),e.main)),M(t,new _(L(.14,.14,.08,.02),e.accent)).position.set(.15,-.22,.08);for(let n=0;n<3;n++)M(t,new _(L(.4,.05,.04,.01),e.dark)).position.set(0,.22-n*.14,.08);return t};$.set=i=>{let t=new X,e=Q(i);return M(t,new _(_e(.28,.08,12,28),e.main)).position.x=-.12,M(t,new _(_e(.28,.08,12,28),e.lite)).position.x=.12,t};$.fsm=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.2,.2,.12,24),e.main)).position.set(-.28,0,0),M(t,new _(Ot(.2,.2,.12,24),e.accent)).position.set(.28,0,0);let n=M(t,new _(be(.1,.22,12),e.dark));return n.rotation.z=-Math.PI/2,n.position.set(0,.08,0),t};$.grammar=i=>{let t=new X,e=Q(i);return M(t,new _(L(.2,.55,.14,.04),e.main)).position.set(-.25,0,0),M(t,new _(L(.2,.55,.14,.04),e.main)).position.set(.25,0,0),M(t,new _(L(.35,.12,.14,.03),e.accent)).position.y=.2,M(t,new _(L(.35,.12,.14,.03),e.lite)).position.y=-.2,t};$.hash=i=>{let t=new X,e=Q(i);return M(t,new _(L(.28,.42,.22,.05),e.main)).position.set(-.28,0,0),M(t,new _(L(.28,.55,.22,.05),e.lite)).position.set(0,.05,0),M(t,new _(L(.28,.68,.22,.05),e.accent)).position.set(.28,.1,0),M(t,new _(vt(.07,10,8),e.dark)).position.set(-.28,.28,.14),M(t,new _(vt(.07,10,8),e.dark)).position.set(0,.38,.14),M(t,new _(vt(.07,10,8),e.dark)).position.set(.28,.48,.14),t};$.primes=$.hash;$.count=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++)M(t,new _(L(.18,.18,.18,.04),n===2?e.accent:e.main)).position.set(-.25+n*.25,0,0);return t};$.dice=i=>{let t=new X,e=Q(i);return M(t,new _(L(.55,.55,.55,.08),e.main)),[[0,0],[-.15,.15],[.15,-.15]].forEach(s=>M(t,new _(vt(.06,8,6),e.dark)).position.set(s[0],s[1],.3)),t};$.precision=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.12,.12,.03),e.main)),M(t,new _(L(.12,.12,.12,.03),e.accent)).position.x=-.2,M(t,new _(L(.08,.25,.08,.02),e.dark)).position.set(.25,.1,0),t};$.algebra=i=>{let t=new X,e=Q(i);return M(t,new _(L(.5,.12,.12,.03),e.main)),M(t,new _(L(.12,.5,.12,.03),e.main)),M(t,new _(L(.35,.1,.1,.03),e.accent)).position.y=-.35,t};$.calculus=i=>{let t=new X,e=Q(i);for(let n=0;n<5;n++){let s=n/4,r=-.35+s*.7,o=Math.sin(s*Math.PI)*.2;M(t,new _(vt(.09,10,8),n===2?e.accent:e.main)).position.set(o,r,0)}return t};$.newAdv=i=>{let t=new X,e=Q(i);M(t,new _(vt(.2,16,12),e.accent)).position.y=.15;for(let n=0;n<5;n++){let s=n/5*Math.PI*2;M(t,new _(L(.06,.25,.06,.02),e.main)).position.set(Math.cos(s)*.15,.35,Math.sin(s)*.15)}return M(t,new _(L(.35,.2,.2,.05),e.lite)).position.y=-.25,t};$.ruler=i=>{let t=new X,e=Q(i),n=M(t,new _(L(.9,.22,.1,.03),e.main));n.rotation.z=-.3;for(let s=0;s<5;s++)M(t,new _(L(.03,.1,.04,.01),e.dark)).position.set(-.3+s*.15,.05-s*.04,.06);return M(t,new _(Ot(.2,.2,.1,20),e.accent)).position.set(.15,-.25,0),t};$.abstract=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.7,.7,.08),e.main)),M(t,new _(L(.42,.42,.42,.06),e.lite)).position.set(0,0,.08),M(t,new _(L(.22,.22,.22,.04),e.accent)).position.set(0,0,.16),t};$.experiment=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.15,.15,.5,16),e.lite)).position.set(-.2,0,0),M(t,new _(be(.22,.4,16),e.main)).position.set(.2,-.05,0),M(t,new _(vt(.08,10,8),e.accent)).position.set(.2,-.1,.15),t};$.stats=i=>{let t=new X,e=Q(i);return[.3,.5,.4,.65].forEach((s,r)=>M(t,new _(L(.14,s,.14,.03),r===3?e.accent:e.main)).position.set(-.3+r*.2,-.35+s/2,0)),t};$.sim=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.15,.5,.04),e.dark)).position.y=-.25,M(t,new _(vt(.2,16,12),e.main)).position.y=.05,M(t,new _(L(.15,.35,.15,.03),e.accent)).position.set(.3,.05,0),t};$.fishbone=i=>{let t=new X,e=Q(i);M(t,new _(L(.85,.1,.1,.03),e.main));for(let n=0;n<3;n++){let s=-.2+n*.25,r=M(t,new _(L(.08,.35,.08,.02),e.lite));r.position.set(s,.15,0),r.rotation.z=.5;let o=M(t,new _(L(.08,.35,.08,.02),e.accent));o.position.set(s,-.15,0),o.rotation.z=-.5}return M(t,new _(vt(.12,12,8),e.dark)).position.set(.42,0,0),t};$.industry=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.35,.4,.04),e.main)).position.y=-.15,M(t,new _(Ot(.1,.12,.45,14),e.dark)).position.set(-.2,.25,0),M(t,new _(Ot(.1,.12,.55,14),e.lite)).position.set(.15,.3,0),M(t,new _(vt(.08,10,8),e.accent)).position.set(.15,.55,0),t};$.core=i=>{let t=new X,e=Q(i);return M(t,new _(vt(.35,32,24),e.main)),M(t,new _(_e(.42,.05,10,32),e.accent)).rotation.x=Math.PI/2.5,M(t,new _(_e(.48,.04,10,32),e.lite)).rotation.x=Math.PI/1.7,t};$.kanban=i=>{let t=new X,e=Q(i);M(t,new _(L(.95,.72,.14,.05),e.main));for(let n=0;n<3;n++){let s=-.3+n*.3;M(t,new _(L(.24,.08,.06,.02),e.dark)).position.set(s,.28,.1);let r=n===0?3:n===1?2:1;for(let o=0;o<r;o++)M(t,new _(L(.2,.12,.07,.03),o===0?e.accent:e.lite)).position.set(s,.12-o*.18,.14)}return t};$.scorecard=i=>{let t=new X,e=Q(i);M(t,new _(L(.82,.7,.14,.06),e.main));for(let n=0;n<5;n++){let s=.14+n*.08;M(t,new _(L(.09,s,.1,.03),n>=3?e.accent:e.lite)).position.set(-.28+n*.14,-.22+s/2,.12)}return M(t,new _(vt(.1,12,8),e.gloss)).position.set(.3,.22,.16),t};$.radar=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.45,.45,.1,36),e.main)),M(t,new _(Ot(.32,.32,.06,28),e.lite)).position.y=.08,M(t,new _(Ot(.18,.18,.05,20),e.dark)).position.y=.12;let n=M(t,new _(L(.06,.38,.05,.02),e.accent));return n.position.set(.1,.14,.12),n.rotation.z=-.9,M(t,new _(vt(.06,10,8),e.gloss)).position.set(0,.14,.14),t};$.loop=i=>{let t=new X,e=Q(i);M(t,new _(_e(.32,.1,14,40),e.main)),M(t,new _(_e(.32,.04,10,32),e.lite)).position.y=.06;let n=M(t,new _(be(.14,.26,14),e.accent));n.position.set(.32,.18,.05),n.rotation.z=-1.1;let s=M(t,new _(be(.12,.22,12),e.gloss));return s.position.set(-.3,-.16,.05),s.rotation.z=2,t};$.specdoc=i=>{let t=new X,e=Q(i);M(t,new _(L(.68,.88,.12,.05),e.main)),M(t,new _(L(.22,.22,.08,.02),e.lite)).position.set(.2,.3,.05),M(t,new _(L(.48,.1,.05,.02),e.accent)).position.set(-.02,.22,.09);for(let n=0;n<3;n++)M(t,new _(vt(.05,8,6),e.gloss)).position.set(-.22,.02-n*.18,.1),M(t,new _(L(.38,.05,.04,.02),e.dark)).position.set(.06,.02-n*.18,.1);return t};$.seal=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.42,.42,.18,32),e.main)),M(t,new _(Ot(.28,.28,.1,24),e.lite)).position.y=.12;let n=M(t,new _(L(.1,.26,.1,.03),e.accent));n.rotation.z=.6,n.position.set(-.08,.02,.18);let s=M(t,new _(L(.1,.4,.1,.03),e.accent));return s.rotation.z=-.7,s.position.set(.1,.08,.18),t};$.journal=i=>{let t=new X,e=Q(i);return M(t,new _(L(.55,.75,.35,.05),e.main)),M(t,new _(L(.08,.75,.38,.02),e.dark)).position.x=-.28,M(t,new _(L(.4,.06,.04,.02),e.accent)).position.set(.02,.2,.2),M(t,new _(L(.35,.05,.04,.02),e.lite)).position.set(.02,.05,.2),M(t,new _(L(.3,.05,.04,.02),e.dark)).position.set(.02,-.1,.2),t};$.mallet=i=>{let t=new X,e=Q(i),n=M(t,new _(Ot(.06,.06,.72,12),e.dark));return n.rotation.z=.5,M(t,new _(L(.48,.26,.26,.06),e.main)).position.set(-.3,.28,0),M(t,new _(L(.16,.16,.16,.04),e.accent)).position.set(.28,-.26,0),t};$.schematic=i=>{let t=new X,e=Q(i);return M(t,new _(L(.88,.7,.1,.04),e.main)),M(t,new _(L(.3,.28,.08,.02),e.lite)).position.set(-.2,.1,.08),M(t,new _(L(.3,.28,.08,.02),e.accent)).position.set(.2,.1,.08),M(t,new _(L(.55,.2,.08,.02),e.dark)).position.set(0,-.2,.08),t};$.brackets2=i=>{let t=new X,e=Q(i);for(let n of[-1,1])M(t,new _(L(.12,.7,.16,.04),e.main)).position.set(n*.32,0,0),M(t,new _(L(.22,.12,.16,.04),e.lite)).position.set(n*.22,.3,0),M(t,new _(L(.22,.12,.16,.04),e.dark)).position.set(n*.22,-.3,0);return M(t,new _(L(.2,.08,.1,.03),e.accent)).position.set(0,.05,.08),M(t,new _(L(.08,.08,.1,.03),e.gloss)).position.set(.16,-.1,.08),t};$.brain=i=>{let t=new X,e=Q(i);M(t,new _(vt(.32,24,16),e.main)),M(t,new _(vt(.28,20,14),e.lite)).position.set(.12,.05,.1),M(t,new _(vt(.26,18,12),e.dark)).position.set(-.12,.02,-.05);for(let[n,s]of[[.2,.2],[-.15,.25],[.05,-.1]])M(t,new _(vt(.06,8,6),e.accent)).position.set(n,s,.28);return t};$.diploma=i=>{let t=new X,e=Q(i);return M(t,new _(L(.85,.6,.08,.03),e.main)),M(t,new _(L(.7,.08,.05,.02),e.accent)).position.set(0,.15,.06),M(t,new _(L(.5,.05,.04,.02),e.dark)).position.set(0,0,.06),M(t,new _(Ot(.1,.1,.08,16),e.gloss)).position.set(.28,-.15,.08),M(t,new _(L(.06,.22,.04,.01),e.lite)).position.set(.28,-.3,.06),t};$.bintree=i=>{let t=new X,e=Q(i),n=[[0,.35,e.accent,.14],[-.28,.05,e.main,.12],[.28,.05,e.main,.12],[-.42,-.28,e.lite,.1],[-.14,-.28,e.lite,.1],[.14,-.28,e.dark,.1],[.42,-.28,e.dark,.1]];for(let[r,o,a,c]of n)M(t,new _(vt(c,12,8),a)).position.set(r,o,0);let s=[[0,.35,-.28,.05],[0,.35,.28,.05],[-.28,.05,-.42,-.28],[-.28,.05,-.14,-.28],[.28,.05,.14,-.28],[.28,.05,.42,-.28]];for(let[r,o,a,c]of s){let l=a-r,h=c-o,u=Math.hypot(l,h),d=M(t,new _(L(.04,u,.04,.01),e.dark),!1);d.position.set((r+a)/2,(o+c)/2,-.05),d.rotation.z=Math.atan2(h,l)-Math.PI/2}return t};$.loupe=i=>{let t=new X,e=Q(i);M(t,new _(_e(.3,.09,14,32),e.main)).position.set(-.08,.1,0),M(t,new _(Ot(.22,.22,.08,24),e.lite)).position.set(-.08,.1,.02);let n=M(t,new _(L(.14,.48,.14,.05),e.dark));return n.rotation.z=-.75,n.position.set(.32,-.3,0),M(t,new _(vt(.07,10,8),e.accent)).position.set(.02,.18,.12),t};$.hammer=i=>{let t=new X,e=Q(i),n=M(t,new _(L(.12,.78,.12,.04),e.dark));return n.rotation.z=.55,M(t,new _(L(.42,.22,.22,.05),e.main)).position.set(-.28,.3,0),M(t,new _(L(.18,.14,.14,.03),e.accent)).position.set(.32,-.28,0),t};$.bug=i=>{let t=new X,e=Q(i);M(t,new _(vt(.28,20,14),e.main)).position.y=.02,M(t,new _(vt(.16,14,10),e.lite)).position.set(0,.28,.05);for(let n of[-1,1]){let s=M(t,new _(L(.06,.28,.06,.02),e.dark));s.position.set(n*.32,-.05,0),s.rotation.z=n*.5,M(t,new _(L(.05,.22,.05,.02),e.dark)).position.set(n*.22,.15,.15)}return M(t,new _(vt(.05,8,6),e.accent)).position.set(-.08,.32,.14),M(t,new _(vt(.05,8,6),e.accent)).position.set(.08,.32,.14),t};$.terminal=i=>{let t=new X,e=Q(i);M(t,new _(L(.9,.62,.16,.06),e.main)),M(t,new _(L(.78,.42,.06,.03),e.dark)).position.set(0,.02,.1);let n=M(t,new _(be(.08,.16,10),e.accent));return n.rotation.z=-Math.PI/2,n.position.set(-.22,.05,.16),M(t,new _(L(.28,.06,.05,.02),e.lite)).position.set(.05,.05,.16),M(t,new _(L(.18,.06,.05,.02),e.gloss)).position.set(-.05,-.12,.16),t};$.recycle=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=n*Math.PI*2/3,r=M(t,new _(L(.18,.42,.12,.04),n===0?e.main:n===1?e.lite:e.accent));r.position.set(Math.cos(s)*.22,Math.sin(s)*.22,0),r.rotation.z=s+Math.PI/2;let o=M(t,new _(be(.12,.2,10),e.gloss));o.position.set(Math.cos(s+.7)*.38,Math.sin(s+.7)*.38,.04),o.rotation.z=s+.7+Math.PI/2}return t};$.folders=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.12,.5,.04),e.dark)).position.set(.05,-.18,-.05),M(t,new _(L(.75,.45,.55,.05),e.main)).position.y=-.02,M(t,new _(L(.28,.1,.55,.03),e.lite)).position.set(-.18,.22,0),M(t,new _(L(.7,.4,.5,.05),e.accent)).position.set(.08,.12,.08),t};$.calendar=i=>{let t=new X,e=Q(i);M(t,new _(L(.78,.7,.14,.06),e.main)),M(t,new _(L(.78,.18,.16,.04),e.accent)).position.y=.3;for(let n of[-.2,.2])M(t,new _(Ot(.05,.05,.2,10),e.dark)).position.set(n,.4,.05);for(let n=0;n<2;n++)for(let s=0;s<3;s++)M(t,new _(L(.14,.12,.06,.02),(n+s)%2?e.lite:e.gloss)).position.set(-.22+s*.22,.05-n*.2,.1);return t};$.stamp=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.32,.36,.2,28),e.main)).position.y=-.15,M(t,new _(Ot(.12,.12,.45,14),e.dark)).position.y=.15,M(t,new _(vt(.14,14,10),e.accent)).position.y=.42,M(t,new _(L(.5,.08,.5,.04),e.lite)).position.y=-.28,t};$.firewall=i=>{let t=new X,e=Q(i);M(t,new _(L(.85,.55,.22,.05),e.main));for(let n=0;n<4;n++)M(t,new _(L(.12,.42,.14,.03),n%2?e.accent:e.lite)).position.set(-.3+n*.2,0,.12);return M(t,new _(L(.9,.1,.26,.03),e.dark)).position.y=.32,M(t,new _(vt(.08,10,8),e.gloss)).position.set(0,.42,.1),t};$.key=i=>{let t=new X,e=Q(i);return M(t,new _(_e(.22,.08,12,24),e.main)).position.set(-.22,.05,0),M(t,new _(L(.55,.12,.12,.04),e.lite)).position.set(.18,.05,0),M(t,new _(L(.1,.22,.1,.03),e.accent)).position.set(.35,-.08,0),M(t,new _(L(.1,.16,.1,.03),e.dark)).position.set(.48,-.05,0),t};$.balance=i=>{let t=new X,e=Q(i);M(t,new _(Ot(.08,.12,.55,14),e.dark)).position.y=-.05,M(t,new _(L(.7,.08,.1,.03),e.main)).position.y=.22;for(let n of[-1,1])M(t,new _(Ot(.16,.16,.08,16),n<0?e.lite:e.accent)).position.set(n*.32,.05,0),M(t,new _(L(.04,.2,.04,.01),e.dark)).position.set(n*.32,.14,0);return M(t,new _(vt(.08,12,8),e.gloss)).position.y=.32,t};$.crane=i=>{let t=new X,e=Q(i);M(t,new _(L(.55,.18,.4,.04),e.main)).position.y=-.28,M(t,new _(Ot(.07,.09,.7,12),e.dark)).position.set(-.1,.1,0);let n=M(t,new _(L(.7,.08,.08,.03),e.lite));return n.position.set(.18,.42,0),n.rotation.z=-.25,M(t,new _(L(.08,.25,.08,.02),e.accent)).position.set(.45,.2,0),M(t,new _(L(.18,.08,.14,.02),e.gloss)).position.set(.45,.05,0),t};$.pipeline=i=>{let t=new X,e=Q(i);return M(t,new _(Ot(.12,.12,.85,16),e.main)).rotation.z=Math.PI/2,M(t,new _(vt(.16,14,10),e.lite)).position.set(-.4,0,0),M(t,new _(vt(.16,14,10),e.accent)).position.set(.4,0,0),M(t,new _(Ot(.18,.18,.14,16),e.dark)).position.set(0,.02,0),M(t,new _(L(.08,.22,.08,.02),e.gloss)).position.set(0,.22,0),t};$.notebook=i=>{let t=new X,e=Q(i);M(t,new _(L(.65,.85,.14,.05),e.main)),M(t,new _(L(.08,.85,.16,.03),e.accent)).position.x=-.28;for(let n=0;n<4;n++)M(t,new _(L(.4,.05,.04,.02),e.dark)).position.set(.05,.25-n*.16,.1);return t};$.tips=$.lightbulb;$.opsbook=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.55,.12,.05),e.main)),M(t,new _(L(.55,.08,.06,.02),e.accent)).position.set(0,.12,.1),M(t,new _(L(.4,.08,.06,.02),e.dark)).position.set(-.05,-.05,.1),M(t,new _(Ot(.1,.1,.08,12),e.lite)).position.set(.22,-.16,.1),t};$.screwdriver=i=>{let t=new X,e=Q(i),n=M(t,new _(Ot(.05,.05,.55,10),e.dark));return n.rotation.z=.6,n.position.set(.05,-.05,0),M(t,new _(L(.18,.45,.18,.05),e.main)).position.set(-.22,.25,0),M(t,new _(L(.12,.14,.08,.02),e.accent)).position.set(.32,-.32,0),t};$.gittools=i=>{let t=new X,e=Q(i);M(t,new _(vt(.14,14,10),e.main)).position.set(-.25,-.2,0),M(t,new _(vt(.14,14,10),e.lite)).position.set(.05,.1,0),M(t,new _(vt(.14,14,10),e.accent)).position.set(.32,-.15,0),M(t,new _(L(.08,.4,.08,.03),e.dark)).position.set(-.1,-.05,0);let n=M(t,new _(L(.08,.35,.08,.03),e.dark));return n.rotation.z=1.1,n.position.set(.18,0,0),M(t,new _(L(.35,.12,.2,.04),e.gloss)).position.set(0,.38,0),t};$.qmboard=i=>{let t=new X,e=Q(i);M(t,new _(L(.85,.65,.12,.05),e.main)),M(t,new _(Ot(.18,.18,.1,24),e.lite)).position.set(-.22,.05,.1);let n=M(t,new _(L(.08,.2,.08,.02),e.accent));n.rotation.z=.5,n.position.set(-.28,0,.16);let s=M(t,new _(L(.08,.28,.08,.02),e.accent));s.rotation.z=-.7,s.position.set(-.14,.04,.16);for(let r=0;r<3;r++)M(t,new _(L(.28-r*.04,.08,.06,.02),e.dark)).position.set(.2,.18-r*.16,.1);return t};$.arches=i=>{let t=new X,e=Q(i);for(let n=0;n<3;n++){let s=M(t,new _(_e(.22+n*.02,.06,10,24),n===1?e.lite:e.main));s.rotation.x=Math.PI/2,s.position.set(-.28+n*.28,.05,0),M(t,new _(L(.1,.28,.1,.03),e.dark)).position.set(-.28+n*.28,-.2,0)}return t};$.designflow=i=>{let t=new X,e=Q(i);M(t,new _(L(.7,.5,.1,.04),e.main));let n=M(t,new _(Ot(.05,.05,.55,10),e.accent));return n.rotation.z=-.8,n.position.set(.15,.05,.12),M(t,new _(be(.06,.14,10),e.dark)).position.set(.35,-.15,.12),M(t,new _(L(.2,.08,.06,.02),e.lite)).position.set(-.18,.1,.1),t};$.bricks=i=>{let t=new X,e=Q(i);return M(t,new _(L(.7,.22,.35,.05),e.main)).position.set(0,-.22,0),M(t,new _(L(.55,.22,.35,.05),e.lite)).position.set(-.08,0,.05),M(t,new _(L(.4,.22,.35,.05),e.accent)).position.set(.1,.22,.1),M(t,new _(L(.12,.12,.12,.03),e.dark)).position.set(-.35,.22,.2),M(t,new _(L(.12,.12,.12,.03),e.dark)).position.set(-.2,.22,.2),t};$.default=$.lightbulb;var Ix={1:"clipboard",2:"building",3:"blueprint",4:"brackets",5:"magnifier",6:"server",7:"wrench",8:"gitbranch",9:"gantt",10:"cycle",11:"uml",12:"medal",13:"shield",14:"handshake",15:"coins",16:"chip",17:"sigma",18:"ruler"},Px={"1.1":"clipboard","1.2":"speech","1.3":"search","1.4":"document","1.5":"checkbadge","1.6":"kanban","1.7":"notebook","1.8":"toolbox","2.1":"building","2.2":"layers","2.3":"arches","2.4":"scorecard","3.1":"blueprint","3.2":"designflow","3.3":"star","3.4":"specdoc","3.5":"compass","3.6":"balance","4.1":"brackets","4.2":"crane","4.3":"journal","4.4":"code","4.5":"mallet","5.1":"magnifier","5.2":"pyramid","5.3":"target","5.4":"gauge","5.5":"pipeline","5.6":"cycle","5.7":"neural","5.8":"bug","6.1":"server","6.2":"plan","6.3":"rocket","6.4":"control","6.5":"opsbook","6.6":"terminal","7.1":"wrench","7.2":"keyIssues","7.3":"recycle","7.4":"techniques","7.5":"screwdriver","8.1":"folders","8.2":"idtag","8.3":"gate","8.4":"status","8.5":"audit","8.6":"package","8.7":"gittools","9.1":"scope","9.2":"gantt","9.3":"execute","9.4":"review","9.5":"closure","9.6":"radar","9.7":"calendar","10.1":"loop","10.2":"lifecycle","10.3":"improve","11.1":"model","11.2":"uml","11.3":"loupe","11.4":"methods","12.1":"medal","12.2":"qmboard","12.3":"seal","12.4":"stamp","13.1":"shield","13.2":"org","13.3":"firewall","13.4":"lock","13.5":"key","13.6":"domain","14.1":"certificate","14.2":"people","14.3":"chat","15.1":"coins","15.2":"decide","15.3":"profit","15.4":"nonprofit","15.5":"present","15.6":"multiattr","15.7":"intangible","15.8":"calculator","15.9":"lightbulb","15.10":"related","16.1":"system","16.2":"cpu","16.3":"tree","16.4":"brackets2","16.5":"window","16.6":"database","16.7":"network","16.8":"human","16.9":"brain","17.1":"logic","17.2":"proof","17.3":"set","17.4":"bintree","17.5":"fsm","17.6":"grammar","17.7":"primes","17.8":"count","17.9":"dice","17.10":"precision","17.11":"algebra","17.12":"calculus","17.13":"newAdv","18.1":"loop","18.2":"schematic","18.3":"abstract","18.4":"experiment","18.5":"stats","18.6":"sim","18.7":"radar","18.8":"diploma","18.9":"fishbone","18.10":"industry"};function Es(i,t,e=1){let s=($[i]||$.default)(t);return s.scale.setScalar(e),s.rotation.set(-.42,.62,.1),s.userData.iconKind=i,s.userData.baseRot={x:-.42,y:.62,z:.1},s}function Vo(i){return Ix[i]||"lightbulb"}function rd(i,t){return Px[`${i}.${t}`]||"lightbulb"}function od(){return"core"}var ad=!1;async function Fl(){if(!ad){try{document.fonts&&document.fonts.ready&&await document.fonts.ready,await Promise.all([document.fonts.load("800 32px Vazirmatn"),document.fonts.load("700 28px Vazirmatn"),document.fonts.load("800 32px Inter"),document.fonts.load("700 28px Inter")])}catch{}ad=!0}}function Go(i){return/[\u0600-\u06FF]/.test(String(i||""))}function Ll(i){return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)}function cd(i){let t=new Xt(i);return .2126*Ll(t.r)+.7152*Ll(t.g)+.0722*Ll(t.b)}function ar(i,t){let e=cd(i),n=cd(t),s=Math.max(e,n),r=Math.min(e,n);return(s+.05)/(r+.05)}function Hl(i){let e=new Xt(typeof i=="number"?i:15891038),n={};e.getHSL(n);let s=n.h>.12&&n.h<.45,r=s?Math.min(.75,Math.max(.45,n.s)):Math.min(.9,Math.max(.55,n.s*1.15)),o=s?.05:.07,a=new Xt().setHSL(n.h,r,o),c=a.getHex(),l=ar(c,16315114);for(;l<11&&o>.025;)o-=.01,r=Math.min(r,s?.48:.78),a.setHSL(n.h,r,o),c=a.getHex(),l=ar(c,16315114);l<4.5&&(a.setHSL(n.h,.4,.045),c=a.getHex(),l=ar(c,16315114));let h=new Xt().setHSL(n.h,Math.min(.4,n.s*.65),.14),u=16447474,d=ar(u,h.getHex());if(l>=4.5)return{plaque:16315114,letter:c,edge:new Xt(c).offsetHSL(0,0,-.05).getHex(),hilite:16777215,scheme:"light",contrast:+l.toFixed(2)};let p=.14,m=h.getHex();for(;d<7&&p>.05;)p-=.015,h.setHSL(n.h,Math.min(.45,n.s*.7),p),m=h.getHex(),d=ar(u,m);return{plaque:m,letter:u,edge:14209224,hilite:16777215,scheme:"dark",contrast:+d.toFixed(2)}}function Ul(i,t,e,n,s,r){let o=Math.min(r,n*.5,s*.5);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function Di(i){return"#"+(i>>>0).toString(16).padStart(6,"0")}function Xo(i,t={}){let e=!!t.isMobile,n=Math.min(e?2:2.5,typeof window<"u"&&window.devicePixelRatio||2),s=t.primSize||(e?26:30),r=t.num!=null&&t.num!==""?String(t.num):null,o=r?e?13:15:0,a=e?12:16,c=e?7:9,l=r?7:0,h=!!t.rtl,u=t.colors||Hl(t.nodeHex||15891038),d=Go(i)?"Vazirmatn":"Inter",p="800 "+s+"px "+d+", Vazirmatn, Inter, sans-serif",m=document.createElement("canvas").getContext("2d");m.font=p;let y=!!t._twoLine;function g(F){let st=String(F||"").split(/\s+/).filter(Boolean);if(st.length<2){let et=String(F||"");if(et.length<8)return[et,""];let xt=Math.ceil(et.length/2);return[et.slice(0,xt).trim(),et.slice(xt).trim()]}let ct=null;for(let et=1;et<st.length;et++){let xt=st.slice(0,et).join(" "),Ut=st.slice(et).join(" "),J=m.measureText(xt).width,it=m.measureText(Ut).width,Mt=Math.max(J,it)+Math.abs(J-it)*.15;(!ct||Mt<ct.score)&&(ct={a:xt,b:Ut,score:Mt,w:Math.max(J,it)})}return[ct.a,ct.b]}let f=i||"",b="";if(y){let F=g(i||"");f=F[0],b=F[1]||""}let v=y?Math.max(m.measureText(f).width,b?m.measureText(b).width:0):m.measureText(i||"").width,C=y&&b?s*2+3:s,T=Math.ceil(a*2+(o?o*2+l:0)+v),R=Math.ceil(Math.max(C+c*2,o?o*2+4:0)),D=t.maxCssW||(e?220:320);if(T>D&&!t._forceFit){let F=D/T,st=Math.max(15,Math.floor(s*F));return st<s?Xo(i,{...t,primSize:st,colors:u}):t._twoLine?Xo(i,{...t,primSize:s,colors:u,_forceFit:!0}):Xo(i,{...t,primSize:s,colors:u,_twoLine:!0})}T>D&&(T=D);let S=document.createElement("canvas");S.width=Math.max(2,Math.ceil(T*n)),S.height=Math.max(2,Math.ceil(R*n));let E=S.getContext("2d");E.setTransform(1,0,0,1,0,0),E.fillStyle=Di(u.plaque),E.fillRect(0,0,S.width,S.height),E.setTransform(n,0,0,n,0,0),Ul(E,0,0,T,R,R*.42),E.fillStyle=Di(u.plaque),E.fill(),E.save(),Ul(E,.8,.8,T-1.6,R-1.6,R*.4),E.strokeStyle=u.scheme==="light"?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.12)",E.lineWidth=1.2,E.stroke(),E.restore(),E.save(),Ul(E,0,0,T,R,R*.42),E.clip();let P=E.createLinearGradient(0,0,0,R);P.addColorStop(0,"rgba(255,255,255,0.18)"),P.addColorStop(.55,"rgba(0,0,0,0)"),P.addColorStop(1,"rgba(40,20,30,0.14)"),E.fillStyle=P,E.fillRect(0,0,T,R),E.restore();let V=a,B=T-a,G=(F,st,ct)=>{if(!r)return;let et=h?T-a-o+2:a+o-2,xt=R/2;if(F.beginPath(),F.arc(et,xt,o-1.5,0,Math.PI*2),ct)F.fillStyle="#fff",F.fill();else{let Ut=new Xt(u.letter);u.scheme==="light"?Ut.offsetHSL(0,-.05,.08):Ut.set(u.plaque).offsetHSL(0,0,.12),F.fillStyle="#"+Ut.getHexString(),F.fill(),F.fillStyle=u.scheme==="light"?Di(u.plaque):Di(u.letter),F.font="800 "+Math.round(o*1.05)+"px Vazirmatn, Inter, sans-serif",F.textAlign="center",F.textBaseline="middle",F.direction="ltr",F.save(),F.fillStyle="rgba(0,0,0,0.25)",F.fillText(r,et,xt+.8),F.fillStyle=u.scheme==="light"?Di(u.plaque):Di(u.letter),F.fillText(r,et,xt),F.restore()}h?B=et-o-l+2:V=et+o+l-2},Z=(F,st)=>{F.font=p,F.textBaseline="alphabetic";let ct=y&&b?[f,b]:[i],et=s+3,xt=c+s*.82,Ut=h||Go(i)?B:V;F.direction=h||Go(i)?"rtl":"ltr",F.textAlign=h||Go(i)?"right":"left";let J=(it,Mt)=>{if(st){F.fillStyle="#fff",F.fillText(it,Ut,Mt);return}F.save(),F.fillStyle=u.scheme==="light"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.12)",F.fillText(it,Ut,Mt-.45),F.fillStyle=u.scheme==="light"?"rgba(40,20,30,0.14)":"rgba(0,0,0,0.2)",F.fillText(it,Ut,Mt+.55),F.fillStyle=Di(u.letter),F.fillText(it,Ut,Mt),F.fillText(it,Ut+.35,Mt),F.restore()};ct.forEach((it,Mt)=>J(it,xt+Mt*et))};G(E,!0,!1),Z(E,!1);let k=document.createElement("canvas");k.width=S.width,k.height=S.height;let j=k.getContext("2d");j.setTransform(n,0,0,n,0,0),j.fillStyle="#000",j.fillRect(0,0,T,R),V=a,B=T-a,G(j,!0,!0),Z(j,!0);try{let F=document.createElement("canvas");F.width=k.width,F.height=k.height;let st=F.getContext("2d");st.filter="blur("+.55*n+"px)",st.drawImage(k,0,0),st.filter="none",j.setTransform(1,0,0,1,0,0),j.clearRect(0,0,k.width,k.height),j.drawImage(F,0,0)}catch{}return{albedo:S,height:k,cssW:T,cssH:R,colors:u,dpr:n,contrast:u.contrast}}var Nl={};function ld(i,t,e){let n=i.toFixed(3)+"_"+t.toFixed(3)+"_"+e.toFixed(3);if(Nl[n])return Nl[n];let s=new Rn(i,t,e,2,Math.min(.06,t*.35));return Nl[n]=s}function hd(i,t){return new qn({map:i,color:16777215,transparent:!1,depthTest:!1,depthWrite:!1,side:Sn,toneMapped:!1})}function dd(i={}){let t=!!i.isMobile,e=Math.max(.01,i.iconScale||1),n=Xo(i.primary||"",{num:i.num,nodeHex:i.nodeHex,isMobile:t,rtl:i.rtl,primSize:i.primSize||(i.bold?t?36:42:t?30:34),maxCssW:i.bold?t?360:460:t?300:360}),s=new ms(n.albedo);"colorSpace"in s&&(s.colorSpace=He),s.anisotropy=4,s.generateMipmaps=!1,s.minFilter=je,s.magFilter=je,s.premultiplyAlpha=!1,s.needsUpdate=!0;let r=n.cssW/Math.max(1,n.cssH),o=i.worldH!=null?i.worldH:i.bold?t?.85:.95:t?.62:.7,a=o*r,c=i.maxWorldW!=null?i.maxWorldW:i.bold?t?2.8:3.2:t?2.2:2.5;a>c&&(a=c);let l=a/e,h=o/e,u=(i.bold?.07:.055)/e,d=hd(s,null),p=new _(ld(l,h,u),d);p.castShadow=!1,p.receiveShadow=!1,p.userData.isPlaqueBody=!0,p.userData.isPlaqueFace=!0,p.userData.isCenterSignFace=!0,p.renderOrder=10;let m=new X;m.add(p);let y=[p];if(i.dualFace){let g=new _(ld(l,h,u),hd(s,null));g.rotation.y=Math.PI,g.position.z=0,g.userData.isPlaqueBody=!0,g.userData.isPlaqueFace=!0,g.userData.isCenterSignFace=!0,g.renderOrder=10,i.billboardY&&(g.visible=!1),m.add(g),y.push(g)}if(i.pickNode)for(let g of y)g.userData.pick=i.pickNode;if(m.userData.isPlaque=!0,m.userData.isCenterSign=!!i.dualFace||!!i.bold,m.userData.signW=a,m.userData.signH=o,m.userData.localW=l,m.userData.localH=h,m.userData.tex=s,m.userData.normalTex=null,m.userData.faces=y,m.userData.colors=n.colors,m.userData.contrast=n.contrast,m.userData.billboardY=!!i.billboardY,m.userData.nudgeX=0,m.userData.nudgeY=0,m.userData.baseLocalY=i.localY!=null?i.localY:i.bold?.85:-.72,m.userData.baseLocalZ=i.localZ!=null?i.localZ:i.bold?.08:.72,m.position.set(0,m.userData.baseLocalY,m.userData.baseLocalZ),i.counterTilt&&!i.billboardY){let g=i.baseRot||{x:-.42,y:.62,z:.1},f=i.tiltScale!=null?i.tiltScale:1;m.rotation.x=-g.x*f,m.rotation.z=-g.z*f}return m}function Ol(i,t){if(!i)return;let e=Math.max(0,Math.min(1,t));i.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=e<.99,n.material.opacity=e,n.material.needsUpdate=!0)}),i.visible=e>.02}var py=new mn,Wo=new rn(0,0,0,"YXZ"),ws=new N,ud=new mn;function Bl(i,t){if(!i||!i.userData.billboardY)return;let e=i.parent;if(!e)return;i.getWorldPosition(ws);let n=t.position.x-ws.x,s=t.position.z-ws.z,r=Math.atan2(n,s);e.getWorldQuaternion(ud),Wo.setFromQuaternion(ud,"YXZ"),i.rotation.set(-Wo.x,r-Wo.y,-Wo.z),i.position.x=i.userData.nudgeX||0,i.position.y=i.userData.baseLocalY+(i.userData.nudgeY||0),i.position.z=i.userData.baseLocalZ;let o=Math.hypot(t.position.x-ws.x,t.position.y-ws.y,t.position.z-ws.z),a=i.userData.bold?15.2:16.8,c=Math.min(1.3,Math.max(.98,o/a));i.scale.setScalar(c)}var ke=window.SWE,xe=ke.kas,Rd=i=>String(i).replace(/[0-9]/g,t=>"\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9"[t]);window.faD=Rd;var Dx={fa:{hintCenter:"\u0628\u0631\u0627\u06CC \u062A\u0648\u0636\u06CC\u062D \u06A9\u0627\u0645\u0644 \u0628\u0632\u0646\u06CC\u062F",foundations:"\u067E\u0627\u06CC\u0647\u200C\u0647\u0627 \xB7 Foundations",overview:"\u0646\u0645\u0627\u06CC \u06A9\u0644\u06CC",kaLabel:(i,t)=>`\u062D\u0648\u0632\u0647\u0654 \u062F\u0627\u0646\u0634 ${i}${t?" \xB7 \u067E\u0627\u06CC\u0647\u200C\u0647\u0627":""}`,topicsInKa:"\u0633\u0631\u0641\u0635\u0644\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0648\u0632\u0647",allKas:"\u06F1\u06F8 \u062D\u0648\u0632\u0647\u0654 \u062F\u0627\u0646\u0634",related:"\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0628\u0642\u06CC\u0647\u0654 \u062D\u0648\u0632\u0647\u200C\u0647\u0627",what:"\u0686\u06CC\u0633\u062A\u061F",why:"\u0686\u0631\u0627 \u0645\u0647\u0645 \u0627\u0633\u062A\u061F",keys:"\u0627\u062C\u0632\u0627 \u0648 \u0645\u0641\u0627\u0647\u06CC\u0645 \u06A9\u0644\u06CC\u062F\u06CC",ex:"\u0645\u062B\u0627\u0644 \u0633\u0627\u062F\u0647",aboutCrumb:"\u062A\u0648\u0636\u06CC\u062D \u06A9\u0627\u0645\u0644",topicKick:(i,t)=>`${i} \xB7 \u0633\u0631\u0641\u0635\u0644 ${t}`,title:"\u0646\u0642\u0634\u0647\u0654 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0645\u0647\u0646\u062F\u0633\u06CC \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",back:"\u0628\u0627\u0632\u06AF\u0634\u062A",home:"\u062E\u0627\u0646\u0647",langBtn:"EN",legend:"\u0641\u0647\u0631\u0633\u062A",legendClose:"\u0628\u0633\u062A\u0646",captionTap:"\u0628\u0631\u0627\u06CC \u0648\u0631\u0648\u062F \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646\u06CC\u062F",glossEx:"\u0645\u062B\u0627\u0644",glossRelated:"\u0645\u0641\u0627\u0647\u06CC\u0645 \u0645\u0631\u062A\u0628\u0637",glossClose:"\u0628\u0633\u062A\u0646",glossHint:"\u0631\u0648\u06CC \u0648\u0627\u0698\u0647\u200C\u0647\u0627\u06CC \u0631\u0646\u06AF\u06CC \u0628\u0632\u0646\u06CC\u062F \u062A\u0627 \u062A\u0648\u0636\u06CC\u062D \u0648 \u0645\u062B\u0627\u0644\u0634 \u0631\u0627 \u0628\u0628\u06CC\u0646\u06CC\u062F",glossDef:"\u062A\u0639\u0631\u06CC\u0641",glossHow:"\u0686\u0637\u0648\u0631 \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F",glossWhy:"\u0686\u0631\u0627 \u0645\u0647\u0645 \u0627\u0633\u062A",glossSample:"\u0645\u0633\u0626\u0644\u0647\u0654 \u0646\u0645\u0648\u0646\u0647 \u0648 \u062D\u0644",glossSteps:"\u06AF\u0627\u0645\u200C\u0628\u0647\u200C\u06AF\u0627\u0645",glossAnswer:"\u067E\u0627\u0633\u062E",sampleSec:"\u0645\u0633\u0626\u0644\u0647\u0654 \u0646\u0645\u0648\u0646\u0647 \u0648 \u062D\u0644"},en:{hintCenter:"Tap for the full explanation",foundations:"Foundations",overview:"Overview",kaLabel:(i,t)=>`Knowledge area ${i}${t?" \xB7 Foundations":""}`,topicsInKa:"Topics in this area",allKas:"18 knowledge areas",related:"Related knowledge areas",what:"What is it?",why:"Why it matters",keys:"Key ideas",ex:"Simple example",aboutCrumb:"Full explanation",topicKick:(i,t)=>`${i} \xB7 Topic ${t}`,title:"3D Software Engineering Map",back:"Back",home:"Home",langBtn:"\u0641\u0627",legend:"List",legendClose:"Close",captionTap:"Tap again to open",glossEx:"Example",glossRelated:"Related terms",glossClose:"Close",glossHint:"Tap highlighted words for an explanation and example",glossDef:"Definition",glossHow:"How it works",glossWhy:"Why it matters",glossSample:"Sample problem & solution",glossSteps:"Step by step",glossAnswer:"Answer",sampleSec:"Sample problem & solution"}};function Lx(){let i=new URLSearchParams(location.search).get("lang");if(i==="en"||i==="fa")return i;if(/\/en(?:\/|$)/i.test(location.pathname))return"en";try{let t=localStorage.getItem("swebok-lang");if(t==="en"||t==="fa")return t}catch{}return"fa"}var Fi=Lx(),Rt=()=>Fi==="en",ce=()=>Dx[Fi],De=i=>Rt()?String(i):Rd(i);function Ad(){document.documentElement.lang=Fi,document.documentElement.dir=Rt()?"ltr":"rtl",document.body.classList.toggle("lang-en",Rt()),document.body.classList.toggle("lang-fa",!Rt());let i=document.getElementById("lang");i&&(i.textContent=ce().langBtn,i.setAttribute("aria-label",Rt()?"Switch to Persian":"Switch to English")),document.querySelectorAll(".back-text").forEach(d=>{d.textContent=ce().back}),document.querySelectorAll(".back-arrow").forEach(d=>{d.textContent=Rt()?"\u2190":"\u2192"});let t=document.getElementById("back");t&&t.setAttribute("aria-label",ce().back);let e=document.getElementById("home");e&&e.setAttribute("aria-label",ce().home);let n=document.getElementById("hintbar");n&&(n.textContent=n.getAttribute(Rt()?"data-en":"data-fa")||n.textContent);let s=document.querySelector(".brand b"),r=document.querySelector(".brand small");s&&(s.textContent=Rt()?"3D Software Engineering Map":"\u0646\u0642\u0634\u0647\u0654 \u0633\u0647\u200C\u0628\u0639\u062F\u06CC \u0645\u0647\u0646\u062F\u0633\u06CC \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"),r&&(r.textContent=Rt()?"15 knowledge areas \xB7 3 foundations":"\u06F1\u06F5 \u062D\u0648\u0632\u0647\u0654 \u062F\u0627\u0646\u0634 \xB7 \u06F3 \u062D\u0648\u0632\u0647\u0654 \u067E\u0627\u06CC\u0647");let o=document.querySelector(".credit");o&&(o.innerHTML=Rt()?"Nader Montazeri <span>\xB7</span> Full-stack developer | Banking &amp; fintech":"\u0646\u0627\u062F\u0631 \u0645\u0646\u062A\u0638\u0631\u06CC <span>\xB7</span> \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647\u0654 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 | \u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC \u0648 \u0641\u06CC\u0646\u200C\u062A\u06A9");let a=document.getElementById("legendBtn");a&&(a.textContent=ce().legend);let c=document.getElementById("legendClose");c&&(c.textContent=ce().legendClose);let l=document.getElementById("legendTitle");l&&(l.textContent=Rt()?"Knowledge areas":"\u062D\u0648\u0632\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u0646\u0634");let h=document.getElementById("glossClose");h&&(h.textContent=ce().glossClose);let u=document.querySelector(".gloss-back-text");u&&(u.textContent=ce().back),document.querySelectorAll("#glossBack .back-arrow").forEach(d=>{d.textContent=Rt()?"\u2190":"\u2192"}),Bd(),Ze.length&&ch(Ze[Ze.length-1],!1)}function Cd(i,t=!0){if(!(i!=="en"&&i!=="fa")){Fi=i;try{localStorage.setItem("swebok-lang",i)}catch{}if(Ad(),t&&window.__ready){let e={...ze};(async()=>(Le=!0,await Fl(),await jl(),Gd(gt),e.ka==null?(Ls(0),await Ds(sh(),0)):(Ls(1),await Ds(rh(e.ka),0)),di(),ki([0,150,450,900]),ze={ka:e.ka,p:null},Cs(),e.p&&(ze=e,Cs(),await lh(e)),Le=!1))()}else Cs()}}function Ux(i,t,e){let n=ke.en;return n?i==="root"?n.root:i==="ka"?n.kas&&n.kas[t]:i==="topic"?n.kas&&n.kas[t]&&n.kas[t].topics&&n.kas[t].topics[e]:null:null}function kl(i,t,e,n){if(!Rt())return t;let s=Ux(i,e,n);return s?{what:s.what,why:s.why,ex:s.ex,keys:s.keys,rel:t.rel,sample:s.sample||t.sample}:t}var th=!1,eh=0,aa=()=>th?eh:performance.now()/1e3;window.__manual=i=>{th=i,eh=performance.now()/1e3};var Qo=[],yn={io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),back:i=>1+2.5*Math.pow(i-1,3)+1.5*Math.pow(i-1,2),in:i=>i*i*i};function Cn(i,t,e=yn.io,n=0){return new Promise(s=>Qo.push({t0:aa()+n,dur:i,fn:t,e,res:s}))}function Nx(){let i=aa();for(let t=Qo.length-1;t>=0;t--){let e=Qo[t];if(i<e.t0)continue;let n=Math.min(1,(i-e.t0)/e.dur);e.fn(e.e(n),n),n>=1&&(Qo.splice(t,1),e.res())}}var Id=(i,t,e)=>i+(t-i)*e,Is=document.getElementById("stage"),Fx=matchMedia("(hover: none), (pointer: coarse)").matches||"ontouchstart"in window,_t=Fx||innerWidth<700,Te=new _o({antialias:!_t,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});Te.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Te.shadowMap.enabled=!0;Te.shadowMap.type=_t?Au:vl;Te.toneMapping=Ml;Te.toneMappingExposure=1.05;Te.outputColorSpace=He;Te.domElement.style.touchAction="none";Is.appendChild(Te.domElement);var Hi=new ko;Hi.domElement.className="labels";Hi.domElement.style.pointerEvents="none";Is.appendChild(Hi.domElement);var vn=new xo,we=new Ge(38,1,.1,200),fd=new N(0,0,0),Pe={dist:17,pitch:.62,yaw:0,ty:0},yr=0;vn.add(new Lo(16774122,15258350,1.25));var Bi=new nr(16773344,2.1);Bi.position.set(7,14,9);Bi.castShadow=!0;Bi.shadow.mapSize.set(_t?1024:2048,_t?1024:2048);Object.assign(Bi.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:50});Bi.shadow.bias=-4e-4;Bi.shadow.radius=4;vn.add(Bi);var Pd=new nr(16766692,.7);Pd.position.set(-9,5,-4);vn.add(Pd);var $n=(i,t={})=>new Ci({color:i,roughness:.86,metalness:0,...t}),ca=new X;vn.add(ca);var nh=new _(new ci(9.6,9.9,.34,96),$n(16774384));nh.position.y=-1.05;nh.receiveShadow=!0;ca.add(nh);var la=new _(new ci(3.3,3.45,.22,80),$n(16771554));la.position.y=-.8;la.receiveShadow=!0;la.castShadow=!0;ca.add(la);var ih=new _(new Tn(6.6,.025,8,160),$n(15780288));ih.rotation.x=Math.PI/2;ih.position.y=-.86;ca.add(ih);var ha=new _(new To(40,64),new Io({opacity:.08}));ha.rotation.x=-Math.PI/2;ha.position.y=-1.23;ha.receiveShadow=!0;vn.add(ha);var ua=_t?90:260,jo=new Float32Array(ua*3),Dd=new Float32Array(ua);for(let i=0;i<ua;i++){let t=3+Math.random()*11,e=Math.random()*Math.PI*2;jo[i*3]=Math.cos(e)*t,jo[i*3+1]=-.6+Math.random()*6,jo[i*3+2]=Math.sin(e)*t,Dd[i]=Math.random()*10}var Ld=new Be;Ld.setAttribute("position",new $e(jo,3));var Hx=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ms(i)})(),Yl=new yo(Ld,new Ks({size:.16,map:Hx,color:15242095,transparent:!0,opacity:.55,depthWrite:!1}));vn.add(Yl);var gt=null,Ps=[],My=new Rn(1.05,.46,1.05,4,.2),Ey=new Rn(.8,.34,.8,4,.15),wy=new Rn(2,.85,2,5,.34),Sy=new _n(.5,48,32),by=new _n(1.15,64,48);function Ts(i,t){let e=new Xt(i),n={};return e.getHSL(n),e.setHSL(n.h,n.s,Math.min(.92,Math.max(.05,n.l+t))),e}function Ud(i,t){if(!t)return;i.style.pointerEvents="auto",i.style.cursor="pointer",i.style.webkitTapHighlightColor="transparent",i.style.touchAction="manipulation";let e=0,n=0,s=0,r=null;i.addEventListener("pointerdown",o=>{if(!(o.pointerType==="mouse"&&o.button!==0)){r=o.pointerId,e=o.clientX,n=o.clientY,s=performance.now();try{i.setPointerCapture(o.pointerId)}catch{}}},{passive:!0}),i.addEventListener("pointerup",o=>{if(r!=null&&o.pointerId!==r)return;let a=performance.now()-s,c=o.clientX-e,l=o.clientY-n;r=null,a<=450&&c*c+l*l<=196&&(o.preventDefault(),o.stopPropagation(),t())}),i.addEventListener("pointercancel",()=>{r=null}),i.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation()}),i.addEventListener("pointerenter",()=>i._node&&Jl(i._node)),i.addEventListener("pointerleave",()=>Jl(null))}function hr(i,t,e,n="center",s){let r=document.createElement("div");r.className="lbl clay-plaque "+t,r.innerHTML=i,s!=null&&Xx(r,s),Ud(r,e);let o=new Bo(r);return n==="above"?o.center.set(.5,1):n==="below"?o.center.set(.5,0):n==="on"?o.center.set(.5,.78):o.center.set(.5,.5),o}function ur(i,t,e){let n=i&&i.position?i.position.y:.4,s=typeof _t<"u"&&_t,r;return s?e==="topic"?r=.7:e==="found"?r=.55:e==="center"||e==="core"?r=.95:r=.58:e==="found"?r=.5:e==="topic"?r=.42:r=.34,n+r*(t||1)}var We=!0;function $l(i,t){Ol(i&&i.userData&&i.userData.sign,t)}function gr(i,t){Ol(i&&i.userData&&i.userData.sign,t)}function dr(i,t,e,n,s){if(!i)return null;let r=(i.userData.localW||.5)*.5,o=(i.userData.localH||.2)*.5,a=[[-r,-o,0],[r,-o,0],[-r,o,0],[r,o,0]],c=new N,l=1/0,h=-1/0,u=1/0,d=-1/0,p=[];if(s&&t&&!i.userData.billboardY){let y=t.userData.baseRot||{x:-.42,y:.62,z:.1},g=.38;p.push(t.rotation.y,y.y-g,y.y+g)}else p.push(t?t.rotation.y:0);let m=t?t.rotation.y:0;for(let y of p){t&&s&&!i.userData.billboardY&&(t.rotation.y=y,t.updateMatrixWorld(!0));for(let[g,f,b]of a){if(c.set(g,f,b),i.localToWorld(c),c.project(we),c.z>1)continue;let x=(c.x*.5+.5)*e,v=(-c.y*.5+.5)*n;l=Math.min(l,x),h=Math.max(h,x),u=Math.min(u,v),d=Math.max(d,v)}}return t&&s&&!i.userData.billboardY&&(t.rotation.y=m,t.updateMatrixWorld(!0)),h>l&&d>u?{L:l,R:h,T:u,B:d,w:h-l,h:d-u}:null}function Ox(i,t,e){if(!gt||!gt.center||!gt.center.userData.sign)return;let n=gt.center.userData.sign,s=gt.center.userData.mesh,r=dr(n,s,t,e,!0);if(!r)return;let o=_t?10:12;i.push({el:null,plaque:n,L0:r.L-o,R0:r.R+o,T0:r.T-o,B0:r.B+o,w:r.w+o*2,h:r.h+o*2,cx:0,cy:0,t:0,fixed:!0,isFound:!1,isSign:!0})}function Bx(i,t,e){if(gt){Ox(i,t,e);for(let n of gt.nodes){let s=n.userData&&n.userData.sign;if(!s)continue;let r=n.userData.mesh,o=dr(s,r,t,e,!1);if(!o)continue;let a=_t?6:8,c=n.userData.kind==="found",l=s.userData.localH||.2,u=Math.max(8,o.h)/l,d=(s.userData.nudgeX||0)*u,p=-(s.userData.nudgeY||0)*u,m=o.L-d,y=o.R-d,g=o.T-p,f=o.B-p;i.push({el:null,plaque:s,node:n,L0:m-a,R0:y+a,T0:g-a,B0:f+a,w:y-m+a*2,h:f-g+a*2,cx:d,cy:0,t:p,fixed:!1,isFound:c,isSign:!0})}}}function fr(i,t,e){let n=dd({isMobile:_t,rtl:!Rt(),iconScale:e.iconScale,pickNode:i,primary:e.primary,num:e.num,nodeHex:e.nodeHex,worldH:e.worldH,maxWorldW:e.maxWorldW,localY:e.localY,localZ:e.localZ,dualFace:!!e.dualFace,billboardY:!!e.billboardY,counterTilt:e.counterTilt!==!1,baseRot:t.userData.baseRot,bold:!!e.bold,primSize:e.primSize});if(t.add(n),e.pickNode!==!1){for(let s of n.userData.faces||[])Ps.push(s);n.traverse(s=>{s.isMesh&&s.userData.isPlaqueBody&&Ps.push(s)})}return i.userData.sign=n,i.userData.label=null,n}var kx={"1.1":"\u0645\u0628\u0627\u0646\u06CC","1.2":"\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0646\u06CC\u0627\u0632","1.3":"\u062A\u062D\u0644\u06CC\u0644 \u0646\u06CC\u0627\u0632","1.4":"\u0645\u0634\u062E\u0635\u0647\u200C\u0633\u0627\u0632\u06CC","1.5":"\u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC","1.6":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u0646\u06CC\u0627\u0632","1.7":"\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0645\u0644\u06CC","1.8":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","2.1":"\u0645\u0628\u0627\u0646\u06CC","2.2":"\u062A\u0648\u0635\u06CC\u0641","2.3":"\u0641\u0631\u0627\u06CC\u0646\u062F","2.4":"\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC","3.1":"\u0645\u0628\u0627\u0646\u06CC","3.2":"\u0641\u0631\u0627\u06CC\u0646\u062F\u0647\u0627","3.3":"\u06A9\u06CC\u0641\u06CC\u062A\u200C\u0647\u0627","3.4":"\u0645\u0633\u062A\u0646\u062F\u0633\u0627\u0632\u06CC","3.5":"\u0631\u0627\u0647\u0628\u0631\u062F\u0647\u0627","3.6":"\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u06CC\u0641\u06CC\u062A","4.1":"\u0645\u0628\u0627\u0646\u06CC","4.2":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u0633\u0627\u062E\u062A","4.3":"\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0645\u0644\u06CC","4.4":"\u0641\u0646\u0627\u0648\u0631\u06CC\u200C\u0647\u0627","4.5":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","5.1":"\u0645\u0628\u0627\u0646\u06CC","5.2":"\u0633\u0637\u0648\u062D \u062A\u0633\u062A","5.3":"\u0641\u0646\u0648\u0646 \u062A\u0633\u062A","5.4":"\u0633\u0646\u062C\u0647\u200C\u0647\u0627","5.5":"\u0641\u0631\u0627\u06CC\u0646\u062F \u062A\u0633\u062A","5.6":"\u062A\u0633\u062A \u062F\u0631 \u062A\u0648\u0633\u0639\u0647","5.7":"\u0641\u0646\u0627\u0648\u0631\u06CC \u0646\u0648\u0638\u0647\u0648\u0631","5.8":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","6.1":"\u0645\u0628\u0627\u0646\u06CC","6.2":"\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC","6.3":"\u062A\u062D\u0648\u06CC\u0644","6.4":"\u06A9\u0646\u062A\u0631\u0644","6.5":"\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0645\u0644\u06CC","6.6":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","7.1":"\u0645\u0628\u0627\u0646\u06CC","7.2":"\u0645\u0633\u0627\u0626\u0644 \u06A9\u0644\u06CC\u062F\u06CC","7.3":"\u0641\u0631\u0627\u06CC\u0646\u062F\u0647\u0627","7.4":"\u0641\u0646\u0648\u0646","7.5":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","8.1":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0627\u06CC\u0646\u062F","8.2":"\u0634\u0646\u0627\u0633\u0627\u06CC\u06CC","8.3":"\u06A9\u0646\u062A\u0631\u0644 \u062A\u063A\u06CC\u06CC\u0631","8.4":"\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u0648\u0636\u0639\u06CC\u062A","8.5":"\u0645\u0645\u06CC\u0632\u06CC","8.6":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0646\u062A\u0634\u0627\u0631","8.7":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","9.1":"\u0622\u063A\u0627\u0632 \u062F\u0627\u0645\u0646\u0647","9.2":"\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC","9.3":"\u0627\u062C\u0631\u0627","9.4":"\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC","9.5":"\u062E\u0627\u062A\u0645\u0647","9.6":"\u0627\u0646\u062F\u0627\u0632\u0647\u200C\u06AF\u06CC\u0631\u06CC","9.7":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","10.1":"\u0645\u0628\u0627\u0646\u06CC","10.2":"\u0686\u0631\u062E\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0631","10.3":"\u0628\u0647\u0628\u0648\u062F \u0641\u0631\u0627\u06CC\u0646\u062F","11.1":"\u0645\u062F\u0644\u200C\u0633\u0627\u0632\u06CC","11.2":"\u0627\u0646\u0648\u0627\u0639 \u0645\u062F\u0644","11.3":"\u062A\u062D\u0644\u06CC\u0644 \u0645\u062F\u0644","11.4":"\u0631\u0648\u0634\u200C\u0647\u0627","12.1":"\u0645\u0628\u0627\u0646\u06CC","12.2":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641\u06CC\u062A","12.3":"\u062A\u0636\u0645\u06CC\u0646 \u06A9\u06CC\u0641\u06CC\u062A","12.4":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","13.1":"\u0645\u0628\u0627\u0646\u06CC","13.2":"\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0645\u0646\u06CC\u062A","13.3":"\u0641\u0631\u0627\u06CC\u0646\u062F \u0627\u0645\u0646\u06CC\u062A","13.4":"\u0627\u0645\u0646\u06CC\u062A \u0633\u06CC\u0633\u062A\u0645","13.5":"\u0627\u0628\u0632\u0627\u0631\u0647\u0627","13.6":"\u062F\u0627\u0645\u0646\u0647 \u062E\u0627\u0635","14.1":"\u062D\u0631\u0641\u0647\u200C\u0627\u06CC\u200C\u06AF\u0631\u06CC","14.2":"\u067E\u0648\u06CC\u0627\u06CC\u06CC \u06AF\u0631\u0648\u0647","14.3":"\u0645\u0647\u0627\u0631\u062A \u0627\u0631\u062A\u0628\u0627\u0637\u06CC","15.1":"\u0645\u0628\u0627\u0646\u06CC","15.2":"\u062A\u0635\u0645\u06CC\u0645 \u0645\u0647\u0646\u062F\u0633\u06CC","15.3":"\u0627\u0646\u062A\u0641\u0627\u0639\u06CC","15.4":"\u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC","15.5":"\u0627\u0642\u062A\u0635\u0627\u062F \u062D\u0627\u0644","15.6":"\u0686\u0646\u062F\u0645\u0639\u06CC\u0627\u0631\u0647","15.7":"\u062F\u0627\u0631\u0627\u06CC\u06CC \u0646\u0627\u0645\u0634\u0647\u0648\u062F","15.8":"\u0628\u0631\u0622\u0648\u0631\u062F","15.9":"\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0645\u0644\u06CC","15.10":"\u0645\u0641\u0627\u0647\u06CC\u0645 \u0645\u0631\u062A\u0628\u0637","16.1":"\u0645\u0641\u0627\u0647\u06CC\u0645 \u067E\u0627\u06CC\u0647","16.2":"\u0645\u0639\u0645\u0627\u0631\u06CC \u0631\u0627\u06CC\u0627\u0646\u0647","16.3":"\u0633\u0627\u062E\u062A\u0645\u0627\u0646 \u062F\u0627\u062F\u0647","16.4":"\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0646\u0648\u06CC\u0633\u06CC","16.5":"\u0633\u06CC\u0633\u062A\u0645\u200C\u0639\u0627\u0645\u0644","16.6":"\u067E\u0627\u06CC\u06AF\u0627\u0647\u200C\u062F\u0627\u062F\u0647","16.7":"\u0634\u0628\u06A9\u0647\u200C\u0647\u0627","16.8":"\u0639\u0648\u0627\u0645\u0644 \u0627\u0646\u0633\u0627\u0646\u06CC","16.9":"\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC","17.1":"\u0645\u0646\u0637\u0642 \u067E\u0627\u06CC\u0647","17.2":"\u0641\u0646\u0648\u0646 \u0627\u062B\u0628\u0627\u062A","17.3":"\u0645\u062C\u0645\u0648\u0639\u0647 \u0648 \u062A\u0627\u0628\u0639","17.4":"\u06AF\u0631\u0627\u0641 \u0648 \u062F\u0631\u062E\u062A","17.5":"\u0645\u0627\u0634\u06CC\u0646 \u062D\u0627\u0644\u062A","17.6":"\u06AF\u0631\u0627\u0645\u0631","17.7":"\u0646\u0638\u0631\u06CC\u0647\u0654 \u0627\u0639\u062F\u0627\u062F","17.8":"\u0645\u0628\u0627\u0646\u06CC \u0634\u0645\u0627\u0631\u0634","17.9":"\u0627\u062D\u062A\u0645\u0627\u0644 \u06AF\u0633\u0633\u062A\u0647","17.10":"\u062E\u0637\u0627\u06CC \u0639\u062F\u062F\u06CC","17.11":"\u0633\u0627\u062E\u062A\u0627\u0631 \u062C\u0628\u0631\u06CC","17.12":"\u062D\u0633\u0627\u0628\u0627\u0646","17.13":"\u067E\u06CC\u0634\u0631\u0641\u062A \u062A\u0627\u0632\u0647","18.1":"\u0641\u0631\u0627\u06CC\u0646\u062F \u0645\u0647\u0646\u062F\u0633\u06CC","18.2":"\u0637\u0631\u0627\u062D\u06CC \u0645\u0647\u0646\u062F\u0633\u06CC","18.3":"\u0627\u0646\u062A\u0632\u0627\u0639","18.4":"\u0631\u0648\u0634 \u062A\u062C\u0631\u0628\u06CC","18.5":"\u062A\u062D\u0644\u06CC\u0644 \u0622\u0645\u0627\u0631\u06CC","18.6":"\u0645\u062F\u0644\u200C\u0633\u0627\u0632\u06CC","18.7":"\u0627\u0646\u062F\u0627\u0632\u0647\u200C\u06AF\u06CC\u0631\u06CC","18.8":"\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F\u0647\u0627","18.9":"\u0639\u0644\u062A \u0631\u06CC\u0634\u0647\u200C\u0627\u06CC","18.10":"\u0635\u0646\u0639\u062A \u06F4\u066B\u06F0"},zx={"1.1":"Fundamentals","1.2":"Elicitation","1.3":"Analysis","1.4":"Specification","1.5":"Validation","1.6":"Req. Mgmt","1.7":"Practical","1.8":"Tools","2.1":"Fundamentals","2.2":"Description","2.3":"Process","2.4":"Evaluation","3.1":"Fundamentals","3.2":"Processes","3.3":"Qualities","3.4":"Documentation","3.5":"Strategies","3.6":"Quality Review","4.1":"Fundamentals","4.2":"Managing Build","4.3":"Practical","4.4":"Technologies","4.5":"Tools","5.1":"Fundamentals","5.2":"Test Levels","5.3":"Techniques","5.4":"Test Metrics","5.5":"Test Process","5.6":"In Dev Domains","5.7":"Emerging Tech","5.8":"Tools","6.1":"Fundamentals","6.2":"Planning","6.3":"Delivery","6.4":"Control","6.5":"Practical","6.6":"Tools","7.1":"Fundamentals","7.2":"Key Issues","7.3":"Processes","7.4":"Techniques","7.5":"Tools","8.1":"SCM Process","8.2":"Identification","8.3":"Change Control","8.4":"Status Account","8.5":"Auditing","8.6":"Release Mgmt","8.7":"Tools","9.1":"Initiation","9.2":"Planning","9.3":"Execution","9.4":"Review","9.5":"Closure","9.6":"Measurement","9.7":"Tools","10.1":"Fundamentals","10.2":"Life Cycles","10.3":"Improvement","11.1":"Modeling","11.2":"Model Types","11.3":"Model Analysis","11.4":"Methods","12.1":"Fundamentals","12.2":"Quality Mgmt","12.3":"Assurance","12.4":"Tools","13.1":"Fundamentals","13.2":"Sec. Mgmt","13.3":"Sec. Processes","13.4":"System Sec.","13.5":"Tools","13.6":"Domain Sec.","14.1":"Professionalism","14.2":"Group Dynamics","14.3":"Communication","15.1":"Fundamentals","15.2":"Decision Process","15.3":"For-Profit","15.4":"Nonprofit","15.5":"Present Economy","15.6":"Multi-Attribute","15.7":"Intangibles","15.8":"Estimation","15.9":"Practical","15.10":"Related Concepts","16.1":"Basic Concepts","16.2":"Comp. Arch","16.3":"Data Structures","16.4":"Programming","16.5":"Operating Systems","16.6":"Databases","16.7":"Networks","16.8":"Human Factors","16.9":"AI & ML","17.1":"Basic Logic","17.2":"Proof Techniques","17.3":"Sets & Functions","17.4":"Graph & Tree","17.5":"FSM","17.6":"Grammar","17.7":"Number Theory","17.8":"Counting","17.9":"Probability","17.10":"Numeric Error","17.11":"Algebra","17.12":"Calculus","17.13":"New Advances","18.1":"Eng. Process","18.2":"Eng. Design","18.3":"Abstraction","18.4":"Empirical Methods","18.5":"Statistics","18.6":"Modeling","18.7":"Measurement","18.8":"Standards","18.9":"Root Cause","18.10":"Industry 4.0"};function Nd(i,t){let e=(t&&t.ch!=null?t.ch:"")+"."+i.n,n=(Rt()?zx:kx)[e];if(n)return n;let s=Rt()?i.en:i.fa;return Rt()?s=s.replace(/^(Software\s+)?(Engineering\s+)?/i,"").replace(/^(Requirements|Testing|Test|Maintenance|Operations|Construction|Design|Architecture|Quality|Security|Process)\s+/i,""):s=s.replace(/^(مبانی|ابزارهای|فعالیت‌های|فرایندهای|فنون|مسائل کلیدی)\s+/,"").replace(/^(نیازمندی‌های|تست|نگهداری|عملیات|ساخت|طراحی|معماری|کیفیت|امنیت)\s+/,""),s.trim()||(Rt()?i.en:i.fa)}function _r(i){let t={1:"\u0646\u06CC\u0627\u0632\u0645\u0646\u062F\u06CC",2:"\u0645\u0639\u0645\u0627\u0631\u06CC",3:"\u0637\u0631\u0627\u062D\u06CC",4:"\u0633\u0627\u062E\u062A",5:"\u062A\u0633\u062A",6:"\u0639\u0645\u0644\u06CC\u0627\u062A",7:"\u0646\u06AF\u0647\u062F\u0627\u0631\u06CC",8:"\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC",9:"\u0645\u062F\u06CC\u0631\u06CC\u062A",10:"\u0641\u0631\u0627\u06CC\u0646\u062F",11:"\u0645\u062F\u0644\u200C\u0647\u0627",12:"\u06A9\u06CC\u0641\u06CC\u062A",13:"\u0627\u0645\u0646\u06CC\u062A",14:"\u062D\u0631\u0641\u0647\u200C\u0627\u06CC",15:"\u0627\u0642\u062A\u0635\u0627\u062F",16:"\u0645\u062D\u0627\u0633\u0628\u0627\u062A",17:"\u0631\u06CC\u0627\u0636\u06CC",18:"\u0645\u0647\u0646\u062F\u0633\u06CC"},e={1:"Reqs",2:"Arch",3:"Design",4:"Build",5:"Test",6:"Ops",7:"Maint",8:"Config",9:"Manage",10:"Proc",11:"Models",12:"Qual",13:"Sec",14:"Prac",15:"Econ",16:"Comp",17:"Math",18:"Eng"};return(Rt()?e:t)[i.ch]||(Rt()?i.enShort:i.short)}function Fd(i){return _r(i)}function Vx(i,t,e){let n=vr(i.color),s=_r(i);return`<span class="num" style="background:${i.css}">${De(i.ch)}</span><span class="tx"><b style="color:${n.letter}">${s}</b></span>`}function Gx(i,t,e,n){let s=vr(i.color),r=Nd(t,i);return`<span class="num" style="background:${i.css}">${De(t.n)}</span><span class="tx"><b style="color:${s.letter}">${r}</b></span>`}function Wx(i,t){let e=vr(i.color),n=Fd(i);return`<span class="num" style="background:${i.css}">${De(i.ch)}</span><span class="tx"><b style="color:${e.letter}">${n}</b></span>`}function qo(i){return"#"+((typeof i=="number"?i:15891038)>>>0).toString(16).padStart(6,"0")}function vr(i){let t=Hl(i);return{plaque:qo(t.plaque),letter:qo(t.letter),edge:qo(t.edge),scheme:t.scheme,contrast:t.contrast,node:qo(typeof i=="number"?i:15891038)}}function Xx(i,t){let e=vr(t);return i.style.setProperty("--pl",e.plaque),i.style.setProperty("--ink-pl",e.letter),i.style.setProperty("--edge-pl","rgba(160,130,100,.30)"),i.style.setProperty("--node-pl",e.node),i.dataset.scheme=e.scheme,i.dataset.contrast=e.contrast,e}function Hd(i,t,e,n){let s=vr(e);return`${n!=null?`<span class="num big" style="background:${s.node}">${n}</span>`:""}<span class="ttl" style="color:${s.letter}">${i}</span>`+(t&&!_t?`<span class="en">${t}</span>`:"")}var Od=!1;function Mr(i=!1){let t=document.getElementById("hintbar");t&&(t.classList.add("gone"),i&&(Od=!0))}function qx(i,t,e){let n=document.getElementById("caption");if(!n)return;let s=n.querySelector(".cap-num"),r=n.querySelector(".cap-name");s&&(s.textContent=e||"",s.style.background=t||"#f27a5e",s.style.display=e?"":"none"),r&&(r.textContent=i||""),n.classList.toggle("show",!!i),i&&Mr(!0)}function Rs(){let i=document.getElementById("caption");i&&i.classList.remove("show")}function Yx(i){if(!i||!i.userData)return null;let t=i.userData;if(t.kind==="ka"||t.kind==="found"){let e=xe[t.ka];return e?{title:Rt()?e.en:e.fa,color:e.css,num:De(e.ch)}:null}if(t.kind==="topic"){let e=xe[t.ka],n=e&&e.topics[t.ti];return n?{title:Rt()?n.en:n.fa,color:e.css,num:De(n.n)}:null}if(t.kind==="core"||t.kind==="center"){if(t.kind==="core")return{title:Rt()?ke.root.en:ke.root.fa,color:"#f27a5e",num:""};let e=xe[gt&&gt.ka];return e?{title:Rt()?e.en:e.fa,color:e.css,num:De(e.ch)}:null}return null}function Bd(){let i=document.getElementById("legendList");if(!i)return;let t=xe.map((e,n)=>{let s=Rt()?e.en:e.fa,r=e.foundation?Rt()?"Foundation":"\u067E\u0627\u06CC\u0647":"";return`<button type="button" class="leg-item" data-ka="${n}" style="--c:${e.css}"><span class="num" style="background:${e.css}">${De(e.ch)}</span><span class="leg-tx"><b>${s}</b>${r?`<i>${r}</i>`:""}</span></button>`}).join("");i.innerHTML=t,i.querySelectorAll("[data-ka]").forEach(e=>{e.onclick=()=>{Er(),Le||Mn({ka:+e.dataset.ka,p:null})}})}function $x(){Bd(),document.body.classList.add("legend-open");let i=document.getElementById("legendSheet");i&&i.setAttribute("aria-hidden","false"),Mr(!0)}function Er(){document.body.classList.remove("legend-open");let i=document.getElementById("legendSheet");i&&i.setAttribute("aria-hidden","true")}function Zx(){document.body.classList.contains("legend-open")?Er():$x()}function pr(i,t){let e=new _(new _n(i,8,6),new qn({transparent:!0,opacity:0,depthWrite:!1}));return e.userData.pick=t,e.userData.isHit=!0,Ps.push(e),e}function kd(i,t,e,n){let s=i.clone().lerp(t,.5);s.y+=1.1;let r=new gs(i,s,t),o=new _(new Co(r,40,.022,6,!1),new Ci({color:e,roughness:.7,transparent:!0,opacity:.55}));n.add(o);let a=new _(new _n(.07,12,8),new qn({color:Ts(e,.15)}));return n.add(a),{curve:r,tube:o,pulse:a,off:Math.random()}}function zd(i,t,e,n,s=0){let r=t>=12?.78:0,o=Math.PI*2-r,a=-Math.PI/2+r*.5+(i+.5)/t*o;return new N(Math.cos(a)*e,s,Math.sin(a)*n)}function Vd(){return innerWidth/innerHeight<.8?{rx:7.65,rz:7.95,trx:5.15,trz:6.35,portrait:!0}:{rx:9.2,rz:6.8,trx:7.7,trz:5.8,portrait:!1}}function sh(){let i=new X;vn.add(i);let t=Vd(),e=new X,n=Es(od(),15891038,2.45);n.position.y=.35,e.add(n),n.userData.restY=n.position.y;let s=_t?1.35:1.9,r=new _(new Tn(s,.09,24,120),$n(15183167));r.rotation.x=Math.PI/2.4,r.position.y=.35,r.castShadow=!0,e.add(r);let o=new _(new Tn(s+.3,.06,24,140),$n(10243990));o.rotation.x=Math.PI/1.8,o.rotation.y=.5,o.position.y=.35,o.castShadow=!0,e.add(o);let a=new _(new _n(.16,24,16),$n(3122027));a.castShadow=!0,e.add(a),e.userData={spin:[r,o],orb:a,mesh:n,kind:"core",color:15891038};let c=ke.root.fa,l=ke.root.en,h=Rt()?l:c,u=Rt()?c:l,d=_t?2.7:2.5;if(We){let x=ur(n,d,"core"),v=hr(Hd(h,null,15891038,null),"center clay on-icon rooftop",()=>oh(),"on",15891038);v.position.set(0,x,0),e.add(v),v.element._node=e,e.userData.label=v,e.userData.swayLabel=v}else fr(e,n,{iconScale:d,primary:h,nodeHex:15891038,worldH:_t?1.05:1,maxWorldW:_t?2.7:3.2,localY:1.18,localZ:.55,dualFace:!1,billboardY:!0,counterTilt:!1,bold:!0});i.add(e);let p=pr(_t?1.85:1.55,e);p.position.y=.45,e.add(p);let m=[],y=[],g=xe.filter(x=>!x.foundation);return g.forEach((x,v)=>{let C=zd(v,g.length,t.rx,t.rz),T=new X,R=Es(Vo(x.ch),x.color,_t?2.1:1.85);R.position.y=.45,T.add(R),R.userData.restY=R.position.y,T.position.copy(C),T.userData={kind:"ka",ka:xe.indexOf(x),mesh:R,color:x.color,home:C.clone(),phase:v*.7};let D=_t?_r(x):Rt()?x.enShort:x.short,S=_t?2.1:1.85;if(We){let P=Rt()?x.short:x.enShort,V=ur(R,S,"ka"),G=hr(Vx(x,D,P),"ka clay on-icon rooftop",()=>ia(T),"on",x.color),Z=g.length,k=v===0||v===Z-1,j=(v%2===0?.14:-.14)+(v===0?.1:v===Z-1?-.1:0),F=Math.hypot(C.x,C.z)||1,st=(_t?.18:.1)+(k?_t?.16:.1:0),ct=-C.z/F*j+C.x/F*st,et=C.x/F*j+C.z/F*st;G.position.set(ct,V,et),T.add(G),G.element._node=T,T.userData.label=G}else fr(T,R,{iconScale:S,primary:D,num:De(x.ch),nodeHex:x.color,worldH:_t?.72:.58,maxWorldW:_t?2.05:1.9,localY:.55,localZ:.55,dualFace:!1,billboardY:!0,bold:!1});i.add(T),m.push(T);let E=pr(_t?1.15:.95,T);E.position.y=.45,T.add(E),y.push(kd(new N(0,-.2,0),C.clone().setY(-.1),x.color,i))}),xe.filter(x=>x.foundation).forEach((x,v)=>{let C;if(t.portrait){let P=[new N(-5.15,.05,t.rz+2.55),new N(0,.05,t.rz+3.7),new N(5.15,.05,t.rz+2.55)];C=P[v]?P[v].clone():new N((v-1)*3.4,.05,t.rz+1.7)}else{let V=typeof window<"u"&&window.innerHeight<700?[new N(-9.2,.12,-1.4),new N(-9.2,.12,5.6),new N(9.2,.12,2.1)]:[new N(-7.8,-.05,5.1),new N(0,-.05,7.2),new N(7.8,-.05,5.1)];C=V[v]?V[v].clone():new N((v-1)*5,-.25,-1.5)}let T=new X,R=Es(Vo(x.ch),x.color,_t?1.72:1.35);R.position.y=.32,T.add(R),R.userData.restY=R.position.y,T.position.copy(C),T.userData={kind:"found",ka:xe.indexOf(x),mesh:R,color:x.color,home:C.clone(),phase:v*1.3};let D=Fd(x),S=_t?1.72:1.35;if(We){let P=ur(R,S,"found"),V=hr(Wx(x,D),"found clay on-icon rooftop found-compact",()=>ia(T),"on",x.color);V.position.set(0,P,0),T.add(V),V.element._node=T,T.userData.label=V}else fr(T,R,{iconScale:S,primary:D,num:De(x.ch),nodeHex:x.color,worldH:_t?.68:.55,maxWorldW:_t?1.95:1.8,localY:.48,localZ:.55,dualFace:!1,billboardY:!0,bold:!1});i.add(T),m.push(T);let E=pr(_t?.9:.75,T);E.position.y=.28,T.add(E)}),{group:i,center:e,nodes:m,links:y,level:0,ka:null,extra:[]}}function rh(i){let t=xe[i],e=new X;vn.add(e);let n=Vd(),s=new X,r=Es(Vo(t.ch),t.color,_t?2.2:2.15);r.position.y=.4,s.add(r),r.userData.restY=r.position.y;let o=_t?1.22:1.78,a=new _(new Tn(o,.07,20,120),$n(Ts(t.color,.22)));a.rotation.x=Math.PI/2.2,a.position.y=.2,a.castShadow=!0,s.add(a);let c=new _(new _n(.16,24,16),$n(Ts(t.color,-.18)));c.castShadow=!0,s.add(c),s.userData={spin:[a],orb:c,mesh:r,kind:"center",color:t.color};let l=Rt()?_t?_r(t):t.en:_t?_r(t):t.fa,h=Rt()?t.fa:t.en,u=_t?2.2:2.15;if(We){let b=ur(r,u,"center"),x=hr(Hd(l,null,t.color,De(t.ch)),"center clay on-icon rooftop",()=>oh(),"on",t.color);x.position.set(0,b,0),s.add(x),x.element._node=s,s.userData.label=x,s.userData.swayLabel=x}else fr(s,r,{iconScale:u,primary:l,num:De(t.ch),nodeHex:t.color,worldH:_t?.98:1,maxWorldW:_t?2.55:3,localY:1.1,localZ:.55,dualFace:!1,billboardY:!0,counterTilt:!1,bold:!0});e.add(s);let d=pr(_t?1.55:1.35,s);d.position.y=.35,s.add(d);let p=[],m=[],y=t.topics.length,g,f;return n.portrait?y>=12?(g=4.65,f=6.05):y>=9?(g=4.25,f=5.45):y>=7?(g=4,f=4.95):(g=3.85,f=4.5):(g=n.trx+(y>8?.6:0)+(y>10?.5:0),f=n.trz+(y>8?.5:0)+(y>10?.4:0)),t.topics.forEach((b,x)=>{let v=zd(x,y,g,f),C=new X,R=Ts(t.color,(x%3-1)*.08).getHex(),D=Es(rd(t.ch,b.n),R,_t?1.95:1.7);D.position.y=.42,C.add(D),D.userData.restY=D.position.y;let S=new _(new Tn(_t?.72:.78,.035,12,48),$n(Ts(t.color,.25)));S.rotation.x=Math.PI/2,S.position.y=-.22,C.add(S),C.position.copy(v),C.userData={kind:"topic",ka:i,ti:x,mesh:D,color:R,home:v.clone(),phase:x*.9};let E=_t?Nd(b,t):Rt()?b.en:b.fa,P=_t?1.95:1.7;if(We){let B=Rt()?b.fa:b.en,G=ur(D,P,"topic"),k=hr(Gx(t,b,E,B),"topic clay on-icon rooftop",()=>ia(C),"on",R),j=(y>=10?.05:0)*(x%2===0?1:-1),F=Math.hypot(v.x,v.z)||1,st=-v.z/F*j,ct=v.x/F*j;k.position.set(st,G,ct),C.add(k),k.element._node=C,C.userData.label=k}else fr(C,D,{iconScale:P,primary:E,num:De(b.n),nodeHex:R,worldH:_t?y>=12?.66:.72:.58,maxWorldW:_t?y>=12?1.9:2.1:1.95,localY:.5,localZ:.55,dualFace:!1,billboardY:!0,bold:!1});e.add(C),p.push(C);let V=pr(_t?1.05:.9,C);V.position.y=.4,C.add(V),m.push(kd(new N(0,0,0),v.clone().setY(-.05),t.color,e))}),{group:e,center:s,nodes:p,links:m,level:1,ka:i,extra:[]}}function Gd(i){if(!i)return;let t=new Set,e=new Set;i.group.traverse(n=>{n.isCSS2DObject&&n.element.remove();let s=n.userData||{};if(s.isCenterSignFace||s.isPlaqueFace||s.isPlaqueBody){if(n.material){let r=Array.isArray(n.material)?n.material:[n.material];for(let o of r){for(let a of["map","normalMap","bumpMap"]){let c=o[a];c&&!t.has(c)&&(t.add(c),c.dispose())}o.dispose()}}(n.geometry&&!e.has(n.geometry)&&!s.isPlaqueBody||n.geometry&&s.isPlaqueFace&&!e.has(n.geometry))&&(e.add(n.geometry),n.geometry.dispose())}}),vn.remove(i.group),Ps.length=0}function Jx(i,t){i.group.traverse(e=>{e.isCSS2DObject&&(e.element.style.opacity=t)}),i.center&&gr(i.center,t);for(let e of i.nodes||[])gr(e,t)}function Zl(i,t){i.links.forEach(e=>{e.tube.material.opacity=.55*t,e.pulse.visible=t>.5})}async function Ds(i,t=0){gt=i,i.center.scale.setScalar(Math.max(.001,t)),i.nodes.forEach(n=>{n.scale.setScalar(.001),n.position.set(0,0,0)}),Jx(i,0),Zl(i,0),$l(i.center,0),(i.extra||[]).forEach(n=>{n&&n.element&&(n.element.style.opacity=0)});let e=[Cn(.7,n=>{i.center.scale.setScalar(Id(t,1,n)||.001),$l(i.center,n)},yn.back)];i.nodes.forEach((n,s)=>{e.push(Cn(.75,r=>{n.position.lerpVectors(new N(0,0,0),n.userData.home,r),n.scale.setScalar(Math.max(.001,r));let o=Math.max(0,(r-.5)*2);n.userData.label&&n.userData.label.element&&(n.userData.label.element.style.opacity=o),gr(n,o)},yn.back,.15+s*.045))}),e.push(Cn(.6,n=>{Zl(i,n),(i.extra||[]).forEach(s=>{s&&s.element&&(s.element.style.opacity=n)})},yn.out,.55)),await Promise.all(e)}async function pd(i,t){if(!i)return;let e=[];if(i.nodes.forEach((n,s)=>{if(n===t)return;let r=n.position.clone(),o=n.scale.x;e.push(Cn(.5,a=>{n.position.lerpVectors(r,t?r.clone().multiplyScalar(1.5):new N(0,0,0),a),n.scale.setScalar(Math.max(.001,o*(1-a)));let c=1-a;n.userData.label&&n.userData.label.element&&(n.userData.label.element.style.opacity=c),gr(n,c)},yn.in,s*.02))}),e.push(Cn(.5,n=>{i.center.scale.setScalar(Math.max(.001,1-n)),$l(i.center,Math.max(0,1-n*1.6)),Zl(i,1-n),(i.extra||[]).forEach(s=>{s&&s.element&&(s.element.style.opacity=1-n)})},yn.in)),t){let n=t.position.clone();t.userData.label&&t.userData.label.element&&(t.userData.label.element.style.opacity=0),gr(t,0),e.push(Cn(.8,s=>{t.position.lerpVectors(n,new N(0,.1,0),s),t.position.y+=Math.sin(s*Math.PI)*1.4,t.scale.setScalar(Id(1,1.9,s)),t.rotation.y=s*Math.PI},yn.io))}await Promise.all(e),Gd(i)}var cr=new Uo,md=new pt(-9,-9),Yn=null,Le=!1;function gd(i,t,e){i&&i.traverse(n=>{!n.isMesh||!n.material||!n.material.emissive||(n.userData._em0||(n.userData._em0=n.material.emissive.getHex()),t?n.material.emissive.set(Ts(e,.12)).multiplyScalar(.28):n.material.emissive.setHex(n.userData._em0))})}function Jl(i){Yn!==i&&(Yn&&(gd(Yn.userData.mesh,!1,Yn.userData.color),Yn.userData.label&&Yn.userData.label.element.classList.remove("hover")),Yn=i,i&&(gd(i.userData.mesh,!0,i.userData.color),i.userData.label&&i.userData.label.element.classList.add("hover")),Te.domElement.style.cursor=i?"pointer":"")}function da(i,t){let e=Te.domElement.getBoundingClientRect();md.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),cr.setFromCamera(md,we),cr.params.Points=cr.params.Points||{};let n=cr.intersectObjects(Ps,!0);!n.length&&gt&&(n=cr.intersectObjects([gt.group],!0));for(let s of n){let r=s.object;for(;r;){if(r.userData&&r.userData.pick)return r.userData.pick;r=r.parent}}return null}Te.domElement.addEventListener("pointermove",i=>{i.pointerType!=="touch"&&Jl(da(i.clientX,i.clientY))});var Wd=0,Xd=0,qd=0,Ui=null,na=!1,mr=!1,Kl=0;Te.domElement.addEventListener("pointerdown",i=>{if(!(i.pointerType==="mouse"&&i.button!==0)){Ui=i.pointerId,Wd=i.clientX,Xd=i.clientY,qd=performance.now(),na=!1,mr=!1,Kl=i.clientX;try{Te.domElement.setPointerCapture(i.pointerId)}catch{}if(_t&&gt&&!Le){let t=da(i.clientX,i.clientY),e=t&&Yx(t);e&&qx(e.title,e.color,e.num)}}});Te.domElement.addEventListener("pointermove",i=>{if(Ui==null||i.pointerId!==Ui)return;let t=i.clientX-Wd,e=i.clientY-Xd;if(t*t+e*e>196&&(na=!0),na&&!Le){let n=i.clientX-Kl;Kl=i.clientX,Math.abs(n)>0&&(mr=!0,yr+=n*.0055,_t&&Rs())}});Te.domElement.addEventListener("pointerup",i=>{if(Ui==null||i.pointerId!==Ui)return;let t=performance.now()-qd,e=!na&&!mr&&t<=450,n=mr;Ui=null,mr=!1;try{Te.domElement.releasePointerCapture(i.pointerId)}catch{}if(n){di(),ki([0,200,500]),_t&&Rs();return}if(!e||Le||!gt){_t&&Rs();return}let s=da(i.clientX,i.clientY);if(!s){_t&&Rs();return}i.preventDefault(),Mr(!0),s===gt.center?oh():ia(s)});Te.domElement.addEventListener("pointercancel",()=>{Ui=null,_t&&Rs()});Te.domElement.addEventListener("click",i=>{i.preventDefault()});function oh(){Le||Mn(gt.level===0?{ka:null,p:"about"}:{ka:gt.ka,p:"about"})}function ia(i){if(Le)return;let t=i.userData;t.kind==="ka"||t.kind==="found"?Mn({ka:t.ka,p:null},i):t.kind==="topic"&&Mn({ka:t.ka,p:"t",ti:t.ti})}var ze={ka:null,p:null},ah=i=>i.ka==null?i.p==="about"?"#/about":"#/":`#/ka/${xe[i.ka].ch}`+(i.p==="about"?"/about":i.p==="t"?`/t/${i.ti+1}`:"");function sa(i){let t=(i||"").match(/^#\/(?:(about)|ka\/(\d+)(?:\/(about)|\/t\/(\d+))?)?$/);if(!t)return{ka:null,p:null};if(t[1])return{ka:null,p:"about"};if(!t[2])return{ka:null,p:null};let e=xe.findIndex(n=>n.ch==t[2]);if(e<0)return{ka:null,p:null};if(t[3])return{ka:e,p:"about"};if(t[4]){let n=+t[4]-1;if(xe[e].topics[n])return{ka:e,p:"t",ti:n}}return{ka:e,p:null}}var Yd=i=>i.p?{ka:i.ka,p:null}:i.ka!=null?{ka:null,p:null}:null;async function Mn(i,t,e=!0){e&&history.pushState({d:(history.state&&history.state.d||0)+1},"",ah(i)),await ra(i,t)}window.__nav=i=>Mn(sa(i));window.__navKA=i=>Mn({ka:xe.findIndex(t=>t.ch===i),p:null});window.__setYaw=i=>{yr=i};window.__getYaw=()=>yr;async function ra(i,t){Le=!0,Rs(),Er(),Mr(!0);let e=ze;if(ze=i,e.ka!==i.ka){if(e.p&&await jl(),i.ka==null)await pd(gt,null),Ls(0),await Ds(sh(),0);else{let n=t&&gt&&gt.level===0;await pd(gt,n?t:null),Ls(1),await Ds(rh(i.ka),n?1:0)}di(),ki([0,150,450,900])}Cs(),i.p?await lh(i):e.p&&await jl(),Le=!1}window.addEventListener("popstate",()=>{Le?setTimeout(()=>ra(sa(location.hash)),900):ra(sa(location.hash))});function fa(){if(ef()){Oi();return}if(Le)return;let i=Yd(ze);i&&(history.state&&history.state.d>0?history.back():(history.replaceState({d:0},"",ah(i)),ra(i)))}window.__back=fa;document.addEventListener("keydown",i=>{if(i.key==="Escape"||i.key==="Backspace"&&!/input|textarea/i.test(i.target.tagName)){if(ef()){i.key==="Escape"&&Ze.length>1?of():Oi(),i.preventDefault();return}fa()}});var ta=0;function Ls(i){ta=i,yr=0}var Yo=0,_d=0,Ql=!0,$o={dist:null,ty:null},lr=!0,bs=!1,Zo=0,zl=[];function Kx(){Ql=!0}function $d(){lr=!0,bs=!1}window.__markLabelsDirty=$d;function di(){Kx(),$d()}function ki(i=[0,120,400,800]){for(let t of zl)clearTimeout(t);zl.length=0;for(let t of i)zl.push(setTimeout(()=>{di()},t))}function Zd(){let i=Is.clientWidth,t=Is.clientHeight;Te.setSize(i,t),Hi.setSize(i,t),we.aspect=i/t;let e=i/t;we.fov=e<.8?46:36,we.updateProjectionMatrix(),di(),ki()}window.addEventListener("resize",()=>{Zd()});var Jd=new pt,An=new pt,Kd=0;window.addEventListener("pointermove",i=>{Jd.set(i.clientX/innerWidth-.5,i.clientY/innerHeight-.5),Kd=performance.now()});function xr(){let i=innerWidth,t=innerHeight,e=8,n=t-8;if(_t){let s=document.querySelector("header.top"),r=document.querySelector("footer.credit"),o=document.getElementById("hintbar"),a=document.getElementById("crumbs");if(a){let l=a.getBoundingClientRect();l.height>0&&l.bottom>0&&(e=Math.max(e,l.bottom+12))}else if(s){let l=s.getBoundingClientRect();l.height>0&&(e=Math.min(l.bottom+12,t*.22))}if(s){let l=s.getBoundingClientRect(),h=Math.min(Math.max(l.bottom,e),t*.22);e=Math.max(e>8?Math.min(e,t*.22):h,48)}let c=t;if(o&&getComputedStyle(o).display!=="none"){let h=o.getBoundingClientRect();h.height>0?c=Math.min(c,h.top):c=Math.min(c,t-56)}if(r){let l=r.getBoundingClientRect();l.height>0?c=Math.min(c,l.top):c=Math.min(c,t-28)}n=c-12}return{top:e,bot:n,left:8,right:i-8,W:i,H:t}}var Qt=new N,en=[];function Qx(){if(en.length=0,!gt)return en;let i=(t,e)=>{if(!t)return;let n=t.userData&&t.userData.mesh;if(n){n.getWorldPosition(Qt),n.userData&&n.userData.restY!=null&&n.parent&&(Qt.set(n.position.x,n.userData.restY,n.position.z),n.parent.localToWorld(Qt));let o=n.scale&&n.scale.x||1;en.push(Qt.x,Qt.y-.35*o,Qt.z),en.push(Qt.x,Qt.y+.95*o,Qt.z),en.push(Qt.x-.55*o,Qt.y+.4*o,Qt.z),en.push(Qt.x+.55*o,Qt.y+.4*o,Qt.z)}else t.getWorldPosition(Qt),en.push(Qt.x,Qt.y,Qt.z);let s=t.userData&&t.userData.label;s&&s.element&&s.element.style.display!=="none"&&!s.element.classList.contains("mob-hide")&&(s.getWorldPosition(Qt),en.push(Qt.x,Qt.y,Qt.z));let r=t.userData&&t.userData.sign;if(r){r.getWorldPosition(Qt);let o=(r.userData.signH||.4)*.55,a=(r.userData.signW||1.2)*.55;en.push(Qt.x,Qt.y+o,Qt.z),en.push(Qt.x-a,Qt.y,Qt.z),en.push(Qt.x+a,Qt.y,Qt.z)}};i(gt.center,!0);for(let t of gt.nodes)i(t,!1);return en}function Li(i,t,e,n){we.position.set(Math.sin(e)*Math.cos(t)*i,Math.sin(t)*i,Math.cos(e)*Math.cos(t)*i),fd.set(0,n,0),we.lookAt(fd),we.updateMatrixWorld(!0)}function Jo(i,t){let e=innerWidth,n=innerHeight,s=1e9,r=-1e9,o=1e9,a=-1e9,c=0,l=en;for(let h=0;h<l.length;h+=3){if(Qt.set(l[h],l[h+1],l[h+2]).project(we),Qt.z>1.05)continue;let u=(Qt.x*.5+.5)*e,d=(-Qt.y*.5+.5)*n;s=Math.min(s,u-t),r=Math.max(r,u+t),o=Math.min(o,d-i),a=Math.max(a,d+36),c++}return c?{minX:s,maxX:r,minY:o,maxY:a}:null}function jx(i,t,e,n){let s=xr();if(!gt||!_t||s.bot-s.top<120)return{dist:i,ty:n,safe:s};gt.group&&gt.group.updateMatrixWorld(!0),Qx();let r=30,o=_t?56:50,a=i;Li(a,t,e,n);let l=(-new N(0,0,0).project(we).y*.5+.5)*innerHeight;Li(a,t,e,n+.5);let d=((-new N(0,0,0).project(we).y*.5+.5)*innerHeight-l)/.5,p=i*.9,m=i*(_t?1.55:2.1),y={dist:i*1.12,ty:n};for(let f=0;f<16;f++){let b=(p+m)*.5;Li(b,t,e,n);let x=Jo(r,o);if(!x){m=b;continue}let v=(x.minY+x.maxY)*.5,C=(s.top+s.bot)*.5,T=n;if(Math.abs(d)>.001&&(T=n+(C-v)/d),T=Math.max(n-2.5,Math.min(n+2.5,T)),Li(b,t,e,T),x=Jo(r,o),!x){m=b;continue}let R=x.minY>=s.top-1&&x.maxY<=s.bot+1&&x.minX>=s.left-2&&x.maxX<=s.right+2;y={dist:b,ty:T},R?m=b:p=b}Li(y.dist,t,e,y.ty);let g=Jo(r,o);if(g&&(g.minY<s.top-2||g.maxY>s.bot+2||g.minX<s.left-4||g.maxX>s.right+4)&&(y.dist=Math.min(i*(_t?1.58:2.2),Math.max(y.dist,p)*1.04),Li(y.dist,t,e,n),g=Jo(r,o),g&&Math.abs(d)>.001)){let f=(g.minY+g.maxY)*.5,b=(s.top+s.bot)*.5;y.ty=Math.max(n-2.5,Math.min(n+2.5,n+(b-f)/d))}return y.safe=s,y}function ty(i,t){let n=we.aspect<.8,s=document.body.classList.contains("panel-open"),r=n?20.2:19.4,o=n?.86:.48;ta===1&&(r=17.4,o=n?.82:.46),n&&s&&(r*=1.08);let a=n&&s?-4.8:n?ta===1?-.35:-.15:.6,c=!_t&&performance.now()-Kd<140?Jd:{x:0,y:0},l=Math.min(1,t*8);An.x+=(c.x-An.x)*l,An.y+=(c.y-An.y)*l,Math.abs(An.x)<.001&&(An.x=0),Math.abs(An.y)<.001&&(An.y=0);let h=yr+An.x*.08,u=o-An.y*.04,d=r,p=a;if(_t&&n&&gt&&!s){if(Ql||$o.dist==null){let b=jx(r,u,h,a);$o={dist:b.dist,ty:b.ty},Ql=!1,window.__fit={dist:b.dist,ty:b.ty,safe:b.safe,base:r}}d=$o.dist,p=$o.ty}let m=Math.min(1,t*3.2),y=Math.min(1,t*2.5);Pe.dist=Math.abs(d-Pe.dist)<.002?d:Pe.dist+(d-Pe.dist)*m,Pe.pitch=Math.abs(u-Pe.pitch)<5e-4?u:Pe.pitch+(u-Pe.pitch)*y,Pe.ty=Math.abs(p-Pe.ty)<.002?p:Pe.ty+(p-Pe.ty)*m,Li(Pe.dist,Pe.pitch,h,Pe.ty),window.__cam={dist:Pe.dist,pitch:Pe.pitch,yaw:h,ty:Pe.ty,lvl:ta},_d=!n&&s?-Math.min(560,innerWidth*.42)/2:0,Yo+=(_d-Yo)*Math.min(1,t*4);let g=Is.clientWidth,f=Is.clientHeight;Math.abs(Yo)>.5?we.setViewOffset(g,f,-Yo,0,g,f):we.clearViewOffset()}var xd=aa();function Qd(){let i=aa(),t=Math.min(.05,Math.max(0,i-xd));if(xd=i,Nx(),gt){let n=gt.center.userData;n.spin.forEach((o,a)=>o.rotation.z=i*(.25+a*.12)*(a%2?-1:1)),n.orb.position.set(Math.cos(i*.8)*1.75,.35+Math.sin(i*1.6)*.3,Math.sin(i*.8)*1.75);let s=n.mesh.userData.restY!=null?n.mesh.userData.restY:n.kind==="core"?.5:.4;n.mesh.userData.restY==null&&(n.mesh.userData.restY=s),n.mesh.position.y=s+Math.sin(i*1.1)*.06;let r=n.mesh.userData.baseRot||{x:-.32,y:.55,z:.08};n.mesh.rotation.set(r.x,r.y+Math.sin(i*.45)*.38,r.z),gt.nodes.forEach(o=>{let a=o.userData;if(o.scale.x>.98&&o.scale.x<1.5){let c=Yn===o?1.12:1;if(o.scale.setScalar(o.scale.x+(c-o.scale.x)*Math.min(1,t*10)),o.position.y=a.home.y+(Yn===o?.15:0),a.mesh){a.mesh.userData.restY==null&&(a.mesh.userData.restY=a.mesh.position.y);let l=_t?0:Math.sin(i*1.2+a.phase)*.08;a.mesh.position.y=a.mesh.userData.restY+l;let h=a.mesh.userData.baseRot||{x:-.32,y:.55,z:.08};a.mesh.rotation.set(h.x,h.y+Math.sin(i*.5+a.phase)*.35,h.z)}}}),gt.links.forEach(o=>{let a=(i*.22+o.off)%1;o.curve.getPoint(a,o.pulse.position)})}let e=Yl.geometry.attributes.position;for(let n=0;n<ua;n++)e.array[n*3+1]+=Math.sin(i*.5+Dd[n])*.0016;if(e.needsUpdate=!0,Yl.rotation.y=i*.012,ty(i,t||.016),gt)if(We){if(gt.center&&gt.center.userData.swayLabel){let n=gt.center.userData.mesh,s=gt.center.userData.swayLabel.element;if(n&&s){let r=n.rotation.y||0;r=(r+Math.PI)%(Math.PI*2)-Math.PI;let o=20,a=Math.max(-o,Math.min(o,r*(180/Math.PI)*.55));s._swayDeg=a,s.style.setProperty("--sway",a.toFixed(2)+"deg")}}}else{gt.center&&gt.center.userData.sign&&Bl(gt.center.userData.sign,we);for(let n of gt.nodes)n.userData&&n.userData.sign&&Bl(n.userData.sign,we)}iy(t),Te.render(vn,we),Hi.render(vn,we),ny(),ey()}function ey(){if(!We||!gt||!gt.center||!gt.center.userData.swayLabel)return;let i=gt.center.userData.swayLabel.element;if(!i||i._swayDeg==null)return;let e=(i.style.transform||"").replace(/\s*perspective\([^)]*\)\s*/g," ").replace(/\s*rotateY\([^)]*\)\s*/g," ").trim();i.style.transform=e+" perspective(380px) rotateY("+i._swayDeg.toFixed(2)+"deg)"}var Ty=new N;function ny(){let i=Hi&&Hi.domElement;if(!i)return;let t=i.children;for(let e=0;e<t.length;e++){let n=t[e],s=n.style&&n.style.transform;!s||s.indexOf("px")<0||(n.style.transform=s.replace(/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/g,(r,o,a)=>"translate("+Math.round(+o)+"px,"+Math.round(+a)+"px)"))}}function iy(i){if(!gt)return;let t=9,e=xr(),n=e.top,s=Math.max(8,e.H-e.bot),r=e.W,o=e.H,a=gt.nodes.map(h=>h.userData.label).filter(Boolean);gt.center&&gt.center.userData.label&&a.push(gt.center.userData.label);for(let h of gt.extra||[])a.push(h);if(lr){for(let x of a){let v=x&&x.element;!v||v.style.display==="none"||(v._fade=1,v.style.opacity="1",v.style.visibility="visible",v.style.pointerEvents="auto")}let h=[];for(let x of a){let v=x&&x.element;if(!v||!v.isConnected||v.style.display==="none")continue;let C=v.getBoundingClientRect();if(!C.width||!C.height)continue;let T=v._dx||0,R=v._dy||0,D=C.left-T,S=C.right-T,E=C.top-R,P=C.bottom-R,V=0,B=0;D<t?V=t-D:S>r-t&&(V=r-t-S),E<n?B=n-E:P>o-s&&(B=o-s-P);let G=v._node,Z=!!(G&&G.userData&&G.userData.kind==="found"),k=!!(G&&G.userData&&(G.userData.kind==="core"||G.userData.kind==="center"));h.push({el:v,plaque:null,node:G,L0:D,R0:S,T0:E,B0:P,w:S-D,h:P-E,cx:V,cy:B,t:B,fixed:k,isFound:Z})}if(We||Bx(h,r,o),We&&h.length<a.length){lr=!0,bs=!1;return}h.sort((x,v)=>x.T0-v.T0||x.L0-v.L0);let u=_t&&We?12:10,d=4,p=r*.5,m=o*.48,y=_t?46:50;for(let x=0;x<72;x++){for(let v=0;v<h.length;v++)for(let C=v+1;C<h.length;C++){let T=h[v],R=h[C],D=T.L0+T.cx,S=T.R0+T.cx,E=R.L0+R.cx,P=R.R0+R.cx;if(S+d<=E||P+d<=D)continue;let V=T.T0+T.t,B=V+T.h,G=R.T0+R.t,Z=G+R.h,k=Math.min(B,Z)-Math.max(V,G)+u;if(k<=0)continue;let j=Math.min(S,P)-Math.max(D,E)+d,F=!!(T.node&&T.node.userData&&(T.node.userData.kind==="core"||T.node.userData.kind==="center")),st=!!(R.node&&R.node.userData&&(R.node.userData.kind==="core"||R.node.userData.kind==="center")),ct=(et,xt,Ut)=>{if(et.fixed||et.node&&(et.node.userData.kind==="core"||et.node.userData.kind==="center"))return;let J=xt-p,it=Ut-m,Mt=Math.hypot(J,it)||1;J/=Mt,it/=Mt;let ft=Math.min(_t?26:34,Math.max(8,j*.45+k*.25));et.cx+=J*ft,et.t+=it*ft*.18};if(F&&!st){ct(R,(E+P)*.5,(G+Z)*.5);let et=(V+B)*.5;(G+Z)*.5<=et?R.t-=Math.max(k*.65,10):R.t+=Math.max(k*.65,10)}else if(st&&!F){ct(T,(D+S)*.5,(V+B)*.5);let et=(G+Z)*.5;(V+B)*.5<=et?T.t-=Math.max(k*.65,10):T.t+=Math.max(k*.65,10)}else if(T.fixed&&!R.fixed)ct(R,(E+P)*.5,(G+Z)*.5);else if(R.fixed&&!T.fixed)ct(T,(D+S)*.5,(V+B)*.5);else if(T.isFound&&!R.isFound){let xt=(D+S)*.5<p?-1:1;T.cx+=xt*Math.max(22,j*1+12),T.t+=Math.max(k*.9,12),R.t-=Math.min(k*.3,10)}else if(R.isFound&&!T.isFound){let xt=(E+P)*.5<p?-1:1;R.cx+=xt*Math.max(22,j*1+12),R.t+=Math.max(k*.9,12),T.t-=Math.min(k*.3,10)}else{let et=!!(T.el&&T.el.classList.contains("under")),xt=!!(R.el&&R.el.classList.contains("under"));if(et&&!xt)T.t+=k*.35,R.t-=k*.25;else if(xt&&!et)R.t+=k*.35,T.t-=k*.25;else{let Ut=((D+S)*.5+(E+P)*.5)*.5;(D+S)*.5<Ut?(T.cx-=Math.max(j*.8,11),R.cx+=Math.max(j*.8,11)):(T.cx+=Math.max(j*.8,11),R.cx-=Math.max(j*.8,11)),T.t-=k*.3,R.t+=k*.3}ct(T,(D+S)*.5,(V+B)*.5),ct(R,(E+P)*.5,(G+Z)*.5)}}for(let v of h){if(v.fixed){v.cx=0,v.t=0;continue}let C=v.isFound?y+(_t?28:56):y,T=v.isFound?_t?44:64:34;v.cx=Math.max(-C,Math.min(C,v.cx)),v.t=Math.max(-T,Math.min(T,v.t))}}let g=5;for(let x=0;x<8;x++){let v=0;for(let C=0;C<h.length;C++)for(let T=C+1;T<h.length;T++){let R=h[C],D=h[T];if(R.fixed&&D.fixed)continue;let S=R.L0+R.cx,E=R.R0+R.cx,P=D.L0+D.cx,V=D.R0+D.cx;if(E+g<=P||V+g<=S)continue;let B=R.T0+R.t,G=B+R.h,Z=D.T0+D.t,k=Z+D.h,j=Math.min(G,k)-Math.max(B,Z)+g;if(j<=0)continue;let F=Math.min(E,V)-Math.max(S,P)+g,st=R.fixed||R.node&&(R.node.userData.kind==="core"||R.node.userData.kind==="center"),ct=D.fixed||D.node&&(D.node.userData.kind==="core"||D.node.userData.kind==="center"),et=Math.max(j*.6,4),xt=Math.max(F*.6,4);if(st&&!ct)(Z+k)*.5<=(B+G)*.5?D.t-=et:D.t+=et,D.cx+=((P+V)*.5<p?-1:1)*xt*.5,v++;else if(ct&&!st)(B+G)*.5<=(Z+k)*.5?R.t-=et:R.t+=et,R.cx+=((S+E)*.5<p?-1:1)*xt*.5,v++;else if(R.isFound!==D.isFound){let Ut=R.isFound?R:D,J=R.isFound?D:R;Ut.t+=et,J.t-=et*.35,Ut.cx+=((Ut.L0+Ut.R0)*.5+Ut.cx<p?-1:1)*xt*.7,v++}else if(R.isFound&&D.isFound){let Ut=(S+E)*.5,J=(P+V)*.5,it=Math.max(xt*1.35,10);Ut<=J?(R.cx-=it,D.cx+=it):(R.cx+=it,D.cx-=it),R.t-=et*.55,D.t+=et*.55,v++}else(S+E)*.5<=(P+V)*.5?(R.cx-=xt,D.cx+=xt):(R.cx+=xt,D.cx-=xt),R.t-=et*.45,D.t+=et*.45,v++}for(let C of h){if(C.fixed){C.cx=0,C.t=0;continue}let T=C.isFound?y+(_t?40:60):y+12,R=C.isFound?_t?56:68:_t?42:38;C.cx=Math.max(-T,Math.min(T,C.cx)),C.t=Math.max(-R,Math.min(R,C.t));let D=C.L0+C.cx,S=C.R0+C.cx,E=C.T0+C.t,P=C.T0+C.h+C.t;D<t&&(C.cx+=t-D),S>r-t&&(C.cx-=C.R0+C.cx-(r-t)),E<n&&(C.t+=n-E),P>o-s&&(C.t-=C.T0+C.h+C.t-(o-s))}if(!v)break}let f=Math.max(t,e.left||t),b=Math.min(r-t,e.right!=null?e.right:r-t);for(let x of h){let v=x.cx,C=x.t;if(x.fixed)v=0,C=0;else{let E=x.isFound?_t?72:100:_t?64:52,P=x.isFound?_t?64:68:_t?44:38;v=Math.max(-E,Math.min(E,v)),C=Math.max(-P,Math.min(P,C))}let T=x.L0+v,R=x.R0+v,D=x.T0+C,S=x.T0+x.h+C;if(x.fixed||(T<f&&(v+=f-T),R>b&&(v-=x.R0+v-b),D<n&&(C+=n-D),S>o-s&&(C-=x.T0+x.h+C-(o-s)),T=x.L0+v,R=x.R0+v,D=x.T0+C,S=x.T0+x.h+C,T<f&&(v+=f-T),R>b&&(v-=x.R0+v-b)),x.el){let E=Math.round(v),P=Math.round(C);x.fixed||(x.L0+E<f&&(E+=Math.ceil(f-(x.L0+E))),x.R0+E>b&&(E-=Math.ceil(x.R0+E-b)),x.T0+P<n&&(P+=Math.ceil(n-(x.T0+P))),x.T0+x.h+P>o-s&&(P-=Math.ceil(x.T0+x.h+P-(o-s))));let V=x.L0+E<f+2||x.R0+E>b-2||x.T0+P<n+2||x.T0+x.h+P>o-s-2;(x.el._tgtDx==null||V||Math.hypot(E-x.el._tgtDx,P-(x.el._tgtDy||0))>=1.5)&&(x.el._tgtDx=E,x.el._tgtDy=P)}else if(x.plaque&&!x.fixed){let E=x.plaque.userData.localH||.2,P=Math.max(8,x.h),V=E/P,B=v*V,G=-C*V,Z=x.plaque.userData.nudgeX||0,k=x.plaque.userData.nudgeY||0,j=_t?1.65:1.55,F=_t?-1.55:-1.2,st=_t?1.55:1.35,ct=Math.max(-j,Math.min(j,B)),et=Math.max(F,Math.min(st,G));x.plaque.userData.nudgeX=Z+(ct-Z)*.82,x.plaque.userData.nudgeY=k+(et-k)*.82}}for(let x of h)!x.el||x.el._tgtDx==null||(x.el._dx=x.el._tgtDx,x.el._dy=x.el._tgtDy,x.el.style.marginLeft=x.el._tgtDx+"px",x.el.style.marginTop=x.el._tgtDy+"px");{let x=h.filter(C=>C.el&&C.el.style.display!=="none"&&C.el._fade!==0),v=C=>C.fixed||C.node&&(C.node.userData.kind==="core"||C.node.userData.kind==="center")?5:C.isFound||C.node&&C.node.userData&&C.node.userData.kind==="ka"?4:C.el.classList.contains("rooftop")?3:C.el.classList.contains("topic")?2:C.el.classList.contains("under")?1:2;for(let C=0;C<4;C++){let T=0;for(let R=0;R<x.length;R++)for(let D=R+1;D<x.length;D++){let S=x[R],E=x[D];if(S.el._fade===0||E.el._fade===0)continue;let P=S.el._tgtDx||0,V=S.el._tgtDy||0,B=E.el._tgtDx||0,G=E.el._tgtDy||0,Z=S.L0+P,k=S.R0+P,j=E.L0+B,F=E.R0+B;if(k<=j+1||F<=Z+1)continue;let st=S.T0+V,ct=st+S.h,et=E.T0+G,xt=et+E.h;if(Math.min(ct,xt)-Math.max(st,et)<=1)continue;let Ut=v(S),J=v(E);if(Ut>=4&&J>=4)continue;let it=Ut<=J?S:E;v(it)>=4||(it.el._fade=0,it.el.style.opacity="0",it.el.style.visibility="hidden",it.el.style.pointerEvents="none",T++)}if(!T)break}for(let C of x){if(!C.el||C.el._fade===0||C.fixed||C.isFound||C.node&&C.node.userData&&C.node.userData.kind==="ka")continue;let T=C.el._tgtDx||0,R=C.el._tgtDy||0,D=C.L0+T,S=C.R0+T,E=C.T0+R,P=C.T0+C.h+R;(D<t-1||S>r-t+1||E<n-1||P>o-s+1)&&(C.el._fade=0,C.el.style.opacity="0",C.el.style.visibility="hidden",C.el.style.pointerEvents="none")}}lr=!1,bs=!1}let c=Math.min(1,(i||.016)*18),l=0;for(let h of a){let u=h&&h.element;if(!u||u._tgtDx==null||u.style.display==="none")continue;let d=u._dx||0,p=u._dy||0,m=d+(u._tgtDx-d)*c,y=p+(u._tgtDy-p)*c;Math.abs(u._tgtDx-m)<.5&&Math.abs(u._tgtDy-y)<.5&&(m=u._tgtDx,y=u._tgtDy),l=Math.max(l,Math.abs(m-d),Math.abs(y-p)),u._dx=m,u._dy=y,u.style.marginLeft=Math.round(m)+"px",u.style.marginTop=Math.round(y)+"px"}l<.5&&(bs=!0);{let u=xr(),d=Math.max(8,u.left||8),p=Math.min(u.W-8,u.right!=null?u.right:u.W-8),m=u.top,y=Math.max(8,u.H-u.bot);for(let g of a){let f=g&&g.element;if(!f||!f.isConnected||f.style.display==="none"||f.classList.contains("center"))continue;let b=f.getBoundingClientRect();if(!b.width||!b.height)continue;let x=0,v=0;if(b.left<d&&(x+=d-b.left),b.right>p&&(x-=b.right-p),b.top<m&&(v+=m-b.top),b.bottom>u.H-y&&(v-=b.bottom-(u.H-y)),x===0&&v===0)continue;let C=b.left+x,T=b.right+x;C<d&&(x+=d-C),T>p&&(x-=b.right+x-p);let R=f._dx||0,D=f._dy||0,S=Math.round(R+x),E=Math.round(D+v);f._dx=S,f._dy=E,f._tgtDx=S,f._tgtDy=E,f.style.marginLeft=S+"px",f.style.marginTop=E+"px"}}bs&&(Zo=(Zo||0)+(i||.016),Zo>(We?.18:.22)&&(Zo=0,lr=!0,bs=!1))}function jd(){th||Qd(),requestAnimationFrame(jd)}window.__step=i=>{eh+=i,Qd()};var pa=Array.isArray(ke.glossary)?ke.glossary:[],ea=Object.fromEntries(pa.map(i=>[i.id,i])),yd=ke.glossaryDiagrams||{},Ze=[],Vl={lang:null,list:[]};function tf(){if(Vl.lang===Fi)return Vl.list;let i=[];for(let t of pa){let e=Rt()?t.aliasesEn||[]:t.aliasesFa||[];for(let n of e)!n||n.length<2||i.push({alias:n,id:t.id,norm:n.replace(/\u200c/g,"")})}return i.sort((t,e)=>e.norm.length-t.norm.length||e.alias.length-t.alias.length),Vl={lang:Fi,list:i},i}function vd(i){return!i||/[\s.,;:!?()\[\]{}«»"'\-\/\\|@#$%^*=+<>~`،؛؟٪٫٬ـ]/.test(i)?!1:/[A-Za-z0-9_\u0600-\u06FF\u200c]/.test(i)}function As(i,t,e){if(!i||!pa.length)return i;let n=tf(),s=String(i).split(/(<[^>]+>)/);for(let r=0;r<s.length;r++){let o=s[r];if(!o||o.charAt(0)==="<")continue;let a=o,c=[],l=[];for(let m=0;m<a.length;m++)a[m]!=="\u200C"&&(l.push(m),c.push(Rt()?a[m].toLowerCase():a[m]));l.push(a.length);let h=c.join(""),u=0,d=[],p=0;for(;u<h.length;){let m=null;for(let g of n){if(t.has(g.id)||g.id===e)continue;let f=Rt()?g.norm.toLowerCase():g.norm;if(!f||u+f.length>h.length||h.substr(u,f.length)!==f)continue;let b=l[u],x=l[u+f.length];if(!(b>0&&vd(a[b-1]))&&!(x<a.length&&vd(a[x]))){m={id:g.id,o0:b,o1:x,nlen:f.length};break}}if(!m){u++;continue}m.o0>p&&d.push(a.slice(p,m.o0));let y=a.slice(m.o0,m.o1);d.push('<button type="button" class="gterm" data-gid="'+m.id+'">'+y+"</button>"),t.add(m.id),p=m.o1,u+=m.nlen}p<a.length&&d.push(a.slice(p)),s[r]=d.length?d.join(""):a}return s.join("")}function Ss(i,t){return As(ry(i),t)}function ef(){return document.body.classList.contains("gloss-open")}function nf(i,t){if(!ea[i])return;t!==!1&&(!Ze.length||Ze[Ze.length-1]!==i)&&Ze.push(i),ch(i,!0),document.body.classList.add("gloss-open");let n=document.getElementById("glossSheet");n&&n.setAttribute("aria-hidden","false")}function Gl(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function sf(i,t,e){if(!i)return"";let n=Rt()?i.enQ||i.q:i.faQ||i.q,s=Rt()?i.enSteps||i.steps||[]:i.faSteps||i.steps||[],r=Rt()?i.enAns||i.ans:i.faAns||i.ans,o=i.viz||"";if(!n&&!s.length&&!r)return"";let a=t||new Set,c="";return s.length&&(c='<ol class="gsteps">'+s.map(l=>"<li>"+As(Gl(l),a,e)+"</li>").join("")+"</ol>"),'<div class="gsample"><span class="glab">'+ce().glossSample+"</span>"+(n?'<p class="gq">'+As(Gl(n),a,e)+"</p>":"")+o+c+(r?'<p class="gans"><b>'+ce().glossAnswer+":</b> "+As(Gl(r),a,e)+"</p>":"")+"</div>"}function Wl(i,t,e,n){return t?'<div class="gsec"><h4>'+i+'</h4><p class="gbody">'+As(t,e,n)+"</p></div>":""}function ch(i,t){let e=ea[i];if(!e)return;let n=Rt()?e.en:e.fa,s=document.getElementById("glossTitle"),r=document.getElementById("glossBody"),o=document.getElementById("glossBack");s&&(s.textContent=n),o&&(o.hidden=Ze.length<=1);let a=new Set([i]),c=Rt()?e.enDef||e.enExp:e.faDef||e.faExp,l=Rt()?e.enHow||"":e.faHow||"",h=Rt()?e.enWhy||"":e.faWhy||"",u=Rt()?e.enEx:e.faEx,d=e.diagram&&yd[e.diagram]?yd[e.diagram]:"",p="";p+=Wl(ce().glossDef,c,a,i),p+=Wl(ce().glossHow,l,a,i),p+=Wl(ce().glossWhy,h,a,i),(u||d)&&(p+='<div class="gloss-ex"><span class="glab">'+ce().glossEx+"</span>"+(d||"")+(u?'<p class="gextext">'+As(u,a,i)+"</p>":"")+"</div>"),p+=sf(e.sample,a,i);let m=(e.related||[]).filter(y=>ea[y]&&y!==i);m.length&&(p+='<div class="gloss-rel"><h4>'+ce().glossRelated+'</h4><div class="chips">'+m.map(y=>{let g=ea[y],f=Rt()?g.en:g.fa;return'<button type="button" class="gchip" data-gid="'+y+'">'+f+"</button>"}).join("")+"</div></div>"),r.innerHTML=p,r.scrollTop=0,rf(r),t&&s&&s.focus?.()}function rf(i){(i||document).querySelectorAll(".gterm[data-gid], .gchip[data-gid]").forEach(t=>{t._glossBound||(t._glossBound=!0,Ud(t,()=>nf(t.getAttribute("data-gid"),!0)))})}function of(){if(Ze.length<=1){Oi();return}Ze.pop(),ch(Ze[Ze.length-1],!0)}function Oi(){Ze=[],document.body.classList.remove("gloss-open");let i=document.getElementById("glossSheet");i&&i.setAttribute("aria-hidden","true");let t=document.getElementById("glossBody");t&&(t.innerHTML="")}function sy(){let i=document.getElementById("glossScrim"),t=document.getElementById("glossClose"),e=document.getElementById("glossBack");i&&i.addEventListener("click",Oi),t&&t.addEventListener("click",Oi),e&&e.addEventListener("click",of)}sy();window.__gloss={open:nf,close:Oi,count:()=>pa.length,auditPanel(){let i=document.getElementById("pbody");if(!i)return{links:0,ok:!0};let t=i.querySelectorAll(".gterm[data-gid]").length,e=(i.innerText||"").replace(/\u200c/g,""),n=tf(),s=0;for(let r of n){let o=Rt()?r.norm.toLowerCase():r.norm,a=Rt()?e.toLowerCase():e;if(o.length>=3&&a.includes(o)){s++;break}}return{links:t,mentions:s>0,ok:!(s>0&&t===0)}}};var Ni=document.getElementById("panel"),ui=document.getElementById("pbody"),Xl=document.getElementById("crumbs"),af=document.getElementById("back"),ry=i=>(i||"").replace(/\*\*(.+?)\*\*/g,'<strong class="kt">$1</strong>');function Md(i){return!i||!i.length?"":`<section><h3><span class="ic">\u27F7</span>${ce().related}</h3><div class="chips">${i.map(t=>{let e=xe.findIndex(r=>r.ch===t),n=xe[e];if(!n)return"";let s=Rt()?n.en:n.fa;return`<button class="chip" data-ka="${e}" style="--c:${n.css}"><span class="dot"></span>${De(n.ch)} \xB7 ${s}</button>`}).join("")}</div></section>`}function ql(i,t){let e=new Set,n=`<div class="gloss-hint" role="note"><span class="gh-ico" aria-hidden="true">\u{1F4A1}</span><span>${ce().glossHint}</span></div>`;return i.what&&(n+=`<section><h3><span class="ic">\u25C6</span>${ce().what}</h3><p>${Ss(i.what,e)}</p></section>`),i.why&&(n+=`<section><h3><span class="ic">\u2605</span>${ce().why}</h3><p>${Ss(i.why,e)}</p></section>`),i.keys&&i.keys.length&&(n+=`<section><h3><span class="ic">\u25A6</span>${ce().keys}</h3><ol class="keys">${i.keys.map(s=>{let r=s[0],o=s[1],a=s[2];return`<li><div class="kh"><b>${Ss(r,e)}</b>${o?`<span class="en">${Ss(o,e)}</span>`:""}</div><p>${Ss(a,e)}</p></li>`}).join("")}</ol></section>`),i.ex&&(n+=`<section class="ex"><h3><span class="ic">\u270E</span>${ce().ex}</h3><p>${Ss(i.ex,e)}</p></section>`),i.sample&&(n+=`<section><h3><span class="ic">\u2211</span>${ce().sampleSec}</h3>${sf(i.sample,e)}</section>`),n}function Ed(i){let t,e="",n;if(i.ka==null){n="#f27a5e";let s=Rt()?ke.root.en:ke.root.fa,r=Rt()?ke.root.fa:ke.root.en;t=`<div class="ph" style="--c:${n}"><div class="kicker">${ce().overview}</div><h2>${s}</h2><div class="en">${r}</div></div>`,e+=ql(kl("root",ke.root),n),e+=`<section><h3><span class="ic">\u25CE</span>${ce().allKas}</h3><div class="chips">${xe.map((o,a)=>{let c=Rt()?o.en:o.fa;return`<button class="chip" data-ka="${a}" style="--c:${o.css}"><span class="dot"></span>${De(o.ch)} \xB7 ${c}</button>`}).join("")}</div></section>`}else{let s=xe[i.ka];n=s.css;let r=Rt()?s.en:s.fa,o=Rt()?s.fa:s.en;if(i.p==="about")t=`<div class="ph" style="--c:${n}"><div class="kicker">${ce().kaLabel(De(s.ch),s.foundation)}</div><h2>${r}</h2><div class="en">${o}</div></div>`,e+=ql(kl("ka",s,s.ch),n),e+=`<section><h3><span class="ic">\u25CE</span>${ce().topicsInKa}</h3><div class="chips">${s.topics.map((a,c)=>{let l=Rt()?a.en:a.fa;return`<button class="chip" data-ti="${c}" style="--c:${n}"><span class="dot"></span>${De(a.n)}. ${l}</button>`}).join("")}</div></section>`,e+=Md(s.rel);else{let a=s.topics[i.ti],c=Rt()?a.en:a.fa,l=Rt()?a.fa:a.en;t=`<div class="ph" style="--c:${n}"><div class="kicker">${ce().topicKick(r,De(a.n))}</div><h2>${c}</h2><div class="en">${l}</div></div>`,e+=ql(kl("topic",a,s.ch,a.n),n),e+=Md(a.rel);let h=s.topics[i.ti+1],u=s.topics[i.ti-1],d=u?Rt()?u.en:u.fa:"",p=h?Rt()?h.en:h.fa:"",m=Rt()?"\u2190":"\u2192",y=Rt()?"\u2192":"\u2190";e+=`<div class="pn">${u?`<button class="chip" data-ti="${i.ti-1}" style="--c:${n}">${m} ${d}</button>`:"<span></span>"}${h?`<button class="chip" data-ti="${i.ti+1}" style="--c:${n}">${p} ${y}</button>`:""}</div>`}}Ni.style.setProperty("--c",n),ui.innerHTML=t+`<div class="pc">${e}</div>`,ui.scrollTop=0,ui.querySelectorAll("[data-ka]").forEach(s=>s.onclick=()=>{Le||Mn({ka:+s.dataset.ka,p:null})}),ui.querySelectorAll("[data-ti]").forEach(s=>s.onclick=()=>{Le||Mn({ka:ze.ka,p:"t",ti:+s.dataset.ti})}),rf(ui)}var oa=!1;async function lh(i){if(oa){await Cn(.18,e=>{ui.style.opacity=1-e},yn.out),Ed(i),await Cn(.25,e=>{ui.style.opacity=e},yn.out);return}Ed(i),oa=!0,ui.style.opacity=1,document.body.classList.add("panel-open"),di(),ki([0,300,600]),Ni.style.visibility="visible";let t=innerWidth/innerHeight<.8||innerWidth<760;await Cn(.55,e=>{Ni.style.opacity=Math.min(1,e*1.5),Ni.style.transform=t?`translateY(${(1-e)*100}%)`:`translateX(${(1-e)*110}%)`},yn.out)}async function jl(){if(!oa)return;Oi(),oa=!1,document.body.classList.remove("panel-open"),di(),ki([0,300,600]);let i=innerWidth/innerHeight<.8||innerWidth<760;await Cn(.4,t=>{Ni.style.opacity=1-t,Ni.style.transform=i?`translateY(${t*100}%)`:`translateX(${t*110}%)`},yn.in),Ni.style.visibility="hidden"}document.getElementById("pback").onclick=fa;af.onclick=fa;document.getElementById("home").onclick=()=>{!Le&&(ze.ka!=null||ze.p)&&Mn({ka:null,p:null})};function Cs(){let i=ze,t=Rt()?ke.root.en:ke.root.fa,e=Rt()?'<i class="sep">\u203A</i>':'<i class="sep">\u2039</i>',n=[`<button data-c="root">${t}</button>`];if(i.ka==null&&i.p==="about"&&n.push(`<span>${ce().aboutCrumb}</span>`),i.ka!=null){let o=xe[i.ka],a=Rt()?o.en:o.fa;n.push(`<button data-c="ka" style="--c:${o.css}">${a}</button>`),i.p==="about"&&n.push(`<span>${ce().aboutCrumb}</span>`),i.p==="t"&&n.push(`<span>${Rt()?o.topics[i.ti].en:o.topics[i.ti].fa}</span>`)}Xl.innerHTML=n.join(e),Xl.querySelector("[data-c=root]").onclick=()=>{!Le&&(ze.ka!=null||ze.p)&&Mn({ka:null,p:null})};let s=Xl.querySelector("[data-c=ka]");s&&(s.onclick=()=>{!Le&&ze.p&&Mn({ka:ze.ka,p:null})}),af.classList.toggle("off",!Yd(i));let r=i.ka!=null?(Rt()?xe[i.ka].en:xe[i.ka].fa)+" \xB7 ":"";document.title=r+ce().title}var Ko=document.getElementById("dcur");window.__cursor=(i,t,e)=>{Ko.style.display="block",Ko.style.left=i+"px",Ko.style.top=t+"px",Ko.classList.toggle("down",!!e)};window.__labelPos=i=>{let t=document.querySelector(i);if(!t)return null;let e=t.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]};window.__chromeCheck=()=>{let i=xr(),t=[...document.querySelectorAll(".lbl.ka,.lbl.topic,.lbl.found,.lbl.center")].filter(l=>l.style.display==="none"||l.classList.contains("mob-hide")?!1:l.getBoundingClientRect().width>0),e=0,n=0,s=0,r=t.map(l=>{let h=l.getBoundingClientRect(),u=+getComputedStyle(l).opacity;u<.88&&s++;let d=h.top<i.top-1,p=h.bottom>i.bot+1,m=h.left<i.left-1,y=h.right>i.right+1;return(d||p||m||y)&&e++,{t:l.textContent.trim().slice(0,18),top:h.top,bot:h.bottom,left:h.left,right:h.right,op:u,hitTop:d,hitBot:p,hitLeft:m,hitRight:y,roof:l.classList.contains("rooftop"),center:l.classList.contains("center")}});for(let l=0;l<r.length;l++)for(let h=l+1;h<r.length;h++){let u=r[l],d=r[h];Math.min(u.right,d.right)-Math.max(u.left,d.left)>2&&Math.min(u.bot,d.bot)-Math.max(u.top,d.top)>2&&n++}let o=0,a=0,c=[];if(gt){we.updateMatrixWorld(!0);for(let l of gt.nodes){let h=l.userData&&l.userData.mesh;if(!h){a++;continue}h.getWorldPosition(Qt);let u=h.scale&&h.scale.x||1,d=[Qt.clone(),Qt.clone().add(new N(0,.7*u,0)),Qt.clone().add(new N(0,-.25*u,0))],p=!0,m=!1,y=1e9,g=-1e9;for(let x of d){let v=x.clone().project(we);if(v.z>1.05)continue;m=!0;let C=(v.x*.5+.5)*i.W,T=(-v.y*.5+.5)*i.H;y=Math.min(y,T),g=Math.max(g,T),C>=i.left-2&&C<=i.right+2&&T>=i.top&&T<=i.bot||(p=!1)}let f=l.userData.kind,b=(xe[l.userData.ka]||{}).ch;!m||!p?(o++,c.push({kind:f,ch:b,out:!0,minY:y,maxY:g})):c.push({kind:f,ch:b,out:!1,minY:y,maxY:g})}}return{sa:i,n:r.length,capChrome:e,overlaps:n,faded:s,iconOut:o,roof:r.filter(l=>l.roof).length,badCaps:r.filter(l=>l.hitTop||l.hitBot),iconHits:c.filter(l=>l.out)}};Ad();var wd=document.getElementById("lang");wd&&wd.addEventListener("click",()=>Cd(Rt()?"fa":"en",!0));var Sd=document.getElementById("legendBtn");Sd&&Sd.addEventListener("click",Zx);var bd=document.getElementById("legendClose");bd&&bd.addEventListener("click",Er);var Td=document.getElementById("legendScrim");Td&&Td.addEventListener("click",Er);document.body.classList.toggle("is-mobile",_t);_t&&setTimeout(()=>{Od||Mr(!1)},3200);window.__setLang=Cd;window.__lang=()=>Fi;Zd();(async()=>{await Fl();let i=sa(location.hash);history.replaceState({d:0},"",ah(i)),i.ka==null?(Ls(0),await Ds(sh(),0)):(Ls(1),await Ds(rh(i.ka),0)),ze={ka:i.ka,p:null},Cs(),di(),ki([0,150,450,900]),i.p&&(ze=i,Cs(),await lh(i)),window.__ready=!0,window.__pickAt=(t,e)=>{let n=da(t,e);return n?n.userData.kind||(n===gt.center?"center":"?"):null},window.__pickN=()=>Ps.length,window.__view=()=>gt,window.__camera=we,window.__cssLabelBoxes=()=>{let t=[],e=document.querySelectorAll(".lbl.clay-plaque,.lbl.ka,.lbl.topic,.lbl.found,.lbl.center");for(let n of e){if(n.style.display==="none"||n.style.visibility==="hidden"||n.classList.contains("mob-hide"))continue;let s=n.getBoundingClientRect();if(s.width<2||s.height<2||+getComputedStyle(n).opacity<.5)continue;let o=n.classList.contains("center")?"center":n.classList.contains("found")?"found":n.classList.contains("topic")?"topic":"ka";t.push({tag:o,text:(n.textContent||"").trim().slice(0,24),scheme:n.dataset.scheme||"light",contrast:+(n.dataset.contrast||0),L:s.left,R:s.right,T:s.top,B:s.bottom,w:s.width,h:s.height,fontSize:parseFloat(getComputedStyle(n.querySelector(".tx b,.ttl")||n).fontSize)||0,sway:n.style.getPropertyValue("--sway")||"0deg"})}return t},window.__plaqueBoxes=()=>{if(We)return window.__cssLabelBoxes();let t=[];if(!gt)return t;let e=innerWidth,n=innerHeight,s=(r,o)=>{let a=r&&r.userData&&r.userData.sign;if(!a)return;let c=dr(a,r.userData.mesh,e,n,!1);c&&t.push({tag:o,scheme:a.userData.colors&&a.userData.colors.scheme,L:c.L,R:c.R,T:c.T,B:c.B,w:c.w,h:c.h})};s(gt.center,"center");for(let r of gt.nodes)s(r,r.userData.kind);return t},window.__centerSign=()=>{if(We){let e=gt&&gt.center&&gt.center.userData.label&&gt.center.userData.label.element;if(!e)return null;let n=e.getBoundingClientRect();return{w:n.width,h:n.height,faces:0,contrast:+(e.dataset.contrast||0),scheme:e.dataset.scheme||"light",emboss:!0,css2d:!0,sway:e.style.getPropertyValue("--sway")||"0deg"}}let t=gt&&gt.center&&gt.center.userData.sign;return t?{w:t.userData.signW,h:t.userData.signH,faces:(t.userData.faces||[]).length,contrast:t.userData.contrast,scheme:t.userData.colors&&t.userData.colors.scheme,emboss:!0}:null},window.__plaqueContrasts=()=>{if(We)return window.__cssLabelBoxes().map(n=>({tag:n.tag,contrast:n.contrast,scheme:n.scheme,text:n.text}));let t=[],e=(n,s)=>{let r=n&&n.userData&&n.userData.sign;r&&t.push({tag:s,contrast:r.userData.contrast,scheme:r.userData.colors&&r.userData.colors.scheme,letter:r.userData.colors&&r.userData.colors.letter,plaque:r.userData.colors&&r.userData.colors.plaque})};if(gt){e(gt.center,"center");for(let n of gt.nodes)e(n,n.userData.kind)}return t},window.__dumpPlaqueAlbedos=()=>{let t=window.__view();if(!t)return[];let e=[],n=(s,r)=>{if(!r||!r.userData||!r.userData.tex||!r.userData.tex.image)return;let o=r.userData.tex.image;try{e.push({tag:s,w:o.width,h:o.height,scheme:r.userData.colors&&r.userData.colors.scheme,contrast:r.userData.colors&&r.userData.colors.contrast,dataUrl:o.toDataURL("image/png")})}catch(a){e.push({tag:s,err:String(a)})}};t.center&&t.center.userData.sign&&n("center",t.center.userData.sign);for(let s of t.nodes){let r=s.userData&&s.userData.sign;if(!r)continue;let o=s.userData.kind||"node";n(o+(s.userData.ka!=null?"-"+s.userData.ka:""),r)}return e},window.__overlapSign=()=>{if(We){let p=window.__cssLabelBoxes(),m=[],y=0;for(let b=0;b<p.length;b++)for(let x=b+1;x<p.length;x++){let v=p[b],C=p[x],T=Math.min(v.R,C.R)-Math.max(v.L,C.L),R=Math.min(v.B,C.B)-Math.max(v.T,C.T);T>-4&&R>-4&&(m.push({kind:v.tag+"-"+C.tag,text:[v.text,C.text],ox:+T.toFixed(1),oy:+R.toFixed(1)}),y=Math.max(y,T*R))}let g=xr(),f=p.filter(b=>{let x=Math.max(1,b.B-b.T),v=Math.max(1,b.R-b.L),C=Math.max(0,g.top-b.T),T=Math.max(0,b.B-g.bot),R=Math.max(0,g.left-b.L),D=Math.max(0,b.R-g.right);return(C+T)/x>.45||(R+D)/v>.45});return{ok:m.length===0&&f.length===0,worstArea:y,hitCount:m.length,hits:m.slice(0,20),clipped:f.map(b=>({tag:b.tag,text:b.text,L:b.L,R:b.R,T:b.T,B:b.B})),n:p.length,sign:window.__centerSign()}}let t=gt&&gt.center&&gt.center.userData.sign,e=gt&&gt.center&&gt.center.userData.mesh;if(!t||!e)return{ok:!1,reason:"no-sign"};let n=innerWidth,s=innerHeight,r=e.userData.baseRot||{x:-.42,y:.62,z:.1},o=.38,a=0,c=[],l=[],h=e.rotation.y,u=()=>{let p=[];for(let m of gt.nodes){let y=m.userData.sign;if(y){let b=dr(y,m.userData.mesh,n,s,!1);b&&p.push({kind:m.userData.kind,ch:m.userData.ka!=null&&xe[m.userData.ka]?xe[m.userData.ka].ch:null,...b});continue}let g=m.userData.label;if(!g||!g.element||g.element.style.display==="none")continue;let f=g.element.getBoundingClientRect();f.width&&p.push({kind:m.userData.kind,ch:m.userData.ka!=null&&xe[m.userData.ka]?xe[m.userData.ka].ch:null,L:f.left,R:f.right,T:f.top,B:f.bottom})}return p};for(let p=0;p<12;p++){let m=r.y+Math.sin(p/12*Math.PI*2)*o;e.rotation.y=m,e.updateMatrixWorld(!0);let y=dr(t,e,n,s,!1);if(!y)continue;let g=6,f=y.L-g,b=y.R+g,x=y.T-g,v=y.B+g;for(let C of u()){let T=Math.min(b,C.R)-Math.max(f,C.L),R=Math.min(v,C.B)-Math.max(x,C.T);if(T>0&&R>0){let D=T*R;D>a&&(a=D),c.push({yaw:+m.toFixed(3),kind:C.kind,ch:C.ch,ox:+T.toFixed(1),oy:+R.toFixed(1)})}}l.push({yaw:+m.toFixed(3),w:+(b-f).toFixed(1),h:+(v-x).toFixed(1)})}e.rotation.y=h,e.updateMatrixWorld(!0);let d=u();for(let p=0;p<d.length;p++)for(let m=p+1;m<d.length;m++){let y=d[p],g=d[m],f=Math.min(y.R,g.R)-Math.max(y.L,g.L),b=Math.min(y.B,g.B)-Math.max(y.T,g.T);f>2&&b>2&&(c.push({kind:"ring-ring",ch:[y.ch,g.ch],ox:+f.toFixed(1),oy:+b.toFixed(1)}),a=Math.max(a,f*b))}return{ok:c.length===0,worstArea:a,hitCount:c.length,hits:c.slice(0,20),samples:l,sign:window.__centerSign()}},window.__iconTouch=()=>{let t=[];if(!gt)return{ok:!0,bad:[],all:t};let e=new N,n=(r,o)=>{let a=r&&r.userData&&r.userData.label&&r.userData.label.element,c=r&&r.userData&&r.userData.mesh;if(!a||!c||a.style.display==="none")return;let l=a.getBoundingClientRect();if(!l.width)return;c.getWorldPosition(e),e.project(we);let h=(e.x*.5+.5)*innerWidth,u=(-e.y*.5+.5)*innerHeight,d=a.classList.contains("under"),p=d?l.top-u:l.bottom-u,m=(l.left+l.right)*.5-h;t.push({tag:o,text:(a.textContent||"").trim().slice(0,18),gap:+p.toFixed(1),dx:+m.toFixed(1),plaqueBot:+l.bottom.toFixed(1),iconTop:+u.toFixed(1),under:d})};for(let r of gt.nodes)r.userData&&r.userData.kind==="found"||n(r,r.userData.kind);let s=t.filter(r=>Math.abs(r.dx)>58?!0:r.under?r.gap<-28||r.gap>80:r.gap<-95||r.gap>56);return{ok:s.length===0,bad:s,all:t}},document.body.classList.add("ready")})();jd();})();
