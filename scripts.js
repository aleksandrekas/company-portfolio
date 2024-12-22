




window.addEventListener('scroll',()=>{
    if(window.scrollY >=30){
        document.getElementById("header").classList.add('scrolled')
    }else{
        document.getElementById("header").classList.remove('scrolled')
    }
})