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

/* We use the charAt() to be able to find the first letter of the string, we use the number 0 as it always starts at 0 */
document.getElementById("first-letter").innerHTML =  userName.charAt(0)


/* We use the length of the overall string and use subtract 1 by using - 1 to find the last letter by going from the first letter and going backwards once. */
document.getElementById("last-letter").innerHTML =  userName.charAt(userName.length - 1)

