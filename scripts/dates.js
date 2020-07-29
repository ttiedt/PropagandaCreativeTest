function dateParser(){
  // console.log(document.getElementById("dates").textContent);
  var x = document.getElementById("dates");
  var child = x.children;
  // console.log(x.children.length);
  for (var i = 0; i <child.length; i++){
    // console.log(i + " " + new Date(child[i].textContent));
    var date = new Date(child[i].textContent);
    var month = date.getMonth() + 1;
    month = month > 10 ? month : '0' + month;
    var day = date.getDate();
    day = day > 10 ? day : '0' + day;
    var year = date.getFullYear();
    console.log(month + "/" + day + "/" + year);
    child[i].innerHTML = month + "/" + day + "/" + year
  }
}