document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hello-btn");
  const dialog = document.getElementById("sr-dialog");
  if (btn) {
    btn.addEventListener("click", function () {
      dialog.show();
    });
  }
});
