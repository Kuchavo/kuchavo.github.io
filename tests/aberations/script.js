document.addEventListener("DOMContentLoaded", function(event) {

  const con = document.querySelector('.aberation');
  var userHasScrolled = false;

  document.onwheel = function(event){
    var speed = event.deltaY;
    con.style.setProperty('--before-offcet', Math.sin(0.5)*speed*0.5 + 'px');
  }

});
