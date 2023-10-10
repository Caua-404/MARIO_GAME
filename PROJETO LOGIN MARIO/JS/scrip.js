const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('.Jump');

    setTimeout(() => {

        mario.classList.remove('.Jump');
        
    }, 500);
}

document.addEventListener('keydown', jump);