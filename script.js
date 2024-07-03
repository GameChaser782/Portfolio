const darkSwitch = document.getElementById("darkSwitch");
const body = document.body;

darkSwitch.addEventListener("change", () => {
  if (darkSwitch.checked) {
    body.dataset.theme = "dark";
  } else {
    body.dataset.theme = "";
  }
});