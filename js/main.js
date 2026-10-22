// Expand / collapse paper abstracts.
document.querySelectorAll(".abs-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var abs = document.getElementById(btn.getAttribute("aria-controls"));
    var open = abs.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.querySelector(".hint").textContent = open ? " (click to collapse)" : " (click to expand)";
  });
});
