import "./styles/main.css";
import "./styles/varriables.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/mainContent.css";
import "./styles/footer.css";
import {
    menuIcon, mainContent, sideBar, list, check, projectList,plus,projectListAll2,projectList2
  } from "./modules/domCollection";
import { toggle } from "./modules/domManupulation/header";
import { MenuClickanimation, addProject } from "./modules/domManupulation/sidebar";

toggle();
MenuClickanimation(list,projectListAll2);
addProject();
