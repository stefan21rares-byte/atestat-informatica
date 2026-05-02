const butonTema = document.getElementById('btn-tema');

if(butonTema) {
    butonTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            butonTema.innerHTML = 'Mod Luminos ☀️';
            localStorage.setItem('tema', 'dark');
        } else {
            butonTema.innerHTML = 'Mod Întunecat 🌙';
            localStorage.setItem('tema', 'light');
        }
    });

    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
        butonTema.innerHTML = 'Mod Luminos ☀️';
    }
}

const butonSus = document.createElement('button');
butonSus.innerHTML = '↑';
butonSus.className = 'buton-sus';
document.body.appendChild(butonSus);

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        butonSus.classList.add('arata');
    } else {
        butonSus.classList.remove('arata');
    }

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    
    const bara = document.getElementById("baraProgres");
    if (bara) {
        bara.style.width = scrolled + "%";
    }
});

butonSus.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const formular = document.getElementById('formular-contact');
if(formular) {
    formular.addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.getElementById('nume').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mesaj').value = '';
        
        const mesajSucces = document.getElementById('mesaj-succes');
        mesajSucces.style.display = 'block';
        
        setTimeout(() => {
            mesajSucces.style.display = 'none';
        }, 4000);
    });
}