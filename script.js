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

const textTypewriter = "Din era abacului până la era inteligenței artificiale...";
const containerTypewriter = document.getElementById('typewriter-container');
let indexType = 0;

function typeWriter() {
    if (containerTypewriter && indexType < textTypewriter.length) {
        if(indexType === 0) {
            containerTypewriter.innerHTML = '<span id="tw-text"></span><span class="typewriter-cursor"></span>';
        }
        document.getElementById('tw-text').innerHTML += textTypewriter.charAt(indexType);
        indexType++;
        setTimeout(typeWriter, 50);
    }
}

if(containerTypewriter) {
    setTimeout(typeWriter, 500);
}
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorTrails = document.querySelectorAll("[data-cursor-trail]");

if (cursorDot) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorTrails.forEach((trail, index) => {
            trail.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {
                duration: 100 + (index * 60),
                fill: "forwards"
            });
        });
    });
}