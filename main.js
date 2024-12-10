const cards = document.querySelectorAll('.item');

cards.forEach(card => setTimeout(() => {
        console.log(card)
        card.classList.add('visible');
    }, Math.random()*10000)
);