🌗 Day & Night Portfolio Website
An interactive personal portfolio website built using HTML, CSS, and JavaScript, featuring a dynamic Day & Night theme system.
The website showcases my projects, interests, and contact information in a visually engaging and animated format.

 Features

🌞 / 🌙 Toggle between Day and Night themes

-> Animated UI elements and transitions
-> Responsive project showcase with hover effects
-> Interests page with interactive image grid
-> Contact page with social links and message form
-> Fully responsive layout
-> Clean, modular file structure

portfolio/
│
├── index.html          # Home page
├── interests.html      # Interests showcase
├── projects.html       # Project gallery
├── contact.html        # Contact section
│
├── css/
│   ├── base.css        # Core layout styles
│   ├── day.css         # Day theme styles
│   ├── night.css       # Night theme styles
│   └── animations.css  # Animations and transitions
│
├── js/
│   ├── theme.js        # Theme toggle logic
│   └── animations.js   # Additional animation effects
│
└── assets/
    ├── profile.jpeg
    ├── anime images
    └── project images

 Theme Workflow
1️⃣ Theme Toggle System

The website uses a button that toggles a class on the <body> element:
document.body.classList.toggle("night");

2️⃣ Styling Strategy

base.css → Layout, grid, structure
day.css → Light backgrounds, warm accents
night.css → Dark backgrounds, neon/glow accents
animations.css → Hover effects, floating animations, transitions

Deployment

This project is deployed using GitHub Pages.

To deploy:
Push project to GitHub.
Go to Repository Settings.
Enable GitHub Pages.
Select main branch as source.

💡 Technologies Used:
HTML5
CSS3 (Grid, Flexbox, Animations)
JavaScript (DOM manipulation)
GitHub Pages (Deployment)

📌 Future Improvements
Backend integration for contact form
Scroll-triggered animations
Project detail modal popups
Performance optimization
Accessibility enhancements

🎨 Design Philosophy
The website reflects a dual nature:

Day Mode → Clarity, structure, productivity
Night Mode → Focus, intensity, creativity


👨‍💻 Author
Anirudh Ramachandran



Theme-aware styling
