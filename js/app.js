const btnColorRandom = document.querySelector('#btnColorRandom');
const btnColorSimple = document.querySelector('#colorSimple');
const btnColorRgb = document.querySelector('#colorRgb');
const btnColorHexa = document.querySelector('#colorHexa');
const colorText = document.querySelector('#colorText');
let conmutador = 'btnColorSimple';

const colorsText = [
    'Red',
    'Yellow',
    'Pink',
    'LightSeaGreen',
    'Aqua',
    'PaleTurquoise',
    'Turquoise',
    'MediumTurquoise',
    'MediumSlateBlue',
    'Blue',
    'BurlyWood',
    'SandyBrown',
    'Chocolate',
    'Brown',
    'Maroon',
    'LightSalmon',
  ];
  
  let number;

const numberRandom = (typeNumber) => {
    if (typeNumber === 'hexadecimal') {
        number = Math.floor(Math.random() * 17);
        return number.toString(16);
    }
    if (typeNumber === 'rgb') {
        number = Math.floor(Math.random() * 256);
        return number;
    }
    if (typeNumber === 'simple text') {
        number = Math.floor(Math.random() * colorsText.length);
        return number;
    }
};

const colorHexadecimalRandom = () => {
    let color = `#${numberRandom('hexadecimal')}${numberRandom(
        'hexadecimal'
    )}${numberRandom('hexadecimal')}${numberRandom('hexadecimal')}${numberRandom(
        'hexadecimal'
    )}${numberRandom('hexadecimal')}`;

    return color;
};

const colorRgbRandom = () => {
    let color = `rgb(${numberRandom('rgb')}, ${numberRandom(
        'rgb'
    )}, ${numberRandom('rgb')})`;

    return color;
};

const colorSimpleTextRandom = () => {
    let color = `${colorsText[numberRandom('simple text')]}`;

    return color;
};

btnColorSimple.addEventListener("click", () => {
  conmutador = "btnColorSimple";
});

btnColorHexa.addEventListener("click", () => {
  conmutador = "btnColorHexa";
});

btnColorRgb.addEventListener("click", () => {
  conmutador = "btnColorRgb";
});

btnColorRandom.addEventListener('click', () => {
    let colors = '';
    if (conmutador === 'btnColorSimple') {
      colors = colorSimpleTextRandom();
      document.body.style.background = `${colors}`;
      colorText.textContent = colors.toUpperCase();
    }
  
    if (conmutador === 'btnColorHexa') {
      colors = colorHexadecimalRandom();
      document.body.style.background = `${colors}`;
      colorText.textContent = colors.toUpperCase();
    }
  
    if (conmutador === 'btnColorRgb') {
      colors = colorRgbRandom();
      document.body.style.background = `${colorRgbRandom()}`;
      colorText.textContent = colors.toUpperCase();
    }
  });
  