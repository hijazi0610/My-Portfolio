const toggle = document.getElementById('brightToggle');
const body = document.querySelector('body');
const skills = document.getElementsByClassName('svg');

toggle.addEventListener('click', function() {
    //this.classList.toggle('bi-brightness-high-fill')
    if(this.classList.toggle('bi-moon')) {
        body.style.background = '#10101a';
        body.style.color = 'white';
        body.style.transition = '2s';
        skills.style.color = 'white';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        body.style.border = '1px solid #10101a';
        skills.style.color = '#10101a';
    }
})

var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div'),
    intensity: 0.4,
    speedIn: 1.5,
    speedOut: 1.5,
    image1: '../img/Trash.jpg',
    image2: '../img/WP.png',
    displacementImage: '../img/14.jpg',
});

var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div2'),
    intensity: 0.4,
    speedIn: 1.5,
    speedOut: 1.5,
    image1: '../img/Farmer2 (1).jpeg',
    image2: '../img/WP2.png',
    displacementImage: '../img/14.jpg',
});

var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div3'),
    intensity: 0.4,
    speedIn: 1.5,
    speedOut: 1.5,
    image1: '../img/Photography.png',
    image2: '../img/WP3.png',
    displacementImage: '../img/14.jpg',
});

var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div4'),
    intensity: 0.4,
    speedIn: 1.5,
    speedOut: 1.5,
    image1: '../img/2.png',
    image2: '../img/WP4.png',
    displacementImage: '../img/14.jpg',
});






