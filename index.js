/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  const num  = parseInt(string)
  if (num < 12){
    return "Good Morning"}
  else if (num > 12 && num < 17){
    return "Good Afternoon"}
  else //(num > 17){
   { return "Good Evening"}
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}