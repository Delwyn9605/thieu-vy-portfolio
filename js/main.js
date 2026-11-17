(function(){
var SZ={"bloom": [500, 500], "cl-t24": [2000, 538], "cl-ta1": [2000, 1414], "cl-ta2": [2000, 1414], "cl-tt1": [2000, 1414], "cl-tt2": [2000, 1414], "cl-tt3": [2000, 1414], "cl-vp": [2000, 1277], "contact": [1000, 1500], "ddd": [397, 400], "el-1": [520, 390], "el-10": [513, 520], "el-11": [520, 519], "el-12": [431, 429], "el-2": [467, 440], "el-3": [520, 436], "el-4": [520, 368], "el-5": [467, 470], "el-6": [279, 442], "el-7": [489, 489], "el-8": [363, 520], "el-9": [492, 491], "g-01": [1728, 1234], "g1": [1728, 1234], "g-02": [1860, 1258], "g2": [1860, 1258], "g-03": [2200, 1085], "g3": [2200, 1085], "g-04": [2200, 1076], "g4": [2200, 1076], "g-05": [1334, 1067], "g5": [1334, 1067], "g-06": [1600, 1280], "g6": [1600, 1280], "g-07": [1600, 1066], "g7": [1600, 1066], "g-08": [1600, 900], "g8": [1600, 900], "g-09": [1600, 898], "g9": [1600, 898], "g-10": [1600, 898], "g10": [1600, 898], "g-11": [1200, 1600], "g11": [1200, 1600], "g-12": [1600, 1067], "g12": [1600, 1067], "gf-1": [1600, 1066], "gf1": [1600, 1066], "gf-2": [1600, 1280], "gf2": [1600, 1280], "gf-3": [1600, 1200], "gf3": [1600, 1200], "kh-th": [2000, 1125], "pdf-dung-1": [2089, 3072], "pdf-dung-2": [2089, 788], "pdf-quay-1": [2089, 3070], "pdf-quay-2": [2089, 1136], "pf-05": [1524, 1090], "pf5": [1524, 1090], "pf-06": [1138, 1594], "pf6": [1138, 1594], "pf-08": [1144, 1602], "pf8": [1144, 1602], "pf-10": [2116, 1274], "pf10": [2116, 1274], "pf-11": [760, 1113], "pf11": [760, 1113], "pf-12": [760, 1114], "pf12": [760, 1114], "pf-13": [2000, 2831], "pf13": [2000, 2831], "pf-14": [1860, 1258], "pf14": [1860, 1258], "pf-15": [2200, 1076], "pf15": [2200, 1076], "pf-16": [1932, 798], "pf16": [1932, 798], "pf-17": [1936, 1256], "pf17": [1936, 1256], "pf-18": [2200, 735], "pf18": [2200, 735], "pf-19": [2200, 701], "pf19": [2200, 701], "pf-20": [2000, 988], "pf20": [2000, 988], "pf-21": [1340, 1256], "pf21": [1340, 1256], "pf-22": [1916, 1196], "pf22": [1916, 1196], "pf-23": [2000, 2832], "pf23": [2000, 2832], "pf-24": [2000, 1001], "pf24": [2000, 1001], "pf-25": [2000, 1107], "pf25": [2000, 1107], "pf-26": [2200, 1200], "pf26": [2200, 1200], "pf-27": [2000, 966], "pf27": [2000, 966], "pf-28": [2000, 2500], "pf28": [2000, 2500], "pf-th": [1600, 900], "portrait": [1000, 1500], "tcg-lineup": [2000, 2500], "tcg-poster": [1024, 1280], "tcg": [500, 500], "ussh": [400, 280], "g-13": [1800, 1200], "g13": [1800, 1200]};
function esc(t){return String(t).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}
function two(n){return (n<10?'0':'')+n}

/* ---------- project images (keys follow the numbering in the brief) ---------- */
var CAP={
 5:'Group timeline.',6:'Press release for Marou Chocolate.',8:'Feature article.',
 10:'Production timeline.',11:'Shooting script (PDF).',12:'Editing script (PDF).',
 13:'Poster.',14:'Task board.',15:'Shot list.',16:'Call sheet.',17:'',18:'',19:'Storyboard',
 20:'Location scouting.',21:'Budget.',22:'Props checklist.',23:'Poster.',
 24:'Fanpage.',25:'Action plan.',26:'Onsite assignments.',27:'Invitation email.',28:'Cải lương artist lineup.'
};
var PDFS={quay:{t:'Shooting script',href:'assets/docs/kich-ban-quay.pdf',pages:['assets/pdf-quay-1.jpg','assets/pdf-quay-2.jpg']},dung:{t:'Editing script',href:'assets/docs/kich-ban-dung.pdf',pages:['assets/pdf-dung-1.jpg','assets/pdf-dung-2.jpg']}};
var PDFKEY={11:'quay',12:'dung'};
var LB=[];
var IMG={};
Object.keys(CAP).forEach(function(k){var s=SZ['pf'+two(+k)]||SZ['pf'+k];IMG[k]={src:'assets/pf-'+two(+k)+'.jpg',w:s[0],h:s[1],cap:CAP[k],pdf:PDFKEY[k]}});
[['tp','tcg-poster','Poster.'],['tl','tcg-lineup','Full lineup.'],['kth','kh-th','Thumbnail.'],['th','pf-th','Thumbnail.'],['t24','cl-t24','Working folders.'],['tt1','cl-tt1','Team workspace and local-area contacts.'],['tt2','cl-tt2','Sponsor files and templates.'],['tt3','cl-tt3','Logos and post-campaign reports.'],['ta1','cl-ta1','Working principles and local-area contacts.'],['ta2','cl-ta2','Sponsor search and reports.'],['vp','cl-vp','Sponsor files for the next campaign.']].forEach(function(r){var s=SZ[r[1]];IMG[r[0]]={src:'assets/'+r[1]+'.jpg',w:s[0],h:s[1],cap:r[2]}});

function reg(o){LB.push(o);return LB.length-1}
function nodot(t){return t?String(t).replace(/\.\s*$/,''):t}
function shot(im,label,cap){
  cap=nodot(cap);
  var ar=(im.w/im.h).toFixed(4);
  var id=reg(im.pdf?{pdf:im.pdf,alt:im.cap||cap}:{srcs:[im.src],alt:im.alt||im.cap||cap,w:im.w});
  return '<figure class="shot" style="flex:'+ar+' 1 0"><a href="'+(im.pdf?PDFS[im.pdf].href:im.src)+'" data-lb="'+id+'"><img src="'+im.src+'" alt="'+esc(im.alt||im.cap||cap||'')+'" width="'+im.w+'" height="'+im.h+'" loading="lazy"></a>'+
    (cap?'<figcaption>'+(label?'<b>'+esc(label)+'</b>':'')+esc(cap)+'</figcaption>':'')+'</figure>';
}
/* A row scales its images to one shared height, so images with the same orientation line up. */
function row(items,w){
  var allP=items.every(function(it){return it.im.w<it.im.h});
  return '<div class="prow'+(allP&&items.length<=2?' keep':'')+'" style="max-width:'+w+'px">'+items.map(function(it){return shot(it.im,it.label,it.cap)}).join('')+'</div>';
}

/* ---------- projects: earliest first, so the growth shows ---------- */
var P=[
{id:'p-external-relations',group:'club',title:'External Relations Team',gloss:'Đom Đóm Đêm Volunteer Club',norole:true,size:['Team size','10 – 18 members'],period:'12/2023 – 07/2025',stage:'',
 body:['I joined the External Relations team as Deputy Head and grew into Head over the following year. In my first campaign the work was basic: I supported the Head with simple tasks and used the campaign to learn how External Relations really works. In the campaigns after that, I took charge of the whole team\'s workload, from the first week to the last. Two jobs mattered most: working with local authorities, sponsors and partners.'],
 bullets:[],
 result:['Across the 2024–2025 term: Prepared sponsorship documentation for 10+ sponsors, with each campaign having a total budget of over VND 100 million.'],links:[],rows:['Volunteer April Campaign 2024||Deputy Head|18 members','!Supporting the Head of External Relations: keeping the team updated on local areas, tracking sponsors and compiling proof of delivery for sponsor benefits throughout the campaign',[1100,'t24'],'Mid-Autumn Campaign 2024||Head|10 members','!Managing tasks and people in the External Relations team, handling the specialist work with local authorities, and supporting media and sponsorship before, during and after the campaign.',[1100,'tt1','tt2'],[1100,'tt3'],'Volunteer April Campaign 2025||Head|17 members','!Overseeing the team\'s workload, coordinating with local authorities, and leading sponsor outreach, proposals and reports from kickoff to the close of the campaign.',[1100,'ta1','ta2']],nocap:true},
{id:'p-vice-president',group:'club',title:'Executive Board',gloss:'Đom Đóm Đêm Volunteer Club',role:'Vice President',size:['Club size','75+ members'],period:'07/2025 – 07/2026',stage:'Stepping back to plan and advise',
 body:['My role evolved into planning the term with the Executive Board, while supporting and advising the heads and deputy heads of each team. During the initial phase, I also continued to assist with several External Relations tasks.'],
 bullets:[],
 result:['Continued to organize two annual campaigns while maintaining relationships with long-term sponsors and trusted partners.'],links:[],rows:[[1100,'vp']],nocap:true},

{id:'p-writing-for-media',group:'course',title:'Marou Chocolate',gloss:'PR articles',role:'Group lead',size:['Team size','10 members'],period:'Year 1 · Writing for Media course',stage:'Starting simple',
 body:['I led the group by establishing a clear workflow, setting a timeline, assigning writing tasks, and monitoring progress throughout the project. Coordinated the development of PR articles for Marou Chocolate, reviewed the team\'s contributions, and compiled the final work into a report submitted to our lecturer.'],
 bullets:[],
 result:['Grade A.'],links:[],rows:[[1100,5],[1100,6,8]]},
{id:'p-banh-mi',group:'course',title:'Gánh bánh mì nghĩa tình',gloss:'Short documentary',role:'Group lead',size:['Team size','5 members'],period:'Year 2 · Camera Techniques and Post-production',stage:'Leading two courses at once',
 body:['Two courses ran concurrently, culminating in a video production that I led. As our team\'s first documentary project, I sought guidance from senior Journalism students to help refine the production and ensure a polished final product.'],
 bullets:[],
 result:['The highest score in the class, and the only group to earn 9.5.','Grade A+.'],
 links:[{label:'Watch the documentary',href:'https://youtu.be/uRfBX1fNgkg?si=A9TDjCmDOKeKdvIo'}],rows:[[1100,10],[1100,11,12]]},
{id:'p-khe-uoc',group:'course',title:'Khế Ước',gloss:'Music video',role:'Group lead and Director',size:['Team size','9 members'],period:'Year 3 · Audiovisual major project',stage:'My first major project as a lead',
 body:['Led the project by developing its timeline, organizing teams, setting direction, assigning tasks, and tracking progress. I also helped coordinate music usage permissions, assign on-set roles, and direct the music video.'],
 bullets:[],
 result:['The only group to score 10.','Second Prize, Music Video Category, 2026 University of Social Sciences and Humanities Student Film Festival.','Grade A+.'],
 links:[{label:'Watch the music video',href:'https://youtu.be/eqZA6o88dLI?si=RscfYhwOlPCcIn2C'}],rows:[[1100,13,'kth'],[1100,14,15],[1100,16,17],[1100,18],[1100,19]]},
{id:'p-boi-uoc',group:'course',title:'Bội Ước',gloss:'Short film',role:'Production Manager',size:['Team size','11 members'],period:'Year 3 · Directing course',stage:'Managing a production',
 body:['As Production Manager, I assigned tasks to the production team and contributed to budget planning. Developed prop checklists, scouted locations, planned prop-making processes, and coordinated with relevant parties to secure funding.'],
 bullets:[],
 result:['Third Prize, Short Film Category, 2026 University of Social Sciences and Humanities Student Film Festival.','Grade A.'],
 links:[{label:'Watch the short film',href:'https://youtu.be/ddtOEdjPppQ?si=qFcou6-b5YSYj-kC'}],rows:[[1100,23,'th'],[1100,20],[1100,21,22]]},
{id:'p-tau-cung-giao',group:'course',title:'Tấu Cung Giao',gloss:'Traditional Cải Lương Performance Integrated with Contemporary Music',role:'Head of Organizing Committee',size:['Team size','27 members'],period:'Year 3 · Event Organization',stage:'Leading a 27-person team',
 body:['Led a 27-member organizing committee across five teams: Media, Technical, Content, Production, and External Relations. Worked with two deputy heads to define team responsibilities, allocate members, plan the event timeline, and establish a core team to oversee progress.','Coordinated communication with artists, advisors, the stage director, university representatives, press, guests, and collaborators. Prepared event plans, proposals, official documents, and handled music performance rights requests.','The show featured well-known cải lương artists, including Meritorious Artist Trinh Trinh, Lý Kiều Hạnh and Xuân Trúc, with advice from Dr. Lê Hồng Phước.'],
 bullets:[],
 result:['Every ticket sold.','All profits went to gifts in kind and cash for children at Tam Bình Child Protection Center, worth over VND 14 million.','Covered by online and print press.','Grade A+.'],
 links:[{label:'Visit the fanpage',href:'https://www.facebook.com/taucunggiao.2026'}],rows:[[1100,'tp','tl',28],[1100,24],[1100,25,26],[1100,27]]}
];

function project(p){
  var h='<article class="proj" id="'+p.id+'">';
  h+='<header class="proj-h"><div class="proj-id"><div class="eyebrow sub">'+esc(p.period)+'</div><h4 class="proj-t">'+esc(p.title)+'</h4>'+(p.gloss?'<p class="gloss">'+esc(p.gloss)+'</p>':'')+'</div>';
  h+='<div class="metas">'+(p.norole?'':'<div class="meta"><span class="k">Role</span><span class="v">'+esc(p.role)+'</span></div>')+(p.size?'<div class="meta"><span class="k">'+esc(p.size[0])+'</span><span class="v">'+esc(p.size[1])+'</span></div>':'')+'</div></header>';
  h+='<div class="pcols'+(p.result.length?'':' one')+'"><div class="txt">'+p.body.map(function(t){return '<p>'+esc(t)+'</p>'}).join('');
  if(p.bullets.length)h+='<ul class="bullets">'+p.bullets.map(function(b){return '<li>'+esc(b)+'</li>'}).join('')+'</ul>';
  if(p.links.length)h+='<div class="linkrow">'+p.links.map(function(l){return (l.pdf?'<a class="btn fill" href="'+l.href+'" data-lb="'+reg({pdf:l.pdf,alt:l.label})+'">'+esc(l.label)+'</a>':'<a class="btn fill" href="'+l.href+'" target="_blank" rel="noopener">'+esc(l.label)+'</a>')}).join('')+'</div>';
  h+='</div>';
  if(p.result.length)h+='<div class="result"><h3>Result</h3><ul class="bullets">'+p.result.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ul></div>';
  h+='</div>';
  if(p.rows.length)h+='<div class="photos">'+p.rows.map(function(r){if(typeof r==='string')return r.charAt(0)==='!'?'<p class="photo-note">'+esc(nodot(r.slice(1)))+'</p>':(function(q){var m=q[1]?q[1].split('|'):null;return '<div class="sub-h" role="heading" aria-level="5"><span>'+esc(q[0])+'</span>'+(m?'<div class="metas"><div class="meta"><span class="k">Role</span><span class="v">'+esc(m[0])+'</span></div><div class="meta"><span class="k">Team size</span><span class="v">'+esc(m[1])+'</span></div></div>':'')+'</div>'})(r.split('||'));return row(r.slice(1).map(function(n){return {im:IMG[n],cap:p.nocap?'':IMG[n].cap}}),r[0])}).join('')+'</div>';
  return h+'</article>';
}
['club','course'].forEach(function(g){
  document.getElementById('projects-'+g).innerHTML=P.filter(function(p){return p.group===g}).map(project).join('');
});

/* ---------- growth journey ---------- */
function G(key,file,cap,alt){var s=SZ[key];return {src:'assets/'+file+'.jpg',w:s[0],h:s[1],cap:cap,alt:alt||cap}}
var pairs=[
 {t:'The first time I led',
  a:G('g1','g-01','Year 1: the first project I ever led. Everything was simple, and I was still learning what leading really meant.'),
  b:G('g2','g-02','Year 3: My first major project as a leader. I had more to take on, more to learn, and so many more people to appreciate.')},
 {t:'More than I had expected',
  a:G('g3','g-03','The only group in class to achieve the highest score of 9.5/10 for our documentary with a basic shooting script.'),
  b:G('g4','g-04','The only group to achieve a perfect 10/10 on a major project - our music video, supported by a more detailed shot list.')},
 {t:'From a walkie-talkie to the stage',
  a:G('g5','g-05','Still a little clumsy, figuring things out with a walkie-talkie in hand for the first time.'),
  b:G('g6','g-06','Standing in front of 300+ guests to talk about an event that 27 of us built together.')}
];
document.getElementById('pairs').innerHTML=pairs.map(function(p){
  return '<div class="pair"><div class="photos" style="margin-top:0">'+row([{im:p.a,label:'First Steps',cap:p.a.cap},{im:p.b,label:'Next Steps',cap:p.b.cap}],1100)+'</div></div>';
}).join('');

document.getElementById('campaignRow').innerHTML=row([
 {im:G('g9','g-09','Where it began: my first campaign with the club.','Group photo from my first campaign with the volunteer club'),cap:'Where it began: my first campaign with the club.'},
 {im:G('g10','g-10','Where I passed the torch: my last campaign with the club.','Group photo from my last campaign with the volunteer club'),cap:'Where I passed the torch: my last campaign with the club.'}
],1100);

var friends=[
 G('g7','g-07','','The film festival team holding awards and posters'),
 G('gf1','gf-1','','The Tấu Cung Giao organizing team on stage'),
 G('g8','g-08','','Close friends from university taking a selfie'),
 G('gf2','gf-2','','A group photo with friends at the Hát Bội theatre'),
 G('g11','g-11','','With two friends after the show, holding a bouquet'),

 G('g12','g-12','','With friends on a graduation day'),
 G('gf3','gf-3','','Friends from the volunteer club standing in the sea in club shirts')
];
(function(){
  var cols=[[],[]],hts=[0,.16];
  var extra=G('g13','g-13','','The Đom Đóm Đêm club team together, holding handmade flower bouquets');
  friends.forEach(function(im){var k=hts[0]<=hts[1]?0:1;cols[k].push(im);hts[k]+=1/(im.w/im.h);if(im.src.indexOf('g-11')>-1){im.sm=1;cols[k].push(extra);hts[k]+=1/(extra.w/extra.h)}});
  function html(list){return list.map(function(im){return '<figure class="pic'+(im.sm?' sm':'')+'"><img src="'+im.src+'" alt="'+esc(im.alt)+'" width="'+im.w+'" height="'+im.h+'" loading="lazy"></figure>'}).join('')}
  document.getElementById('collage').innerHTML='<div class="ccol l">'+html(cols[0])+'</div><div class="ccol r">'+html(cols[1])+'</div>';
})();


/* ---------- lightbox: images and PDFs open on the page itself, with gradual zoom and drag-to-move ---------- */
var lb=document.getElementById('lb'),lbB=document.getElementById('lbB'),lbT=document.getElementById('lbT'),lbIn=document.getElementById('lbIn'),lbOut=document.getElementById('lbOut'),lbFit=document.getElementById('lbFit'),lbX=document.getElementById('lbX'),lbFrom=null;
var stage=null,V={s:1,x:0,y:0,s0:1,min:1,max:3,cw:1,ch:1,pdf:false},ptrs={},lastTap=0,moved=false,pinch=null;
function bw(){return lbB.clientWidth}function bh(){return lbB.clientHeight}
function clampV(){
  var w=V.cw*V.s,h=V.ch*V.s;
  V.x=w<=bw()?(bw()-w)/2:Math.min(0,Math.max(bw()-w,V.x));
  V.y=h<=bh()?(bh()-h)/2:Math.min(0,Math.max(bh()-h,V.y));
}
function paintV(){
  stage.style.transform='translate('+V.x+'px,'+V.y+'px) scale('+V.s+')';
  lbIn.disabled=V.s>=V.max*.999;lbOut.disabled=V.s<=V.min*1.001;lbFit.disabled=Math.abs(V.s-V.s0)<.001&&V.s<=V.min*1.001;
}
function metrics(){
  V.cw=stage.offsetWidth||1;V.ch=stage.offsetHeight||1;
  V.s0=V.pdf?(bw()-8)/V.cw:Math.min((bw()-28)/V.cw,(bh()-20)/V.ch);
  V.min=V.s0;V.max=Math.max(V.s0*8,3);
}
function fitV(){metrics();V.s=V.s0;V.x=0;V.y=0;clampV();paintV()}
function zoomAt(cx,cy,f){
  var r=lbB.getBoundingClientRect(),px=cx-r.left,py=cy-r.top,ns=Math.min(V.max,Math.max(V.min,V.s*f)),k=ns/V.s;
  V.x=px-(px-V.x)*k;V.y=py-(py-V.y)*k;V.s=ns;clampV();paintV();
}
function zoomCenter(f){var r=lbB.getBoundingClientRect();zoomAt(r.left+r.width/2,r.top+r.height/2,f)}
function openLB(o,from){
  lbFrom=from||document.activeElement;
  var pdf=o.pdf?PDFS[o.pdf]:null,srcs=pdf?pdf.pages:o.srcs;
  lbB.innerHTML='';stage=document.createElement('div');stage.className='lb-stage'+(pdf?' pdf':'');
  V.pdf=!!pdf;ptrs={};pinch=null;
  var left=srcs.length;
  srcs.forEach(function(u,i){
    var im=new Image();im.draggable=false;im.alt=(o.alt||'')+(pdf?' (page '+(i+1)+' of '+srcs.length+')':'');
    var done=function(){if(--left===0&&stage)fitV()};
    im.onload=done;im.onerror=done;im.src=u;stage.appendChild(im);
  });
  lbB.appendChild(stage);
  lbT.textContent=pdf?pdf.t:(o.alt||'');
  lb.hidden=false;document.body.classList.add('lb-open');
  document.querySelectorAll('body>nav,body>header,body>section,body>footer').forEach(function(n){n.setAttribute('inert','')});
  lbX.focus();
}
function closeLB(){
  lb.hidden=true;lbB.innerHTML='';stage=null;document.body.classList.remove('lb-open');
  document.querySelectorAll('[inert]').forEach(function(n){n.removeAttribute('inert')});
  if(lbFrom&&lbFrom.focus)try{lbFrom.focus({preventScroll:true})}catch(e){}
}
lbX.addEventListener('click',closeLB);
lbIn.addEventListener('click',function(){zoomCenter(1.4)});
lbOut.addEventListener('click',function(){zoomCenter(1/1.4)});
lbFit.addEventListener('click',fitV);
lbB.addEventListener('wheel',function(e){
  if(!stage)return;e.preventDefault();
  var m=e.deltaMode===1?16:1,dy=e.deltaY*m,dx=e.deltaX*m;
  if(V.pdf&&!(e.ctrlKey||e.metaKey)){V.x-=dx;V.y-=dy;clampV();paintV();return}
  zoomAt(e.clientX,e.clientY,Math.exp(-dy*(e.ctrlKey?.01:.002)));
},{passive:false});
function pts(){return Object.keys(ptrs).map(function(k){return ptrs[k]})}
lbB.addEventListener('pointerdown',function(e){
  if(!stage)return;
  try{lbB.setPointerCapture(e.pointerId)}catch(x){}
  ptrs[e.pointerId]={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};
  if(pts().length===1)moved=false;
  if(pts().length===2){var p=pts();pinch={d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)||1,cx:(p[0].x+p[1].x)/2,cy:(p[0].y+p[1].y)/2};moved=true}
  lbB.classList.add('drag');
});
lbB.addEventListener('pointermove',function(e){
  var p=ptrs[e.pointerId];if(!p||!stage)return;
  var dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
  if(Math.hypot(e.clientX-p.sx,e.clientY-p.sy)>5)moved=true;
  var a=pts();
  if(a.length>=2&&pinch){
    var d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)||1,cx=(a[0].x+a[1].x)/2,cy=(a[0].y+a[1].y)/2;
    V.x+=cx-pinch.cx;V.y+=cy-pinch.cy;
    zoomAt(cx,cy,d/pinch.d);pinch={d:d,cx:cx,cy:cy};
  }else if(moved){V.x+=dx;V.y+=dy;clampV();paintV()}
});
function endPtr(e){
  var p=ptrs[e.pointerId];if(!p)return;delete ptrs[e.pointerId];pinch=null;
  if(pts().length===0){
    lbB.classList.remove('drag');
    if(!moved&&e.type==='pointerup'&&stage){
      if(!stage.contains(e.target))closeLB();
      else{var t=Date.now();
        if(t-lastTap<320){lastTap=0;if(V.s>V.s0*1.05)fitV();else zoomAt(e.clientX,e.clientY,Math.min(3,V.max/V.s))}
        else lastTap=t}
    }
  }else{var q=pts()[0];q.sx=q.x;q.sy=q.y}
}
lbB.addEventListener('pointerup',endPtr);lbB.addEventListener('pointercancel',endPtr);
window.addEventListener('resize',function(){
  if(lb.hidden||!stage)return;
  var wasFit=Math.abs(V.s-V.s0)<.001;
  if(wasFit)fitV();else{var s=V.s;metrics();V.s=Math.min(V.max,Math.max(V.min,s));clampV();paintV()}
});
document.addEventListener('keydown',function(e){
  if(lb.hidden)return;
  if(e.key==='Escape'){e.preventDefault();closeLB()}
  else if(e.key==='Tab'){var f=[lbOut,lbIn,lbFit,lbX].filter(function(b){return !b.disabled}),i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}
  else if(e.key==='+'||e.key==='='){e.preventDefault();zoomCenter(1.25)}
  else if(e.key==='-'||e.key==='_'){e.preventDefault();zoomCenter(.8)}
  else if(e.key==='0'){e.preventDefault();fitV()}
  else if(e.key.indexOf('Arrow')===0){e.preventDefault();var st=60;if(e.key==='ArrowLeft')V.x+=st;if(e.key==='ArrowRight')V.x-=st;if(e.key==='ArrowUp')V.y+=st;if(e.key==='ArrowDown')V.y-=st;clampV();paintV()}
});
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('[data-lb]');
  if(a&&!e.metaKey&&!e.ctrlKey){e.preventDefault();openLB(LB[+a.getAttribute('data-lb')],a)}
});
function zoomable(img){
  img.classList.add('zoomable');img.setAttribute('tabindex','0');img.setAttribute('role','button');
  var o={srcs:[img.getAttribute('src')],alt:img.getAttribute('alt')||'',w:+img.getAttribute('width')||1000};
  img.addEventListener('click',function(){openLB(o,img)});
  img.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openLB(o,img)}});
}
document.querySelectorAll('.portrait img,.contact-photo img,.pic img').forEach(zoomable);

/* ---------- nav ---------- */
var navList=document.getElementById('navList'),menuBtn=document.getElementById('menuBtn');
menuBtn.addEventListener('click',function(){var o=navList.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o?'true':'false')});
function go(id){var el=id&&id!=='top'?document.getElementById(id):null;if(el)el.scrollIntoView();else window.scrollTo(0,0)}
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){e.preventDefault();navList.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');go(a.getAttribute('href').slice(1))});
});
if(location.hash)go(decodeURIComponent(location.hash.slice(1)));

/* ---------- copy ---------- */
document.querySelectorAll('[data-copy]').forEach(function(b){
  b.addEventListener('click',function(){
    var el=document.getElementById(b.getAttribute('data-copy'));
    var done=function(){var t=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=t},1500)};
    var fallback=function(){try{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);}catch(e){}};
    try{navigator.clipboard.writeText(el.textContent.trim()).then(done,fallback)}catch(e){fallback()}
  });
});

/* ---------- skills constellation ---------- */
var CATS={
  lead:{name:'LEADERSHIP & PROJECT MANAGEMENT',color:'#7A1E2E',t:[40,30]},
  comm:{name:'COMMUNICATION & PARTNERSHIP',color:'#D9455A',t:[560,30]},
  prod:{name:'EVENT & PRODUCTION',color:'#B5651D',t:[40,488]},
  tool:{name:'ANALYSIS & DIGITAL TOOLS',color:'#8E4A6B',t:[560,488]}
};
var ORDER=['lead','comm','prod','tool'];
var N=[
 {id:'a1',c:'lead',l:['Project','Management'],d:[120,95]},
 {id:'a2',c:'lead',l:['Timeline &','Progress Tracking'],d:[380,85]},
 {id:'a4',c:'lead',l:['Team','Leadership'],d:[205,205]},
 {id:'a5',c:'lead',l:['Problem','Solving'],d:[400,200]},
 {id:'b1',c:'comm',l:['Stakeholder','Communication'],d:[640,80]},
 {id:'b2',c:'comm',l:['Persuasion &','Negotiation'],d:[880,95]},
 {id:'b3',c:'comm',l:['Sponsor & Partner','Relations'],d:[800,195]},
 {id:'b4',c:'comm',l:['Stakeholder','Coordination'],d:[640,205]},
 {id:'c1',c:'prod',l:['Production','Management'],d:[120,305]},
 {id:'c2',c:'prod',l:['Visual','Storytelling'],d:[360,295]},
 {id:'c3',c:'prod',l:['Audiovisual','Production'],d:[230,395]},
 {id:'c4',c:'prod',l:['Event Planning','& Operations'],d:[440,390]},
 {id:'d1',c:'tool',l:['Reporting','& Analysis'],d:[640,305]},
 {id:'d2',c:'tool',l:['Digital Tools'],d:[880,295]},
 {id:'d3',c:'tool',l:['AI-assisted','Workflows'],d:[760,395]}
];
var E=[['a4','a1'],['a1','a2'],['a4','a5'],['a2','a5'],
 ['b1','b2'],['b2','b3'],['b1','b4'],['b3','b4'],
 ['c4','c1'],['c1','c3'],['c3','c2'],['c1','c2'],['c3','c4'],
 ['d1','d2'],['d2','d3'],['d1','d3'],
 ['a1','c4'],['a1','c1'],['a4','b1'],
 ['b4','c4'],['b3','d1'],['a5','c4'],['a5','c1'],
 ['d2','a1'],['d2','c2'],['d3','c3'],
 ['b3','c1',1]];
var nodeById={};N.forEach(function(n){nodeById[n.id]=n});
var svg=document.getElementById('stars'),NS='http://www.w3.org/2000/svg';
var ROLES={ap:['a1','a2','a4','b1','b2','b3','b4','d1','d2','d3'],event:['a1','a2','a4','a5','b1','b4','c4','d2','d3'],production:['a1','a2','a4','b1','c1','c2','c3','d2','d3']};
var role=null;
var active=null,mobile=null,els={nodes:{},edges:[]};
function mk(t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);return e}
function place(){
  if(!mobile){var Wd=place.W;N.forEach(function(n){var x=n.d[0],nx;
      if(x<500)nx=95+(x-120)/300*(Wd*0.40-95);else nx=Wd*0.60+(x-640)/240*(Wd-95-Wd*0.60);
      n.p=[Math.round(nx),n.d[1]]});return}
  var y0=80;
  ORDER.forEach(function(c){
    var list=N.filter(function(n){return n.c===c});
    list.forEach(function(n,j){
      var x=(j%2===0)?95:285;
      if(list.length%2===1&&j===list.length-1)x=190;
      n.p=[x,y0+Math.floor(j/2)*100];
    });
    CATS[c].tm=[24,y0-42];
    y0+=(Math.ceil(list.length/2)-1)*100+130;
  });
  place.H=y0-30;
}
function build(){
  mobile=window.innerWidth<=700;
  var W=380,H=915;if(mobile){place()}
  if(!mobile){H=500;var ah=Math.max(340,Math.min(window.innerHeight-270,640)),aw=svg.parentNode.clientWidth||1100;W=Math.max(900,Math.round(H*aw/ah));svg.style.height=ah+'px';place.W=W}
  else svg.style.height='';
  place();if(mobile)H=place.H;
  svg.setAttribute('viewBox','0 0 '+W+' '+H);
  while(svg.firstChild)svg.removeChild(svg.firstChild);
  els={nodes:{},edges:[]};
  var eg=mk('g',{});svg.appendChild(eg);
  E.forEach(function(e){
    var a=nodeById[e[0]],b=nodeById[e[1]];
    if(mobile&&a.c!==b.c&&!(Math.abs(ORDER.indexOf(a.c)-ORDER.indexOf(b.c))===1&&(e[2]||(a.c==='lead'&&b.c==='comm')||(a.c==='prod'&&b.c==='tool')||(a.c==='comm'&&b.c==='tool'&&false))))return;
    if(!mobile&&e[2])return;
    var ln=mk('line',{x1:a.p[0],y1:a.p[1],x2:b.p[0],y2:b.p[1],stroke:'#641726','stroke-width':1,'stroke-dasharray':a.c===b.c?'':'3 4',class:'edge'});
    eg.appendChild(ln);els.edges.push({ln:ln,a:a.id,b:b.id});
  });
  ORDER.forEach(function(c){
    var t=mobile?CATS[c].tm:[CATS[c].t[0]<500?30:W-30,CATS[c].t[1]],right=!mobile&&t[0]>W/2;
    var tx=mk('text',{x:right?t[0]:t[0]+18,y:t[1],class:'cat-t'});if(right)tx.setAttribute('text-anchor','end');tx.textContent=CATS[c].name;svg.appendChild(tx);
    var dc=mk('circle',{cy:t[1]-4,r:5,fill:CATS[c].color});svg.appendChild(dc);
    dc.setAttribute('cx',right?t[0]-tx.getComputedTextLength()-13:t[0]+5);
  });
  N.forEach(function(n){
    var p=n.p;
    var g=mk('g',{class:'node',tabindex:'0',role:'button','aria-label':n.l.join(' ')});
    g.appendChild(mk('circle',{cx:p[0],cy:p[1],r:18,fill:'transparent'}));
    var ring=mk('circle',{cx:p[0],cy:p[1],r:13,fill:'none',stroke:CATS[n.c].color,'stroke-width':1.5,class:'ring',opacity:0});
    g.appendChild(ring);
    var dot=mk('circle',{cx:p[0],cy:p[1],r:7,fill:CATS[n.c].color,class:'dot'});g.appendChild(dot);
    var texts=[];
    n.l.forEach(function(line,i){var t=mk('text',{x:p[0],y:p[1]+28+i*17,'text-anchor':'middle'});t.textContent=line;g.appendChild(t);texts.push(t)});
    g.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse'){active=n.id;paint()}});
    g.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse'){active=null;paint()}});
    g.addEventListener('click',function(e){if(e.detail===0||e.pointerType!=='mouse'){active=active===n.id?null:n.id;paint()}});
    g.addEventListener('focus',function(){active=n.id;paint()});
    g.addEventListener('blur',function(){active=null;paint()});
    svg.appendChild(g);els.nodes[n.id]={ring:ring,dot:dot,texts:texts};
  });
  paint();
}
function neighbors(id){var s={};E.forEach(function(e){if(e[0]===id)s[e[1]]=1;if(e[1]===id)s[e[0]]=1});return s}
function paint(){
  var nb=active?neighbors(active):{};
  N.forEach(function(n){
    var inR=!role||role.indexOf(n.id)>-1;
    var o=active?((n.id===active||nb[n.id])?1:.3):(inR?1:.18),x=els.nodes[n.id];
    x.dot.setAttribute('opacity',o);x.texts.forEach(function(t){t.setAttribute('opacity',o)});
    x.ring.setAttribute('opacity',n.id===active?1:0);
  });
  els.edges.forEach(function(e){
    var o=.4,w=1,col='#641726';
    if(active){if(e.a===active||e.b===active){o=.95;w=1.8;col=CATS[nodeById[active].c].color}else o=.1}
    else if(role){if(role.indexOf(e.a)>-1&&role.indexOf(e.b)>-1){o=.85;w=1.6}else o=.05}
    e.ln.setAttribute('opacity',o);e.ln.setAttribute('stroke',col);e.ln.setAttribute('stroke-width',w);
  });
}
var rb=document.getElementById('rolebar');
rb.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
  role=b.dataset.r?ROLES[b.dataset.r]:null;active=null;
  rb.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});paint()});
svg.addEventListener('click',function(e){if(e.target===svg){active=null;paint()}});
build();
var _rt;window.addEventListener('resize',function(){clearTimeout(_rt);_rt=setTimeout(build,120)});
})();

(function(){function fit(){document.querySelectorAll('.photo-note').forEach(function(n){n.classList.remove('one');var lh=parseFloat(getComputedStyle(n).lineHeight)||24;if(n.getBoundingClientRect().height<lh*1.6){var r=document.createRange();r.selectNodeContents(n);if(r.getBoundingClientRect().width>n.clientWidth*.8)n.classList.add('one')}})}
fit();addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)})();
