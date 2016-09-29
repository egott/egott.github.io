console.log("the script is runnin bitch");

function changeColor(event) {
  event.target.style.color = "blue";
}
var title = document.getElementById('title');
title.addEventListener("mouseover", changeColor);

function mouseOver() {
  document.getElementById('heart');
}

function mouseOut() {
  document.getElementById('heart');
}

var heart = document.getElementById('heart');
heart.addEventListener("mouseover", bigImg);
heart.addEventListener("mouseout", normalImg);

function bigImg(x) {
  heart.style.height = '320px';
  heart.style.width = '320px';
}

function normalImg(x) {
  heart.style.height = '200px';
  heart.style.width = '200px';
}

$(document).ready(function(){

  $('#love:first').slideUp(2000).slideDown(2000);
  $('#button').click(function(){
    $('#dog').fadeToggle(6000);
  });

});
