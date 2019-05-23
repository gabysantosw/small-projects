// DISPLAY
const container = document.getElementById('container')

// CONTROLS
const display = document.getElementById('display');
const flex = document.getElementById('flex');

const flexDirection = document.getElementById('flex-direction');
const row = document.getElementById('row');
const column = document.getElementById('column');
const rowReverse = document.getElementById('row-reverse');
const columnReverse = document.getElementById('column-reverse');

// CONTAINER EVENTS
const displayChange = display.addEventListener('change', function(){
  if(this.checked) {
    flex.checked = true;
  } else {
    flex.checked = false;
  }
  flex.dispatchEvent(new Event('change'));
});
flex.addEventListener('change', function(){
  if(this.checked) {
    display.checked = true;
    container.classList.add('flex');
  } else {
    container.classList.remove('flex');
  }
});

flexDirection.addEventListener('change', function(){
  if(this.checked) {
    row.checked = true;
    row.dispatchEvent(new Event('change'));
  } else {
    row.checked = false;
    column.checked = false;
    rowReverse.checked = false;
    columnReverse.checked = false;
    row.dispatchEvent(new Event('change'));
    column.dispatchEvent(new Event('change'));
    rowReverse.dispatchEvent(new Event('change'));
    columnReverse.dispatchEvent(new Event('change'));
  }
});
row.addEventListener('change', function(){
  if(this.checked) {
    checkFlex();
    flexDirection.checked = true;
    container.classList.add('row');
    column.dispatchEvent(new Event('change'));
    rowReverse.dispatchEvent(new Event('change'));
    columnReverse.dispatchEvent(new Event('change'));
  } else {
    container.classList.remove('row');
  }
});
column.addEventListener('change', function(){
  if(this.checked) {
    checkFlex();
    flexDirection.checked = true;
    container.classList.add('column');
    row.dispatchEvent(new Event('change'));
    rowReverse.dispatchEvent(new Event('change'));
    columnReverse.dispatchEvent(new Event('change'));
  } else {
    container.classList.remove('column');
  }
});
rowReverse.addEventListener('change', function(){
  if(this.checked) {
    checkFlex();
    flexDirection.checked = true;
    container.classList.add('row-reverse');
    row.dispatchEvent(new Event('change'));
    column.dispatchEvent(new Event('change'));
    columnReverse.dispatchEvent(new Event('change'));
  } else {
    container.classList.remove('row-reverse');
  }
});
columnReverse.addEventListener('change', function(){
  if(this.checked) {
    checkFlex();
    flexDirection.checked = true;
    container.classList.add('column-reverse');
    row.dispatchEvent(new Event('change'));
    column.dispatchEvent(new Event('change'));
    rowReverse.dispatchEvent(new Event('change'));
  } else {
    container.classList.remove('column-reverse');
  }
});

function removeAll() {
  container.classList.remove('row');
  container.classList.remove('column');
  container.classList.remove('row-reverse');
  container.classList.remove('column-reverse');
}

function checkFlex() {
  if (flex.checked == false) {
    display.checked = true;
    display.dispatchEvent(new Event('change'));
  }
}
