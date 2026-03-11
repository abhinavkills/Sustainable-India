// ===================================================================
// SUSTAINABLE INDIA – SDG POLICY EXPLORER
// Main Application Logic
// ===================================================================

// ===== SUPABASE CONFIGURATION =====
const SUPABASE_URL = 'https://sqlqkbkruatlzxvanwuv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxbHFrYmtydWF0bHp4dmFud3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzM1MjAsImV4cCI6MjA4ODgwOTUyMH0.SQtyhZHdRlMUmKaRom69DS7jp0hS6dMdT617xk3jJ4Q';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('⚡ Supabase Initialized:', SUPABASE_URL);


// ===== SDG DATA (Static Reference) =====
const SDG_DATA = [
  { 
    id: 1, title: "No Poverty", icon: "🔴", color: "#E5243B", 
    description: "End poverty in all its forms everywhere.",
    policies: [
      { name: "PMGKAY", icon: "🍚", desc: "Free food grains to 800M people." },
      { name: "MGNREGA", icon: "👷", desc: "100 days of guaranteed wage employment." }
    ]
  },
  { 
    id: 2, title: "Zero Hunger", icon: "🟠", color: "#DDA63A", 
    description: "End hunger, achieve food security and improved nutrition.",
    policies: [
      { name: "PM-Kisan", icon: "🚜", desc: "Direct income support to small farmers." },
      { name: "Poshan Abhiyan", icon: "🥣", desc: "Improving nutritional outcomes." }
    ]
  },
  { 
    id: 3, title: "Good Health", icon: "🟢", color: "#4C9F38", 
    description: "Ensure healthy lives and promote well-being for all.",
    policies: [
      { name: "Ayushman Bharat", icon: "🏥", desc: "World's largest health insurance scheme." },
      { name: "Mission Indradhanush", icon: "💉", desc: "Universal immunization program." }
    ]
  },
  { 
    id: 4, title: "Quality Education", icon: "🔴", color: "#C5192D", 
    description: "Ensure inclusive and equitable quality education.",
    policies: [
      { name: "Samagra Shiksha", icon: "📚", desc: "Integrated school education program." },
      { name: "PM-SHRI Schools", icon: "🏫", desc: "Modernizing schools for 21st century." }
    ]
  },
  { 
    id: 5, title: "Gender Equality", icon: "🟠", color: "#FF3A21", 
    description: "Achieve gender equality and empower all women and girls.",
    policies: [
      { name: "Beti Bachao Beti Padhao", icon: "👩", desc: "Empowering the girl child." },
      { name: "Mahila Shakti Kendras", icon: "👧", desc: "Supporting rural women workers." }
    ]
  },
  { 
    id: 6, title: "Clean Water", icon: "🔵", color: "#26BDE2", 
    description: "Ensure availability and sustainable management of water.",
    policies: [
      { name: "Jal Jeevan Mission", icon: "🚰", desc: "Tap water connection to every rural home." },
      { name: "Swachh Bharat Mission", icon: "🧹", desc: "Universal sanitation coverage." }
    ]
  },
  { 
    id: 7, title: "Affordable Energy", icon: "🟡", color: "#FCC30B", 
    description: "Ensure access to affordable, reliable, sustainable energy.",
    policies: [
      { name: "PM-KUSUM", icon: "☀️", desc: "Solar pumps for farmers." },
      { name: "Ujala Yojana", icon: "💡", desc: "Distribution of efficient LED bulbs." }
    ]
  },
  { 
    id: 8, title: "Decent Work", icon: "🟤", color: "#A21942", 
    description: "Promote sustained, inclusive and sustainable economic growth.",
    policies: [
      { name: "Make in India", icon: "🏭", desc: "Boosting manufacturing and jobs." },
      { name: "Skill India", icon: "🎓", desc: "Empowering youth with market skills." }
    ]
  },
  { 
    id: 9, title: "Industry & Innovation", icon: "🟠", color: "#FD6925", 
    description: "Build resilient infrastructure and foster innovation.",
    policies: [
      { name: "Digital India", icon: "💻", desc: "Transforming India into a digitally empowered society." },
      { name: "PM GatiShakti", icon: "🚄", desc: "Master Plan for Multi-modal Connectivity." }
    ]
  },
  { 
    id: 10, title: "Reduced Inequality", icon: "🟣", color: "#DD1367", 
    description: "Reduce inequality within and among countries.",
    policies: [
      { name: "Stand Up India", icon: "🏦", desc: "Loans to SC/ST and Women entrepreneurs." },
      { name: "PM-JANMAN", icon: "🛖", desc: "Tribal development mission." }
    ]
  },
  { 
    id: 11, title: "Sustainable Cities", icon: "🟠", color: "#FD9D24", 
    description: "Make cities and human settlements inclusive and safe.",
    policies: [
      { name: "Smart Cities Mission", icon: "🏙️", desc: "Urban renewal and retrofitting." },
      { name: "PM Awas Yojana", icon: "🏠", desc: "Housing for all by 2024." }
    ]
  },
  { 
    id: 12, title: "Responsible Consumption", icon: "🟡", color: "#BF8B2E", 
    description: "Ensure sustainable consumption and production patterns.",
    policies: [
      { name: "Mission LiFE", icon: "🌱", desc: "Lifestyle For Environment." },
      { name: "Plastic Waste Management", icon: "♻️", desc: "Rules for reducing plastic." }
    ]
  },
  { 
    id: 13, title: "Climate Action", icon: "🟢", color: "#3F7E44", 
    description: "Take urgent action to combat climate change.",
    policies: [
      { name: "National Solar Mission", icon: "🌞", desc: "Global leader in renewable energy." },
      { name: "Green Hydrogen Mission", icon: "🔋", desc: "Clean energy transitions." }
    ]
  },
  { 
    id: 14, title: "Life Below Water", icon: "🔵", color: "#0A97D9", 
    description: "Conserve and sustainably use the oceans and seas.",
    policies: [
      { name: "Deep Ocean Mission", icon: "🌊", desc: "Underwater exploration and conservation." },
      { name: "PM Matsya Sampada", icon: "🐟", desc: "Sustainable fisheries development." }
    ]
  },
  { 
    id: 15, title: "Life on Land", icon: "🟢", color: "#56C02B", 
    description: "Protect, restore and promote sustainable use of ecosystems.",
    policies: [
      { name: "Green India Mission", icon: "🌲", desc: "Increasing forest cover." },
      { name: "Project Tiger", icon: "🐅", desc: "Wildlife conservation programs." }
    ]
  },
  { 
    id: 16, title: "Peace & Justice", icon: "🔵", color: "#00689D", 
    description: "Promote peaceful and inclusive societies.",
    policies: [
      { name: "E-Courts Mission", icon: "⚖️", desc: "Digitizing Indian justice system." },
      { name: "Lokpal", icon: "👮", desc: "Anti-corruption ombudsman bodies." }
    ]
  },
  { 
    id: 17, title: "Partnerships", icon: "🔵", color: "#19486A", 
    description: "Strengthen the means of implementation for the SDGs.",
    policies: [
      { name: "ISA", icon: "🤝", desc: "International Solar Alliance." },
      { name: "Global South Co-op", icon: "🌍", desc: "Leading global climate partnerships." }
    ]
  }
];

// ===== VOTING IDEAS DATA (Fetched from Supabase) =====
let VOTE_IDEAS = [];

// ===== PRIORITY DATA (dynamically built from user submissions) =====
let PRIORITY_DATA = [];

// ===================================================================
// INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', async () => {
  initScrollProgress();
  initCursorGlow();
  initNavbar();
  initAuth();
  initTheme();
  initFloatingIcons();
  
  // Wait for Supabase Data before initializing SDG UI
  await fetchSupabaseData();
  
  initSDGWheel();
  initSDGGrid();
  initSDGModal();
  initCharts();
  initSimulator();
  initCitizenVoice();
  initScrollAnimations();
  initHeroCounter();
  initParallaxBlobs();
});

async function fetchSupabaseData() {
  try {
    // We now use the static SDG_DATA for the wheel structure, 
    // and only fetch dynamic community data (votes & feedback) from Supabase.
    
    const { data: votes, error: votesErr } = await supabaseClient.from('vote_ideas').select('*').order('id');
    if (!votesErr) VOTE_IDEAS = votes;

    // Fetch priority counts
    const { data: feedback, error: feedErr } = await supabaseClient.from('citizen_feedback').select('sdg_id');
    if (!feedErr) {
       const counts = {};
       feedback.forEach(f => {
          counts[f.sdg_id] = (counts[f.sdg_id] || 0) + 1;
       });
       PRIORITY_DATA = SDG_DATA.map(s => ({
          label: s.title,
          value: counts[s.id] || 0,
          color: s.color
       })).filter(p => p.value > 0);
    }
  } catch (e) {
    console.error('Supabase fetch failed, using fallback empty state');
  }
}

// ===================================================================
// AUTHENTICATION SYSTEM
// ===================================================================
let currentUser = null;

function initAuth() {
  // Check for existing session using Supabase
  supabaseClient.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      handleUserSession(session);
    }
  });

  // Listen for auth changes
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    if (session) {
      handleUserSession(session);
    } else {
      currentUser = null;
      updateNavbarAuth();
      updateCitizenLock();
    }
  });

  // Modal controls
  const overlay = document.getElementById('authModalOverlay');
  const closeBtn = document.getElementById('authModalClose');

  closeBtn.addEventListener('click', closeAuthModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeAuthModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAuthModal();
  });

  // Tab switching
  document.getElementById('loginTab').addEventListener('click', () => switchAuthTab('login'));
  document.getElementById('signupTab').addEventListener('click', () => switchAuthTab('signup'));
  document.getElementById('switchToSignup').addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('signup'); });
  document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('login'); });

  // Login form
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleLogin();
  });

  // Signup form
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleSignup();
  });
}

async function handleUserSession(session) {
  // First set session data as fallback
  currentUser = { 
    id: session.user.id,
    name: session.user.user_metadata.full_name || session.user.email, 
    email: session.user.email 
  };
  
  updateNavbarAuth();
  updateCitizenLock();

  // Then fetch the "joined" profile data for more accurate info
  const { data: profile, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (!error && profile) {
    currentUser.name = profile.full_name || currentUser.name;
    updateNavbarAuth(); // Re-render with profile name
  }
}

function openAuthModal(tab = 'login') {
  const overlay = document.getElementById('authModalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
}

function closeAuthModal() {
  const overlay = document.getElementById('authModalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Clear forms
  document.getElementById('loginForm').reset();
  document.getElementById('signupForm').reset();
}

function switchAuthTab(tab) {
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (tab === 'login') {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

function getRegisteredUsers() {
  try {
    return JSON.parse(localStorage.getItem('sdg_users') || '[]');
  } catch(e) {
    return [];
  }
}

function saveRegisteredUsers(users) {
  localStorage.setItem('sdg_users', JSON.stringify(users));
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(36);
}

async function handleSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;

  if (!name || !email || !password) {
    showToast('Please fill in all fields', 'warning');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'warning');
    return;
  }

  if (password !== confirm) {
    showToast('Passwords do not match', 'warning');
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });

  if (error) {
    showToast(error.message, 'warning');
    return;
  }

  closeAuthModal();
  
  if (data.session) {
    showToast(`Welcome, ${name}! 🎉 You have been logged in automatically.`, 'success');
  } else {
    showToast(`Welcome, ${name}! 🎉 Please check your email to verify your account.`, 'success');
  }
}

async function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('Please fill in all fields', 'warning');
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    if (error.message.toLowerCase().includes('email not confirmed')) {
      showToast('⚠️ Email verification required. Check your inbox or disable "Confirm email" in Supabase Auth settings.', 'warning');
    } else {
      showToast(error.message, 'warning');
    }
    return;
  }

  closeAuthModal();
  showToast(`Welcome back! 🌱`, 'success');
}

async function handleLogout() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    showToast(error.message, 'warning');
  } else {
    showToast('You have been logged out', 'info');
  }
}

function updateNavbarAuth() {
  const navAuth = document.getElementById('navAuth');
  const toggleHtml = `
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
      <span class="icon-moon">🌙</span>
      <span class="icon-sun">☀️</span>
    </button>
  `;

  if (currentUser) {
    const initials = currentUser.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    navAuth.innerHTML = `
      ${toggleHtml}
      <div class="nav-user-greeting">
        <div class="nav-user-avatar">${initials}</div>
        ${currentUser.name.split(' ')[0]}
      </div>
      <button class="btn-auth-logout" onclick="handleLogout()">Logout</button>
    `;
  } else {
    navAuth.innerHTML = `
      ${toggleHtml}
      <button class="btn-auth-login" id="navLoginBtn" onclick="openAuthModal()">
        <span class="auth-icon">👤</span> Login
      </button>
    `;
  }
  
  // Re-attach toggle listener whenever navbar updates
  const newToggle = document.getElementById('themeToggle');
  newToggle.addEventListener('click', toggleTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('india_sdg_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('india_sdg_theme', target);
  
  // Update toggle button state across potential re-renders
  showToast(`${target.charAt(0).toUpperCase() + target.slice(1)} mode activated`, 'info');
}

function updateCitizenLock() {
  const citizenForm = document.querySelector('.citizen-form');
  const citizenResults = document.querySelector('.citizen-results');
  if (!citizenForm) return;

  // Remove existing locks
  citizenForm.querySelectorAll('.citizen-locked-overlay').forEach(el => el.remove());
  citizenResults?.querySelectorAll('.citizen-locked-overlay').forEach(el => el.remove());

  if (!currentUser) {
    // Make containers relative for overlay positioning
    citizenForm.style.position = 'relative';

    const lock = document.createElement('div');
    lock.className = 'citizen-locked-overlay';
    lock.innerHTML = `
      <div class="citizen-locked-icon">🔒</div>
      <div class="citizen-locked-text">Login to Participate</div>
      <div class="citizen-locked-subtext">Sign up or log in to share feedback and vote on ideas</div>
    `;
    lock.addEventListener('click', () => openAuthModal('signup'));
    citizenForm.appendChild(lock);
  }
}

function isLoggedIn() {
  return currentUser !== null;
}

// Expose auth functions globally
window.openAuthModal = openAuthModal;
window.handleLogout = handleLogout;

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ===== CURSOR GLOW =====
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mx = -500, my = -500;
  let cx = -500, cy = -500;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  function animateGlow() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

// ===== PARALLAX HERO BLOBS =====
function initParallaxBlobs() {
  const blobs = document.querySelectorAll('.hero-blob');
  const speeds = [0.03, 0.02, 0.025];

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, i) => {
      blob.style.transform = `translate(0, ${scrollY * speeds[i]}px)`;
    });
  }, { passive: true });
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  });

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

function updateActiveNav() {
  const sections = ['home', 'explorer', 'dashboard', 'simulator', 'citizen'];
  const scrollPos = window.scrollY + 200;

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;

    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// ===== FLOATING ELEMENTS =====
function initFloatingIcons() {
  const sections = [
    { id: 'floatingIconsHero', count: 18, icons: ['☀️', '🔋', '🌱', '🌬️', '💧', '🌲', '🏥', '🎓', '🚜', '💻', '🚆', '🏙️'] },
    { id: 'floatingIconsExplorer', count: 12, icons: ['🎯', '🇮🇳', '📈', '🤝', '🔬', '🌍', '🏠', '🌾'] },
    { id: 'floatingIconsDashboard', count: 10, icons: ['📊', '📈', '📉', '⚡', '🚿', '🏞️'] },
    { id: 'floatingIconsSimulator', count: 10, icons: ['⚙️', '📊', '🌡️', '⚡', '💰', '🌳'] },
    { id: 'floatingIconsCitizen', count: 10, icons: ['📝', '🗳️', '📈', '🗣️', '💭', '💡'] }
  ];

  sections.forEach(config => {
    const container = document.getElementById(config.id);
    if (!container) return;
    
    for (let i = 0; i < config.count; i++) {
      const icon = config.icons[Math.floor(Math.random() * config.icons.length)];
      const el = document.createElement('div');
      el.className = `floating-icon anim-${(i % 3) + 1}`;
      el.textContent = icon;
      
      const x = Math.random() * 95;
      const y = Math.random() * 90;
      
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.fontSize = `${1.2 + Math.random() * 1.5}rem`;
      el.style.animationDelay = `${Math.random() * -20}s`;
      
      // Store initial positions for parallax
      el.setAttribute('data-x', x);
      el.setAttribute('data-y', y);
      el.setAttribute('data-speed', 1 + Math.random() * 2);
      
      container.appendChild(el);
    }
  });

  // Mouse Parallax Effect
  document.addEventListener('mousemove', (e) => {
    const mx = (e.clientX / window.innerWidth - 0.5) * 40;
    const my = (e.clientY / window.innerHeight - 0.5) * 40;
    
    document.querySelectorAll('.floating-icon').forEach(icon => {
      const speed = parseFloat(icon.getAttribute('data-speed'));
      icon.style.transform = `translate(${mx * speed}px, ${my * speed}px)`;
    });
  }, { passive: true });
}

// ===== SDG WHEEL =====
// ===== SDG WHEEL =====
let selectedSDG = 0;

function initSDGWheel() {
  const ring = document.getElementById('sdgWheelRing');
  const container = document.getElementById('sdgWheelContainer');
  if (!ring) return;

  const size = 480;
  const center = size / 2;
  const innerR = 100;
  const outerR = 180;
  const iconR = 215;

  // Helper for polar coordinates
  function polarToCartesian(cx, cy, r, angleInDegrees) {
    const rad = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: cx + (r * Math.cos(rad)),
      y: cy + (r * Math.sin(rad))
    };
  }

  function describeSegment(cx, cy, iR, oR, startA, endA) {
    const iStart = polarToCartesian(cx, cy, iR, startA);
    const iEnd = polarToCartesian(cx, cy, iR, endA);
    const oStart = polarToCartesian(cx, cy, oR, startA);
    const oEnd = polarToCartesian(cx, cy, oR, endA);
    const sweep = endA - startA <= 180 ? "0" : "1";
    return [
      "M", iStart.x, iStart.y,
      "L", oStart.x, oStart.y,
      "A", oR, oR, 0, sweep, 1, oEnd.x, oEnd.y,
      "L", iEnd.x, iEnd.y,
      "A", iR, iR, 0, sweep, 0, iStart.x, iStart.y,
      "Z"
    ].join(" ");
  }

  // Create SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.style.width = "100%";
  svg.style.height = "100%";

  const segmentCount = SDG_DATA.length;
  const anglePerSegment = 360 / segmentCount;

  SDG_DATA.forEach((sdg, i) => {
    const startA = i * anglePerSegment;
    const endA = (i + 1) * anglePerSegment;
    const midA = (startA + endA) / 2;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "sdg-segment");
    g.style.transitionDelay = `${i * 0.05}s`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", describeSegment(center, center, innerR, outerR, startA, endA));
    path.setAttribute("fill", sdg.color);
    g.appendChild(path);

    // SVG Text with stacking for multi-line support
    const textRadius = innerR + (outerR - innerR) * 0.55;
    const textPos = polarToCartesian(center, center, textRadius, midA);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", textPos.x);
    text.setAttribute("y", textPos.y);
    text.setAttribute("class", "sdg-segment-text");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("transform", `rotate(${midA}, ${textPos.x}, ${textPos.y})`);
    
    // Split into words and create tspans
    const words = sdg.title.split(' ');
    const maxWords = 2;
    const displayWords = words.length > maxWords ? words.slice(0, maxWords) : words;
    
    displayWords.forEach((word, index) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", textPos.x);
      tspan.setAttribute("dy", index === 0 ? "-0.2em" : "1.1em");
      tspan.textContent = word;
      text.appendChild(tspan);
    });
    g.appendChild(text);

    // Number circles on inner edge
    const numR = innerR + 12;
    const numPos = polarToCartesian(center, center, numR, midA);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", numPos.x);
    circle.setAttribute("cy", numPos.y);
    circle.setAttribute("r", "10");
    circle.setAttribute("class", "sdg-segment-number-circle");
    g.appendChild(circle);

    const numText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    numText.setAttribute("x", numPos.x);
    numText.setAttribute("y", numPos.y);
    numText.setAttribute("class", "sdg-segment-number-text");
    numText.textContent = sdg.id;
    g.appendChild(numText);

    g.addEventListener('click', () => {
      selectSDG(i);
      openModal(i);
    });
    
    svg.appendChild(g);

    // Orbiting Icons
    const iconPos = polarToCartesian(center, center, iconR, midA);
    const orb = document.createElement('div');
    orb.className = 'sdg-icon-orb';
    orb.style.left = `${iconPos.x - 23}px`;
    orb.style.top = `${iconPos.y - 23}px`;
    orb.innerHTML = `<span class="emoji">${sdg.icon}</span>`;
    orb.addEventListener('click', () => {
      selectSDG(i);
      openModal(i);
    });
    ring.appendChild(orb);
  });

  ring.appendChild(svg);

  // Edge trigger logic
  document.addEventListener('mousemove', (e) => {
    const distanceToEdge = window.innerWidth - e.clientX;
    const distanceToCenterY = Math.abs(e.clientY - window.innerHeight / 2);
    
    const isTouchingEdge = distanceToEdge < 35;
    const isAlreadyActive = container.classList.contains('active');
    const isInsideWheelArea = distanceToEdge < 400 && distanceToCenterY < 240;
    
    // Activate only from edge, maintain if mouse stays on wheel
    if (isTouchingEdge || (isAlreadyActive && isInsideWheelArea)) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });

  // Rotation logic
  let targetRotation = 0;
  let currentRotation = 0;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScroll;
    targetRotation += delta * 0.05;
    lastScroll = window.scrollY;
  }, { passive: true });

  function animateWheel() {
    currentRotation += (targetRotation - currentRotation) * 0.08;
    ring.style.transform = `rotate(${currentRotation}deg)`;

    // Keep icons upright
    ring.querySelectorAll('.sdg-icon-orb').forEach(orb => {
      orb.style.transform = `rotate(${-currentRotation}deg)`;
    });

    requestAnimationFrame(animateWheel);
  }
  animateWheel();
}

function selectSDG(index) {
  selectedSDG = index;
  // Update grid cards
  const cards = document.querySelectorAll('.sdg-card');
  cards.forEach((card, i) => {
    card.classList.toggle('selected', i === index);
  });
}

// ===== SDG GRID =====
function initSDGGrid() {
  const grid = document.getElementById('sdgGrid');

  SDG_DATA.forEach((sdg, i) => {
    const card = document.createElement('div');
    card.className = 'sdg-card reveal-scale';
    card.style.background = sdg.color;
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="sdg-card-number">${String(sdg.id).padStart(2, '0')}</div>
      <div class="sdg-card-icon">${sdg.icon}</div>
      <div class="sdg-card-title">${sdg.title}</div>
    `;

    // Add tilt effect on mousemove
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) scale(1.04) perspective(500px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    card.addEventListener('click', (e) => {
      selectSDG(i);
      openModal(i, e.currentTarget);
    });
    grid.appendChild(card);
  });
}

// ===== SDG MODAL =====
function initSDGModal() {
  const overlay = document.getElementById('sdgModalOverlay');
  const closeBtn = document.getElementById('modalClose');

  // Create morph circle if not exists
  if (!document.querySelector('.morph-circle')) {
    const circle = document.createElement('div');
    circle.className = 'morph-circle';
    document.body.appendChild(circle);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(index, triggerElement = null) {
  const sdg = SDG_DATA[index];
  const overlay = document.getElementById('sdgModalOverlay');
  const modal = document.getElementById('sdgModal');
  const morphCircle = document.querySelector('.morph-circle');

  // Fill content
  document.getElementById('modalIcon').textContent = sdg.icon;
  document.getElementById('modalIcon').style.background = 'rgba(255,255,255,0.2)';
  document.getElementById('modalIcon').style.color = 'white';
  document.getElementById('modalNumber').textContent = `Goal ${sdg.id}`;
  document.getElementById('modalTitle').textContent = sdg.title;
  document.getElementById('modalDescription').textContent = sdg.description;

  // Apply dynamic color background
  modal.style.backgroundColor = sdg.color;
  modal.classList.add('dynamic-bg');

  const policiesContainer = document.getElementById('modalPolicies');
  policiesContainer.innerHTML = sdg.policies.map(p => `
    <div class="policy-card dynamic-bg">
      <div class="policy-card-icon">${p.icon}</div>
      <div class="policy-card-content">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join('');

  // Perform Morph Animation
  if (triggerElement && morphCircle) {
    const rect = triggerElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Position circle at card
    morphCircle.style.transition = 'none';
    morphCircle.style.left = centerX + 'px';
    morphCircle.style.top = centerY + 'px';
    morphCircle.style.width = rect.width + 'px';
    morphCircle.style.height = rect.height + 'px';
    morphCircle.style.background = sdg.color;
    morphCircle.style.opacity = '1';
    
    // Force reflow
    morphCircle.offsetHeight;
    
    // Animate to full screen coverage
    morphCircle.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    const size = Math.max(window.innerWidth, window.innerHeight) * 2.5;
    morphCircle.style.width = size + 'px';
    morphCircle.style.height = size + 'px';
    morphCircle.classList.add('expanding');
    
    setTimeout(() => {
       morphCircle.style.opacity = '0';
       setTimeout(() => {
          morphCircle.classList.remove('expanding');
       }, 600);
    }, 400);
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('sdgModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CHARTS =====
function initCharts() {
  // Solar Energy Bar Chart
  const solarData = [
    { label: '2014', value: 3, max: 85 },
    { label: '2016', value: 9, max: 85 },
    { label: '2018', value: 26, max: 85 },
    { label: '2020', value: 38, max: 85 },
    { label: '2022', value: 62, max: 85 },
    { label: '2024', value: 82, max: 85 }
  ];

  const solarChart = document.getElementById('solarChart');
  solarData.forEach(d => {
    const group = document.createElement('div');
    group.className = 'bar-group';
    const heightPct = (d.value / d.max) * 180;
    group.innerHTML = `
      <div class="bar" style="height: 0px; background: var(--gradient-accent);" data-height="${heightPct}">
        <span class="bar-value">${d.value} GW</span>
      </div>
      <span class="bar-label">${d.label}</span>
    `;
    solarChart.appendChild(group);
  });

  // Ganga Pollution Line Chart
  const gangaData = [180, 165, 155, 140, 120, 110, 95, 85, 72, 60];
  const gangaPoints = gangaData.map((v, i) => {
    const x = (i / (gangaData.length - 1)) * 680 + 10;
    const y = ((v - 30) / 170) * 180 + 10;
    return { x, y };
  });

  const linePathD = gangaPoints.map((p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = gangaPoints[i - 1];
    const cpx1 = prev.x + (p.x - prev.x) / 3;
    const cpx2 = p.x - (p.x - prev.x) / 3;
    return `C${cpx1},${prev.y} ${cpx2},${p.y} ${p.x},${p.y}`;
  }).join(' ');

  const areaPathD = linePathD + ` L${gangaPoints[gangaPoints.length - 1].x},200 L${gangaPoints[0].x},200 Z`;

  document.getElementById('gangaLine').setAttribute('d', linePathD);
  document.getElementById('gangaArea').setAttribute('d', areaPathD);

  // Calculate path length for animation
  const gangaLine = document.getElementById('gangaLine');
  const pathLength = gangaLine.getTotalLength();
  gangaLine.style.strokeDasharray = pathLength;
  gangaLine.style.strokeDashoffset = pathLength;

  // Add dots
  const dotsGroup = document.getElementById('gangaDots');
  gangaPoints.forEach((p, i) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.x);
    circle.setAttribute('cy', p.y);
    circle.setAttribute('r', 4);
    circle.setAttribute('fill', 'white');
    circle.setAttribute('stroke', '#10b981');
    circle.setAttribute('stroke-width', 2);
    circle.classList.add('line-chart-dot');
    circle.style.opacity = 0;
    dotsGroup.appendChild(circle);
  });

  // Observe charts for animation
  observeCharts();
}

function observeCharts() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCharts();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const dashboard = document.getElementById('dashboard');
  if (dashboard) observer.observe(dashboard);

  // Citizen section charts
  const citizenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCitizenCharts();
        citizenObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const citizen = document.getElementById('citizen');
  if (citizen) citizenObserver.observe(citizen);
}

function animateCharts() {
  // Animate bars with spring stagger
  setTimeout(() => {
    document.querySelectorAll('#solarChart .bar').forEach((bar, i) => {
      setTimeout(() => {
        bar.style.height = bar.dataset.height + 'px';
        bar.style.transition = 'height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }, i * 120);
    });
  }, 300);

  // Animate donut
  setTimeout(() => {
    const arc = document.getElementById('sanitationArc');
    const targetOffset = 377 - (377 * 0.98); // 98% coverage
    arc.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)';
    arc.style.strokeDashoffset = targetOffset;

    animateNumber(document.getElementById('sanitationValue'), 0, 98, 1800, '%');
  }, 500);

  // Animate line chart
  setTimeout(() => {
    const gangaLine = document.getElementById('gangaLine');
    gangaLine.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
    gangaLine.style.strokeDashoffset = 0;

    const gangaArea = document.getElementById('gangaArea');
    gangaArea.style.transition = 'opacity 2s ease 0.5s';
    gangaArea.style.opacity = 1;

    // Show dots with stagger
    document.querySelectorAll('#gangaDots circle').forEach((dot, i) => {
      setTimeout(() => {
        dot.style.transition = 'opacity 0.5s ease, r 0.3s ease';
        dot.style.opacity = 1;
      }, 250 * i);
    });
  }, 400);
}

function animateCitizenCharts() {
  // No fake data to animate — priority bars render dynamically from user submissions
}

function animateNumber(el, start, end, duration, suffix = '') {
  const startTime = performance.now();
  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== HERO COUNTER =====
function initHeroCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.hero-stat-number').forEach(el => {
          const target = parseInt(el.dataset.count);
          animateNumber(el, 0, target, 2000, target === 1400 ? 'M+' : '+');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
}

// ===== SIMULATOR =====
function initSimulator() {
  const sliders = {
    solar: document.getElementById('solarSlider'),
    plastic: document.getElementById('plasticSlider'),
    ev: document.getElementById('evSlider'),
    forest: document.getElementById('forestSlider')
  };

  const values = {
    solar: document.getElementById('solarValue'),
    plastic: document.getElementById('plasticValue'),
    ev: document.getElementById('evValue'),
    forest: document.getElementById('forestValue')
  };

  function updateSimulator() {
    const s = parseInt(sliders.solar.value);
    const p = parseInt(sliders.plastic.value);
    const e = parseInt(sliders.ev.value);
    const f = parseInt(sliders.forest.value);

    values.solar.textContent = s + '%';
    values.plastic.textContent = p + '%';
    values.ev.textContent = e + '%';
    values.forest.textContent = f + '%';

    // Update slider track color
    Object.values(sliders).forEach(slider => {
      const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.background = `linear-gradient(90deg, #10b981 0%, #10b981 ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`;
    });

    // Calculate impacts
    const carbonReduction = Math.round(s * 0.3 + p * 0.15 + e * 0.35 + f * 0.2);
    const renewableShare = Math.round(20 + s * 0.5 + e * 0.15);
    const economicCost = ((s * 0.05 + p * 0.02 + e * 0.04 + f * 0.03)).toFixed(1);
    const forestChange = (f * 0.06 + s * 0.01).toFixed(1);

    // Update UI
    document.getElementById('carbonVal').textContent = carbonReduction + '%';
    document.getElementById('carbonBar').style.width = Math.min(carbonReduction, 100) + '%';
    document.getElementById('carbonDelta').textContent = `↓ ${carbonReduction}% reduction`;
    document.getElementById('carbonDelta').className = 'result-delta positive';

    document.getElementById('renewableVal').textContent = renewableShare + '%';
    document.getElementById('renewableBar').style.width = Math.min(renewableShare, 100) + '%';
    document.getElementById('renewableDelta').textContent = `↑ ${renewableShare}% share`;
    document.getElementById('renewableDelta').className = 'result-delta positive';

    document.getElementById('costVal').textContent = `₹${economicCost}L Cr`;
    document.getElementById('costBar').style.width = Math.min(economicCost * 10, 100) + '%';
    document.getElementById('costDelta').textContent = `↑ ₹${economicCost} Lakh Crore`;
    document.getElementById('costDelta').className = 'result-delta negative';

    document.getElementById('forestVal').textContent = `+${forestChange}%`;
    document.getElementById('forestBar').style.width = Math.min(forestChange * 10, 100) + '%';
    document.getElementById('forestDelta').textContent = `↑ ${forestChange}% increase`;
    document.getElementById('forestDelta').className = 'result-delta positive';
  }

  Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', updateSimulator);
  });

  updateSimulator();
}

// ===== CITIZEN VOICE =====
function initCitizenVoice() {
  // Populate SDG priority dropdown
  const select = document.getElementById('sdgPriority');
  SDG_DATA.forEach(sdg => {
    const option = document.createElement('option');
    option.value = sdg.id;
    option.textContent = `${sdg.icon} Goal ${sdg.id}: ${sdg.title}`;
    select.appendChild(option);
  });

  // Vote ideas
  const voteContainer = document.getElementById('voteIdeas');
  VOTE_IDEAS.forEach(idea => {
    const el = document.createElement('div');
    el.className = 'vote-idea';
    el.innerHTML = `
      <span class="vote-idea-text">${idea.text}</span>
      <button class="vote-btn" data-id="${idea.id}">
        👍 <span class="vote-count">${idea.votes}</span>
      </button>
    `;
    voteContainer.appendChild(el);
  });

  // Vote click
  voteContainer.addEventListener('click', async (e) => {
    const btn = e.target.closest('.vote-btn');
    if (!btn) return;
    if (!isLoggedIn()) {
      openAuthModal('login');
      return;
    }
    const id = parseInt(btn.dataset.id);
    const idea = VOTE_IDEAS.find(v => v.id === id);
    if (idea && !btn.classList.contains('voted')) {
      // Optimistic Update
      idea.votes++;
      btn.querySelector('.vote-count').textContent = formatNumber(idea.votes);
      btn.classList.add('voted');
      
      // Update Supabase
      const { error } = await supabaseClient
        .from('vote_ideas')
        .update({ votes: idea.votes })
        .eq('id', id);

      if (error) {
        idea.votes--;
        btn.querySelector('.vote-count').textContent = formatNumber(idea.votes);
        btn.classList.remove('voted');
        showToast('Vote failed to save. Please try again.', 'warning');
      } else {
        btn.style.transform = 'scale(1.15)';
        setTimeout(() => { btn.style.transform = ''; }, 300);
        createBurst(btn);
      }
    }
  });

  // Priority bars — show empty state since there's no real data yet
  const priorityContainer = document.getElementById('priorityBars');
  renderPriorityBars(priorityContainer);

  // Hide the fake submissions chart
  const submissionsSection = document.getElementById('submissionsChart');
  if (submissionsSection) {
    const wrapper = submissionsSection.closest('div');
    if (wrapper) {
      wrapper.innerHTML = `
        <h4 style="font-size:1rem; font-weight:700; margin-bottom: var(--space-md); color: var(--text-primary);">📈 Submissions Over Time</h4>
        <div style="text-align:center; padding: var(--space-2xl) var(--space-md); color: var(--text-muted); font-size: 0.9rem;">
          <div style="font-size: 2.5rem; margin-bottom: var(--space-sm);">📭</div>
          <p>No submissions yet.</p>
          <p style="font-size: 0.8rem; margin-top: var(--space-xs);">Submit your feedback to see trends appear here.</p>
        </div>
      `;
    }
  }

  // Submit feedback handler
  document.getElementById('submitFeedback').addEventListener('click', async () => {
    if (!isLoggedIn()) {
      openAuthModal('login');
      return;
    }
    const sdgId = document.getElementById('sdgPriority').value;
    const suggestion = document.getElementById('policySuggestion').value;

    if (!sdgId) {
      showToast('Please select an SDG priority', 'warning');
      return;
    }
    if (!suggestion.trim()) {
      showToast('Please write a policy suggestion', 'warning');
      return;
    }

    const { data, error } = await supabaseClient.from('citizen_feedback').insert([
      { 
        user_id: currentUser.id,
        sdg_id: parseInt(sdgId),
        suggestion: suggestion
      }
    ]);

    if (error) {
      showToast('Error submitting feedback: ' + error.message, 'warning');
    } else {
      showToast('Thank you! Your feedback has been submitted 🎉', 'success');
      document.getElementById('sdgPriority').value = '';
      document.getElementById('policySuggestion').value = '';
      
      // Refresh priority bars
      fetchSupabaseData().then(() => {
        renderPriorityBars(document.getElementById('priorityBars'));
      });
    }
  });
}

function renderPriorityBars(container) {
  container.innerHTML = '';
  if (PRIORITY_DATA.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: var(--space-2xl) var(--space-md); color: var(--text-muted); font-size: 0.9rem;">
        <div style="font-size: 2.5rem; margin-bottom: var(--space-sm);">📊</div>
        <p>No community data yet.</p>
        <p style="font-size: 0.8rem; margin-top: var(--space-xs);">Submit your SDG priority to see rankings here.</p>
      </div>
    `;
    return;
  }

  // Sort by votes descending
  const sorted = [...PRIORITY_DATA].sort((a, b) => b.value - a.value);
  const maxVal = sorted[0].value;

  sorted.forEach(p => {
    const pct = Math.round((p.value / maxVal) * 100);
    const el = document.createElement('div');
    el.className = 'priority-bar-item';
    el.innerHTML = `
      <span class="priority-bar-label">${p.label}</span>
      <div class="priority-bar-track">
        <div class="priority-bar-fill" style="width: ${pct}%; background: ${p.color};">
          <span>${p.value}</span>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: 14px 28px;
    background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
    color: white;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 9999;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: 'Inter', sans-serif;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Clear transition delay after reveal so hover transitions are instant
        setTimeout(() => {
          entry.target.style.transitionDelay = '0s';
        }, 1000);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

// ===== EXPOSE scrollToSection globally =====
window.scrollToSection = scrollToSection;

// ===== PARTICLE BURST =====
function createBurst(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6'];

  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    const angle = (i / 12) * Math.PI * 2;
    const dist = 40 + Math.random() * 40;
    const size = 4 + Math.random() * 4;
    dot.style.cssText = `
      position: fixed;
      left: ${cx}px;
      top: ${cy}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${colors[i % colors.length]};
      pointer-events: none;
      z-index: 99999;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 1;
    `;
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      dot.style.left = (cx + Math.cos(angle) * dist) + 'px';
      dot.style.top = (cy + Math.sin(angle) * dist) + 'px';
      dot.style.opacity = '0';
      dot.style.transform = 'scale(0)';
    });
    setTimeout(() => dot.remove(), 700);
  }
}
