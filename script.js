const startButton = document.getElementById('start_button');
const nameInput = document.getElementById('fname');
const gifLanding = document.querySelector('.gif');
const questionLanding = document.querySelector('.question');

var question = null;
var questionMain = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 0;

const inst = [
  'Apka naam bolo Jaan-e-mun… dusroo ka nahi…',
  'Tum apna naam batao Mrs...dusroo ka nahi...',
  'Madam ji, guess nahi… sahi wala naam batayein 😄',
  'Kya baat hai, apna naam bhi Google karna padega kya?',
  'Begum sahiba, sharmaiye mat… naam toh aapka hi hai 😏',
  'Arre Mrs, apni entry khud hi bhool gaye kya?',
];

startButton.addEventListener('click', () => {
  input = nameInput.value;
  const names = [
    'noor',
    'sabenoor',
    'sabenoor mehtab',
    'jannat',
    'mehak',
    'jaan',
    'begum',
  ];
  if (!names.includes(input.trim().toLowerCase())) {
    gifLanding.src =
      'https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif';
    questionLanding.innerHTML = inst[Math.floor(Math.random() * inst.length)];
  } else {
    document.head.innerHTML =
      "<meta charset='UTF-8'>" +
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
      '<title>Do You Love Me?</title>' +
      "<link rel='stylesheet' href='styleMain.css'/>";

    document.body.innerHTML =
      "<div class='wrapper'><h2 class='question'>Hello " +
      "<span class='lover-name'>" +
      input +
      '</span>' +
      '! Will you go out with me?</h2>' +
      "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>" +
      "<div class='btn-group'><button class='yes-btn'>Yes</button>" +
      "<button class='no-btn'>No</button></div></div>";

    questionMain = document.querySelector('.question');
    gifMain = document.querySelector('.gif');
    yesButton = document.querySelector('.yes-btn');
    noButton = document.querySelector('.no-btn');

    yesButton.addEventListener('click', yesButtonListener);
    noButton.addEventListener('click', noButtonListener);
  }
});

nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    startButton.click();
  }
});

function yesButtonListener() {
  document.body.innerHTML =
    "<div class='wrapper'><h2 class='question'>Yay! Thank you for loving me ❤️, " +
    input +
    '!</h2>' +
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>";
  gifMain.src = 'https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif';
}

function noButtonListener() {
  if (count < 5) {
    gifMain.src = 'https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif';
    questionMain.innerHTML = "You don't love me?";
  } else if (count >= 5 && count < 10) {
    gifMain.src = 'https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif';
    questionMain.innerHTML = 'Stop playing with me! Do you love me or not?!';
  } else {
    gifMain.src = 'https://media.giphy.com/media/8OPf6xrtXi3QEcu5h9/giphy.gif';
    questionMain.innerHTML = 'JUST ANSWER IT! DO YOU LOVE ME?!';
  }
  noButton.style.position = 'fixed';
  noButton.style.transform = 'none';

  const noButtonRect = noButton.getBoundingClientRect();
  const maxX = window.innerWidth - noButtonRect.width;
  const maxY = window.innerHeight - noButtonRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
  count = count + 1;
}
