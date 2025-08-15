const panels = document.querySelectorAll(".panel");
// this const is selecting all the panels and creating a nodeList with all of them and their indexes
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
