const toggle = document.getElementById("toggleTheme");
const body = document.body;

const savedTheme = localStorage.getItem("theme") || "day";
body.classList.add(savedTheme);

toggle.onclick = () => {
  body.classList.toggle("night");
  body.classList.toggle("day");
  localStorage.setItem(
    "theme",
    body.classList.contains("night") ? "night" : "day"
  );
};
