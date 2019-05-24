// ON PAGE LOAD
window.onload = function(){
   var inputs = document.getElementsByTagName("input");

   // uncheck elements
   for (let input of inputs) {
     input.checked = false;
   }
}

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

const flexWrap = document.getElementById('flex-wrap');
const nowrap = document.getElementById('nowrap');
const wrap = document.getElementById('wrap');
const wrapReverse = document.getElementById('wrap-reverse');

const justifyContent = document.getElementById('justify-content');
const justifyStart = document.getElementById('justify-start');
const justifyEnd = document.getElementById('justify-end');
const justifyCenter = document.getElementById('justify-center');
const justifyAround = document.getElementById('justify-around');
const justifyBetween = document.getElementById('justify-between');

const alignItems = document.getElementById('align-items');
const alignStretch = document.getElementById('align-stretch');
const alignStart = document.getElementById('align-start');
const alignEnd = document.getElementById('align-end');
const alignCenter = document.getElementById('align-center');
const alignBaseline = document.getElementById('align-baseline');

// CONTAINER EVENTS
display.addEventListener('change', function() {
  if (this.checked) {
    // activate flex
    flex.checked = true;
  } else {
    // deactivate flex
    flex.checked = false;
  }
  flex.dispatchEvent(new Event('change'));
});

flex.addEventListener('change', function() {
  if (this.checked) {
    // activate display flex if unchecked
    if (display.checked == false) {
      display.checked = true;
    }
    container.classList.add('flex');
  } else {
    container.classList.remove('flex');
  }
});

flexDirection.addEventListener('change', setFlexDirection);
row.addEventListener('change', setFlexDirection);
column.addEventListener('change', setFlexDirection);
rowReverse.addEventListener('change', setFlexDirection);
columnReverse.addEventListener('change', setFlexDirection);

function setFlexDirection() {
  if (this.checked) {
    // activate display flex if unchecked
    checkDisplay();

    // if target is the property, check default value
    if (this.id == 'flex-direction') {
      row.checked = true;
      row.dispatchEvent(new Event('change'));
    }
    // if target is a value, activate
    if (this.id == 'row' || this.id == 'column' || this.id == 'row-reverse' || this.id == 'column-reverse') {
      // activate property if unchecked
      if (flexDirection.checked == false) {
        flexDirection.checked = true;
      }
      // activate value
      container.classList.add(this.id);

      // trigger events to deactivate others
      if (this.id != 'row') {
        row.checked = false;
        row.dispatchEvent(new Event('change'));
      }
      if (this.id != 'column') {
        column.checked = false;
        column.dispatchEvent(new Event('change'));
      }
      if (this.id != 'row-reverse') {
        rowReverse.checked = false;
        rowReverse.dispatchEvent(new Event('change'));
      }
      if (this.id != 'column-reverse') {
        columnReverse.checked = false;
        columnReverse.dispatchEvent(new Event('change'));
      }
    }
  } else {
    // if target is the property, remove values
    if (this.id == 'flex-direction') {
      row.checked = false;
      row.dispatchEvent(new Event('change'));
      column.checked = false;
      column.dispatchEvent(new Event('change'));
      rowReverse.checked = false;
      rowReverse.dispatchEvent(new Event('change'));
      columnReverse.checked = false;
      columnReverse.dispatchEvent(new Event('change'));
    }

    // if target is a value, remove it
    if (this.id == 'row' || this.id == 'column' || this.id == 'row-reverse' || this.id == 'column-reverse') {
      container.classList.remove(this.id);
    }
  }
}

flexWrap.addEventListener('change', setFlexWrap);
nowrap.addEventListener('change', setFlexWrap);
wrap.addEventListener('change', setFlexWrap);
wrapReverse.addEventListener('change', setFlexWrap);

function setFlexWrap() {
  if (this.checked) {
    // activate display flex if unchecked
    checkDisplay();

    // if target is the property, check default value
    if (this.id == 'flex-wrap') {
      nowrap.checked = true;
      nowrap.dispatchEvent(new Event('change'));
    }

    // if target is a value, activate
    if (this.id == 'nowrap' || this.id == 'wrap' || this.id == 'wrap-reverse') {
      // activate property if unchecked
      if (flexWrap.checked == false) {
        flexWrap.checked = true;
      }

      // activate value
      container.classList.add(this.id);

      // trigger events to deactivate others
      if (this.id != 'nowrap') {
        nowrap.checked = false;
        nowrap.dispatchEvent(new Event('change'));
      }
      if (this.id != 'wrap') {
        wrap.checked = false;
        wrap.dispatchEvent(new Event('change'));
      }
      if (this.id != 'wrap-reverse') {
        wrapReverse.checked = false;
        wrapReverse.dispatchEvent(new Event('change'));
      }
    }
  } else {
    // if target is the property, remove values
    if (this.id == 'flex-wrap') {
      nowrap.checked = false;
      nowrap.dispatchEvent(new Event('change'));
      wrap.checked = false;
      wrap.dispatchEvent(new Event('change'));
      wrapReverse.checked = false;
      wrapReverse.dispatchEvent(new Event('change'));
    }

    // if target is a value, remove it
    if (this.id == 'nowrap' || this.id == 'wrap' || this.id == 'wrap-reverse') {
      container.classList.remove(this.id);
    }
  }
}

justifyContent.addEventListener('change', setJustifyContent);
justifyStart.addEventListener('change', setJustifyContent);
justifyEnd.addEventListener('change', setJustifyContent);
justifyCenter.addEventListener('change', setJustifyContent);
justifyAround.addEventListener('change', setJustifyContent);
justifyBetween.addEventListener('change', setJustifyContent);

function setJustifyContent() {
  if (this.checked) {
    // activate display flex if unchecked
    checkDisplay();

    // if target is the property, check default value
    if (this.id == 'justify-content') {
      justifyStart.checked = true;
      justifyStart.dispatchEvent(new Event('change'));
    }
    // if target is a value, activate
    if (this.id == 'justify-start' || this.id == 'justify-end' || this.id == 'justify-center' || this.id == 'justify-around' || this.id == 'justify-between') {
      // activate property if unchecked
      if (justifyContent.checked == false) {
        justifyContent.checked = true;
      }

      // activate value
      container.classList.add(this.id);

      // trigger events to deactivate others
      if (this.id != 'justify-start') {
        justifyStart.checked = false;
        justifyStart.dispatchEvent(new Event('change'));
      }
      if (this.id != 'justify-end') {
        justifyEnd.checked = false;
        justifyEnd.dispatchEvent(new Event('change'));
      }
      if (this.id != 'justify-center') {
        justifyCenter.checked = false;
        justifyCenter.dispatchEvent(new Event('change'));
      }
      if (this.id != 'justify-around') {
        justifyAround.checked = false;
        justifyAround.dispatchEvent(new Event('change'));
      }
      if (this.id != 'justify-between') {
        justifyBetween.checked = false;
        justifyBetween.dispatchEvent(new Event('change'));
      }
    }
  } else {
    // if target is the property, remove values
    if (this.id == 'justify-content') {
      justifyStart.checked = false;
      justifyStart.dispatchEvent(new Event('change'));
      justifyEnd.checked = false;
      justifyEnd.dispatchEvent(new Event('change'));
      justifyCenter.checked = false;
      justifyCenter.dispatchEvent(new Event('change'));
      justifyAround.checked = false;
      justifyAround.dispatchEvent(new Event('change'));
      justifyBetween.checked = false;
      justifyBetween.dispatchEvent(new Event('change'));
    }

    // if target is a value, remove it
    if (this.id == 'justify-start' || this.id == 'justify-end' || this.id == 'justify-center' || this.id == 'justify-around' || this.id == 'justify-between') {
      container.classList.remove(this.id);
    }
  }
}

alignItems.addEventListener('change', setAlignItems);
alignStretch.addEventListener('change', setAlignItems);
alignStart.addEventListener('change', setAlignItems);
alignEnd.addEventListener('change', setAlignItems);
alignCenter.addEventListener('change', setAlignItems);
alignBaseline.addEventListener('change', setAlignItems);

function setAlignItems() {
  if (this.checked) {
    // activate display flex if unchecked
    checkDisplay();

    // if target is the property, check default value
    if (this.id == 'align-items') {
      alignStretch.checked = true;
      alignStretch.dispatchEvent(new Event('change'));
    }
    // if target is a value, activate
    if (this.id == 'align-stretch' || this.id == 'align-start' || this.id == 'align-end' || this.id == 'align-center' || this.id == 'align-baseline') {
      // activate property if unchecked
      if (alignItems.checked == false) {
        alignItems.checked = true;
      }

      // activate value
      container.classList.add(this.id);

      // trigger events to deactivate others
      if (this.id != 'align-start') {
        alignStart.checked = false;
        alignStart.dispatchEvent(new Event('change'));
      }
      if (this.id != 'align-end') {
        alignEnd.checked = false;
        alignEnd.dispatchEvent(new Event('change'));
      }
      if (this.id != 'align-center') {
        alignCenter.checked = false;
        alignCenter.dispatchEvent(new Event('change'));
      }
      if (this.id != 'align-baseline') {
        alignBaseline.checked = false;
        alignBaseline.dispatchEvent(new Event('change'));
      }
      if (this.id != 'align-stretch') {
        alignStretch.checked = false;
        alignStretch.dispatchEvent(new Event('change'));
      }
    }
  } else {
    // if target is the property, remove values
    if (this.id == 'align-items') {
      alignStart.checked = false;
      alignStart.dispatchEvent(new Event('change'));
      alignEnd.checked = false;
      alignEnd.dispatchEvent(new Event('change'));
      alignCenter.checked = false;
      alignCenter.dispatchEvent(new Event('change'));
      alignBaseline.checked = false;
      alignBaseline.dispatchEvent(new Event('change'));
      alignStretch.checked = false;
      alignStretch.dispatchEvent(new Event('change'));
    }

    // if target is a value, remove it
    if (this.id == 'align-stretch' || this.id == 'align-start' || this.id == 'align-end' || this.id == 'align-center' || this.id == 'align-baseline') {
      container.classList.remove(this.id);
    }
  }
}

// UTILITY FUNCTIONS
function checkDisplay() {
  if (flex.checked == false) {
    display.checked = true;
    display.dispatchEvent(new Event('change'));
  }
}

function toCamelCase(string) {
  return string.replace(/([-_][a-z])/ig, match => {
    return match.toUpperCase().replace('-', '')
  });
}
