// navbar toggle
document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.querySelector(".navbton");
  const aside = document.querySelector("aside");
  const asideItems = document.querySelectorAll(".asideitem");

  // Function to toggle the sidebar in and out
  function toggleSidebar() {
    aside.classList.toggle("show");
  }

  // Add click event listener to the navigation button
  navButton.addEventListener("click", toggleSidebar);

  // Add click event listener to each aside item to hide the sidebar
  asideItems.forEach(function (item) {
    item.addEventListener("click", function () {
      toggleSidebar();
    });
  });
});

// g3 image animation
let g3i = document.getElementById("g3i");
let observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("g3imganimate");
    } else {
      entry.target.classList.remove("g3imganimate");
    }
  });
});
observer1.observe(g3i);

// g3 title animation
let g3t = document.getElementById("g3t");
let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("g3titleanimate");
    } else {
      entry.target.classList.remove("g3titleanimate");
    }
  });
});
observer2.observe(g3t);

// g3 content animation
let g3c = document.getElementById("g3c");
let observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("g3contentanimate");
    } else {
      entry.target.classList.remove("g3contentanimate");
    }
  });
});
observer3.observe(g3c);

// g4 title animation
let g4t = document.getElementById("g4t");
let observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("g4titleanimate");
    } else {
      entry.target.classList.remove("g4titleanimate");
    }
  });
});
observer4.observe(g4t);

// g4 content animation
let g4c = document.getElementById("g4c");
let observer5 = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("g4contentanimate");
      } else {
        entry.target.classList.remove("g4contentanimate");
      }
    },
    { thread: 0.5 }
  );
});
observer5.observe(g4c);
