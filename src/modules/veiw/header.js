import { arr } from "../images";
import {
  menuIcon, mainContent, sideBar, list, check,
} from "../domCollection";

// ------------------------------toggle menu animation----------------------------------------------------

export function toggle() {
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

  menuIcon.src = arr[0];
  check.src = arr[1];
}
