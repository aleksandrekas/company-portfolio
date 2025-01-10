const skillSection = document.querySelector(".diagrams")
const numbersSection = document.querySelector(".numbers")
const buttons = document.querySelectorAll('.portfolioBtn')
const prtfItem = document.querySelectorAll('.prtfItem')



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



  function portfolioBtnClick(btn) {
    buttons.forEach(element => {
        if (element.classList.contains('portfolioBtnActive')) {
            element.classList.remove('portfolioBtnActive');
        }
    });

    btn.classList.add('portfolioBtnActive');
    console.log(btn.textContent);



    // upper code takes care of showing whitch button is clicked

    if (btn.textContent === 'ALL') {
        prtfItem.forEach(item => {
            if (item.classList.contains('prtfItemHide')) {
                item.classList.remove('prtfItemHide');
            }
        });
    } else {
        prtfItem.forEach(item => {
            const itemT = item.querySelector('h4');
            if (itemT.textContent !== btn.textContent) {
                item.classList.add('prtfItemHide');
            } else {
                item.classList.remove('prtfItemHide'); 
            }
        });
    }
}



















  
  buttons.forEach(element => {
    element.addEventListener('click', () => portfolioBtnClick(element));
  });




  amountObserver.observe(numbersSection)

  skillsObserver.observe(skillSection)









