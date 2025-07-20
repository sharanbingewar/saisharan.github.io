document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[action*='formspree']");
  const thankYou = document.getElementById("thank-you");
  const backBtn = document.getElementById("back-to-form");

  if (form && thankYou) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }).then((response) => {
        if (response.ok) {
          // ✅ Email sent
          form.reset();
          form.style.display = "none";
          thankYou.style.display = "block";
        } else {
          alert("Something went wrong. Please try again.");
        }
      }).catch(() => {
        alert("Failed to send message. Try again later.");
      });
    });
  }

  // ✅ "Go Back" button resets view
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      thankYou.style.display = "none";
      form.style.display = "block";
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});



  // ✅ Avatar Scroll Logic
  const avatar = document.getElementById("avatar-img");
  if (!avatar) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          console.log("➡️ Now in section:", id);

          switch (id) {
            case "projects":
              avatar.src = "assets/avatars/avatar-smile.png";
              break;
            case "skills":
              avatar.src = "assets/avatars/avatar-glasses.png";
              break;
            case "experience":
              avatar.src = "assets/avatars/avatar-smile.png";
              break;
            case "contact":
              avatar.src = "assets/avatars/avatar-wave.png";
              break;
            default:
              avatar.src = "assets/avatars/avatar-default.png";
          }
        }
      });
    },
    { threshold: 0.6 }
  );

  ["projects", "skills", "experience", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
