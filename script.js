const circle = document.getElementById('circle');
let isBlack = false;

circle.addEventListener('click', () => {
    if (isBlack) {
        document.body.style.background = 'linear-gradient(#9B4F96, #D1B9FF, #001642)';
    } else {
        document.body.style.background = 'linear-gradient(#FF8DE3,#8FDFFD,#D1B9FF)';
    }
    isBlack = !isBlack;
});