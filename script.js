document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');
    const flowersContainer = document.getElementById('flowers');
    const showFlowersBtn = document.getElementById('showFlowersBtn');
    const heartsContainer = document.getElementById('hearts-container');

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.style.opacity = 1;
            paragraph.style.transform = 'translateY(0)';
        }, index * 500);
    });

    showFlowersBtn.addEventListener('click', () => {
        const angles = [-5, -2, 0, 2, 5];

        for (let i = 0; i < 5; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.transform = `rotate(${angles[i]}deg)`;

            const stem = document.createElement('div');
            stem.classList.add('stem');
            stem.style.transform = `translateX(-50%) rotate(${angles[i]}deg)`;
            flower.appendChild(stem);

            const leafLeft = document.createElement('div');
            leafLeft.classList.add('leaf', 'left');

            const leafRight = document.createElement('div');
            leafRight.classList.add('leaf', 'right');

            flower.appendChild(leafLeft);
            flower.appendChild(leafRight);
            flowersContainer.appendChild(flower);
        }
        flowersContainer.style.opacity = 1;
        showFlowersBtn.style.display = 'none';
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
