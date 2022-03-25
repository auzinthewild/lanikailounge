function navScroll() {
  console.log("wer here");
  const navLinks = document.querySelectorAll("#navLinks a");
  const homeButton = document.getElementById("home");
  const navBar = document.getElementById("top");
  homeButton.addEventListener("click", clickHandler);
  for (const link of navLinks) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    console.log("clik");
    const navHeight = document.querySelector("#top").offsetHeight;
    navBar.classList.add("bg-black");
    const href = this.getAttribute("href");
    if (href === "#home") {
      scroll({
        top: 0,
        behavior: "smooth",
      });
    } else if (href === "#menu") {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    } else if (href === "#about") {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight + 20,
        behavior: "smooth",
      });
    } else {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - navHeight + 40,
        behavior: "smooth",
      });
    }
  }
}

navScroll();
