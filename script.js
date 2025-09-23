









  
    document.addEventListener('DOMContentLoaded', function() {
        const filterContainer = document.getElementById('portfolio-filters');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterContainer.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            // Remove active class from all filters
            filterContainer.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked filter
            e.target.classList.add('active');

            // Loop through all portfolio items and show/hide based on filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none';  // Hide item
                }
            });
        });
    });












    document.addEventListener('DOMContentLoaded', () => {
        const readMoreBtn = document.getElementById('read-more-btn');
        const moreContent = document.getElementById('more-content');

        if (readMoreBtn && moreContent) {
            readMoreBtn.addEventListener('click', () => {
                if (moreContent.classList.contains('hidden')) {
                    moreContent.classList.remove('hidden');
                    readMoreBtn.textContent = 'READ LESS';
                } else {
                    moreContent.classList.add('hidden');
                    readMoreBtn.textContent = 'READ MORE';
                }
            });
        }
    });

















 
















    function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }




















const sidebar = document.querySelector('.sidebar');
const hidbarLinks = document.querySelectorAll('.hidbar a');
const menuButton = document.querySelector('.menu-button');

// Show sidebar when menu button is clicked
menuButton.addEventListener('click', () => {
  sidebar.style.display = 'block';
});

// Hide sidebar when a link is clicked
hidbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });
});





















  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function(e) {
    // Allow form to submit normally first (to Formspree)
    setTimeout(() => {
      form.reset(); // This clears all form fields
    }, 100); // Delay ensures submission happens before reset
  });