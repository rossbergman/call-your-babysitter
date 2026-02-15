// ========================================
// MIXCLOUD CONFIGURATION
// ========================================
const MIXCLOUD_CONFIG = {
    username: 'ross-bergman',  // Your Mixcloud username
    maxResults: 3              // Number of mixes to display
};

// ========================================
// YOUTUBE API CONFIGURATION
// ========================================
// Get your API key from: https://console.cloud.google.com/apis/credentials
// Instructions: See YOUTUBE_API_SETUP.md
const YOUTUBE_CONFIG = {
    apiKey: 'YOUR_YOUTUBE_API_KEY_HERE',  // Replace with your API key
    channelId: 'YOUR_CHANNEL_ID_HERE',     // Replace with your channel ID
    maxResults: 3                           // Number of videos to display
};

// ========================================
// YOUTUBE VIDEO LOADER
// ========================================
async function loadYouTubeVideos() {
    const container = document.getElementById('youtube-vods');
    
    // Check if API key is configured
    if (YOUTUBE_CONFIG.apiKey === 'YOUR_YOUTUBE_API_KEY_HERE' || 
        YOUTUBE_CONFIG.channelId === 'YOUR_CHANNEL_ID_HERE') {
        container.innerHTML = `
            <div class="vod-card">
                <div class="vod-info" style="padding: 40px; text-align: center;">
                    <h4 style="color: var(--whiskey-gold); margin-bottom: 15px;">YouTube API Not Configured</h4>
                    <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">
                        To automatically display your latest videos, please follow the setup instructions in YOUTUBE_API_SETUP.md
                    </p>
                    <a href="https://www.youtube.com/@YOUR_CHANNEL" target="_blank" class="cta-button secondary" style="display: inline-block;">
                        View Channel on YouTube
                    </a>
                </div>
            </div>
        `;
        return;
    }
    
    try {
        // Fetch latest videos from YouTube API
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_CONFIG.apiKey}&channelId=${YOUTUBE_CONFIG.channelId}&part=snippet,id&order=date&maxResults=${YOUTUBE_CONFIG.maxResults}&type=video`
        );
        
        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.items || data.items.length === 0) {
            container.innerHTML = `
                <div class="vod-card">
                    <div class="vod-info" style="padding: 40px; text-align: center;">
                        <h4>No videos found</h4>
                        <p style="color: rgba(255,255,255,0.7);">Check back soon for new sets!</p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Clear loading placeholder
        container.innerHTML = '';
        
        // Create video cards
        data.items.forEach(video => {
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const publishedDate = new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const card = document.createElement('div');
            card.className = 'vod-card';
            card.innerHTML = `
                <div class="vod-embed">
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
                <div class="vod-info">
                    <h4>${title}</h4>
                    <p class="vod-date">${publishedDate}</p>
                </div>
            `;
            
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading YouTube videos:', error);
        container.innerHTML = `
            <div class="vod-card">
                <div class="vod-info" style="padding: 40px; text-align: center;">
                    <h4 style="color: var(--whiskey-gold);">Unable to load videos</h4>
                    <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">
                        ${error.message}
                    </p>
                    <a href="https://www.youtube.com/@YOUR_CHANNEL" target="_blank" class="cta-button secondary" style="display: inline-block;">
                        View Channel on YouTube
                    </a>
                </div>
            </div>
        `;
    }
}

// ========================================
// MIXCLOUD LOADER
// ========================================
async function loadMixcloudMixes() {
    const container = document.getElementById('mixcloud-mixes');
    
    try {
        // Fetch latest mixes from Mixcloud API
        const response = await fetch(
            `https://api.mixcloud.com/${MIXCLOUD_CONFIG.username}/cloudcasts/`
        );
        
        if (!response.ok) {
            throw new Error(`Mixcloud API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.data || data.data.length === 0) {
            container.innerHTML = `
                <div class="mix-card">
                    <div class="mix-artwork">
                        <div class="play-icon">♪</div>
                    </div>
                    <div style="padding: 20px; text-align: center;">
                        <h3>No mixes found</h3>
                        <p style="color: rgba(255,255,255,0.7);">Check back soon for new sets!</p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Clear loading placeholder
        container.innerHTML = '';
        
        // Create mix cards (limit to maxResults)
        const mixes = data.data.slice(0, MIXCLOUD_CONFIG.maxResults);
        
        mixes.forEach(mix => {
            const mixKey = mix.key; // e.g., "/ross-bergman/mix-name/"
            const title = mix.name;
            const pictureUrl = mix.pictures.large || mix.pictures.medium;
            const uploadDate = new Date(mix.created_time).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const card = document.createElement('div');
            card.className = 'mix-card';
            card.innerHTML = `
                <div class="mix-artwork" style="background-image: url('${pictureUrl}'); background-size: cover; background-position: center;">
                    <div class="play-icon">▶</div>
                </div>
                <div class="mix-info">
                    <h3>${title}</h3>
                    <p class="mix-date">${uploadDate}</p>
                </div>
                <div class="mixcloud-embed">
                    <iframe 
                        width="100%" 
                        height="120" 
                        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=${encodeURIComponent(mixKey)}" 
                        frameborder="0" 
                        allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                        loading="lazy">
                    </iframe>
                </div>
            `;
            
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading Mixcloud mixes:', error);
        container.innerHTML = `
            <div class="mix-card">
                <div class="mix-artwork">
                    <div class="play-icon">♪</div>
                </div>
                <div style="padding: 20px; text-align: center;">
                    <h3 style="color: var(--whiskey-gold);">Unable to load mixes</h3>
                    <p style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">
                        ${error.message}
                    </p>
                    <a href="https://www.mixcloud.com/${MIXCLOUD_CONFIG.username}/" target="_blank" class="cta-button secondary" style="display: inline-block;">
                        View on Mixcloud
                    </a>
                </div>
            </div>
        `;
    }
}

// ========================================
// ORIGINAL SCRIPT CONTENT
// ========================================
// Smooth scrolling for navigation links
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

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Load YouTube videos when page is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load Mixcloud mixes first
    loadMixcloudMixes();
    
    // Load YouTube videos
    loadYouTubeVideos();
    
    const animatedElements = document.querySelectorAll('.party-card, .mix-card, .subscribe-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - scrolled / window.innerHeight;
            }
        });
    }

    // Enhance neon flicker effect on hover
    const neonTexts = document.querySelectorAll('.neon-text');
    neonTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.animation = 'flicker 0.5s infinite alternate';
        });
        text.addEventListener('mouseleave', () => {
            text.style.animation = 'flicker 3s infinite alternate';
        });
    });

    // Add glow effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Add active state to navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => navObserver.observe(section));
});

// Add custom cursor glow effect (optional)
let mouseGlow = null;

document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor glow
    mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    mouseGlow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 0, 110, 0.4), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(mouseGlow);

    document.addEventListener('mousemove', (e) => {
        if (mouseGlow) {
            mouseGlow.style.left = (e.clientX - 10) + 'px';
            mouseGlow.style.top = (e.clientY - 10) + 'px';
        }
    });
});

// Easter egg: Konami code activates extra neon
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.filter = 'saturate(2) contrast(1.2)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
    }
});
