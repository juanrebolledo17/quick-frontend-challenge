const container = document.querySelector('.container');
const amount = 5;
let numberOfClicks = 0;
let elements;
const orderOfClicks = [];

for (let i = 0; i <= amount; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.dataset.number = i;
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'green';
    orderOfClicks.push(Number(square.dataset.number));
    numberOfClicks++;
    if (numberOfClicks === 6) {
      elements = Array.from(document.querySelectorAll('.square'));
      startReverseSequence(elements);
      numberOfClicks = 0;
    }
  }); 
  container.appendChild(square);
}

function startReverseSequence(elements) {
  let frequency = 500;
  for (let j = 5; j >= 0; j--) {
    clickedElementIndex = orderOfClicks[j];
    orderOfClicks.splice(j, 1);
    elements.forEach((element, index) => {
      if (index === Number(clickedElementIndex)) {
        setTimeout(() => {
          element.style.backgroundColor = 'transparent';
        }, frequency); 
        frequency += 1500; 
      }
    });
  }
}