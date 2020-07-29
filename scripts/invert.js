// This function inverts the color on this
// web page except the image.
function invert() {
  // store the page and image in variables
  var html = document.getElementsByTagName("html")[0];
  var img = document.getElementsByClassName("img")[0];
  // if the page is inverted
  if(html.classList.contains("inverted")){
    // remove invertion
    html.classList.remove('inverted');
    img.classList.remove('inverted');
  }else {
    // else add inverstion
    html.classList.add("inverted");
    img.classList.add("inverted");
  }
  // NOTE i inverted the whole page
  // so the image was 100% inverted aswell.
  // To prevent the the image from inverting
  // i had to add the inverted class to it which
  // inverted the image 100% back to 0%.
}