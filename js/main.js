var count = 1;
var hElement = document.getElementsByTagName('h1');


function addItem () {
  var addElement = document.createElement("p");
  var message = document.createTextNode("This is click number " + count + ".");
  addElement.appendChild(message);
  document.body.appendChild(addElement);
  ++count;
}

hElement[0].addEventListener("click", addItem);
