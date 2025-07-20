document.addEventListener("DOMContentLoaded", function () {
  // ✅ Form logic (unchanged)
  const form = document.querySelector("form[action*='formspree']");
  const thankYou = document.getElementById("thank-you");
  

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
          form.reset();
          form.style.display = "none";
          thankYou.style.display = "block";

          setTimeout(() => {
            thankYou.style.display = "none";
            form.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 5000);
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }).catch(error => {
        alert("Failed to send message. Try again later.");
        console.error("Error:", error);
      });
    });
  }

  // ✅ Avatar Scroll Logic (unchanged)
  const avatar = document.getElementById("avatar-img");
  if (avatar) {
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
  }

  // ✅ Hamburger toggle logic (NEW + BEST)
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});
