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

var jsonPage = {
  update : [{
    'selector' : `div ul li`,
    'value' : `new liste 1`
  }],
  hide : [{
    'selector' : `p`,
    'className' : `customHidden`
  }],
  remove : [{
    'selector' : `p`,
    'className' : `customHidden`
  }]
}

var paramsURL = {};
var queryString = '';

function updatePage(jsonObject) {
  for (var i = 0; i < jsonObject.update.length; i++) {
    var elemUpdate = document.querySelector(jsonObject.update[i].selector);
    if (elemUpdate != null) {
      elemUpdate.innerHTML = jsonObject.update[i].value;
    }
  }
  for (var i = 0; i < jsonObject.hide.length; i++) {
console.log(jsonObject.hide[i].selector);
    var elemHide = document.querySelector(jsonObject.hide[i].selector);
console.log(elemHide);
    if (elemHide != null) {
      elemHide.className += ' '+jsonObject.hide[i].className;
    }
  }
  for (var i = 0; i < jsonObject.remove.length; i++) {
    var elemRemove = document.querySelector(jsonObject.remove[i].selector);
    elemRemove.parentNode.removeChild(elemRemove);
  }
  var elemList = document.querySelectorAll(".customHidden");
  for (var i = 0; i < elemList.length; i++) {
    elemList[i].style.visibility = "hidden";
  }
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
  elem.className += ' '+jsonObject.className;
  console.log(elem);
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

function styleAndRemove(jsonObject) {
  findAndAddStyle(jsonObject);
  addStyle();
}

function fetchLocation(jsonObject) {
  document.querySelector('img').setAttribute('href', jsonObject.link)
}

function fetchURLParams() {
  queryString = window.location.search;
  var arrayList = queryString.split('&');
  for (var i = 0; i < arrayList.length; i++) {
    var param = arrayList[i].split('=');
    if (param[0].substring(0,1) === '?') {
      param[0] = param[0].substring(1);
    }
    paramsURL[param[0]] = param[1];
  }
}

function sendURLParams() {
  return queryString;
}

//findAndReplace(jsonUpdate);
//findAndReplaceAll(jsonUpdateAll);
//findAndAddStyle(jsonCSS);
//findAndAddStyleAll(jsonCSS);
//addStyle();
updatePage(jsonPage);
fetchURLParams();

console.log(paramsURL);
console.log(queryString);
