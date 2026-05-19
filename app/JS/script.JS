console.log('Hello All!');

// feather icons
// feather.replace();

//  lightmode/ darkmode toogle
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");

    toggle.classList.toggle("active");
});