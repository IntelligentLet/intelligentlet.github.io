
function setRandomColors() {

  let colors = ['rgb(191, 97, 106)', 'rgb(208, 135, 112)', 'rgb(235, 203, 139)', 'rgb(163, 190, 140)', 'rgb(180, 142, 173)']

  let color = colors[Math.floor(Math.random() * colors.length)]

  document.querySelectorAll('.color-change').forEach((element, i) => {
    element.style.color = color;
  });

}

window.addEventListener('load', () => {
  setRandomColors();
});
