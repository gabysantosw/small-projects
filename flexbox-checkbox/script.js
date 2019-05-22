const checkbox = document.getElementById('flex');

checkbox.addEventListener('change', function(){
  if(this.checked) {
        console.log('check');
    } else {
        console.log('nope');
    }
});
