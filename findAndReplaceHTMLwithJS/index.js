'use strict';

// add root json for every project

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
  'className' : `customHidden`
}

var jsonLocation = {
  'link' : '/test/'
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
  elem.setAttribute('class', jsonObject.className);
}

function findAndAddStyleAll(jsonObject) {
  var elemList = document.querySelectorAll(jsonObject.selector);
  for (var i = 0; i < elemList.length; i++) {
    elemList[i].setAttribute('class', jsonObject.className);
  }
}

function addStyle() {
  var elemList = document.querySelectorAll(".customHidden");
  for (var i = 0; i < elemList.length; i++) {
    elemList[i].style.visibility = "hidden";
  }
}

function fetchLocation(jsonObject) {
  document.querySelector('img').setAttribute('href', jsonObject.link)
}

findAndReplace(jsonUpdate);
findAndReplaceAll(jsonUpdateAll);
findAndAddStyle(jsonCSS);
findAndAddStyleAll(jsonCSS);
addStyle();
