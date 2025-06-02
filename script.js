function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

let hasFormedHeart = false;

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (expression.match(/^\d+[\+\-\*\/]\d+$/)) {
        display.value = 'i love you';

        const images = [];

        for (let i = 0; i < 20; i++) {
            const image = document.createElement("img");
            image.src = 'image.png'; // Ganti dengan path ke gambar
            image.classList.add('love-image');

            // Posisi awal acak
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 100);
            image.style.left = `${randomX}px`;
            image.style.top = `${randomY}px`;

            document.body.appendChild(image);
            images.push(image);
        }

        // Pindahkan secara acak 1x
        setTimeout(() => {
            images.forEach(image => {
                const randomX = Math.random() * (window.innerWidth - 100);
                const randomY = Math.random() * (window.innerHeight - 100);
                image.style.left = `${randomX}px`;
                image.style.top = `${randomY}px`;
            });
        }, 1000);

        // Setelah 4 detik, bentuk formasi love ❤️
        setTimeout(() => {
            formHeart(images);
        }, 2000);
    } else {
        try {
            display.value = eval(expression);
        } catch {
            display.value = 'Error';
        }
    }
}

function formHeart(images) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Skala formasi berdasarkan layar (maksimal 80px gambar)
    const scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 40;

    images.forEach((img, i) => {
        const t = (Math.PI * 2 * i) / images.length;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        img.style.left = `${centerX + x * scaleFactor}px`;
        img.style.top = `${centerY + y * scaleFactor}px`;
    });
}


function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
