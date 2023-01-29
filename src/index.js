import "./styles/main.css";
import "./styles/varriables.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/mainContent.css";
import "./styles/footer.css";

import {
  menuIcon, mainContent, sideBar, list,
} from "./modules/domCollection";
import { arr } from "./modules/images";
// ------------------------------toggle menu animation----------------------------------------------------

(function () {
  let iconClick = "false";
  menuIcon.addEventListener("click", () => {
    if (iconClick === "false") {
      mainContent.style.gridColumn = "1/3";
      sideBar.style.gridColumn = "";
      sideBar.style.transform = "translate(-110%,0%)";
      iconClick = "true";
    } else if (iconClick === "true") {
      mainContent.style.gridColumn = "2/3";
      sideBar.style.gridColumn = "1/2";
      sideBar.style.transform = "translate(0%,0%)";
      iconClick = "false";
    }
  });
}());

// ------------------------------list click Animation----------------------------------------------------

(function () {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
      for (let j = 0; j < list.length; j++) {
        list[j].style.borderLeft = "none";
        list[j].style.borderRadius = "";
        list[j].style.backgroundColor = "";
      }
      list[i].style.borderLeft = "2px var(--accentDark) solid";
      list[i].style.borderRadius = "2px";
      list[i].style.backgroundColor = "#2abd675f";
    });
  }
}());


const mainIcon = document.querySelector('#menuIcon')
console.log(mainIcon)
const img1 = document.createElement('img')
img1.src=arr[0]
mainIcon.appendChild(img1)