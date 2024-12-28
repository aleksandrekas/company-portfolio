window.addEventListener('scroll',()=>{
    if(window.scrollY >=30){
        document.getElementById("header").classList.add('scrolled')
    }else{
        document.getElementById("header").classList.remove('scrolled')
    }
})


const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const sliders = document.querySelectorAll(".carouselItem")
const botBtns = document.querySelectorAll(".botBtn")
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



console.log(index)







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







