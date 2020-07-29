// This function displays the nav links
// when hamburger button is clicked
function dropDown() {
  var x = document.getElementById("nav-links");
  // onClick it changes the 'nav-links' to displayed or hidden.
  if(x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}