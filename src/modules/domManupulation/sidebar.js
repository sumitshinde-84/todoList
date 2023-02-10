

import {
  menuIcon, mainContent, sideBar, list, check, projectList, plus, projectListAll2, projectList2,projectTitlePara
} from "../domCollection";
import  { Project } from "../project.js";

export const projects = [];
// -----------------------Menu Click animation -------------------------------

export function MenuClickanimation(list, secondList) {
  for (let i = 0; i < list.length; i++) {


    list[i].addEventListener("click", () => {
      for (let j = 0; j < list.length; j++) {
        list[j].style.borderLeft = "none";
        list[j].style.borderRadius = "";
        list[j].style.backgroundColor = "";
      }
      for (let j = 0; j < secondList.length; j++) {
        secondList[j].style.borderLeft = "none";
        secondList[j].style.borderRadius = "";
        secondList[j].style.backgroundColor = "";
      }
      list[i].style.borderLeft = "3px var(--accentDark) solid";
      list[i].style.borderRadius = "2px";
      list[i].style.backgroundColor = "#2abd675f";
    });
  }
}

// ----------------------- add project Dom Manupulation -------------------------------

export function addProject() {
  const projectListAll = document.querySelectorAll(".project-ul li");
  const lastChild = projectListAll[projectListAll.length - 1];
  lastChild.addEventListener("click", makeItInput);
}

// ----------------------- convert add-project-button to input -------------------------------

export function makeItInput() {
  const projectListAll = document.querySelectorAll(".project-ul li");
  const lastChild = projectListAll[projectListAll.length - 1];
  removeAllChildNodes(lastChild);
  lastChild.removeAttribute("class");
  lastChild.className = "activated-list";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter project Name";
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    addProjectBtn(lastChild, input);
  });
  const cancleBtn = document.createElement("button");
  cancleBtn.textContent = "Cancle";
  lastChild.appendChild(input);
  lastChild.appendChild(addBtn);
  lastChild.appendChild(cancleBtn);
  const newAddProject = document.createElement("li");
  lastChild.removeEventListener("click", makeItInput);
}
// ----------------------- function for add project button---------------------

function addProjectBtn(lastChild, input) {
  removeAllChildNodes(lastChild);
  lastChild.textContent = input.value;
  const projectTemp = 
  console.log(projectTemp.name)
  lastChild.removeAttribute("class");
  const projectListAll = document.querySelectorAll(".project-ul li");
  MenuClickanimation(projectListAll, list);
  const addProject = document.createElement("li");

  projects.push(projectTemp);
  addProject.textContent = "Add Project";
  addProject.appendChild(plus);
  addProject.addEventListener("click", makeItInput);
  projectList2.appendChild(addProject);
  console.log(projects);
}

// ----------------------- function to delete each node of their parent node---------------------

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
