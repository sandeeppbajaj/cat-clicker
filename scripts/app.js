var cats = [
  {name:'Kat',imageUrl:'images/cat-1.jpg',clickCount:0},
  {name:'Butter Cup',imageUrl:'images/cat-2.jpg',clickCount:0},
  {name:'Bubbles',imageUrl:'images/cat-3.jpg',clickCount:0},
  {name:'Fuzzy',imageUrl:'images/cat-4.jpg',clickCount:0},
  {name:'Mouse',imageUrl:'images/cat-5.jpg',clickCount:0}
];

var catListElem = document.getElementById('cat-list');
for(var i=0; i<cats.length; i++){
  var listItem = document.createElement('li');
  listItem.innerHTML = "<a href='javascript:changeCat("+i+")'>" + cats[i].name + "</a>";
  listItem.setAttribute('class','cat-list-item');
  catListElem.appendChild(listItem);
}

var currentIndex = 0;
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');
var clickCountElem = document.getElementById('click-count');

function changeCat(index){
    currentIndex = index;
    catNameElem.innerHTML = cats[index].name;
    catImageElem.setAttribute('src',cats[index].imageUrl);
    clickCountElem.innerHTML = cats[index].clickCount;
}

function incrementCount(index){
  cats[currentIndex].clickCount++;
  clickCountElem.innerHTML = cats[currentIndex].clickCount;
}

changeCat(0);
