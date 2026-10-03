// Muhammad Zeeshan Portfolio Engine
// Enhanced for High Speed, Edge CDN Caching, Category Filtering, and Live Search

const defaultData = {
  "profile": {
    "name": "Muhammad Zeeshan",
    "title": "Data Scientist & AI/ML Developer",
    "location": "Lahore, Pakistan",
    "email": "rh3783901@gmail.com",
    "phone": "+92 301 9843724",
    "github": "https://github.com/zeeshanrana707",
    "linkedin": "https://linkedin.com/in/zeeshanrana707",
    "headline": "Specializing in Data Science, Machine Learning (ML), and Natural Language Processing (NLP).",
    "bio": "I am an AI Developer and Data Scientist passionate about architecting predictive machine learning models, natural language processing (NLP) pipelines, and intelligent data systems. Combining rigorous technical foundations from DeepLearning.AI and IBM with hands-on software development experience, I specialize in end-to-end data science workflows, algorithmic modeling, and scalable Python solutions."
  },
  "stats": [
    { "label": "Industry Internship", "value": "3 Months" },
    { "label": "AI & ML Systems", "value": "3+" },
    { "label": "Model Test Accuracy", "value": "98.77%" },
    { "label": "Verified Certifications", "value": "5" }
  ],
  "skills": [
    {
      "category": "Core & Languages",
      "items": ["Python (Advanced)", "SQL (PostgreSQL / MSSQL / SQLite)", "Bash / Shell", "Regular Expressions (Regex)"]
    },
    {
      "category": "Data Science & Machine Learning",
      "items": ["Scikit-learn", "Pandas", "NumPy", "Gaussian Naive Bayes", "Isolation Forest", "Feature Engineering", "Model Evaluation & Cross-Validation"]
    },
    {
      "category": "Natural Language Processing (NLP)",
      "items": ["Text Preprocessing", "Tokenization & Lemmatization", "TF-IDF & Embeddings", "Sentiment Analysis", "NLTK / Text Processing"]
    },
    {
      "category": "Data Engineering & Automation",
      "items": ["Automated Data Pipelines", "ETL / ELT Workflows", "Scrapy & Selenium", "DOM & API Extraction", "Data Cleaning & Imputation"]
    },
    {
      "category": "Frameworks & Databases",
      "items": ["Flask", "RESTful APIs", "Microsoft SQL Server", "SQLite", "JSON / XML"]
    },
    {
      "category": "Tools & Methodologies",
      "items": ["Git & GitHub", "Linux/CLI", "Jupyter Lab", "VS Code", "Agile/Scrum", "IBM Data Science Methodology"]
    }
  ],
  "experience": [
    {
      "role": "Data Scraper Intern",
      "company": "Programmers Force",
      "period": "July 2025 – September 2025 (3 Months)",
      "location": "Remote",
      "type": "Internship",
      "highlights": [
        "Architected and deployed automated Python web scraping pipelines (Scrapy, Selenium, BeautifulSoup4) to extract deep-nested unstructured data from dynamic JavaScript platforms.",
        "Implemented anti-bot mitigation protocols (proxy rotation, user-agent pools, backoff retry logic), achieving a 99.2% extraction success rate with zero IP bans.",
        "Engineered automated data validation scripts in Pandas, eliminating duplicate records and reducing downstream processing time by 80%."
      ],
      "tags": ["Python", "Scrapy", "Selenium", "Pandas", "ETL Pipelines"]
    },
    {
      "role": "GitHub Collaborator",
      "company": "Orvix Open Source",
      "period": "May 2026 – Present",
      "location": "Remote",
      "type": "Open Source",
      "highlights": [
        "Contributed modular Python enhancements and issue resolutions to the open-source Orvix codebase following Git version control best practices.",
        "Refactored core modules for improved execution performance and enforced strict PEP 8 compliance."
      ],
      "tags": ["Python", "Git", "GitHub", "Open Source", "Code Optimization"]
    }
  ],
  "projects": [
    {
      "id": "disease-prediction-system",
      "title": "MediPredict — AI Disease Prediction System",
      "badge": "Healthcare AI",
      "metric": "98.77% Test Accuracy",
      "description": "An intelligent clinical triage application that classifies diseases based on multi-symptom input vectors using Gaussian Naive Bayes with sub-second prediction latency.",
      "problem": "Clinical triage suffers from diagnostic delays due to overlapping symptom presentations and lack of fast preliminary triage tools.",
      "solution": "Built a predictive ML engine trained on diagnostic symptom matrices. Developed a responsive Flask web interface with dynamic search autocomplete and stratified k-fold cross-validation.",
      "impact": "98.77% classification accuracy on unseen test data with sub-second inference and zero external API dependencies.",
      "tags": ["Python", "Flask", "Scikit-learn", "Pandas", "Gaussian Naive Bayes"],
      "githubUrl": "https://github.com/zeeshanrana707/Disease_Prediction_System"
    },
    {
      "id": "ai-smart-banking",
      "title": "AI Smart Banking & Real-Time Fraud Detection",
      "badge": "FinTech / Anomaly Detection",
      "metric": "Unsupervised ML",
      "description": "A secure digital banking platform with embedded unsupervised machine learning to detect and quarantine fraudulent transactions in real-time.",
      "problem": "Rule-based legacy banking systems fail to detect novel, evolving fraudulent vectors without manual analyst intervention.",
      "solution": "Implemented an unsupervised Isolation Forest model analyzing transaction features (amount, velocity, time variance) to calculate anomaly scores before ledger commitment.",
      "impact": "Automated zero-day fraud pattern detection integrated with full banking workflows (accounts, transfers, and security alert logs).",
      "tags": ["Python", "Scikit-learn", "Isolation Forest", "Flask", "SQLite"],
      "githubUrl": "https://github.com/zeeshanrana707/Ai_Smart_Banking"
    },
    {
      "id": "smart-zoo-management-system",
      "title": "Smart Zoo Management & Operations System",
      "badge": "Enterprise Systems",
      "metric": "<50ms Query Latency",
      "description": "A full-stack operations management platform for animal healthcare tracking, feeding schedules, personnel shifts, and automated alerts.",
      "problem": "Fragmented, manual logging systems lead to operational oversights in veterinary regimens, staff shifts, and emergency medical histories.",
      "solution": "Architected a normalized relational database in MS SQL Server with modular Flask RESTful API endpoints for high-throughput operational tracking.",
      "impact": "Centralized veterinary records, schedules, and staff shifts into an integrated administrative dashboard with sub-50ms query times.",
      "tags": ["Python", "Flask", "Microsoft SQL Server", "T-SQL", "REST APIs"],
      "githubUrl": "https://github.com/zeeshanrana707/Smart-zoo-management-system"
    }
  ],
  "certifications": [
    {
      "title": "Data Science Specialization",
      "issuer": "HEC-DLSEI 3.0 Program",
      "date": "Jan 2026",
      "skills": "Comprehensive Data Science Curriculum & Practical Implementation",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/verify"
    },
    {
      "title": "Data Science Methodology",
      "issuer": "IBM via Coursera",
      "date": "Jan 2026",
      "skills": "CRISP-DM, Business Understanding, Data Modeling, Pipeline Architecture",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/verify"
    },
    {
      "title": "Tools for Data Science",
      "issuer": "IBM via Coursera",
      "date": "Jan 2026",
      "skills": "Jupyter Notebooks, Git/GitHub, RStudio, Watson Studio, CLI",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/verify"
    },
    {
      "title": "What is Data Science?",
      "issuer": "IBM via Coursera",
      "date": "Jan 2026",
      "skills": "Statistical Analysis, Predictive Modeling, Machine Learning Fundamentals",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/verify"
    },
    {
      "title": "AI For Everyone",
      "issuer": "DeepLearning.AI via Coursera",
      "date": "Jul 2025",
      "skills": "Neural Networks, Machine Learning Strategy, AI Ethics & Project Feasibility",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/verify"
    }
  ]
};

let cachedProjects = [];
let activeCategory = 'All';
let searchQuery = '';

// High-speed edge CDN caching loader
async function loadData() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const url = isLocal ? ('data.json?t=' + Date.now()) : 'data.json';

  try {
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn("Serving from localStorage or embedded fallback.");
  }

  const local = localStorage.getItem('portfolio_data');
  if (local) {
    try {
      return JSON.parse(local);
    } catch (err) {}
  }

  return defaultData;
}

function renderProfile(profile) {
  document.querySelectorAll('.dynamic-name').forEach(el => el.textContent = profile.name);
  document.querySelectorAll('.dynamic-title').forEach(el => el.textContent = profile.title);
  document.querySelectorAll('.dynamic-headline').forEach(el => el.textContent = profile.headline);

  const bioEl = document.getElementById('dynamic-bio');
  if (bioEl) bioEl.textContent = profile.bio;

  document.querySelectorAll('.dynamic-email-link').forEach(el => {
    el.href = `mailto:${profile.email}`;
    el.textContent = `✉️ ${profile.email}`;
  });

  document.querySelectorAll('.dynamic-phone-link').forEach(el => {
    const cleanPhone = (profile.phone || '').replace(/[^0-9]/g, '');
    el.href = `https://wa.me/${cleanPhone}`;
    el.textContent = `💬 WhatsApp (${profile.phone})`;
  });

  document.querySelectorAll('.dynamic-github-link').forEach(el => el.href = profile.github);
  document.querySelectorAll('.dynamic-linkedin-link').forEach(el => el.href = profile.linkedin);
}

function renderStats(stats) {
  const container = document.getElementById('stats-grid');
  if (!container || !Array.isArray(stats)) return;
  container.innerHTML = stats.map(s => `
    <div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition duration-300 shadow-lg">
      <div class="text-3xl font-extrabold text-cyan-400 font-mono">${s.value}</div>
      <div class="text-sm text-slate-400 mt-1 font-medium">${s.label}</div>
    </div>
  `).join('');
}

function renderSkills(skills) {
  const container = document.getElementById('skills-grid');
  if (!container || !Array.isArray(skills)) return;
  container.innerHTML = skills.map(category => `
    <div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition duration-300 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          ${category.category}
        </h3>
        <div class="flex flex-wrap gap-2">
          ${(category.items || []).map(item => `
            <span class="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/60 hover:text-cyan-300 hover:border-cyan-500/40 transition">
              ${item}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderExperience(experiences) {
  const container = document.getElementById('experience-timeline');
  if (!container || !Array.isArray(experiences)) return;
  container.innerHTML = experiences.map((exp) => `
    <div class="relative pl-8 pb-10 border-l border-slate-800 last:pb-0">
      <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400"></div>
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition">
        <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50 mb-1.5">${exp.type || 'Experience'}</span>
            <h3 class="text-xl font-bold text-white">${exp.role}</h3>
            <div class="text-sm text-cyan-300 font-medium">${exp.company} • <span class="text-slate-400">${exp.location || 'Remote'}</span></div>
          </div>
          <span class="text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">${exp.period}</span>
        </div>
        <ul class="space-y-2 mt-4 text-slate-300 text-sm leading-relaxed">
          ${(exp.highlights || []).map(h => `<li class="flex items-start gap-2.5"><span class="text-cyan-400 mt-1">▸</span><span>${h}</span></li>`).join('')}
        </ul>
        ${(exp.tags && exp.tags.length > 0) ? `
          <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/60">
            ${exp.tags.map(t => `<span class="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">${t}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// Interactive Project Filter Pills & Search
function setupProjectFilters(projects) {
  cachedProjects = projects;
  const filterContainer = document.getElementById('project-filters');
  if (!filterContainer) return;

  const categories = ['All'];
  projects.forEach(p => {
    if (p.badge && !categories.includes(p.badge)) {
      categories.push(p.badge);
    }
  });

  filterContainer.innerHTML = categories.map(cat => `
    <button onclick="setProjectCategory('${cat}')" id="cat-btn-${cat.replace(/[^a-zA-Z0-9]/g, '')}" class="category-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition border ${cat === activeCategory ? 'bg-cyan-400 text-slate-950 border-cyan-300' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'}">
      ${cat}
    </button>
  `).join('');
}

window.setProjectCategory = function(cat) {
  activeCategory = cat;
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.remove('bg-cyan-400', 'text-slate-950', 'border-cyan-300');
    btn.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
  });

  const activeBtn = document.getElementById('cat-btn-' + cat.replace(/[^a-zA-Z0-9]/g, ''));
  if (activeBtn) {
    activeBtn.classList.add('bg-cyan-400', 'text-slate-950', 'border-cyan-300');
    activeBtn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');
  }

  applyProjectFilters();
};

window.handleProjectSearch = function(query) {
  searchQuery = (query || '').toLowerCase().trim();
  applyProjectFilters();
};

function applyProjectFilters() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = cachedProjects.filter(p => {
    const matchesCat = activeCategory === 'All' || p.badge === activeCategory;
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery) ||
      (p.description || '').toLowerCase().includes(searchQuery) ||
      (p.problem || '').toLowerCase().includes(searchQuery) ||
      (p.solution || '').toLowerCase().includes(searchQuery) ||
      (p.tags || []).some(t => t.toLowerCase().includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-12 text-center bg-slate-900/60 rounded-3xl border border-slate-800">
        <p class="text-sm text-slate-400 font-mono">No matching projects found for "${searchQuery}".</p>
        <button onclick="clearSearch()" class="mt-3 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60 hover:bg-cyan-900">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  renderProjects(filtered);
}

window.clearSearch = function() {
  const input = document.getElementById('project-search-input');
  if (input) input.value = '';
  searchQuery = '';
  activeCategory = 'All';
  setupProjectFilters(cachedProjects);
  applyProjectFilters();
};

function renderProjects(projects) {
  const container = document.getElementById('projects-grid');
  if (!container || !Array.isArray(projects)) return;
  container.innerHTML = projects.map(proj => `
    <div class="group rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-cyan-500/5">
      <div class="p-6 sm:p-7 flex-1 flex flex-col">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
            ${proj.badge || 'Project'}
          </span>
          <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
            ${proj.metric || 'Active'}
          </span>
        </div>
        
        <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition duration-200 mb-2">
          ${proj.title}
        </h3>
        <p class="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
          ${proj.description}
        </p>

        <div class="space-y-3.5 mb-6 text-xs bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
          <div>
            <span class="font-bold uppercase tracking-wider text-rose-400 block mb-0.5">The Problem</span>
            <p class="text-slate-300 leading-relaxed">${proj.problem}</p>
          </div>
          <div class="pt-2 border-t border-slate-800/50">
            <span class="font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">The Solution</span>
            <p class="text-slate-300 leading-relaxed">${proj.solution}</p>
          </div>
          <div class="pt-2 border-t border-slate-800/50">
            <span class="font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Impact</span>
            <p class="text-slate-300 leading-relaxed">${proj.impact}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 mt-auto">
          ${(proj.tags || []).map(t => `<span class="text-[11px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/50">${t}</span>`).join('')}
        </div>
      </div>

      <div class="p-5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" onclick="trackEvent('click_project_github', '${proj.id}')" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group-hover:translate-x-0.5">
          <span>View Source Code on GitHub</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  `).join('');
}

function renderCertifications(certs) {
  const container = document.getElementById('certifications-grid');
  if (!container || !Array.isArray(certs)) return;
  container.innerHTML = certs.map(c => {
    const verifyUrl = c.verifyUrl || "https://www.coursera.org/account/accomplishments/verify";
    return `
      <div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">${c.issuer}</span>
            <span class="text-xs font-mono text-slate-400">${c.date}</span>
          </div>
          <h4 class="text-base font-bold text-white mt-3">${c.title}</h4>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">${c.skills}</p>
        </div>
        <div class="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between">
          <a href="${verifyUrl}" target="_blank" rel="noopener noreferrer" onclick="trackEvent('verify_credential', '${c.title}')" class="group inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition" title="Verify certificate online">
            <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <span class="underline underline-offset-2">Verify Credential Online</span>
            <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// 1-Click Copy Email Utility with Animated Toast
window.copyEmailAddress = function(e) {
  if (e) e.preventDefault();
  const email = "rh3783901@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToastNotification("✓ Email copied: " + email);
  }).catch(() => {
    prompt("Copy email address:", email);
  });
};

function showToastNotification(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-cyan-400 text-slate-950 font-mono font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3000);
}

// Lightweight Recruiter Event Tracker
window.trackEvent = function(eventName, detail) {
  if (window.gtag) {
    window.gtag('event', eventName, { 'event_label': detail });
  }
};

// Interactive Resume Modal Functions
window.openResumeModal = function() {
  trackEvent('open_resume_modal', 'CV viewed');
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
};

window.closeResumeModal = function() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
};

window.printResume = function() {
  trackEvent('download_resume_pdf', 'PDF requested');
  window.print();
};

document.addEventListener('DOMContentLoaded', async () => {
  const data = await loadData();
  if (data.profile) renderProfile(data.profile);
  renderStats(data.stats);
  renderSkills(data.skills);
  renderExperience(data.experience);
  setupProjectFilters(data.projects);
  renderProjects(data.projects);
  renderCertifications(data.certifications);
});
