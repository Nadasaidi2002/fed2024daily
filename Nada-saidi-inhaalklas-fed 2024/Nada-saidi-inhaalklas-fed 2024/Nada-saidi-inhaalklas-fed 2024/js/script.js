console.log('hoi');

// Hamburger menu werkend maken

// als eerst spreek ik de html elementen aan met const/ik selecteer de elementen
const hamburgerMenu = document.querySelector("header > button:nth-of-type(3)");
const kruisje = document.querySelector("header nav > button");
const navigatieElement = document.querySelector("header nav");

// de class 'open' wordt toegevoegd aan de nav
function openMenu() {
	navigatieElement.classList.add("open");
}

// de class 'open' wordt weggehaald van de nav
function sluitMenu() {
	navigatieElement.classList.remove("open");
}

// Eventlistenerns. 
hamburgerMenu.addEventListener("click", openMenu);
kruisje.addEventListener("click", sluitMenu);





// Dit zorgt ervoor dat de styling van de header veranderd als je scrollt
// Gevraagd aan chatGPT: How do I change the styling of the header when you scroll? 

// als eerst spreek ik de html elementen aan met const/ik selecteer de elementen
const header = document.querySelector('header');
const headerIcons = document.querySelectorAll('header button');
const logo = document.querySelector('header > a:first-of-type');


function handleScroll() {
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled');
    //   door de forEach, wordt de class 'scrolled' toegevoegd aan alle buttons in de header
      headerIcons.forEach(button => button.classList.add('scrolled')); 
  } else {
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      headerIcons.forEach(button => button.classList.remove('scrolled'));
  }
}

// eventlistener
window.addEventListener('scroll', handleScroll);





// audio voor submit knop
const submitKnop = document.querySelector('footer form > section:nth-of-type(2) input:nth-of-type(2)');
const audio = document.querySelector('audio');

function playaudio(){
    audio.play();
    console.log("test");
}

// eventlistener
submitKnop.addEventListener('click', playaudio);