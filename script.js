
const toggleButton = document.getElementById("theme-toggle");

// check and apply saved theme from local storage
document.addEventListener("DOMContentLoaded" , () => {
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Light Mode";
    }
});

toggleButton.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");

    // update button text and save theme
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme","dark");
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }
});