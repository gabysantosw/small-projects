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
display.addEventListener('change', function(){
  if(this.checked) {
    flex.checked = true;
    container.classList.add('flex');
  } else {
    flex.checked = false;
    container.classList.remove('flex');
  }
});
flex.addEventListener('change', function(){
  if(this.checked) {
    container.classList.add('flex');
  } else {
    container.classList.remove('flex');
  }
});

flexDirection.addEventListener('change', function(){
  if(this.checked) {
    row.checked = true;
    container.classList.add('row');
  } else {
    row.checked = false;
    column.checked = false;
    rowReverse.checked = false;
    columnReverse.checked = false;
    removeAll()
    container.classList.remove('row');
  }
});
row.addEventListener('change', function(){
  if(this.checked) {
    removeAll();
    container.classList.add('row');
  } else {
    container.classList.remove('row');
  }
});
column.addEventListener('change', function(){
  if(this.checked) {
    removeAll();
    container.classList.add('column');
  } else {
    container.classList.remove('column');
  }
});
rowReverse.addEventListener('change', function(){
  if(this.checked) {
    removeAll();
    container.classList.add('row-reverse');
  } else {
    container.classList.remove('row-reverse');
  }
});
columnReverse.addEventListener('change', function(){
  if(this.checked) {
    removeAll();
    container.classList.add('column-reverse');
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
