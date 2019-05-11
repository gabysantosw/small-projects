let newData = [];

// DECLARATIONS
let concept = document.getElementById('concept-input');
let description = document.getElementById('description-input');
let addButton = document.getElementById('add-button');

let displayZone = document.getElementById('display-zone');

let printButton = document.getElementById('print-new-data');
let printZone = document.getElementById('print-zone');

// EVEN LISTENERS
addButton.addEventListener('click', addConcept);
printButton.addEventListener('click', printData);

function addConcept() {
  const newConcept = new Concept(concept.value, description.value);
  newData.push(newConcept);
  displayNewData();
  concept.value = '';
  description.value = '';
}

function displayNewData() {
  let div = document.createElement('div');
  div.classList.add('concept');
  div.classList.add('inner-section');
  let p1 = document.createElement('p');
  p1.classList.add('concept__title');
  p1.classList.add('inner-section');
  let p2 = document.createElement('p');
  p2.classList.add('concept__description');
  p2.classList.add('inner-section');

  p1.textContent = concept.value;
  p2.textContent = description.value;

  div.appendChild(p1);
  div.appendChild(p2);
  displayZone.appendChild(div);
}

function printData() {
  printZone.textContent = JSON.stringify(newData);
}
