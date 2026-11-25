localStorage.setItem('moodi-me',JSON.stringify({met:true,likes:[]}));localStorage.setItem('moodi-name','Сараа');localStorage.setItem('moodi-last','2026-11-25');localStorage.setItem('moodi-moods',JSON.stringify({'2026-11-25':'ok'}));
const enc=s=>btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
history.replaceState(null,'','#m='+enc(JSON.stringify({f:'Бат',t:'Сараа',m:'Чи надад хамгийн чухал хүн шүү!',k:'love',qq:'Бид хаана анх уулзсан бэ?',qa:'Сургууль дээр',qw:['Кино театрт','Сансарт 🚀']})));
