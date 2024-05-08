const circle = document.getElementById('circle');
let isBlack = false;

circle.addEventListener('click', () => {
    if (isBlack) {
        document.body.style.background = 'linear-gradient(#9B4F96, #D1B9FF, #001642)';
    } else {
        document.body.style.background = 'linear-gradient(#FF8DE3, #8FDFFD, #D1B9FF)';
    }

    const children = document.querySelectorAll('.child');
    children.forEach(child => {
        if (isBlack) {
            child.style.color = 'white';
        } else {
            child.style.color = 'black';
        }
    });


    const title = document.querySelector('.title');
    if (isBlack) {
        title.textContent = "Hello, stupid. It's good to see you.";
        document.querySelector('.title01').style.display = 'none'; 
    } else {
        title.textContent = "Think you could hook us up to the?";
        document.querySelector('.title01').style.display = 'system now?'; 
    }
    isBlack = !isBlack;
});