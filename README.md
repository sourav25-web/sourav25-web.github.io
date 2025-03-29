# Sourav Swain - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## About Me

I'm a Civil Engineering graduate who transitioned to IT, specializing in Full Stack Python Development and DevOps Engineering. As a fresher in the tech industry, I combine my analytical background with technical skills to deliver efficient and scalable web solutions.

## My Skills

- **Programming Languages**: Python, JavaScript
- **Front-End**: HTML, CSS, Bootstrap, Tailwind CSS
- **Back-End**: Django
- **Database Management**: SQL
- **Version Control**: Git
- **Operating Systems**: Windows, Android, Linux

## My Projects

### Hospital Management System
A comprehensive solution for managing hospital operations, patient records, and administrative tasks. Features a clean interface with modern design.
- [GitHub Repository](https://github.com/sourav25-web/Hospital-Management-System-Receptionist-Interface)
- **Technologies**: Django, HTML, CSS, Bootstrap

### TasteHaven - Food Delivery Website
A modern, responsive food delivery website frontend with intuitive UI for browsing and ordering food online. Features clean design and easy navigation.
- [GitHub Repository](https://github.com/sourav25-web/Responsive-Food-Delivery)
- **Technologies**: HTML, CSS, JavaScript

### Auto Reply Bot
An automated chat assistant using Google's Gemini AI that monitors conversations and generates contextually appropriate responses.
- [GitHub Repository](https://github.com/sourav25-web/Auto-Reply-Bot)
- **Technologies**: Python, Google Generative AI (Gemini)

### Student Management System
A Django-based application for efficient student information management with a responsive Bootstrap interface and CRUD operations.
- [GitHub Repository](https://github.com/sourav25-web/Student-management-system)
- **Technologies**: Django, HTML, CSS, Bootstrap, SQLite

### Task Management System
A Django-based Task Management System with features for managing tasks, including CRUD operations, task history, and task restoration capabilities.
- [GitHub Repository](https://github.com/sourav25-web/Task-Management-System)
- **Technologies**: Django, HTML, CSS, SQLite

### Portfolio Website
A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations, project filtering, and mobile-friendly design.
- [GitHub Repository](https://github.com/sourav25-web/sourav25-web.github.io)
- **Technologies**: HTML, CSS, JavaScript

## Features of This Portfolio

- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Dynamic Navigation**: Highlights the current section as you scroll
- **Portfolio Filter**: Filter projects by category
- **Contact Form**: With client-side validation
- **Smooth Animations**: Including typing effect, scroll animations, and skill progress bars
- **Mobile-Friendly Navigation**: With a hamburger menu for smaller screens

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser

## Customization

### Adding Your Photos

To add your photos to the portfolio:

1. **Prepare two photos**:
   - A professional profile photo (ideally square, at least 400x400px)
   - A photo for the About section (ideally rectangular, at least 500x600px)

2. **Option 1 - Using CSS backgrounds (recommended)**:
   - Rename your profile photo to `profile-photo.jpg`
   - Rename your about section photo to `about-photo.jpg`
   - Place both files in the `Images` folder
   - The website will automatically use these images

3. **Option 2 - Using custom filenames**:
   - Place your photos in the `Images` folder with any filename
   - Edit the `styles.css` file to update these lines:
     ```css
     /* In the .image-container class */
     background-image: url('Images/profile-photo.jpg');
     
     /* In the .about-image class */
     background-image: url('Images/about-photo.jpg');
     ```
   - Replace the filenames with your actual image filenames

4. **Option 3 - Using HTML img tags**:
   - Place your photos in the `Images` folder
   - Open `index.html` and uncomment the img tags in the hero and about sections
   - Update the src attributes to point to your image files
   - Add appropriate CSS styling as needed

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` section of the `styles.css` file:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6b7c8f;
    --dark-color: #182033;
    --light-color: #f5f5f5;
    /* other colors... */
}
```

### Adding Projects

To add a new project to the portfolio section:

1. Add a new portfolio item in the HTML file within the `.portfolio-container` section
2. Set the appropriate `data-category` attribute for filtering
3. Update the image and project details

### Customizing Content

You can easily customize the content by editing the text in the HTML file, including:

- Your name and job title
- About section text
- Skills and their proficiency levels
- Services offered
- Project portfolio
- Contact information

## Contact Me

- Phone: [+91 6372520177](tel:+916372520177)
- Location: Bengaluru, Karnataka, 560016
- Email: [linkwithsourav25@gmail.com](mailto:linkwithsourav25@gmail.com)
- LinkedIn: [linkedin.com/in/swainsourav25](https://linkedin.com/in/swainsourav25)
- GitHub: [github.com/sourav25-web](https://github.com/sourav25-web)
- Instagram: [@s0urav._25](https://www.instagram.com/s0urav._25)


## Author

Sourav Swain

---

Feel free to use this template for your own portfolio website! 