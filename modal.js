var modal = document.getElementById("modal-popup");

var button = document.getElementById("modal-button");
var smallImg = document.getElementById("img_small");
var modalImg = document.getElementById("modal-img");
button.onclick = function(){
    modal.style.display = "block";
    modalImg.src = smallImg.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
