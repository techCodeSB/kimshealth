document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');

    // Function to activate a tab
    function activateTab(tab) {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    }

    // Add hover event listeners
    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function () {
            activateTab(this);
        });
    });

    // Keep first tab active on page load
    document.querySelector('.tab').classList.add('active');
    document.getElementById('tab1').classList.add('active');
});




// ----------------------



document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Initialize the accordion
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        // Set ARIA attributes for accessibility
        const content = item.querySelector('.accordion-content');
        const contentId = `content-${Math.random().toString(36).substring(2, 9)}`;

        header.setAttribute('aria-expanded', item.classList.contains('active'));
        header.setAttribute('aria-controls', contentId);
        content.setAttribute('id', contentId);

        // Add click event
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });

        // Add keyboard support
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
});



// DESKTOP HAMBURGER MENU JS


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle sidebar
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent scrolling when sidebar is open
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });

    // Close sidebar when clicking on overlay
    overlay.addEventListener('click', function () {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Menu item click effect
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    hamburger.classList.remove('active');
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    });

    // Close sidebar when window is resized to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


const container = document.querySelector('.horizontal-scroll-container');

    // Handle mouse wheel events
    container.addEventListener('wheel', (e) => {
      // Skip if user holds shift (browser handles horizontal scroll)
      if (e.shiftKey) return;

      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight =
        container.scrollLeft < container.scrollWidth - container.clientWidth;

      if (e.deltaY > 0 && canScrollRight) {
        // Scroll right when mouse wheel down
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      } else if (e.deltaY < 0 && canScrollLeft) {
        // Scroll left when mouse wheel up
        container.scrollLeft += e.deltaY; // deltaY is negative
        e.preventDefault();
      }
    }, { passive: false });

    // Handle touch swipe events
    let startX = 0;
    let startY = 0;

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });

    container.addEventListener('touchmove', (e) => {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Only prevent vertical scrolling when swiping horizontally
      if (Math.abs(diffX) > Math.abs(diffY)) {
        container.scrollLeft += diffX;
        startX = currentX;
        startY = currentY;
        e.preventDefault();
      }
    }, { passive: false });