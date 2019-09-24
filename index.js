$(document).ready(function() {

     navActive()
});

function navActive() {
  var home = document.getElementById("homenav")
  var about = document.getElementById("aboutnav")
  var skills = document.getElementById("skillsnav")
  var works = document.getElementById("worksnav")
  var contact = document.getElementById("contactnav")
  var pages = [home, about, skills, works, contact]
  var prevPage = 0;
  for(var i =0; i < pages.length; i++) {
    if (pages[i].classList.contains("current")) {
      prevPage = pages[i]
      break
    }
  }
  if (window.pageYOffset < 280) {
    prevPage.classList.remove("current")
    home.classList.add("current")
  }
  else if (window.pageYOffset >= 280 && window.pageYOffset < 870) {
    prevPage.classList.remove("current")
    about.classList.add("current")
  }
  else if (window.pageYOffset >= 870 && window.pageYOffset < 1320) {
    prevPage.classList.remove("current")
    skills.classList.add("current")
  }
  else if (window.pageYOffset >= 1320 && window.pageYOffset < 1500) {
    prevPage.classList.remove("current")
    works.classList.add("current")
  }
  else {
    prevPage.classList.remove("current")
    contact.classList.add("current")
  }
}
window.addEventListener('scroll', navActive)
