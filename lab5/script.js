const tabs = document.querySelectorAll('nav ul li');
function changeBorder(tabsId){
       tabs.forEach(tab => {  
           console.log('hi');
           tab.classList.remove('border-b-2');
           if(tab.id === tabsId){
               tab.classList.add('border-b-2');
           }
       });

   }
document.addEventListener('DOMContentLoaded', function() {
   // Get all tabs and content sections
  
   const tabContents = document.querySelectorAll('.tab-content');
   
  
   // Function to switch tabs
   function switchTab(tabId) {
       // Hide all tab contents
       tabContents.forEach(content => {
           content.classList.add('hidden');
       });
       console.log('hi');
       // Remove active class from all tabs
      

       // Show selected tab content
       const selectedContent = document.getElementById(tabId);
       if (selectedContent) {
           selectedContent.classList.remove('hidden');
       }

       // Add active class to selected tab
       const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
       if (selectedTab) {
           selectedTab.classList.add('border-white');
           selectedTab.classList.remove('hover:border-gray-300');
       }
   }

   // Add click handlers for tabs
   tabs.forEach(tab => {
       tab.addEventListener('click', () => {
           const tabId = tab.getAttribute('data-tab');
           switchTab(tabId);
       });
   });

   // Initialize first tab as active
   switchTab('all-courses');
});
let btn = document.getElementById('btnHide');
let control = 0;
function showHeader(id) {
   let navTabs = document.getElementById(id);
   if (control === 0) {
       navTabs.classList.remove('hidden');
       navTabs.classList.add('block');
       control = 1;
   }
   else {
       navTabs.classList.remove('block');
       navTabs.classList.add('hidden');
       control = 0;
   }
}
// btn.addEventListener('click', showHeader('navMobile'));
let filerButton = document.getElementById('filerBtn');
let controlFilter = 0;
function showFilter(id) {
   let filter = document.getElementById('id');
   if (controlFilter === 0) {
       filter.classList.remove('hidden');
       filter.classList.add('block');
       controlFilter = 1;
   }
   else {
       filter.classList.remove('block');
       filter.classList.add('hidden');
       controlFilter = 0;
   }
}