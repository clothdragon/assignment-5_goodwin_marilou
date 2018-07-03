var count = 1;
var hElement = document.getElementsByTagName('h1');
var cc = 1;
var borderRad = 5;

//This is the add text function for homwork item 4
function addItem () {
  var addElement = document.createElement("p");
  var message = document.createTextNode("This is click number " + count + ".");
  addElement.appendChild(message);
  document.body.appendChild(addElement);
  ++count;
}

// This is the form function for homework item 5
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

function one () {
  var color = ["red", "blue", "orange", "green", "black", "purple"];
  document.getElementById('item1').style.backgroundColor = color[cc];
  if (cc < 5) {
    ++cc;
}   else {
    cc = 0;
  }
}

function two () {
  var msg = ["Click to Change Text", "Look A New Thing", "Try Again", "Okay, Once More", "Maybe One More Time", "That's Enough Then"];
  document.getElementById('item2').innerHTML = msg[cc];
  if (cc < 5) {
    ++cc;
}   else {
    cc = 0;
  }
}

function three () {
  var border = ["solid red 2px", "dotted green 2px", "solid green 2px", "dotted blue 2px", "solid blue 2px", "dotted red 2px"];
  document.getElementById('item3').style.border = border[cc];
  if (cc < 5) {
    ++cc;
  }   else {
    cc = 0;
  }
}

function four () {
  document.getElementById('item4').style.borderRadius = borderRad + "px";
  if (borderRad < 30) {
    borderRad = borderRad + 5;
}   else {
    borderRad = 0;
 }
}

function five () {
  one ();
  two ();
  three ();
  four ();
}

//listens for h1 click
hElement[0].addEventListener("click", addItem);
//Listens for submit, keeps from refreshing
document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault()
});
//Kustebs for form submit, calls function
document.getElementById('submit').addEventListener("click", write);
//Listens for Custom thing number one
document.getElementById('item1').addEventListener("click", one);
//Listens for Custom thing number two
document.getElementById('item2').addEventListener("click", two);
//Listens for Custom thing number three
document.getElementById('item3').addEventListener("click", three);
//Listens for Custom thing number four
document.getElementById('item4').addEventListener("click", four);
//Listens for Custom thing number five
document.getElementById('item5').addEventListener("click", five);
