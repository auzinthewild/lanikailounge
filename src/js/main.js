function navScroll() {
  const navLinks = document.querySelectorAll("#navLinks a");
  const homeButton = document.getElementById("home");
  const navBar = document.getElementById("top");
  homeButton.addEventListener("click", clickHandler);

  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      navBar.classList.remove("bg-black");
    } else if (window.scrollY > window.innerHeight) {
      navBar.classList.add("bg-black");
    }
  });

  for (const link of navLinks) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const navHeight = document.querySelector("#top").offsetHeight;

    const href = this.getAttribute("href");
    if (href === "#home") {
      scroll({
        top: 0,
        behavior: "smooth",
      });
    } else if (href === "#menu") {
      navBar.classList.add("bg-black");
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    } else if (href === "#about") {
      navBar.classList.add("bg-black");

      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight + 20,
        behavior: "smooth",
      });
    } else {
      navBar.classList.add("bg-black");
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight + 40,
        behavior: "smooth",
      });
    }
  }
}

function toggleNav() {
  const toggleNavLink = document.getElementById("mobileNavButton");
  const mobileNav = document.getElementById("mobileNav");
  toggleNavLink.addEventListener("click", clickHandler);
  const mobileLinks = document.querySelectorAll("#mobileLinks a");
  for (const link of mobileLinks) {
    link.addEventListener("click", clickHandler2);
  }

  function clickHandler(e) {
    e.preventDefault();
    if (mobileNav.classList.contains("hidden")) {
      mobileNav.classList.remove("hidden");
      mobileNav.classList.add("fixed");
      document.body.classList.add("overflow-hidden");
    } else if (!mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("fixed");
      document.body.classList.remove("overflow-hidden");
    }
  }

  function clickHandler2(e) {
    e.preventDefault();

    const navHeight = document.querySelector("#top").offsetHeight;
    const href = this.getAttribute("href");
    if (href === "#home") {
      scroll({
        top: 0,
        behavior: "smooth",
      });
      mobileNav.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    } else if (href === "#contact") {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
      mobileNav.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    } else {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight - 10,
        behavior: "smooth",
      });
      mobileNav.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }
}
toggleNav();
navScroll();
