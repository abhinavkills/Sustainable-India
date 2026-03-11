// ===================================================================
// SUSTAINABLE INDIA – SDG POLICY EXPLORER
// Main Application Logic
// ===================================================================

// ===== SDG DATA =====
const SDG_DATA = [
  {
    id: 1, title: "No Poverty", icon: "🏠", color: "#e5243b",
    description: "End poverty in all its forms. India has lifted over 415 million people out of multidimensional poverty between 2005 and 2021, and continues to empower rural communities through direct benefit transfers and social safety nets.",
    policies: [
      { name: "PM-KISAN", icon: "🌾", color: "#e5243b22", desc: "Direct income support of ₹6,000/year to 110 million farmers, boosting local economies." },
      { name: "MGNREGA", icon: "👷", color: "#e5243b22", desc: "Providing 100 days of guaranteed wage employment to rural households across India." },
      { name: "Jan Dhan Yojana", icon: "🏦", color: "#e5243b22", desc: "Ensured 500M+ unbanked Indians have access to financial services and credit." }
    ]
  },
  {
    id: 2, title: "Zero Hunger", icon: "🌾", color: "#dda63a",
    description: "End hunger and improve nutrition. India's PM Garib Kalyan Anna Yojana is one of the world's largest food security programs, serving over 800 million citizens.",
    policies: [
      { name: "PMGKAY", icon: "🍚", color: "#dda63a22", desc: "Free food grains to 800 million beneficiaries, ensuring food security during challenging times." },
      { name: "POSHAN Abhiyaan", icon: "🤰", color: "#dda63a22", desc: "National Nutrition Mission aiming to reduce stunting and anemia among children and women." },
      { name: "One Nation One Ration Card", icon: "🎫", color: "#dda63a22", desc: "Ensuring food security for migrant workers anywhere in India." }
    ]
  },
  {
    id: 3, title: "Good Health", icon: "❤️", color: "#4c9f38",
    description: "Universal health coverage. India's Ayushman Bharat is the world's largest government-funded healthcare program, providing a safety net for 500 million people.",
    policies: [
      { name: "Ayushman Bharat", icon: "🏥", color: "#4c9f3822", desc: "Health cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization." },
      { name: "National Health Mission", icon: "🚑", color: "#4c9f3822", desc: "Strengthening rural and urban health systems across India." },
      { name: "Mission Indradhanush", icon: "💉", color: "#4c9f3822", desc: "Full immunization coverage for children and pregnant women." }
    ]
  },
  {
    id: 4, title: "Quality Education", icon: "📚", color: "#c5192d",
    description: "Inclusive and equitable education. The National Education Policy 2020 aims to transform India into a global knowledge superpower.",
    policies: [
      { name: "NEP 2020", icon: "🎓", color: "#c5192d22", desc: "A visionary framework for school and higher education, emphasizing 21st-century skills." },
      { name: "Samagra Shiksha", icon: "🏫", color: "#c5192d22", desc: "Integrated scheme for school education from pre-school to class 12." },
      { name: "DIKSHA", icon: "💻", color: "#c5192d22", desc: "National digital infrastructure for teachers and students across all states." }
    ]
  },
  {
    id: 5, title: "Gender Equality", icon: "⚖️", color: "#ff3a21",
    description: "Empowering women and girls. India has seen a significant increase in female workforce participation and entrepreneurship through targeted schemes.",
    policies: [
      { name: "Beti Bachao Beti Padhao", icon: "👧", color: "#ff3a2122", desc: "Celebrating the girl child and ensuring her education and protection." },
      { name: "Pradhan Mantri Matru Vandana Yojana", icon: "🤱", color: "#ff3a2122", desc: "Maternity benefit scheme for pregnant and lactating mothers." },
      { name: "Stand-Up India", icon: "🚀", color: "#ff3a2122", desc: "Facilitating bank loans for women and SC/ST entrepreneurs." }
    ]
  },
  {
    id: 6, title: "Clean Water & Sanitation", icon: "💧", color: "#26bde2",
    description: "Clean water for all. The Jal Jeevan Mission is transforming rural India by providing tap water connections to every household.",
    policies: [
      { name: "Jal Jeevan Mission", icon: "🚰", color: "#26bde222", desc: "Har Ghar Jal: Providing safe and adequate drinking water through individual tap connections." },
      { name: "Swachh Bharat Mission", icon: "🚽", color: "#26bde222", desc: "A mass movement that made India Open Defecation Free (ODF)." },
      { name: "Namami Gange", icon: "🏞️", color: "#26bde222", desc: "Integrated conservation mission to clean and protect the River Ganga." }
    ]
  },
  {
    id: 7, title: "Afforable & Clean Energy", icon: "⚡", color: "#fcc30b",
    description: "Powering India sustainably. India is home to the world's largest renewable energy expansion program, aiming for 500 GW by 2030.",
    policies: [
      { name: "PM-KUSUM", icon: "🚜", color: "#fcc30b22", desc: "De-dieselization of the farm sector by installing solar pumps." },
      { name: "National Solar Mission", icon: "☀️", color: "#fcc30b22", desc: "Promoting ecologically sustainable growth while addressing India's energy security." },
      { name: "PM Ujjwala Yojana", icon: "🔥", color: "#fcc30b22", desc: "Providing clean cooking fuel (LPG) to women from BPL households." }
    ]
  },
  {
    id: 8, title: "Decent Work & Growth", icon: "💼", color: "#a21942",
    description: "Inclusive economic growth. Initiatives like 'Make in India' and 'Startup India' are creating millions of jobs and fostering innovation.",
    policies: [
      { name: "Make in India", icon: "🏗️", color: "#a2194222", desc: "Transforming India into a global design and manufacturing hub." },
      { name: "Startup India", icon: "🚀", color: "#a2194222", desc: "Nurturing an ecosystem for startups to drive sustainable economic growth." },
      { name: "PM Mudra Yojana", icon: "💳", color: "#a2194222", desc: "Providing loans to non-corporate, non-farm small/micro enterprises." }
    ]
  },
  {
    id: 9, title: "Industry & Innovation", icon: "🔬", color: "#fd6925",
    description: "Resilient infrastructure. India is rapidly digitizing its economy and building world-class infrastructure through the Gati Shakti master plan.",
    policies: [
      { name: "PM Gati Shakti", icon: "🛤️", color: "#fd692522", desc: "National Master Plan for multi-modal connectivity to reduce logistics costs." },
      { name: "Digital India", icon: "📱", color: "#fd692522", desc: "Empowering citizens with digital access to government services." },
      { name: "Atal Innovation Mission", icon: "💡", color: "#fd692522", desc: "Promoting a culture of innovation and entrepreneurship across India." }
    ]
  },
  {
    id: 10, title: "Reduced Inequalities", icon: "🤝", color: "#dd1367",
    description: "Equal opportunities for all. India's focus on Aspirational Districts ensures that development reaches the most remote and underserved areas.",
    policies: [
      { name: "Aspirational Districts Program", icon: "📍", color: "#dd136722", desc: "Transforming the most under-developed districts through data-driven governance." },
      { name: "PM-JANMAN", icon: "🛖", color: "#dd136722", desc: "Focusing on the upliftment of Particularly Vulnerable Tribal Groups (PVTGs)." },
      { name: "Stand-Up India", icon: "📈", color: "#dd136722", desc: "Promoting entrepreneurship among SC, ST, and women." }
    ]
  },
  {
    id: 11, title: "Sustainable Cities", icon: "🏙️", color: "#fd9d24",
    description: "Inclusive urban development. Smart Cities Mission and PM Awas Yojana are redefining urban living in India.",
    policies: [
      { name: "Smart Cities Mission", icon: "🏙️", color: "#fd9d2422", desc: "Developing 100 cities to be citizen-friendly and sustainable." },
      { name: "PM Awas Yojana (Urban)", icon: "🏠", color: "#fd9d2422", desc: "Providing all-weather pucca houses to all eligible urban households." },
      { name: "FAME India", icon: "🔌", color: "#fd9d2422", desc: "Faster Adoption and Manufacturing of Electric Vehicles for sustainable transport." }
    ]
  },
  {
    id: 12, title: "Responsible Consumption", icon: "♻️", color: "#bf8b2e",
    description: "Circular economy. India's LiFE (Lifestyle for Environment) movement encourages citizens to adopt sustainable habits.",
    policies: [
      { name: "Mission LiFE", icon: "🌱", color: "#bf8b2e22", desc: "A global movement to nudge individuals toward mindful and deliberate utilization." },
      { name: "GOBARdhan", icon: "🐄", color: "#bf8b2e22", desc: "Converting cattle dung and solid waste into compost and biogas." },
      { name: "Single-Use Plastic Ban", icon: "🚫", color: "#bf8b2e22", desc: "Reducing plastic waste through a nationwide ban on identified single-use items." }
    ]
  },
  {
    id: 13, title: "Climate Action", icon: "🌍", color: "#3f7e44",
    description: "Combating climate change. India's 'Panchamrit' goals at COP26 demonstrate its commitment to a net-zero future by 2070.",
    policies: [
      { name: "Panchamrit", icon: "🎯", color: "#3f7e4422", desc: "India's 5-point climate action plan including 500 GW non-fossil capacity." },
      { name: "National Green Hydrogen Mission", icon: "💨", color: "#3f7e4422", desc: "Making India a global hub for the production and export of Green Hydrogen." },
      { name: "Green India Mission", icon: "🌲", color: "#3f7e4422", desc: "Protecting, restoring, and enhancing India's diminishing forest cover." }
    ]
  },
  {
    id: 14, title: "Life Below Water", icon: "🐟", color: "#0a97d9",
    description: "Marine conservation. India's Deep Ocean Mission and Sagarmala project aim for sustainable blue economy growth.",
    policies: [
      { name: "Deep Ocean Mission", icon: "🌊", color: "#0a97d922", desc: "Exploring the deep ocean for resources and developing deep-sea technologies." },
      { name: "Sagarmala", icon: "🚢", color: "#0a97d922", desc: "Port-led development that integrates coastal community upliftment." },
      { name: "Blue Revolution", icon: "🐠", color: "#0a97d922", desc: "Integrated development and management of fisheries." }
    ]
  },
  {
    id: 15, title: "Life on Land", icon: "🌳", color: "#56c02b",
    description: "Protecting biodiversity. India has successfully doubled its tiger population and is restoring vast tracts of degraded land.",
    policies: [
      { name: "Project Tiger & Project Elephant", icon: "🐅", color: "#56c02b22", desc: "Iconic conservation programs protecting India's national heritage and wildlife." },
      { name: "Compensatory Afforestation", icon: "🌲", color: "#56c02b22", desc: "Ensuring land restoration and forest growth through CAMPA funds." },
      { name: "Desertification Control", icon: "🏜️", color: "#56c02b22", desc: "Restoring 26 million hectares of degraded land by 2030." }
    ]
  },
  {
    id: 16, title: "Peace & Justice", icon: "🕊️", color: "#00689d",
    description: "Strong institutions. India is digitizing its justice system and empowering citizens through the Right to Information and Digital Courts.",
    policies: [
      { name: "e-Courts Mission Mode Project", icon: "⚖️", color: "#00689d22", desc: "Transforming Indian courts into digital-ready institutions for speedy justice." },
      { name: "RTI Act", icon: "📄", color: "#00689d22", desc: "Empowering citizens to seek information and ensure government accountability." },
      { name: "Universal ID (Aadhaar)", icon: "🆔", color: "#00689d22", desc: "Providing a unique identity to 1.3 billion+ Indians for seamless service delivery." }
    ]
  },
  {
    id: 17, title: "Partnerships for Goals", icon: "🤝", color: "#19486a",
    description: "Global leadership. India leads global initiatives like the International Solar Alliance and the Coalition for Disaster Resilient Infrastructure.",
    policies: [
      { name: "International Solar Alliance", icon: "☀️", color: "#19486a22", desc: "An India-led global alliance to promote solar energy usage across the world." },
      { name: "CDRI", icon: "🏗️", color: "#19486a22", desc: "Coalition for Disaster Resilient Infrastructure, promoting climate-proof systems." },
      { name: "G20 Presidency (One Earth, One Family, One Future)", icon: "🌏", color: "#19486a22", desc: "India's leadership in driving global consensus on sustainable development." }
    ]
  }
];

// ===== VOTING IDEAS DATA =====
const VOTE_IDEAS = [
  { id: 1, text: "Mandatory solar panels on all government buildings in India", votes: 0 },
  { id: 2, text: "Expand Metro Rail networks to Tier-2 Indian cities", votes: 0 },
  { id: 3, text: "Introduce carbon tax for heavy industries in India", votes: 0 },
  { id: 4, text: "Nationwide scale-up of vertical farming in urban areas", votes: 0 },
  { id: 5, text: "Subsidies for indigenous eco-friendly building materials", votes: 0 }
];

// ===== PRIORITY DATA (dynamically built from user submissions) =====
const PRIORITY_DATA = [];

// ===================================================================
// INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCursorGlow();
  initNavbar();
  initAuth();
  initTheme();
  initFloatingIcons();
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

// ===================================================================
// AUTHENTICATION SYSTEM
// ===================================================================
let currentUser = null;

function initAuth() {
  // Check for existing session
  const session = localStorage.getItem('sdg_current_user');
  if (session) {
    try {
      currentUser = JSON.parse(session);
      updateNavbarAuth();
    } catch(e) {
      localStorage.removeItem('sdg_current_user');
    }
  }

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

  // Apply lock on citizen voice if not logged in
  updateCitizenLock();
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

function handleSignup() {
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

  const users = getRegisteredUsers();

  if (users.find(u => u.email === email)) {
    showToast('An account with this email already exists', 'warning');
    return;
  }

  const newUser = {
    name,
    email,
    passwordHash: simpleHash(password),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  // Auto-login after signup
  currentUser = { name: newUser.name, email: newUser.email };
  localStorage.setItem('sdg_current_user', JSON.stringify(currentUser));

  closeAuthModal();
  updateNavbarAuth();
  updateCitizenLock();
  showToast(`Welcome, ${newUser.name}! 🎉 Your account has been created.`, 'success');
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('Please fill in all fields', 'warning');
    return;
  }

  const users = getRegisteredUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    showToast('No account found with this email', 'warning');
    return;
  }

  if (user.passwordHash !== simpleHash(password)) {
    showToast('Incorrect password', 'warning');
    return;
  }

  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('sdg_current_user', JSON.stringify(currentUser));

  closeAuthModal();
  updateNavbarAuth();
  updateCitizenLock();
  showToast(`Welcome back, ${user.name}! 🌱`, 'success');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('sdg_current_user');
  updateNavbarAuth();
  updateCitizenLock();
  showToast('You have been logged out', 'info');
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
let selectedSDG = 0;
let wheelRotation = 0;

function initSDGWheel() {
  const wheel = document.getElementById('sdgWheel');
  const container = document.getElementById('sdgWheelContainer');
  const radius = 135;
  const centerX = 170;
  const centerY = 170;

  SDG_DATA.forEach((sdg, i) => {
    const angle = (i * (360 / 17) - 90) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle) - 22;
    const y = centerY + radius * Math.sin(angle) - 22;

    const item = document.createElement('div');
    item.className = 'sdg-wheel-item';
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    item.style.background = sdg.color;
    item.innerHTML = `
      <span>${sdg.id}</span>
      <span class="tooltip">${sdg.title}</span>
    `;

    item.addEventListener('click', () => {
      selectSDG(sdg.id - 1);
      openModal(sdg.id - 1);
    });

    wheel.appendChild(item);
  });

  // Show wheel on right edge hover
  let hoverZone = 80;
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth - e.clientX < hoverZone) {
      container.classList.add('visible');
    } else if (window.innerWidth - e.clientX > 350) {
      container.classList.remove('visible');
    }
  });

  // Smooth lerp-based wheel rotation on scroll
  let targetRotation = 0;
  let currentRotation = 0;
  let lastScroll = 0;
  let rafId = null;

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScroll;
    targetRotation += delta * 0.06;
    lastScroll = window.scrollY;
  }, { passive: true });

  function animateWheel() {
    currentRotation += (targetRotation - currentRotation) * 0.08;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Counter-rotate items to keep them upright
    wheel.querySelectorAll('.sdg-wheel-item').forEach(item => {
      const existingScale = item.classList.contains('selected') ? 'scale(1.4)' :
                            item.matches(':hover') ? 'scale(1.35)' : '';
      item.style.transform = `rotate(${-currentRotation}deg) ${existingScale}`;
    });

    rafId = requestAnimationFrame(animateWheel);
  }
  animateWheel();
}

function selectSDG(index) {
  selectedSDG = index;
  const items = document.querySelectorAll('.sdg-wheel-item');
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === index);
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
  voteContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.vote-btn');
    if (!btn) return;
    if (!isLoggedIn()) {
      openAuthModal('login');
      return;
    }
    const id = parseInt(btn.dataset.id);
    const idea = VOTE_IDEAS.find(v => v.id === id);
    if (idea && !btn.classList.contains('voted')) {
      idea.votes++;
      btn.querySelector('.vote-count').textContent = formatNumber(idea.votes);
      btn.classList.add('voted');
      btn.style.transform = 'scale(1.15)';
      setTimeout(() => { btn.style.transform = ''; }, 300);
      createBurst(btn);
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
  document.getElementById('submitFeedback').addEventListener('click', () => {
    if (!isLoggedIn()) {
      openAuthModal('login');
      return;
    }
    const priority = document.getElementById('sdgPriority').value;
    const suggestion = document.getElementById('policySuggestion').value;

    if (!priority) {
      showToast('Please select an SDG priority', 'warning');
      return;
    }
    if (!suggestion.trim()) {
      showToast('Please write a policy suggestion', 'warning');
      return;
    }

    // Track the submission in PRIORITY_DATA
    const sdg = SDG_DATA.find(s => s.id === parseInt(priority));
    if (sdg) {
      const existing = PRIORITY_DATA.find(p => p.label === sdg.title);
      if (existing) {
        existing.value++;
      } else {
        PRIORITY_DATA.push({ label: sdg.title, value: 1, color: sdg.color });
      }
      renderPriorityBars(document.getElementById('priorityBars'));
    }

    showToast('Thank you! Your feedback has been submitted 🎉', 'success');
    document.getElementById('sdgPriority').value = '';
    document.getElementById('policySuggestion').value = '';
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
