"use strict";
 
window.addEventListener('load', posElem, false);
function posElem(EO) {
  EO = EO || window.event;
  var elems = document.getElementsByTagName('img');
 
  for (var i = elems.length - 1; i >= 0; i--) {
    var elem = elems[i];
 
    elem.style.top = elem.offsetTop + 'px';
    elem.style.left = elem.offsetLeft + 'px';
    elem.style.position = 'absolute';
    elem.onmousedown = imgMouseDown;
    elem.onmouseup = imgMouseUp;
  };
 
 
  function imgMouseDown(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    console.log('Нажал на кота');
 
    var dounShiftCoordX = EO.pageX - EO.target.offsetLeft;
    var dounShiftCoordY = EO.pageY - EO.target.offsetTop;
 
    var cont = document.getElementById('box');
    var pict = EO.target;
    cont.appendChild(pict);
 
 
    window.onmousemove = imgMouseMove; 
    function imgMouseMove(EO) {
      EO = EO || window.event;
      EO.preventDefault();
      console.log('Тащу кота');
 
      pict.style.top = (EO.pageY - dounShiftCoordY) + 'px';
      pict.style.left = (EO.pageX - dounShiftCoordX) + 'px';
 
    }
  }
 
  function imgMouseUp(EO) {
    EO.preventDefault();
    console.log('Отпустил кота');
 
    window.onmousemove = null; 
 
  }
 
 
};