document.addEventListener('DOMContentLoaded', function() {
    // Get all the menu links
    const menuLinks = document.querySelectorAll('.menuBar a');
    
    // Function to switch sections
    function switchSection(sectionId) {
        // Get all sections
        const sections = document.querySelectorAll('section');
        
        // Hide all sections
        sections.forEach(function(section) {
            section.classList.remove('active');
        });
        
        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    // Add event listeners to each menu link
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section from the data attribute
            const sectionId = link.getAttribute('data-section');
            
            // Switch to the corresponding section
            switchSection(sectionId);
        });
    });
    
    // Initially display the "home" section
    switchSection('home');
});
 // Main menu handling
const homePage = document.getElementById('homePage');
 const menuItems = document.querySelectorAll('.menu li a');
 const labsSection = document.getElementById('labs-section');
 const labsLink = document.getElementById('labs-link');
 const aboutLink = document.getElementById('about-link');
 const homeLink = document.getElementById('home-link');
 const iframe = document.getElementById('main-iframe');
 const labButtons = document.getElementById('lab-buttons');
 const secondMenu = document.getElementById('secondary-nav');
 iframe.style.display = 'none';
 secondMenu.style.display = 'none';
 homePage.style.display = 'block'
 menuItems.forEach(item => {
     item.addEventListener('click', function(event) {
         event.preventDefault();
         
         // Remove active class from all menu items
         menuItems.forEach(item => item.classList.remove('active'));
         this.classList.add('active');
         
         if (this === labsLink) {
            homePage.style.display = 'none';
             secondMenu.style.display = 'flex';
             labsSection.style.display = 'block';  // Show labs section
             iframe.style.display = 'none';  // Hide iframe when labs section is shown
             labButtons.style.display = 'flex';  // Show lab buttons
         } else if (this === aboutLink) {          
            homePage.style.display = 'none';  
            secondMenu.style.display = 'none';
             labsSection.style.display = 'none';  // Hide labs section when About is shown
             iframe.src = 'about.html';
             iframe.style.display = 'block';  // Show iframe for About page
             labButtons.style.display = 'none';  // Hide lab buttons
         } else if (this === homeLink) {
           
            homePage.style.display = 'block';
             secondMenu.style.display = 'none';
             labsSection.style.display = 'none'; 
             iframe.style.display = 'none';  // Show iframe for Home page
             labButtons.style.display = 'none';  // Hide lab buttons
             secondMenu.style.display = 'none';
            
         }
     });
 });

 // Lab tabs handling
 const labTabs = document.querySelectorAll('.lab-tab');
 const labContents = document.querySelectorAll('.lab-content');

 labTabs.forEach(tab => {
     tab.addEventListener('click', function() {
         // Remove active class from all tabs and contents
         labTabs.forEach(tab => tab.classList.remove('active'));
         labContents.forEach(content => content.classList.remove('active'));

         // Add active class to clicked tab and corresponding content
         this.classList.add('active');
         const tabId = this.getAttribute('data-tab');
         document.getElementById(tabId).classList.add('active');
     });
 });

    // LAB1 JS
      // Profile picture preview
      const profilePicInput = document.getElementById('profilePic');
      const profilePreview = document.getElementById('profilePreview');

      profilePicInput.addEventListener('change', function() {
          const file = this.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  profilePreview.src = e.target.result;
                  profilePreview.style.display = 'block';
              };
              reader.readAsDataURL(file);
          }
      });

      // Form validation and enabling the submit button
      const form = document.getElementById('userForm');
      const submitBtn = document.getElementById('submitBtn');

      form.addEventListener('input', function() {
          const username = document.getElementById('username').value;
          const email = document.getElementById('email').value;
          const role = document.getElementById('role').value;

          // Basic validation logic
          const isFormValid = username && email && role;
          submitBtn.disabled = !isFormValid;

          // Inline error handling
          document.getElementById('usernameError').innerText = username.length < 4 ? 'Username is too short' : '';
          document.getElementById('emailError').innerText = !validateEmail(email) ? 'Invalid email format' : '';
      });

      // Email validation helper function
      function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(String(email).toLowerCase());
      }

      // Cancel form action
      function cancelForm() {
          window.history.back();  // Go back to the previous page
      }
