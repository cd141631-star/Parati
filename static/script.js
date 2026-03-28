const lyrics = [
    { text: "♡ lover is a day- cuco (lyrics) ♡", duration: 42000 },
    { text: "Time changed were different", duration: 3600 },
    { text: "But my mind still says redundant things", duration: 2900 },
    { text: "Can I not think", duration: 2800 },
    { text: "Will you love this part of me?", duration: 2900 },
    { text: "My lover is", duration: 2500 },
    { text: "The day I cant forget", duration: 2500 },
    { text: "♪ ♫ ♩ ♬", duration: 3900 },
    { text: "Furthering my distance from you", duration: 3100 },
    { text: "Realistically i cant leave now", duration: 4200 },
    { text: "but im okay as long as you", duration: 4000 },
    { text: "keep me from going crazy", duration: 4900 },
    { text: "keep me from going crazy", duration: 5000 },
    { text: "straight up ahead youll find", duration: 4000 },
    { text: "a sign that says you cant", duration: 3700 },
    { text: "get by with a lie", duration: 3100 },
    { text: "but if i stayed away by a thread", duration: 3800 },
    { text: "from the glory path and", duration: 2600 },
    { text: "made my life harder lying bout", duration: 2700 },
    { text: "the stupid shit i say", duration: 2300 },
    { text: "then you wouldnt know a single", duration: 3400 },
    { text: "thing about how i feel about", duration: 2900 },
    { text: "you and all those really dumb", duration: 2900 },
    { text: "things people feel", duration: 1600 },
    { text: "ill take the bumpy road itll", duration: 2000 },
    { text: "probably break my legs", duration: 3000 },
    { text: "as long as i dont show", duration: 2500 },
    { text: "you whats ruining my head", duration: 2800 },
    { text: "funny thing about you is you", duration: 2900 },
    { text: "read me pretty well but you", duration: 2800 },
    { text: "havent found me yet at the", duration: 2500 },
    { text: "bottom of the well", duration: 1400 },
    { text: "annoying you with smoke", duration: 3000 },
    { text: "signals asking you", duration: 1900 },
    { text: "for help", duration: 1000 },
    { text: "cause your immediate", duration: 2100 },
    { text: "presence lifts me straight", duration: 2000 },
    { text: "away from hell", duration: 1300 },
    { text: "me and mr.heart we say", duration: 2900 },
    { text: "the cutest things about you", duration: 2900 },
    { text: "how you seem unreal and wed", duration: 2900 },
    { text: "probably die so quick", duration: 1800 },
    { text: "without you", duration: 900 },
    { text: "suffocating from the", duration: 1900 },
    { text: "radiating air around us", duration: 2000 },
    { text: "full of happiness we", duration: 1900 },
    { text: "dont have brightness gone", duration: 2300 },
    { text: "so dark without you girl", duration: 1900 },
    { text: "Time changed were different", duration: 3600 },
    { text: "But my mind still says redundant things", duration: 2900 },
    { text: "Can I not think", duration: 2800 },
    { text: "Will you love this part of me my lover", duration: 3700 },
    { text: "is the day i cant forget", duration: 3400 },
    { text: "♪ ♫ ♩ ♬", duration: 3900 },
    { text: " Te hice esta pagina Nicol para ti aun que me dio pereza terminar toda la cancion", duration: 5000 },
    { text: " bueno si tas leeyendo esto que es obvio xd pues me costo hacer esta pagina y espero que te guste mucho", duration: 5000 },
    { texto: " bueno eso seria todo bai tqm amiguita :3", duration: 5000 },
    { text: "♪ ♫ ♩ ♬", duration: 3900 },
];

function playProject() {
    const music = document.getElementById('bg-music');
    const button = document.getElementById('play-button');

    music.play();
    button.style.display = 'none';

    initStars();
    startLyrics();
}

function initStars() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        let size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}

async function startLyrics() {
    const display = document.getElementById('lyric-text');
    for (let line of lyrics) {
        // 1. Desvanece rápido (200ms)
        display.style.opacity = "0";
        await new Promise(r => setTimeout(r, 200));

        // 2. Cambia el texto
        display.innerText = line.text;

        // 3. Aparece
        display.style.opacity = "1";

        // 4. Espera el tiempo exacto de la canción menos el tiempo de transición
        await new Promise(r => setTimeout(r, line.duration - 200));
    }
}

function initStars() {
    const container = document.querySelector('.stars-container');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Tamaño aleatorio (unas más grandes que otras)
        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Posición inicial aleatoria
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;

        // Variables personalizadas para la animación de cada estrella
        star.style.setProperty('--start-x', `${x}vw`);
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`); // Titileo
        star.style.setProperty('--move-duration', `${Math.random() * 50 + 50}s`); // Movimiento muy lento

        // Color sutil (algunas ligeramente azules)
        if (Math.random() > 0.8) {
            star.style.backgroundColor = '#add8e6'; // Azul claro
            star.style.boxShadow = '0 0 5px #0051ff';
        }

        container.appendChild(star);
    }
}
async function startLyrics() {
    const display = document.getElementById('lyric-text');

    for (let line of lyrics) {
        // 1. Quitamos la clase para que desaparezca
        display.classList.remove('show-text');

        // Reducimos la espera de 800ms a 300ms para que el cambio sea veloz
        await new Promise(r => setTimeout(r, 300));

        display.innerText = line.text;

        // 2. Mostramos la frase casi de inmediato
        setTimeout(() => {
            display.classList.add('show-text');
        }, 30);

        // 3. Esperamos la duración de la frase
        // Restamos un poco más (500ms) para compensar la rapidez de la animación
        await new Promise(r => setTimeout(r, line.duration - 500));
    }
}
// Añade estas funciones al final de tu archivo script.js

function initDust() {
    const container = document.body;
    for (let i = 0; i < 30; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust';
        const size = Math.random() * 5 + 2 + 'px';
        dust.style.width = size;
        dust.style.height = size;
        dust.style.left = Math.random() * 100 + 'vw';
        dust.style.top = Math.random() * 100 + 'vh';
        dust.style.setProperty('--duration', Math.random() * 15 + 10 + 's');
        container.appendChild(dust);
    }
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 40 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);
}

// IMPORTANTE: Actualiza tu función playProject para incluir estas funciones
function playProject() {
    const music = document.getElementById('bg-music');
    const button = document.getElementById('play-button');

    music.play();
    button.style.display = 'none';

    initStars();
    initDust(); // Lanzar polvo cósmico
    startLyrics();

    // Crear una estrella fugaz cada 6 segundos
    setInterval(createShootingStar, 6000);
}