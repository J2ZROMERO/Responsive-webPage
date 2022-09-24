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

/** start abnout desk */
function css(variable, style) {
  Object.keys(style).forEach((attr) => {
    variable.style[attr] = style[attr];
  });
}

const logo = document.querySelector('.logo_mobDA');
logo.addEventListener('mouseover', () => {
  css(logo, {
    transform: 'scale(1.2)',
    'box-shadow': '0px 0px 0px 0px #ff4f38',
  });
});

logo.addEventListener('mouseout', () => {
  css(logo, {
    transform: 'scale(1)',
    'box-shadow': '-11px 5px 0px -2px #ff4f38',
  });
});

const socialM = document.getElementsByClassName('headWordDA');

for (let i = 0; i < socialM.length; i += 1) {
  socialM[i].addEventListener('mouseover', () => {
    css(socialM[i], {
      transform: 'scale(1.2)',
      cursor: 'pointer',
    });
  });
  socialM[i].addEventListener('mouseout', () => {
    css(socialM[i], {
      transform: 'scale(1)',

    });
  });
}

const live = document.querySelector('.invitationDA');

live.addEventListener('mouseover', () => {
  css(live, {
    'box-shadow': '0px 0px 0px 0px #ff4f38',
    transform: 'scale(1.2)',
  });

  live.addEventListener('mouseout', () => {
    css(live, {
      'box-shadow': '0px 0px 0px 4px #ff4f38',
      transform: 'scale(1)',
    });
  });
});

const hovert = document.getElementsByClassName('textHoverDA');

for (let i = 0; i < hovert.length; i += 1) {
  hovert[i].addEventListener('mouseover', () => {
    css(hovert[i], {
      opacity: '0',
    });
  });

  hovert[i].addEventListener('mouseout', () => {
    css(hovert[i], {
      opacity: '.5',
    });
  });
}

/** end about desk */

/** about desk */

/** end about */