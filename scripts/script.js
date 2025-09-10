
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


/* Need to still write the code for the mobile menu plus change he links to Li's in the nav the class .mobile-nav needs to be toggled*/

