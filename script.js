

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

   