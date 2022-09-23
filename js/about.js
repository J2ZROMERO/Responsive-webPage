const landingP = document.querySelector('.container_lanpage');
const menu = document.querySelector('.navT');
const mobilVE = [];

document.querySelector('.menu_mobil').addEventListener('click', () => {
  while (landingP.hasChildNodes()) {
    mobilVE.push(landingP.firstChild);
    landingP.removeChild(landingP.firstChild);
  }
  document.body.removeChild(landingP);
  menu.style.display = 'block';
});

document.querySelector('.closeB').addEventListener('click', () => {
  menu.style.display = 'none';

  document.body.appendChild(landingP);

  for (let i = 0; i <= mobilVE.length - 1; i += 1) {
    landingP.appendChild(mobilVE[i]);
  }
});