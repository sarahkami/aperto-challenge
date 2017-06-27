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

/**
 *  Mir ist aufgefallen, dass diese Funktion nur für das erste Bild funktionieren kann, da ich ja mit eindeutigen Id's arbeite.
 *  Der einfachste Weg wäre es, die Funktion einfach 3x zu schreiben, aber das wäre sehr unschöner Stil.
 *  Vermutich könnte man ein Array erstellen, welches durch die drei Id's geht und guckt, worauf geklickt wurde? Und dementsprechend, das ausgewählte Bild anzeigt (?)
 *  Ebenfalls hatte ich Probleme damit, den Button auf jedem Bild mittig zu platzieren. Auch hier könnte ich natürlich verschiedene Klassen vergeben, habe mich aber dagegen entschieden (schlechter Stil?). Ich hoffe es gibt eine Möglichkeit eine generelle Klasse für "automatisch" mittig platzierte Kind-Objekte (z.B. Button) in einem Eltern-Objekt (Div) zu vergeben (?)
 */
