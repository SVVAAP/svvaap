// Toggle the navigation menu on small screens
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Smooth scroll to section on click
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = event.target.getAttribute("href");
    smoothScroll(targetId, 1000);
  });
});

// Subscribe to newsletter on submit
function subscribeToNewsletter(event) {
  event.preventDefault();
  var email = document.querySelector("#newsletter input[type='email']").value;
  if (email) {
    alert("Thank you for subscribing to our newsletter with email: " + email);
  } else {
    alert("Please enter a valid email address.");
  }
}

var newsletterForm = document.querySelector("#newsletter form");
newsletterForm.addEventListener("submit", subscribeToNewsletter);

// Send message on submit
function sendMessage(event) {
  event.preventDefault();
  var name = document.querySelector("#contact input[type='text']").value;
  var email = document.querySelector("#contact input[type='email']").value;
  var subject = document.querySelector("#contact input[type='text']").value;
  var message = document.querySelector("#contact textarea").value;
  if (name && email && subject && message) {
    alert(
      "Thank you for your message, " +
        name +
        "! We will get back to you as soon as possible."
    );
  } else {
    alert("Please fill out all fields to send a message.");
  }
}

var contactForm = document.querySelector("#contact form");
contactForm.addEventListener("submit", sendMessage);
