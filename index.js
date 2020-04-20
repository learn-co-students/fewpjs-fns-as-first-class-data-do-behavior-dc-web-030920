/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(string) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = string
} 

function greet(string) {
  const hour = parseInt(string, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  if (hour > 24 ) return "no such time exists, please input a different time"
  return  "Good Afternoon"
}




