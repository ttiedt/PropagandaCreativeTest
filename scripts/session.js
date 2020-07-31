// This function check to see if the user has
// visted this site during the current session.
// If so, then display the "we missed you" card.
window.addEventListener("load", function () {
    // get value of timesVisted
    var timesVisted = sessionStorage.getItem("timesVisted");
    // is null?
    if (!timesVisted) {
      // create timesVisted
      sessionStorage.setItem("timesVisted", 1);
    } else {
      // increase timesVisted
      sessionStorage.setItem("timesVisted", parseInt(timesVisted) + 1);
    }
    // re-get timesVisted
    timesVisted = sessionStorage.getItem("timesVisted");
    // Check to see if in mobile.
    if (screen.width < 768) {
      document.getElementById("visted").style.display = "none";
    } else if (timesVisted > 1) {// if not, check if has been on the site in this session.
      // set visted div display to block.
      document.getElementById("visted").style.display = "block";
    }
  });
// Check whether to display card on resize event.
window.addEventListener("resize", function () {
  timesVisted = sessionStorage.getItem("timesVisted");
  // Check to if screen size is smaller then the break point.
  if (window.innerWidth <= 768) {
    // if so dont display the card
    document.getElementById("visted").style.display = "none";
    // document.getElementsByTagName("h1")[0].innerHTML = "none - " + window.innerWidth;
  } else if (timesVisted > 1) {
    // else display the card.
    // you need the second 'if'. If the screen is resized on 
    // first visit you still dont want the card displayed.
    document.getElementById("visted").style.display = "block";
    // document.getElementsByTagName("h1")[0].innerHTML = "block - " + window.innerWidth;
  }
});