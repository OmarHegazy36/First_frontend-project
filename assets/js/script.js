let counters = document.querySelectorAll('.counter__box-number')
let speed = 68

counters.forEach(counter => {
    let animate = () => {
        let value = + counter.getAttribute('info');
        let data = +counter.innerText;

        let time = value / speed;

        if (data < value) {
            counter.innerText = Math.ceil(data + time);

            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();

});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('text-primary')
        }else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('text-primary')
        };
    });
};
window.addEventListener('scroll', scrollActive);

