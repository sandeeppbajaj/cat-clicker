var count = [0,0];
var countElems = [];

for(var i=0;i<2;i++){
  countElems.push(document.getElementById('click-count-'+(i+1)));
  countElems[i].innerHTML = count[i];
}


var imageElem1 = document.getElementById('cat-img-1');
var imageElem2 = document.getElementById('cat-img-2');

imageElem1.addEventListener('click',function(){
  count[0]++;
  countElems[0].innerHTML = count[0];
},false);

imageElem2.addEventListener('click',function(){
  count[1]++;
  countElems[1].innerHTML = count[1];
},false);
