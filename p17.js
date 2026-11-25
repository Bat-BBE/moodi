const when=(c,f,lim=500)=>{const iv=setInterval(()=>{if(c()||--lim<0){clearInterval(iv);try{f()}catch(e){L('ERR '+e.message)}}},100);};
let last='';setInterval(()=>{if(window.__dbg&&b()!==last){last=b();L('say: '+last+'   ['+gt()+']');}},150);
when(()=>window.__dbg&&q('.gtip')&&/Захиаг/.test(q('.gtip').textContent),()=>{setTimeout(()=>{D().G.onDown(); L('tip='+q('.gtip').innerText.replace(/\s+/g,' '));
  when(()=>D().G.targets.length===3,()=>{const G=D().G; setTimeout(()=>{for(const t of G.targets){ G.onDown({object:t}); if(!G.targets.length) break; }},1500);});
  when(()=>q('#rReply'),()=>L('final '+q('.gcard.res').innerText.replace(/\s+/g,' ')));
 },800);});
