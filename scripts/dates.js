// This function parses the dates and formates date to MM/DD/YYYY
window.addEventListener('DOMContentLoaded', function (){
  // gets the date div
  var x = document.getElementById("dates");
  // gets the child elements
  var child = x.children;
  // Loops over the child elements and formates the date correctly.
  for (var i = 0; i <child.length; i++){
    // console.log(i + " " + new Date(child[i].textContent));
    var date = new Date(child[i].textContent);
    var month = date.getMonth() + 1;
    month = month > 10 ? month : '0' + month;
    var day = date.getDate();
    day = day > 10 ? day : '0' + day;
    var year = date.getFullYear();
    // console.log(month + "/" + day + "/" + year);
    child[i].innerHTML = month + "/" + day + "/" + year
  }
});