# Roshan's Professional Portfolio

## Overview
Roshan's Professional Portfolio is a dynamic and visually engaging web-based portfolio showcasing the projects and skills of Roshan Kumar Prajapati, a dedicated student and programmer. Built with HTML, CSS, and JavaScript, the portfolio features an animated background, a project gallery with search functionality, and sections for about, projects, and contact information. It highlights a diverse range of projects, from e-commerce websites to interactive games and 3D animations.

## Features
- **Header**: Displays the name "Roshan Kumar Prajapati" with a navigation menu (About, Projects, Contact) and a search bar for filtering projects by number.
- **Animated Background**: A canvas-based animated background (via `animatedBackground`) for a modern, immersive experience.
- **About Section**: Introduces Roshan’s background and passion for programming.
- **Projects Section**: A gallery of 36 project cards, each with a thumbnail, title, description, and link to live demos or GitHub repositories. Includes:
  - MyShop E-Commerce
  - 3D Animated Calculator
  - 3D Analog Clock
  - Stylish Dashboard
  - 3D Animated Balls Background
  - Animated Login Page
  - Car Race Game
  - Rock Paper Scissors
  - Tic Tac Toe
  - Storytelling
  - 3D Solar System
  - Educational Platform
  - Blue Themed 3D Webpage
  - Digital Clock
  - 3D Portfolio
  - Virtual Art Gallery
  - 3D Gallery
  - Image Slider
  - Responsive Analytics Dashboard
  - 3D Animated Slider
  - Happy Diwali 2024
  - Hover Animated Slider
  - Age Calculator
  - Web Code Editor
  - Shooting Game
  - Shape Protect Game
  - Moving Shapes Game
  - Snake Game
  - Typing Speed Game
  - Memory Matching Game
  - Text to QR Code
  - ShopX with In-Web Login
  - Flappy Bird
  - Math Test
  - Two placeholders for upcoming projects
- **Search Functionality**: Filter projects by entering project numbers in the search bar.
- **Contact Section**: Provides email (`roshanjsr5555@gmail.com`) and phone (`+91 7061126213`) for direct communication.
- **Footer**: Copyright notice for 2024.
- **Responsive Design**: Optimized for desktop and mobile devices using CSS media queries.
- **3D Effects**: Project cards feature 3D icons and hover effects for enhanced interactivity.

## Tech Stack
- **HTML5**: Structure and content of the portfolio.
- **CSS3**: Styling, layouts, 3D effects, and responsiveness (`styles.css`).
- **JavaScript**: Interactivity, including animated background, search functionality, and project filtering (`script.js`, `hide.js`).
- **Canvas API**: Used for the animated background.

## Project Structure
```
portfolio/
├── index.html              # Main HTML file
├── styles.css             # CSS styles for layout and effects
├── script.js              # JavaScript for animations and interactions
├── hide.js                # JavaScript for project search/filtering
├── project1-thumbnail.jpg # Thumbnail for Project 1
├── project2-thumbnail.jpg # Thumbnail for Project 2
├── project3.jpg           # Thumbnail for Project 3
├── project4.jpg           # Thumbnail for Project 4
├── project5.jpg           # Thumbnail for Project 5
├── project6.jpg           # Thumbnail for Project 6
├── project7.jpg           # Thumbnail for Project 7
├── project8.jpg           # Thumbnail for Project 8
├── project9.jpg           # Thumbnail for Project 9
├── project10.jpg          # Thumbnail for Project 10
├── project11.jpg          # Thumbnail for Project 11
├── project12.jpg          # Thumbnail for Project 12
├── project13.jpg          # Thumbnail for Project 13
├── project14.jpg          # Thumbnail for Project 14
├── project15.jpg          # Thumbnail for Project 15
├── project16.jpg          # Thumbnail for Project 16
├── project17.jpg          # Thumbnail for Project 17
├── project18.jpg          # Thumbnail for Project 18
├── project19.jpg          # Thumbnail for Project 19
├── project20.jpg          # Thumbnail for Project 20
├── project21.jpg          # Thumbnail for Project 21
├── project22.jpg          # Thumbnail for Project 22
├── project23.jpg          # Thumbnail for Project 23
├── project24.png          # Thumbnail for Project 24
├── project25.png          # Thumbnail for Project 25
├── project26.png          # Thumbnail for Project 26
├── project27.png          # Thumbnail for Project 27
├── project28.png          # Thumbnail for Project 28
├── project29.png          # Thumbnail for Project 29
├── project30.png          # Thumbnail for Project 30
├── project31.png          # Thumbnail for Project 31
├── project32.png          # Thumbnail for Project 32
├── project33.png          # Thumbnail for Project 33
├── project34.png          # Thumbnail for Project 34
├── coming_soon.jpg        # Placeholder for upcoming projects
├── LICENSE.md             # MIT License
└── README.md              # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A code editor (e.g., VS Code) for development or customization.
- Thumbnail images for projects (ensure all listed images are present).

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/website.git
cd portfolio
```

### 2. Verify Thumbnail Images
- Ensure all project thumbnail images (`project1-thumbnail.jpg` through `project34.png`, `coming_soon.jpg`) are in the project root.
- Replace placeholders with actual images if needed, ensuring consistent formats (JPEG or PNG).

### 3. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 4. Customize (Optional)
- Edit `styles.css` to modify colors, fonts, or 3D effects.
- Update `script.js` or `hide.js` to enhance animations or search functionality.
- Modify `index.html` to add more projects or update contact details.

## Usage
1. **Navigation**: Use the top menu to jump to About, Projects, or Contact sections.
2. **Search Projects**: Enter a project number (e.g., "1" for MyShop E-Commerce) in the search bar to filter the project gallery.
3. **View Projects**: Click project cards to visit live demos hosted on GitHub Pages or repositories.
4. **Animated Background**: Enjoy the canvas-based animation that runs automatically.
5. **Contact**: Reach out via email (`roshanjsr5555@gmail.com`) or phone (`+91 7061126213`).
6. **Responsive**: Access the portfolio on mobile or desktop for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload all files (`index.html`, `styles.css`, `script.js`, `hide.js`, and images) to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/website`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **Thumbnail Images**: Ensure all project thumbnails are correctly named and present to avoid broken images.
- **JavaScript Files**: The `script.js` file handles the animated background, while `hide.js` implements the search functionality. Both must be implemented for full features.
- **Scalability**: For a production portfolio, consider adding a backend for dynamic project data or a CMS for easier updates.
- **SEO**: Update meta tags in `<head>` (e.g., `description`, `keywords`) for better search engine visibility.
- **License**: Include the MIT License (as provided previously) in `LICENSE.md` to clarify usage terms.

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with vanilla HTML, CSS, and JavaScript for a lightweight and educational showcase.
- Inspired by modern portfolio designs with a focus on 3D animations and interactivity.
- Projects hosted on GitHub Pages for easy access.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- Email: roshanjsr5555@gmail.com
- Phone: +91 7061126213
- GitHub: [The-Roshan](https://github.com/The-Roshan)
