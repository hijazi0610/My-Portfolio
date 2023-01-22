const toggle = document.getElementById('bright-toggle');
const body = document.getElementById('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon')
    if(this.toggle.classList('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})