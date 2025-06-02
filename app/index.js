import { websites } from "./websites.js";


console.log(websites);


const swiperWrapper = document.querySelector(".swiper-wrapper");
console.log(websites[0]);

for(let site in websites) {

  

  const newSlide = document.createElement("div");
  newSlide.classList.add("swiper-slide");
  newSlide.id = `slide${Number(site)+1}`;
  newSlide.style.background = `url(../../assets/img/${websites[site].img}) fixed center/cover`;



  const newCard = document.createElement("div");
  newCard.classList.add("swipperCard");
  const h1div = document.createElement("h1");
  h1div.style.fontFamily = `${websites[site].font}`;
  h1div.style.fontSize = `${websites[site].fontSize}`;
  h1div.style.color = `${websites[site].color}`;
  h1div.innerText = `${websites[site].name}`
  newCard.append(h1div);

  // Title h2
  const newH2 = document.createElement("h2");
  newH2.innerText = `${websites[site].title}`;
  newCard.append(newH2);

  // Description
  const newText = document.createElement("p");
  newText.innerText = `${websites[site].text}`;
  newCard.append(newText);

  // Tech 
  const newTech = document.createElement("p");
  newTech.innerText = `${websites[site].tech}`;
  newCard.append(newTech);



  let aButton = document.createElement("span");
  aButton.innerHTML = `<a href=${websites[site].url}>View My Work</a>`;

  newCard.append(aButton);

  newSlide.append(newCard);
  swiperWrapper.append(newSlide);
  
  // console.log(newSlide);
  
}