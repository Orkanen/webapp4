
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "10em";
  document.getElementById("flexbox").style.marginRight = "10em";
  document.getElementById('bar').style.display = "none";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("flexbox").style.marginRight = "0";
  document.getElementById('bar').style.display = "revert";
}
