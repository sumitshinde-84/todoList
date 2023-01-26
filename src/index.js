import "./styles/main.css";
import "./styles/varriables.css";

const list = document.querySelector("li");
list.addEventListener("click", () => {
  list.style.borderLeft = "3px solid var( --accentDark)";
  list.style.borderRadius = "3px";
  list.style.backgroundColor = "#2abd6750";
});
