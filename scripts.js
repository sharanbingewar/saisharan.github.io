// === FormSubmit Inline Handler ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);

      fetch("https://formsubmit.co/ajax/sharanbingewar09@gmail.com", {
        method: "POST",
        body: data
      })
        .then(response => {
          if (response.ok) {
            form.style.display = "none";
            document.getElementById("thank-you").style.display = "block";
          } else {
            alert("Something went wrong. Please try again.");
          }
        })
        .catch(error => {
          alert("Failed to send message. Try again later.");
          console.error("Error:", error);
        });
    });
  }
});
