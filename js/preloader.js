window.addEventListener("load", (event) => {
  document.querySelector(".loader-wrapper").classList.add("fade-out");
  document.getElementById("content").style.visibility = "visible";
  document.querySelector("body").style.overflowY = "scroll";
  setInterval(() => {
    document.querySelector(".loader-wrapper").style.display = "none";
  }, 2500);
});
