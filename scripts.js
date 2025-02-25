window.addEventListener('scroll',()=>{
    if(window.scrollY >=30){
        document.getElementById("header").classList.add('scrolled')
    }else{
        document.getElementById("header").classList.remove('scrolled')
    }
})

const hamburgerBtn= document.getElementById("hamburgerBtn")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const sliders = document.querySelectorAll(".carouselItem")
const botBtns = document.querySelectorAll(".botBtn")
const img = document.querySelectorAll(".bottomItemContentImg")
const containers = document.querySelectorAll('.imgContainer')
let index =  0

function updateBotBtn(index) {

    botBtns.forEach((btn, i) => {
        btn.classList.remove('botBtnActive')
        if(i === index){
            btn.classList.add('botBtnActive')
        }
    });

}

if (sliders.length > 0) {
    sliders[index].classList.add('carouselActive');
    updateBotBtn(index)
    
}




function changeCarousel(index) {
    sliders.forEach((slide, i) => {
        slide.classList.remove('carouselActive');
        slide.classList.add('disabled');
        if (i === index) {
            slide.classList.remove('disabled');
            slide.classList.add('carouselActive');
        }
        updateBotBtn(index)
    });


}



rightBtn.addEventListener('click', () => {
    if (index < sliders.length - 1) {
        index += 1;
    } else {
        index = 0; 
    }
    changeCarousel(index);
});

leftBtn.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
    } else {
        index = sliders.length - 1;
    }
    changeCarousel(index);
});

botBtns.forEach((btn,indx)=>{
    btn.addEventListener('click',()=>{
        index = indx
        changeCarousel(index)
    })
})



function updateHeights() {
    containers.forEach((cont, index) => {
        cont.style.height = `${img[index].offsetHeight}px`;
    });
}

img.forEach(image => {
    const observer = new ResizeObserver(() => {
        updateHeights();
    });
    observer.observe(image);
});




hamburgerBtn.addEventListener('click',()=> {
    document.getElementById('navList').style.transform ='translateX(260px)'
    document.querySelector(".overlayDark").style.display = 'flex'
    document.body.style.overflow = 'hidden'
    hamburgerBtn.style.display ='none'
})


document.querySelector(".overlayDark").addEventListener('click',()=>{
    document.getElementById('navList').style.transform ='translateX(-260px)'
    document.querySelector(".overlayDark").style.display = 'none'
    document.body.style.overflow = 'visible'
    hamburgerBtn.style.display ='flex'
})