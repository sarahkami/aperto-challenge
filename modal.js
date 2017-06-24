var modal = document.getElementById("modal-popup");

var button = document.getElementById("modal-button");
var modalImg = document.getElementById("modal-img");
button.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
