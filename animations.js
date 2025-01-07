const skillSection = document.querySelector(".diagrams")
const numbersSection = document.querySelector(".numbers")





function displayValue(targetValue, targetDiv,time) {
  let currentValue = 0;
  const displayDiv = document.getElementById(targetDiv);

  const interval = setInterval(() => {
    if (currentValue < targetValue) {
      currentValue++;
      displayDiv.innerText = currentValue; 
    } else {
      clearInterval(interval);
    }
  }, time);
}



const skillsObserver = new IntersectionObserver(([entry],observer) => {
    if (entry.isIntersecting) {
      document.getElementById("hBar").style.animation ="growGreen linear 1s forwards"
      document.getElementById("cBar").style.animation ="growBlue linear 1s forwards"
      document.getElementById("jBar").style.animation ="growYellow linear 1s forwards"
      document.getElementById("pBar").style.animation ="growRed linear 1s forwards"

      observer.unobserve(entry.target);
    }
  });
  const amountObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        displayValue(100, "staffAmount", 15);
        displayValue(200, "clientsAmount", 8); 
        displayValue(300, "projectAmount", 5);
        displayValue(400, "runingAmount", 4); 
  
        observer.unobserve(entry.target);
      }
    },
   
  );







  amountObserver.observe(numbersSection)

  skillsObserver.observe(skillSection)









