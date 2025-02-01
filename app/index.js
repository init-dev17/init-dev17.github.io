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
  const newText = document.createElement("p");
  newText.innerText = `${websites[site].text}`;
  newCard.append(newText);
  let aButton = document.createElement("span");
  aButton.innerHTML = `<a href=${websites[site].url}>Website preview</a>`;

  newCard.append(aButton);

  newSlide.append(newCard);
  swiperWrapper.append(newSlide);
  
  console.log(newSlide);
  
}