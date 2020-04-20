/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (string) => {
  let num = string.split(":")[0]
  console.log(num)
    if (num < 12){
    return "Good Morning";
  } else if (num > 12 && num < 17){
    return "Good Afternoon"
  } else{
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

const displayMessage = (string) => {
  let message = document.querySelector("#greeting")
  message.innerText = string
}
