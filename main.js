import {
  clickLabelEvent,
  observeElements,
  observeImages,
  observeText,
} from "./utils.js";
const labelElements = document.querySelectorAll(".faq__label");
labelElements.forEach(clickLabelEvent);
const sectionElements = document.querySelectorAll("section");
const images = document.querySelectorAll("img");
const articles = document.querySelectorAll("p");
observeElements(sectionElements);
observeImages(images);
observeText(articles);
