import "./styles/main.css";
import "./styles/varriables.css";

const menuIcon = document.querySelector("#menuIcon");
const main = document.querySelector(".main");
menuIcon.addEventListener("click", (event) => {
 
  main.style.gridTemplateColumns = "0 100%";
  event.target.addEventListener("click", () => {
    main.style.gridTemplateColumns = "350px 1400px";
  });
});
