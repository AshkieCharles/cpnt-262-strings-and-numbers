const userName = "Ashkie";
let numb = 10;

/* These two lines shows the first two variables that we have declared*/
document.getElementById("constant-number").innerHTML = numb;
document.getElementById("first-name").innerHTML = userName;

/* This defines if the num is an integer. */
document.getElementById("integer").innerHTML = Number.isInteger(numb)

/* This provides a simple addition statement. */
document.getElementById("addition").innerHTML = (10 + 15)

/* This asks if the number is finite and is not unlimited */
document.getElementById("new-string").innerHTML = Number.isFinite(numb)

/* We use the userName.length to get the length of the string and use the first word as the string/variables for strings. */
document.getElementById("length").innerHTML = userName.length

document.getElementById("first-letter").innerHTML =  userName.charAt(0)
document.getElementById("last-letter").innerHTML =  userName.charAt(userName.length - 1)

