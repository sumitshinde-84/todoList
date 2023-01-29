import {
  menuIcon, mainContent, sideBar, list, check,
} from "../domCollection";

// ------------------------------list click Animation----------------------------------------------------

export function sidebar() {
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
}
