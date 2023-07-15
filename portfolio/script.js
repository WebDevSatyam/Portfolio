
// Refreshing the webpage
window.onload = function() {
    if (performance.navigation.type === 1) {
      window.scrollTo(0, 0);
    }
  }

//Burger menu Selection
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//Nav link Selection
const navLink = document.querySelectorAll(".nav-link");

//Scroll up Selection
const scrollUp = document.querySelector("#scroll-up");

//Burger menu bar

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
});

//Close hamburger when link is clicked

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
    
});

//writing paragraph

const sentence="Hello Hello there! My name is Satyam, and I'm a final year student pursuing an integrated Bachelor's-Master's degree in Computer Science Engineering. Currently, I am interning at Virtusa Corporation, a renowned global technology services company. As a final year student, I have had the privilege of gaining valuable theoretical knowledge and practical skills in areas such as Frontend as well as backend and also a part in Algorithms. This comprehensive education has equipped me with a solid foundation to tackle real-world challenges and seek innovative solutions. Additionally, my internship at Virtusa Corporation has provided me with invaluable industry exposure and an opportunity to apply my knowledge in a professional setting.";
const string_to_array = (str) => {
    return str.trim().split(" ");
};
const words = string_to_array(sentence);

const typingParagraph = document.getElementById("typing-paragraph");
  
function typeParagraph() {
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let currentWord = "";
  
    function typeNextCharacter() {
      if (currentCharIndex < currentWord.length) {
        typingParagraph.textContent += currentWord[currentCharIndex];
        currentCharIndex++;
      } else {
        typingParagraph.textContent += " ";
        currentWordIndex++;
        if (currentWordIndex >= words.length) return;
        currentWord = words[currentWordIndex];
        currentCharIndex = 0;
      }
  
      setTimeout(typeNextCharacter, 10);
    }
  
    typeNextCharacter();
}
  
typeParagraph();


