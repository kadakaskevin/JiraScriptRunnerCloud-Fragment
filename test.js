document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hello-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      const newTab = window.open("", "_blank");
      newTab.document.write("<h1>Hello</h1>");
      newTab.document.close();
    });
  }
});
