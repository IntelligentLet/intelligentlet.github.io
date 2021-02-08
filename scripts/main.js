
function setRandomColors() {

  let color = Math.floor(Math.random() * 6) + 10;

  document.querySelectorAll('.color-change').forEach((element, i) => {
    element.style.color = `var(--nord${color})`;
  });

}

window.addEventListener('load', () => {
  setRandomColors();
});
