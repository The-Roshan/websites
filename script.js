// Canvas Background
const canvas = document.getElementById('animatedBackground');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

function Bubble() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.3;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function() {
        this.y -= this.speed;
        if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius;
        }
        this.draw();
    }
}

function createBubbles() {
    for (let i = 0; i < 100; i++) {
        bubbles.push(new Bubble());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(bubble => bubble.update());
    requestAnimationFrame(animate);
}

createBubbles();
animate();

// Search Projects Functionality
function searchProjects() {
    const input = document.getElementById('searchBar').value;
    const projectItems = document.querySelectorAll('.project-item');
    const projectGallery = document.getElementById('projectGallery');

    // Reset position of all projects
    projectItems.forEach(item => item.style.order = '');

    // Find matching project
    let foundProject = null;
    projectItems.forEach(item => {
        const projectNumber = item.getAttribute('data-project');
        if (projectNumber === input) {
            foundProject = item;
        }
    });

    // If project is found, move it to the top
    if (foundProject) {
        foundProject.style.order = -1;
    }
}

// Canvas Resizing on Window Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
