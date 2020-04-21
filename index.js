/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
  var hour = parseInt(time.split(":")[0])
  if(hour >= 17 && hour <= 23){
    return "Good Evening"
  }else if(hour >= 0 && hour <= 11){
    return "Good Morning"
  }else{
    return "Good Afternoon"
  }
}

function displayMessage(message){
  document.getElementById('greeting').innerText = message
 
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
