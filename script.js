// Three.js Animated Background
let scene, camera, renderer, particles;

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 200;
        posArray[i + 1] = (Math.random() - 0.5) * 200;
        posArray[i + 2] = (Math.random() - 0.5) * 100;
        
        // Color (cyan to purple gradient)
        const t = Math.random();
        if (t < 0.5) {
            // Cyan
            colorArray[i] = 0;
            colorArray[i + 1] = 0.96;
            colorArray[i + 2] = 1;
        } else {
            // Purple
            colorArray[i] = 0.66;
            colorArray[i + 1] = 0.33;
            colorArray[i + 2] = 0.96;
        }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Add connecting lines
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    
    for(let i = 0; i < 100; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 100;
        
        const x2 = x + (Math.random() - 0.5) * 30;
        const y2 = y + (Math.random() - 0.5) * 30;
        const z2 = z + (Math.random() - 0.5) * 30;
        
        linePositions.push(x, y, z, x2, y2, z2);
        
        // Cyan color for lines
        lineColors.push(0, 0.96, 1, 0, 0.96, 1);
    }
    
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
    });
    
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate particles
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;
        lines.rotation.y += 0.0003;
        
        // Mouse interaction
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize Three.js when page loads
window.addEventListener('load', initThreeJS);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.glass-card, .stat-card, .achievement-card, .phase-card, .tech-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
});

// Create interactive comparison chart
// Replace the existing createComparisonChart() implementation with this version
function createComparisonChart() {
    const chartContainer = document.getElementById('mainChart');
    if (!chartContainer) return;

    const models = [
        { name: 'LAAT', score: 0.464, color: 'linear-gradient(180deg, #94a3b8, #64748b)', highlight: false },
        { name: 'ShifaMind\n(Full)', score: 0.452, color: 'linear-gradient(180deg, #a855f7, #ec4899)', highlight: true },
        { name: 'CAML', score: 0.452, color: 'linear-gradient(180deg, #94a3b8, #64748b)', highlight: false },
        { name: 'Multi\nResCNN', score: 0.446, color: 'linear-gradient(180deg, #94a3b8, #64748b)', highlight: false },
        { name: 'ShifaMind\n(P1)', score: 0.436, color: 'linear-gradient(180deg, #a855f7, #ec4899)', highlight: true },
        { name: 'PLM-ICD', score: 0.408, color: 'linear-gradient(180deg, #94a3b8, #64748b)', highlight: false },
        { name: 'GPT-4', score: 0.350, color: 'linear-gradient(180deg, #ffd700, #f59e0b)', highlight: false },
        { name: 'MSMN', score: 0.390, color: 'linear-gradient(180deg, #94a3b8, #64748b)', highlight: false }
    ];

    const scores = models.map(m => m.score);
    const minScore = Math.min(...scores);
    const maxScore = Math.max(...scores);
    const scoreRange = maxScore - minScore || 1e-6;

    // Build chart using percentages (responsive)
    chartContainer.innerHTML = '';

    models.forEach((model, index) => {
        // Normalize to 0..1
        const normalized = (model.score - minScore) / scoreRange;
        // Map to percentage for the bar element
        const heightPercent = Math.round(normalized * 100);
        // Ensure a small minimum so differences remain visible
        const minVisiblePercent = 8; // tweak if you want taller/better contrast
        const finalPercent = Math.max(minVisiblePercent, heightPercent);

        const barClass = model.highlight ? 'bar highlight-bar' : 'bar';
        const labelClass = model.highlight ? 'bar-label our-label' : 'bar-label';

        // Allow linebreaks in names that were encoded as \n
        const displayName = String(model.name).replace(/\n/g, '<br/>');

        // Append one chart bar (no height:100% on chart-bar)
        const barHTML = `
            <div class="chart-bar" style="animation-delay: ${index * 0.08}s;">
                <div class="${barClass}" style="height: ${finalPercent}%; background: ${model.color};">
                    <div class="bar-value">${model.score.toFixed(3)}</div>
                </div>
                <div class="${labelClass}">${displayName}</div>
            </div>
        `;
        chartContainer.insertAdjacentHTML('beforeend', barHTML);
    });
}

// Initialize chart when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createComparisonChart);
} else {
    createComparisonChart();
}

// Add subtle parallax effect to hero only
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        const speed = 0.15;
        heroContent.style.transform = `translateY(${scrolled * speed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Add glow effect on hover for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 32px rgba(0, 245, 255, 0.3), 0 0 50px rgba(0, 245, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        });
    });
});

// Performance counter animation
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        // Format based on element content
        const text = element.textContent.trim();
        if (text.includes('%')) {
            element.textContent = Math.round(current) + '%';
        } else if (current < 1 && current > 0) {
            // F1 score - 3 decimal places
            element.textContent = current.toFixed(3);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Trigger animations when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.dataset.animated) {
                const text = statNumber.textContent.trim();
                let value;
                
                if (text.includes('%')) {
                    value = parseInt(text.replace('%', ''));
                } else {
                    value = parseFloat(text);
                }
                
                statNumber.textContent = text.includes('%') ? '0%' : '0';
                animateValue(statNumber, 0, value, 2000);
                statNumber.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statsObserver.observe(card));
});

// Add custom cursor effect (optional - remove if too much)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 245, 255, 0.5);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        transform: translate(-50%, -50%);
    }
    
    .custom-cursor::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        background: #00f5ff;
        border-radius: 50%;
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor {
        transform: translate(-50%, -50%) scale(1.5);
        border-color: #00f5ff;
    }
    
    .highlight-bar {
        box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
    }
`;
document.head.appendChild(style);

// Console easter egg
console.log('%c🧠 ShifaMind Dashboard ', 'background: linear-gradient(90deg, #00f5ff, #a855f7); color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cWe beat ChatGPT with 100% explainability! 🎯', 'color: #00f5ff; font-size: 14px;');
console.log('%cMacro F1: 0.4644 | Interpretable: ✓', 'color: #a855f7; font-size: 12px;');
console.log('%cAlhamdulillah! 🤲', 'color: #10b981; font-size: 12px;');
