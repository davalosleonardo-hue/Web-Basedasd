document.querySelector(".track-btn").addEventListener("click", function () {
      const reqId = document.querySelector(".track-input").value;
      if (reqId.trim() === "") {
        alert("Please enter a Request ID.");
      } else {
        alert("Tracking request ID: " + reqId + " (Feature coming soon!)");
      }
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
