// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// set variables
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// set event
navToggle.addEventListener("click", function(){
    // check if links has .show-links
    
    // Method 1: use if and contains function
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // Method 2: use toggle function
    links.classList.toggle("show-links");

    // console.log(links.classList);
});