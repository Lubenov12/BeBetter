document.querySelectorAll(".text-bg h1").forEach((element) => {
  element.setAttribute("data-content", element.textContent);
});
