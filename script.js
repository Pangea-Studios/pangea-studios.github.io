window.addEventListener(
    'scroll',
    () => {
        document.body.style.setProperty(
            '--scroll',
            window.scrollY /
                (document.body.offsetHeight - window.innerHeight),
        );

		if (window.scrollY /
			(document.body.offsetHeight - window.innerHeight) >= 1) {
			document.body.style.setProperty(
				'--scroll',
				0.9999,
			);
				}
    },
    false,
);

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // Show/hide and animate the button based on scroll position
  window.onscroll = function() {
    if (window.innerWidth <= 1000) return
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
      button.style.bottom = '5vh'; // Position the button above the bottom of the screen
    } else {
      button.style.bottom = '-60vh'; // Position the button below the screen
    }
  }

let e = false
  function openNavbar() {
    if (e = true) {
        document.getElementsByClassName("navButton").style.display = "none";
        document.getElementsByClassName("responsive").style.display = "block";
        document.getElementsByClassName("active").style.float = "block";
        document.getElementsByClassName("navButton").style.float = "left";
        document.getElementsByClassName("responsive").style.float = "right";
        e = false
    } else if(e=false) {
        document.getElementsByClassName("navButton").style.display = "block";
        document.getElementsByClassName("navButton").style.float = "none";
        document.getElementsByClassName("responsive").style.float = "right";
        e = true
    }
  }