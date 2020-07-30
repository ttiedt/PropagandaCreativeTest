// This function check to see if the user has
// visted this site during the current session.
// If so, then display the "we missed you" card.
window.onload = function () {
  // get value of timesVisted
  var timesVisted = sessionStorage.getItem("timesVisted");
  // is null?
  if(!timesVisted){
    // create timesVisted
    sessionStorage.setItem("timesVisted", 1);
  }else {
    // increase timesVisted
    sessionStorage.setItem("timesVisted", parseInt(timesVisted) + 1);
  }
  // re-get timesVisted
  timesVisted = sessionStorage.getItem("timesVisted");
  // check if has been on the site in this session.
  if(timesVisted > 1) {
    // set visted div display to block.
    document.getElementById("visted").style.display = "block";
  }
}