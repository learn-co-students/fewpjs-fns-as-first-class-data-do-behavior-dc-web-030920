/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

function greet(time){

    const hour = parseInt(time);
    if (hour < 12) {
        return 'Good Morning';
    } else if (hour < 17) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
    }


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
