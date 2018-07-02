var count = 1;
var hElement = document.getElementsByTagName('h1');

function addItem () {
  var addElement = document.createElement("p");
  var message = document.createTextNode("This is click number " + count + ".");
  addElement.appendChild(message);
  document.body.appendChild(addElement);
  ++count;
}

function write () {
  var firstName = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  console.log ("The first name is: " + firstName);
  console.log ("The last name is: " + lastname);
  console.log ("The email is: " + email);
  console.log ("The message is: " + message);
}

hElement[0].addEventListener("click", addItem);
document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById('submit').addEventListener("click", write);
