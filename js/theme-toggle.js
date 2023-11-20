/*
const body = $("body");

body.addClass("light-theme")

$("#theme-toggle").on("click", function() {
    if (body.hasClass("light-theme")) {
        body.removeClass("light-theme").addClass("dark-theme");
    } else {
        body.removeClass("dark-theme").addClass("light-theme");
    }
})
*/

const themeToggle = $("#theme-toggle-link");

if (localStorage.getItem("theme") === "dark")
    themeToggle.attr("href", "css/dark-theme.css");
else
    themeToggle.attr("href", "css/light-theme.css");

$("#theme-toggle-btn").on("click", function() {
    if (themeToggle.attr("href") === "css/light-theme.css") {
        themeToggle.attr("href", "css/dark-theme.css");
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.attr("href", "css/light-theme.css");
        localStorage.setItem("theme", "light");
    }
});