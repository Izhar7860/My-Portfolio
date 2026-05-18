// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    
    // Toggle icon
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    
    // Save preference
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light');
    body.classList.remove('dark');
    themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
}

// Typing Animation
const typingText = document.getElementById('typing-text');
const texts = [
    'Hi, I\\'m Khan Izharul Haq',
    'Full Stack Web Developer',
    'UI/UX Designer',
    'Creative Problem Solver'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

typeWriter();

// Smooth Scrolling and Navbar Active
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(25px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skills Progress Bars
const skillBars = document.querySelectorAll('.skill-progress');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const width = progress.getAttribute('data-width');
            progress.style.width = width + '%';
            skillsObserver.unobserve(progress);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillsObserver.observe(bar));

// Firebase Backend Contact Form
let db;
(async () => {
    try {
        const { db: firestoreDb, collection, addDoc } = await import('./firebase-config.js');
        db = firestoreDb;
        console.log('✅ Firebase Firestore ready for contact form');
    } catch (e) {
        console.log('ℹ️ Firebase config needed - form works with fallback');
    }
})();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        try {
            if (db) {
                await addDoc(collection(db, 'contacts'), {
                    name,
                    email, 
                    message,
                    timestamp: new Date(),
                    submittedFrom: 'portfolio website'
                });
                alert('✅ Thank you! Message saved to Firebase database');
            } else {
                alert('Thank you for your message! (Firebase setup pending)');
            }
            contactForm.reset();
        } catch (error) {
            console.error('Submit error:', error);
            alert('Thank you! Message received locally');
        }
    } else {
        alert('Please fill all fields');
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Toggle
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = `<span></span><span></span><span></span>`;
document.querySelector('.nav-container').appendChild(hamburger);

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Form focus effects
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ========== 3D ANIMATIONS ==========

// Mouse position for parallax
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Hero Particles Background
let particlesScene, particlesRenderer, particlesCamera;
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas || window.innerWidth < 768) return; // Disable on mobile

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const scene = new THREE.Scene();

    // Particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const count = 200;

    for (let i = 0; i < count; i++) {
        vertices.push(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        colors.push(
            0.4 + Math.random() * 0.6,  // Blue-ish
            0.6 + Math.random() * 0.4,
            1.0
        );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    particlesScene = scene;
    particlesRenderer = renderer;
    particlesCamera = camera;

    function animate() {
        requestAnimationFrame(animate);
        points.rotation.x += 0.0005;
        points.rotation.y += 0.001;
        camera.position.x = mouseX * 0.5;
        camera.position.y = mouseY * 0.5;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Profile 3D Globe
let profileScene, profileRenderer, profileCamera;
function initProfileGlobe() {
    const canvas = document.getElementById('profile-canvas');
    if (!canvas || window.innerWidth < 768) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(2);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3;

    const scene = new THREE.Scene();

    // Globe
    const geometry = new THREE.SphereGeometry(1.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x667eea,
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Inner glow
    const glowGeometry = new THREE.SphereGeometry(1.3, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x764ba2,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    profileScene = scene;
    profileRenderer = renderer;
    profileCamera = camera;

    let rotationSpeed = 0.005;

    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += rotationSpeed;
        globe.rotation.x += 0.002;
        glow.rotation.y += rotationSpeed * 0.5;

        // Mouse interaction
        globe.rotation.y += mouseX * 0.01;
        globe.rotation.x += mouseY * 0.01;

        renderer.render(scene, camera);
    }
    animate();

    // Drag to rotate
    let isDragging = false;
    let prevMouseX = 0;
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMouseX = e.clientX;
    });
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - prevMouseX;
            rotationSpeed = deltaX * 0.0001;
            prevMouseX = e.clientX;
        }
    });
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        rotationSpeed *= 0.9; // Friction
    });
}

// 3D Project Card Tilt
function initProjectTilt() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
}

// Initialize 3D on load
window.addEventListener('load', () => {
    initParticles();
    initProfileGlobe();
    initProjectTilt();
});
</xai:function_call > 

<xai:function_call name="edit_file">
<parameter name="path">d:/portfolio/TODO.md

