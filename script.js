document.addEventListener('DOMContentLoaded', function() {
    // Navigation and section display
    const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');
    const sections = document.querySelectorAll('.section');
    
    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        
        // Show the target section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Update active state in navigation
            document.querySelectorAll('.nav-links a').forEach(link => {
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }
    
    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section id
            const targetId = this.getAttribute('href');
            
            // Show the target section
            showSection(targetId);
            
            // Handle mobile view - scroll to top
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project filtering functionality
    const skillFilters = document.querySelectorAll('.skill-filter');
    const projectCards = document.querySelectorAll('.project-card');
    let activeFilters = ['all'];
    
    // Initialize filtering
    updateProjectVisibility();
    
    // Add click event listeners to skill filters
    skillFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            
            if (skill === 'all') {
                // Reset to show all projects
                activeFilters = ['all'];
                skillFilters.forEach(btn => {
                    if (btn.getAttribute('data-skill') === 'all') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            } else {
                // Remove 'all' from active filters if it's there
                const allIndex = activeFilters.indexOf('all');
                if (allIndex > -1) {
                    activeFilters.splice(allIndex, 1);
                    document.querySelector('.skill-filter[data-skill="all"]').classList.remove('active');
                }
                
                // Toggle this filter
                const index = activeFilters.indexOf(skill);
                if (index > -1) {
                    // Remove filter if already active
                    activeFilters.splice(index, 1);
                    this.classList.remove('active');
                    
                    // If no filters are active, set 'all' as active
                    if (activeFilters.length === 0) {
                        activeFilters = ['all'];
                        document.querySelector('.skill-filter[data-skill="all"]').classList.add('active');
                    }
                } else {
                    // Add filter
                    activeFilters.push(skill);
                    this.classList.add('active');
                }
            }
            
            updateProjectVisibility();
        });
    });
    
    // Function to update project visibility based on active filters
    function updateProjectVisibility() {
        if (activeFilters.includes('all')) {
            // Show all projects
            projectCards.forEach(card => {
                card.classList.remove('hidden');
            });
        } else {
            // Show only projects that match ALL active filters
            projectCards.forEach(card => {
                const projectSkills = card.getAttribute('data-skills').split(',');
                const hasAllSelectedSkills = activeFilters.every(filter => projectSkills.includes(filter));
                
                if (hasAllSelectedSkills) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    }
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || message === '') {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Check email format
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address', 'error');
                return;
            }
            
            // If we got here, form is valid
            showAlert('Your message has been sent successfully!', 'success');
            contactForm.reset();
            
            // In a real application, you would send data to a server here
            console.log('Form submitted:', { name, email, message });
        });
    }
    
    // Check if email is valid format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show alert message
    function showAlert(message, type) {
        // Check if an alert already exists and remove it
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create alert element
        const alertElement = document.createElement('div');
        alertElement.className = `alert alert-${type}`;
        alertElement.textContent = message;
        
        // Add to beginning of form
        contactForm.insertBefore(alertElement, contactForm.firstChild);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 3000);
    }
    
    // Add hover effects to skills list
    const skillItems = document.querySelectorAll('.timeline-skills li');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add hover effects to projects
    const projectItems = document.querySelectorAll('.timeline-project');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '6px';
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '3px';
            this.style.transform = '';
        });
    });

    // Function to reset the page to default state and scroll to the top
    function resetPage() {
        // Reset filters to default
        activeFilters = ['all'];
        updateProjectVisibility();
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add event listeners to navigation links to reset the page on reselection
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if the link is already active
            if (link.classList.contains('active')) {
                resetPage();
            }
        });
    });

    // Dashboard Modal Functionality
    const dashboardButtons = document.querySelectorAll('.show-dashboard');
    const modal = document.getElementById('dashboard-modal');
    const modalImage = document.getElementById('modal-image');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    // Project dashboard images mapping
    const dashboardImages = {
        'encompass': 'Images/Ecompass.png',
        'cafe': 'Images/CafeSale.png',
        'beverage': 'Images/BeverageSale.png'
    };

    // Open modal when clicking show dashboard button
    dashboardButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const project = button.getAttribute('data-project');
            modalImage.src = dashboardImages[project];
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Close modal when clicking the X button
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking the overlay
    modalOverlay.addEventListener('click', closeModal);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
