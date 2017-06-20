'use strict';

var jsonUpdate = {
  'selector' : `div ul li`,
  'value' : `<li>new liste 1</li>`
}

var jsonUpdateAll = {
  'selector' : `li`,
  'value' : `<li>new liste 1</li>`
}

//use classLIst add to push a new standard class
var jsonCSS = {
  'selector' : `p`,
  'attribute' : `color`,
  'value' : `#000000`
}

function findAndReplace(jsonObject) {
  var elem = document.querySelector(jsonObject.selector);
  elem.innerHTML = jsonObject.value;
}

function findAndReplaceAll(jsonObject) {
  var elem = document.querySelectorAll(jsonObject.selector);
  for (var i = 0; i < elem.length; i++) {
    elem[i].innerHTML = jsonObject.value;
  }
}

function findAndAddStyle(jsonObject) {
  var elem = document.querySelector(jsonObject.selector);
  elem.setAttribute(jsonObject.attribute, jsonObject.value)
}

findAndReplace(jsonUpdate);
findAndReplaceAll(jsonUpdateAll);
findAndAddStyle(jsonCSS);
