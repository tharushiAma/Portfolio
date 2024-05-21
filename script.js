// Function to load the navbar and footer dynamically
function loadNavbarAndFooter() {
    // Load navbar
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      });
  
    // Load footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  }
  
  // Call the function to load navbar and footer
  loadNavbarAndFooter();
  