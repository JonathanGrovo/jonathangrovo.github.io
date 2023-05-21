const myImage = document.querySelector("img"); // takes reference for img element

// on the event that the image is clicked
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src"); // takes referece for src of img
  // if the path of the image is equivelant
  if (mySrc === "images/321.jpg") {
    myImage.setAttribute("src", "images/firefox2.png"); // set the src of img to other path
  } else {
    myImage.setAttribute("src", "images/321.jpg"); // switch back to original image
  }
};

// takes references to the button and h1 elements in the html doc
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// if we dont have the users name stored locally
if (!localStorage.getItem("name")) {
    setUserName(); // go and set the user name
  } else {
    const storedName = localStorage.getItem("name"); // gets username from local storage
    myHeading.textContent = `Mozilla is cool, ${storedName}`; // uses name from local storage
  }

// on the event that the button is clicked
myButton.onclick = () => {
    setUserName();
};


// function for setting a users name in the site
function setUserName() {
    /* prompts the user to enter their name, then stores that in the
    myName variable */
    const myName = prompt("Please enter your name.");
    // if no name was set (null)
    if (!myName) {
      setUserName(); // calls the function again
    } else {
      localStorage.setItem("name", myName); // data item name given user val myName stored locally
      myHeading.textContent = `Mozilla is cool, ${myName}`; // heading changed accordingly
    }
  }
  
  