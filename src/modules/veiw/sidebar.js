import {
  menuIcon, mainContent, sideBar, list, check, projectList,
} from "../domCollection";

// -----------------------Menu Click animation -------------------------------

export function MenuClickanimation() {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
      for (let j = 0; j < list.length; j++) {
        list[j].style.borderLeft = "none";
        list[j].style.borderRadius = "";
        list[j].style.backgroundColor = "";
      }
      list[i].style.borderLeft = "3px var(--accentDark) solid";
      list[i].style.borderRadius = "2px";
      list[i].style.backgroundColor = "#2abd675f";
    });
  }
}

// ----------------------- add project Dom Manupulation -------------------------------

export function addProject() {
  let projectListAll = document.querySelectorAll(".project-ul li");
  let lastChild = projectListAll[projectListAll.length - 1];
  lastChild.addEventListener("click", makeItInput);
  function makeItInput() {
    removeAllChildNodes(lastChild);
    lastChild.removeAttribute("class");
    lastChild.className = "activated-list";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter project Name";
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    const cancleBtn = document.createElement("button");
    cancleBtn.textContent = "Cancle";
    lastChild.appendChild(input);
    lastChild.appendChild(addBtn);
    lastChild.appendChild(cancleBtn);
     
    const newAddProject = document.createElement("li");
    lastChild.removeEventListener("click", makeItInput);

    
  }
}

// ----------------------- function to delete each node of their parent node---------------------

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
