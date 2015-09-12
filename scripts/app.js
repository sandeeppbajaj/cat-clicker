var count = [0,0];
var countElems = [];

// Setting intial count for all cats
for(var i=0;i<2;i++){
  countElems.push(document.getElementById('click-count-'+(i+1)));
  countElems[i].innerHTML = count[i];
}

// List of Image elements
var imageElems = [document.getElementById('cat-img-1'),document.getElementById('cat-img-2')];

// Add Click event listener for image elements using Closure function
for(var i=0;i<2;i++ ){
  imageElems[i].addEventListener('click', (function(index){
      return function(){
        count[index]++;
        countElems[index].innerHTML = count[index];
      }
  })(i), false);
}
