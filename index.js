/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let parsed = parseInt(string);
  if (parsed < 12) {
    return "Good Morning"
  } else if (parsed <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let content = document.getElementById("greeting").innerText = string
  return content
}
