'use strict';

// add root json for every project
// add json page focus

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

var paramsURL = {};

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

function fetchURLParams() {
  var queryString = window.location.search;
  var arrayList = queryString.split('&');
  for (var i = 0; i < arrayList.length; i++) {
    var param = arrayList[i].split('=');
    if (param[0].substring(0,1) === '?') {
      param[0] = param[0].substring(1);
    }
    paramsURL[param[0]] = param[1];
  }
}

findAndReplace(jsonUpdate);
findAndReplaceAll(jsonUpdateAll);
findAndAddStyle(jsonCSS);
findAndAddStyleAll(jsonCSS);
addStyle();
fetchURLParams();

console.log(paramsURL);
