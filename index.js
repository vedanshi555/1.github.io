const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

/*<!---- this is part for trying   --><!---- this is part for trying   --><!---- this is part for checking phones   -->*/

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



/*ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt*/
