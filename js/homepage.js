/* Game button */
function Play() {
  window.location.href="loading.html";
}

/* Tutorial */
function Tutorial() {
  var tutorialDiv = document.getElementById("tut");
  if (tutorialDiv.style.display === "none") {
      tutorialDiv.style.display = "block";
  } else {
      tutorialDiv.style.display = "none";
  }
}