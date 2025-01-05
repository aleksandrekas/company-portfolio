const skillSection = document.querySelector(".diagrams")



const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      document.getElementById("hBar").style.animation ="growGreen linear 1s forwards"
      document.getElementById("cBar").style.animation ="growBlue linear 1s forwards"
      document.getElementById("jBar").style.animation ="growYellow linear 1s forwards"
      document.getElementById("pBar").style.animation ="growRed linear 1s forwards"
      observer.unobserve(skillSection);
    }
  });


  observer.observe(skillSection)

