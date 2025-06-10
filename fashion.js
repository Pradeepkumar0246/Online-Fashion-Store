var btn = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  mybutton.onclick = topFunction;
  const user = JSON.parse(localStorage.getItem("user"));
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";

      if (user && isLoggedIn) {
        const userNav = document.getElementById("userNav");
        userNav.innerHTML = `
      <a class="nav-link" href="#">
        ${user.firstName}
        <class="rounded-circle ms-2" alt="User" />
      </a>
    `;
      }