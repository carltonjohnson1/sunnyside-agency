
  // Function to show the alert
  function demoLinkAlert(event) {
    event.preventDefault(); // stops the link from actually navigating
    alert("This is a demo site so links aren't functional");
  }

  // Attach event listeners after the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    // Select all links with the "demo-link" class
    const demoLinks = document.querySelectorAll("a.demo-link");

    demoLinks.forEach(function (link) {
      link.addEventListener("click", demoLinkAlert);
    });
  });

