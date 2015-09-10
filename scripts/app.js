var count1 = 0;
var countElem1 = document.getElementById('click-count-1');
countElem1.innerHTML = count1;

var imageElem1 = document.getElementById('cat-img-1');
imageElem1.addEventListener('click',function(){
  count1++;
  countElem1.innerHTML = count1;
},false);
