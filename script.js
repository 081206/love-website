// Countdown Timer
const timerElement = document.getElementById('timer');
const surprise = document.getElementById('surprise');

// Set target date (June 20, 2024)
const birthday = new Date("June 20, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "🎈 Happy Birthday, Bubuuu! 🎂";
        surprise.style.display = 'block';
        showFireworks();
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Music Player
const musicBtn = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-content a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Reasons I Love You
const reasons = [
    "Your beautiful smile brightens my day",
    "The way you understand me without words",
    "Your kindness and compassion towards others",
    "How you make me laugh even on my worst days",
    "Your strength and determination inspire me",
    "The way you care for those you love",
    "Your creativity and unique perspective",
    "How you always support my dreams",
    "Your beautiful heart and soul",
    "The way you make every moment special"
];

const reasonsContainer = document.querySelector('.reasons-container');
reasons.forEach((reason, index) => {
    const reasonElement = document.createElement('div');
    reasonElement.className = 'reason-card';
    reasonElement.innerHTML = `
        <span class="reason-number">${index + 1}</span>
        <p>${reason}</p>
    `;
    reasonElement.style.animationDelay = `${index * 0.2}s`;
    reasonsContainer.appendChild(reasonElement);
});

// Fireworks Animation
function showFireworks() {
    const fireworksContainer = document.querySelector('.fireworks-container');
    
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 2;
        const duration = Math.random() * 2 + 1;
        
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.animationDuration = `${duration}s`;
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, duration * 1000);
    }

    // Create initial fireworks
    for (let i = 0; i < 50; i++) {
        createFirework();
    }

    // Continue creating fireworks
    setInterval(() => {
        createFirework();
    }, 200);
}

// Background Music
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.5; // Set volume to 50%

// Handle autoplay restrictions
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
    }
}, { once: true });

// Add CSS for fireworks
const style = document.createElement('style');
style.textContent = `
    .fireworks-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    }
    
    .firework {
        position: absolute;
        background: radial-gradient(circle, #ff6b6b 0%, transparent 70%);
        border-radius: 50%;
        animation: explode 1s ease-out forwards;
    }
    
    @keyframes explode {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    .reason-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
        animation: fadeIn 0.5s ease-out forwards;
        opacity: 0;
    }
    
    .reason-number {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        margin-right: 1rem;
    }
`;
document.head.appendChild(style);

function countdownToBirthday() {
  const birthday = new Date("2025-06-20T00:00:00").getTime();
  const timer = document.getElementById("timer");

  const update = () => {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance < 0) {
      document.getElementById("surprise").classList.remove("hidden");
      timer.innerHTML = "🎂 It's your birthday!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(update, 1000);
}

// Floating hearts animation
const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");
let hearts = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: Math.random() * 10 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5
  };
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    ctx.globalAlpha = heart.opacity;
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y);
    ctx.bezierCurveTo(heart.x + heart.size / 2, heart.y - heart.size / 2,
                     heart.x + heart.size, heart.y + heart.size / 3,
                     heart.x, heart.y + heart.size);
    ctx.bezierCurveTo(heart.x - heart.size, heart.y + heart.size / 3,
                     heart.x - heart.size / 2, heart.y - heart.size / 2,
                     heart.x, heart.y);
    ctx.fill();
    heart.y -= heart.speed;
    if (heart.y < -heart.size) hearts[index] = createHeart();
  });
  ctx.globalAlpha = 1;
}

for (let i = 0; i < 100; i++) hearts.push(createHeart());
function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

countdownToBirthday();

// Countdown to birthday
function updateCountdown() {
    const birthday = new Date('2025-06-20T00:00:00');
    const now = new Date();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Falling Hearts Animation
const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Heart class
class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 15 + 10;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.size / 20, this.size / 20);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -10, -20, 0, -20);
        ctx.bezierCurveTo(10, -20, 10, -10, 0, 0);
        ctx.fillStyle = `rgba(255, 192, 203, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 20) {
            this.reset();
        }
    }
}

// Create hearts
const hearts = Array.from({ length: 50 }, () => new Heart());

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

animate();

// Background music
const bgMusic = document.getElementById('bg-music');
document.addEventListener('click', () => {
    bgMusic.play();
}, { once: true });

// Heart Animation
const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Heart class
class Heart {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 15 + 10;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        
        if (this.y > canvas.height + 20) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.size / 20, this.size / 20);
        ctx.globalAlpha = this.opacity;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -10, -20, 0, -20);
        ctx.bezierCurveTo(10, -20, 10, -10, 0, 0);
        ctx.fillStyle = '#ff69b4';
        ctx.fill();
        
        ctx.restore();
    }
}

// Create hearts
const hearts = Array.from({ length: 50 }, () => new Heart());

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    
    requestAnimationFrame(animate);
}
animate();

// Countdown Timer
function updateCountdown() {
    const birthday = new Date('2024-06-15T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Background Music
function playMusic() {
    const music = document.getElementById('bgMusic');
    music.play().catch(error => {
        console.log('Auto-play prevented:', error);
    });
}

// Add click event to document for music
document.addEventListener('click', playMusic, { once: true }); 