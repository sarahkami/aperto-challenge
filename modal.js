var modal = document.getElementById("modal-popup");

var img = document.getElementById("modal-img");
var modalImg = document.getElementById("modal-img");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
