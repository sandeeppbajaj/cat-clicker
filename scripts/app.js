/*
*  Implementing speration of concern by separating model and views for cat list
*  and cat display area.
*/
var model = {
    init: function(){
      this.cats = [
        {name:'Kat',imageUrl:'images/cat-1.jpg',clickCount:0},
        {name:'Butter Cup',imageUrl:'images/cat-2.jpg',clickCount:0},
        {name:'Bubbles',imageUrl:'images/cat-3.jpg',clickCount:0},
        {name:'Fuzzy',imageUrl:'images/cat-4.jpg',clickCount:0},
        {name:'Mouse',imageUrl:'images/cat-5.jpg',clickCount:0}
      ];
    },
    getCats: function(){
      return this.cats;
    },
    getCatObjectByIndex: function(index){
      return this.cats[index];
    },
    updateClickCount: function(index,count){
      this.cats[index].clickCount = count;
    }
};

var octopus = {
    init: function(){
      model.init();
      listView.init();
      catDisplayView.init();
    },
    getCatsList: function(){
      return model.getCats();
    },
    changeCat: function(index){
      this.currentCatIndex = index;
      catDisplayView.changeCat(model.getCatObjectByIndex(index));
    },
    getCatObjectByIndex: function(index){
      this.currentCatIndex = index;
      return model.getCatObjectByIndex(index);
    },
    updateClickCount:function(count){
        model.updateClickCount(this.currentCatIndex,count);
    }
};

var listView = {
    init: function(){
      this.catListElem = document.getElementById('cat-list');
      this.catsList = octopus.getCatsList();
      this.render();
    },
    render: function(){
      for(var i=0; i<this.catsList.length; i++){
        var listItem = document.createElement('li');
        listItem.innerHTML = "<a href='javascript:listView.changeCat("+i+")'>" + this.catsList[i].name + "</a>";
        listItem.setAttribute('class','cat-list-item');
        this.catListElem.appendChild(listItem);
      }
    },
    changeCat:function(index){
      octopus.changeCat(index);
    }
};

var catDisplayView = {
    init: function(){
      this.currentCat = octopus.getCatObjectByIndex(0);
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.catImageElem.setAttribute('onclick','javascript:catDisplayView.incrementCount()');
      this.clickCountElem = document.getElementById('click-count');
      this.render();
    },
    render: function(){
      this.catNameElem.innerHTML = this.currentCat.name;
      this.catImageElem.setAttribute('src',this.currentCat.imageUrl);
      this.clickCountElem.innerHTML = this.currentCat.clickCount;
    },
    incrementCount: function(){
      this.currentCat.clickCount++;
      octopus.updateClickCount(this.currentCat.clickCount);
      this.clickCountElem.innerHTML = this.currentCat.clickCount;
    },
    changeCat: function(newCat){
      this.currentCat = newCat;
      this.render();
    }
};
octopus.init();
