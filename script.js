document.querySelector("button").addEventListener("click", function() {
    alert("Thanks for reaching out! i will get back to you soon.")
});
document.querySelector("form").addEventlistener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully");
});
