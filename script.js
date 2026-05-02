const butonTema = document.getElementById('btn-tema');
if(butonTema) {
    butonTema.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        butonTema.innerHTML = isDark ? 'Mod Luminos ☀️' : 'Mod Întunecat 🌙';
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
    });
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
        butonTema.innerHTML = 'Mod Luminos ☀️';
    }
}

const observator = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('arata');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observator.observe(card);
});

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
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const bara = document.getElementById("baraProgres");
    if (bara) { bara.style.width = scrolled + "%"; }
});

butonSus.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const formular = document.getElementById('formular-contact');
if(formular) {
    formular.addEventListener('submit', function(e) {
        e.preventDefault();
        this.reset();
        const msg = document.getElementById('mesaj-succes');
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 4000);
    });
}