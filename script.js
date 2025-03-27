// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // ===== STICKY HEADER =====
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Toggle icon between bars and times
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking on a nav link (mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // ===== ACTIVE NAVIGATION LINKS =====
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== PROJECT SLIDER =====
    const initProjectSlider = () => {
        const projectCards = document.querySelectorAll('.project-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const sliderDotsContainer = document.querySelector('.slider-dots');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        let currentIndex = 0;
        let filteredProjects = [...projectCards]; // Start with all projects
        
        // Create dots for each project
        const createDots = () => {
            sliderDotsContainer.innerHTML = '';
            filteredProjects.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                sliderDotsContainer.appendChild(dot);
            });
        };
        
        // Show active project
        const showActiveProject = () => {
            // Hide all projects
            projectCards.forEach(project => {
                project.style.display = 'none';
                project.classList.remove('active');
            });
            
            // Show active project if there are filtered projects
            if (filteredProjects.length > 0) {
                filteredProjects[currentIndex].style.display = 'block';
                filteredProjects[currentIndex].classList.add('active');
                
                // Update active dot
                document.querySelectorAll('.dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
        };
        
        // Go to specific slide
        const goToSlide = (index) => {
            currentIndex = index;
            showActiveProject();
        };
        
        // Go to next slide
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % filteredProjects.length;
            showActiveProject();
        };
        
        // Go to previous slide
        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
            showActiveProject();
        };
        
        // Filter projects
        const filterProjects = (category) => {
            if (category === 'all') {
                filteredProjects = [...projectCards];
            } else {
                filteredProjects = [...projectCards].filter(project => 
                    project.getAttribute('data-category') === category
                );
            }
            
            currentIndex = 0;
            createDots();
            showActiveProject();
            
            // Hide navigation if only one project
            const shouldShowNav = filteredProjects.length > 1;
            prevBtn.style.display = shouldShowNav ? 'flex' : 'none';
            nextBtn.style.display = shouldShowNav ? 'flex' : 'none';
            sliderDotsContainer.style.display = shouldShowNav ? 'flex' : 'none';
        };
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Setup filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter projects
                const filterValue = this.getAttribute('data-filter');
                filterProjects(filterValue);
            });
        });
        
        // Initialize slider
        createDots();
        showActiveProject();
        
        // Auto slide every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto slide on hover
        const projectsSlider = document.querySelector('.projects-slider');
        projectsSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        projectsSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Initial setup
        filterProjects('all');
    };
    
    initProjectSlider();

    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return false;
            }
            
            // Simulate form submission (In a real project, this would be an AJAX call to a backend)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===== SCROLL TO TOP BUTTON =====
    const createScrollTopButton = () => {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'scroll-top-btn';
        document.body.appendChild(scrollTopBtn);
        
        // Apply styles to the button
        scrollTopBtn.style.position = 'fixed';
        scrollTopBtn.style.bottom = '20px';
        scrollTopBtn.style.right = '20px';
        scrollTopBtn.style.width = '40px';
        scrollTopBtn.style.height = '40px';
        scrollTopBtn.style.borderRadius = '50%';
        scrollTopBtn.style.backgroundColor = 'var(--primary-color)';
        scrollTopBtn.style.color = '#fff';
        scrollTopBtn.style.border = 'none';
        scrollTopBtn.style.fontSize = '16px';
        scrollTopBtn.style.cursor = 'pointer';
        scrollTopBtn.style.display = 'none';
        scrollTopBtn.style.zIndex = '999';
        scrollTopBtn.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        scrollTopBtn.style.transition = 'all 0.3s ease';
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.style.display = 'block';
                scrollTopBtn.style.opacity = '1';
            } else {
                scrollTopBtn.style.opacity = '0';
                setTimeout(() => {
                    scrollTopBtn.style.display = 'none';
                }, 300);
            }
        });
        
        // Scroll to top when clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    createScrollTopButton();

    // ===== TYPING EFFECT FOR HERO SECTION =====
    const initTypeWriter = () => {
        const textElement = document.querySelector('.hero-content h2');
        const originalText = textElement.textContent;
        const textArray = originalText.split('');
        
        textElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < textArray.length) {
                textElement.textContent += textArray[i];
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    };
    
    initTypeWriter();

    // ===== SKILLS PROGRESS ANIMATION =====
    const animateSkills = () => {
        const skills = document.querySelectorAll('.skill-progress');
        
        skills.forEach(skill => {
            skill.style.width = '0';
        });
        
        // Animate skill bars when About section is in viewport
        const aboutSection = document.querySelector('.about');
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skills.forEach(skill => {
                        const targetWidth = skill.getAttribute('style').split('width:')[1].trim();
                        skill.style.width = '0';
                        setTimeout(() => {
                            skill.style.transition = 'width 1s ease-in-out';
                            skill.style.width = targetWidth;
                        }, 200);
                    });
                    
                    // Disconnect observer after animation
                    aboutObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    };
    
    animateSkills();

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== REVEAL ANIMATIONS ON SCROLL =====
    const initRevealAnimations = () => {
        const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content > div, .contact-container > div');
        
        revealElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.5s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    };
    
    // Use setTimeout to ensure all elements are fully loaded and positioned
    setTimeout(initRevealAnimations, 100);
}); 