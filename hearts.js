const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartCount = 100;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Heart {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(0, canvas.height);
        this.size = random(10, 20);
        this.speed = random(1, 3);
        this.alpha = random(0.5, 1);
    }

    draw() {
        ctx.fillStyle = `rgba(255, 105, 180, ${this.alpha})`; // Pinkish
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
            this.x - this.size, this.y - this.size,
            this.x - this.size, this.y + this.size,
            this.x, this.y + this.size * 1.5
        );
        ctx.bezierCurveTo(
            this.x + this.size, this.y + this.size,
            this.x + this.size, this.y - this.size,
            this.x, this.y
        );
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = random(0, canvas.width);
        }
    }
}

// Create hearts
for (let i = 0; i < heartCount; i++) {
    hearts.push(new Heart());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const heart of hearts) {
        heart.update();
        heart.draw();
    }
    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate(); 