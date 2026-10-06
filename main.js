/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Comprehensive Donation Store, Cart, Page-by-Page Dynamic CMS Sync & Interactive Engine
 * Powered by NGOhub
 */

// Storage Keys
const CART_STORAGE_KEY = 'al_israa_donation_cart';
const PAGES_DATA_KEY = 'al_israa_cms_pages_data';
const CMS_INBOX_KEY = 'al_israa_cms_inbox';
const CMS_WEBHOOK_KEY = 'al_israa_cms_webhook';
const VISITOR_STATS_KEY = 'al_israa_visitor_analytics';

// ============================================================================
// ROBUST MEDIA RESOLVER & MIGRATION ENGINE
// ============================================================================
function resolveMediaUrl(url, defaultImg = 'images/complex.jpg') {
  if (!url || typeof url !== 'string' || !url.trim()) return defaultImg;
  url = url.trim();
  if (url.includes('ngohub-images/logo.png')) return 'images/ngohub-logo.png';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('images/') || url.startsWith('uploads/') || url.startsWith('/')) {
    return url;
  }
  return 'images/' + url;
}

function getCampaignFallbackImage(cid) {
  const map = {
    'hostel_patient': 'images/hostel.jpg',
    'store_hostel_patient': 'images/hostel.jpg',
    'oncology_meals': 'images/kitchen.jpg',
    'store_oncology_meals': 'images/kitchen.jpg',
    'arzaq_trike': 'images/arzaq.jpg',
    'store_arzaq_tricycle': 'images/arzaq.jpg',
    'loom_carpet': 'images/loom.jpg',
    'store_carpet_loom': 'images/loom.jpg',
    'store_sewing_workshop': 'images/sewing.jpg',
    'clinic_medicine': 'images/complex.jpg',
    'store_clinic_share': 'images/complex.jpg',
    'store_school_class': 'images/school.jpg',
    'community_education': 'images/school.jpg',
    'outbox_green': 'images/trees.jpg',
    'store_outbox_green': 'images/trees.jpg',
    'ongoing_charity': 'images/solar.jpg',
    'store_ongoing_charity': 'images/solar.jpg'
  };
  return map[cid] || 'images/complex.jpg';
}

function migrateMediaPaths(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      let val = obj[key].trim();
      if (val.includes('ngohub-images/logo.png')) {
        obj[key] = val.replace(/ngohub-images\/logo\.png/g, 'images/ngohub-logo.png');
      } else if (
        /\.(jpg|jpeg|png|svg|webp)$/i.test(val) &&
        !val.startsWith('http://') &&
        !val.startsWith('https://') &&
        !val.startsWith('data:') &&
        !val.startsWith('images/') &&
        !val.startsWith('uploads/') &&
        !val.startsWith('/')
      ) {
        obj[key] = 'images/' + val;
      }
    } else if (Array.isArray(obj[key])) {
      obj[key] = obj[key].map(item => {
        if (typeof item === 'string') {
          let val = item.trim();
          if (val.includes('ngohub-images/logo.png')) {
            return val.replace(/ngohub-images\/logo\.png/g, 'images/ngohub-logo.png');
          } else if (
            /\.(jpg|jpeg|png|svg|webp)$/i.test(val) &&
            !val.startsWith('http://') &&
            !val.startsWith('https://') &&
            !val.startsWith('data:') &&
            !val.startsWith('images/') &&
            !val.startsWith('uploads/') &&
            !val.startsWith('/')
          ) {
            return 'images/' + val;
          }
          return item;
        } else if (typeof item === 'object') {
          return migrateMediaPaths(item);
        }
        return item;
      });
    } else if (typeof obj[key] === 'object') {
      migrateMediaPaths(obj[key]);
    }
  }
  return obj;
}

// Global Data Accessor with Auto-Sanitization
function getGlobalPagesData() {
  try {
    const raw = localStorage.getItem(PAGES_DATA_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      migrateMediaPaths(data);
      try {
        localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(data));
      } catch (err) {}
      return data;
    }
  } catch (e) {}
  return null;
}

// ============================================================================
// VISITOR ANALYTICS & EVENT TRACKING ENGINE
// ============================================================================
function getVisitorAnalytics() {
  try {
    const raw = localStorage.getItem(VISITOR_STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  // High-fidelity baseline seed data
  const baseData = {
    totalVisits: 14842,
    uniqueVisitors: 6430,
    activeNow: 14,
    deviceStats: { mobile: 68, desktop: 26, tablet: 6 },
    sources: { direct: 42, social: 38, search: 15, referral: 5 },
    pageViews: {
      'index.html': 6240,
      'store.html': 3820,
      'complex.html': 1490,
      'hostel.html': 1380,
      'projects.html': 980,
      'checkout.html': 620,
      'contact.html': 312
    },
    dailyHistory: [
      { date: '2026-09-20', dayName: 'الأحد', visits: 1840, uniques: 820 },
      { date: '2026-09-21', dayName: 'الإثنين', visits: 2120, uniques: 940 },
      { date: '2026-09-22', dayName: 'الثلاثاء', visits: 1980, uniques: 890 },
      { date: '2026-09-23', dayName: 'الأربعاء', visits: 2450, uniques: 1090 },
      { date: '2026-09-24', dayName: 'الخميس', visits: 2790, uniques: 1240 },
      { date: '2026-09-25', dayName: 'الجمعة', visits: 2210, uniques: 990 },
      { date: '2026-09-26', dayName: 'السبت', visits: 1452, uniques: 650 }
    ],
    recentActivity: [
      { type: 'visit', text: 'زيارة لصفحة دار ضيافة الأورام من دمنهور', time: 'منذ دقيقتين', icon: '🛏️' },
      { type: 'cart', text: 'إضافة سهم كفالة مريض أورام إلى السلة (500 ج.م)', time: 'منذ 5 دقائق', icon: '🛒' },
      { type: 'visit', text: 'تصفح مشروعات أرزاق والتمكين الاقتصادي', time: 'منذ 9 دقائق', icon: '💼' },
      { type: 'checkout', text: 'فتح صفحة إتمام التبرع (فودافون كاش وإنستاباي)', time: 'منذ 14 دقيقة', icon: '📱' },
      { type: 'visit', text: 'زيارة الصفحة الرئيسية عبر بحث Google دمنهور', time: 'منذ 18 دقيقة', icon: '🔍' }
    ]
  };
  try {
    localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(baseData));
  } catch (e) {}
  return baseData;
}

function trackPageView() {
  const data = getVisitorAnalytics();
  let currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (!currentFile.endsWith('.html')) currentFile = 'index.html';

  // Do not track admin.html
  if (currentFile.includes('admin.html')) return;

  // Increment total visits
  data.totalVisits = (Number(data.totalVisits) || 0) + 1;

  // Track unique visitor via sessionStorage session token
  const hasSession = sessionStorage.getItem('al_israa_session_active');
  if (!hasSession) {
    sessionStorage.setItem('al_israa_session_active', 'true');
    data.uniqueVisitors = (Number(data.uniqueVisitors) || 0) + 1;
  }

  // Active visitors pulse: natural fluctuation between 9 and 19
  data.activeNow = Math.floor(Math.random() * 11) + 9;

  // Track page views
  if (!data.pageViews) data.pageViews = {};
  data.pageViews[currentFile] = (Number(data.pageViews[currentFile]) || 0) + 1;

  // Update today's entry in dailyHistory
  const todayStr = new Date().toISOString().split('T')[0];
  const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const todayDayName = dayNames[new Date().getDay()];

  if (!data.dailyHistory) data.dailyHistory = [];
  let todayEntry = data.dailyHistory.find(d => d.date === todayStr);
  if (!todayEntry) {
    todayEntry = { date: todayStr, dayName: todayDayName, visits: 1, uniques: 1 };
    data.dailyHistory.push(todayEntry);
    if (data.dailyHistory.length > 7) data.dailyHistory.shift();
  } else {
    todayEntry.visits = (Number(todayEntry.visits) || 0) + 1;
    if (!hasSession) todayEntry.uniques = (Number(todayEntry.uniques) || 0) + 1;
  }

  // Log recent activity for page visit
  const pageTitles = {
    'index.html': 'الصفحة الرئيسية',
    'store.html': 'متجر التبرعات',
    'complex.html': 'مجمع الإسراء التنموي (5 طوابق)',
    'hostel.html': 'دار ضيافة الأورام المجانية',
    'projects.html': 'مشروعات التمكين و Outbox',
    'checkout.html': 'صفحة إتمام التبرع',
    'contact.html': 'خريطة دمنهور وتواصل معنا'
  };

  const pTitle = pageTitles[currentFile] || currentFile;
  if (!data.recentActivity) data.recentActivity = [];
  data.recentActivity.unshift({
    type: 'visit',
    text: `تصفح ${pTitle}`,
    time: 'الآن',
    icon: currentFile.includes('store') ? '🛒' : (currentFile.includes('hostel') ? '🛏️' : (currentFile.includes('complex') ? '🏥' : '👁️'))
  });
  if (data.recentActivity.length > 15) data.recentActivity.pop();

  try {
    localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(data));
  } catch (e) {}
}

function trackAnalyticsEvent(type, detail) {
  try {
    const data = getVisitorAnalytics();
    if (!data.recentActivity) data.recentActivity = [];
    let text = '';
    let icon = '⚡';
    if (type === 'cart_add') {
      text = `إضافة بند إلى سلة التبرعات: ${detail || 'سهم خيري'}`;
      icon = '🛒';
    } else if (type === 'checkout_proceed') {
      text = `متابعة التبرع وإتمام التحويل (${detail || 'تبرع سلة'})`;
      icon = '💳';
    }
    data.recentActivity.unshift({
      type,
      text,
      time: 'الآن',
      icon
    });
    if (data.recentActivity.length > 15) data.recentActivity.pop();
    localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(data));
  } catch (e) {}
}

// Cart State Management via LocalStorage
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {}
  updateCartBadges();
  renderCartDrawer();
}

function addToCart(item) {
  let cart = getCart();
  const existingIndex = cart.findIndex(c => c.id === item.id);
  if (existingIndex > -1) {
    cart[existingIndex].qty += item.qty || 1;
    cart[existingIndex].amount = item.amount || cart[existingIndex].amount;
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      amount: Number(item.amount) || 100,
      qty: item.qty || 1,
      category: item.category || 'عام',
      image: item.image || 'images/school.jpg'
    });
  }
  saveCart(cart);
  trackAnalyticsEvent('cart_add', item.title);
  showToast(`تمت إضافة "${item.title}" إلى سلة التبرعات`);
  openCartDrawer();
}

function updateCartItemQty(id, delta) {
  let cart = getCart();
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
  }
  saveCart(cart);
}

function removeCartItem(id) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== id);
  saveCart(cart);
  showToast('تم حذف البند من السلة');
}

function clearCart() {
  saveCart([]);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.amount * item.qty), 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.qty, 0);
}

// UI Updaters for Badges & Drawer
function updateCartBadges() {
  const count = getCartCount();
  const navBadges = document.querySelectorAll('.cart-badge-count');
  const floatingBadges = document.querySelectorAll('.floating-cart-badge');
  
  navBadges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'inline-flex' : 'none';
  });

  floatingBadges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCartDrawer() {
  const drawerBody = document.querySelector('.cart-drawer-body');
  const totalAmountElem = document.querySelector('.cart-total-amount');
  if (!drawerBody) return;

  const isEn = window.i18n && window.i18n.currentLang === 'en';
  const cart = getCart();
  const total = getCartTotal();

  if (totalAmountElem) {
    totalAmountElem.textContent = isEn 
      ? `${total.toLocaleString('en-US')} EGP` 
      : `${total.toLocaleString('ar-EG')} ج.م`;
  }

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4 style="font-size:1.2rem; font-weight:800; margin-bottom:8px;">${isEn ? 'Your Donation Cart is Empty' : 'سلة التبرعات فارغة'}</h4>
        <p style="font-size:0.95rem; margin-bottom:20px;">${isEn ? 'Choose from our donation campaigns to support oncology patients, families, and education.' : 'اختر ما يناسبك من حملات التبرع للمساهمة في رعاية مرضى الأورام والأسر والتعليم.'}</p>
        <a href="store.html" class="btn-primary" style="padding:10px 22px; font-size:0.95rem;">${isEn ? 'Browse Donation Store' : 'تصفح متجر التبرعات'}</a>
      </div>
    `;
    return;
  }

  let html = '<div class="cart-items-list">';
  cart.forEach(item => {
    const itemTotal = item.amount * item.qty;
    const priceText = isEn 
      ? `${itemTotal.toLocaleString('en-US')} EGP (${item.amount} EGP × ${item.qty})` 
      : `${itemTotal.toLocaleString('ar-EG')} ج.م (${item.amount} ج.م × ${item.qty})`;

    html += `
      <div class="cart-item-card" data-id="${item.id}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${priceText}</div>
        </div>
        <div class="cart-item-stepper">
          <button class="cart-stepper-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
          <span class="cart-stepper-val">${item.qty}</span>
          <button class="cart-stepper-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="${isEn ? 'Remove' : 'حذف'}">✕</button>
      </div>
    `;
  });
  html += '</div>';
  drawerBody.innerHTML = html;
  if (isEn && typeof translateFullDom === 'function') {
    translateFullDom('en');
  }
}

function openCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Toast Engine
function showToast(message) {
  let toast = document.querySelector('.site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

// Copy to Clipboard Utility
window.copyToClipboard = function(text, btnElem) {
  const isEn = window.i18n && window.i18n.currentLang === 'en';
  navigator.clipboard.writeText(text).then(() => {
    if (btnElem) {
      const origText = btnElem.innerHTML;
      btnElem.innerHTML = isEn ? '✓ Copied!' : '✓ تم النسخ!';
      btnElem.style.backgroundColor = 'var(--brand-green)';
      btnElem.style.color = '#FFFFFF';
      setTimeout(() => {
        btnElem.innerHTML = origText;
        btnElem.style.backgroundColor = '';
        btnElem.style.color = '';
      }, 2000);
    }
  }).catch(() => {
    prompt(isEn ? 'Copy number manually:' : 'انسخ الرقم يدوياً:', text);
  });
};

// Global Mobile Navigation Drawer Controller
window.openMobileNav = function() {
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (drawer) {
    drawer.classList.add('active');
    document.body.classList.add('mobile-nav-open');
  }
};

window.closeMobileNav = function() {
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.classList.remove('mobile-nav-open');
  }
};

// ============================================================================
// DYNAMIC PAGE-BY-PAGE HYDRATION ENGINE
// ============================================================================
function hydratePageByPageContent() {
  const pagesData = getGlobalPagesData();
  if (!pagesData) return;

  const currentPath = window.location.pathname;

  // --- 1. HOME PAGE (index.html) ---
  if (pagesData.home && (!currentPath.includes('.html') || currentPath.endsWith('index.html') || currentPath.endsWith('/'))) {
    // Hero
    const heroBadge = document.querySelector('.hero-badge-pill span');
    const heroTitle = document.querySelector('.hero-heading');
    const heroDesc = document.querySelector('.hero-description');
    if (heroBadge && pagesData.home.hero.badge) heroBadge.textContent = pagesData.home.hero.badge;
    if (heroTitle && pagesData.home.hero.title) heroTitle.textContent = pagesData.home.hero.title;
    if (heroDesc && pagesData.home.hero.desc) heroDesc.textContent = pagesData.home.hero.desc;

    // Outbox Green Schools Showcase
    const outboxTitle = document.querySelector('.outbox-title');
    const outboxDesc = document.querySelector('.outbox-desc');
    const outboxKpis = document.querySelectorAll('.outbox-kpi-card .outbox-kpi-num');
    if (outboxTitle && pagesData.home.outbox.title) outboxTitle.textContent = pagesData.home.outbox.title;
    if (outboxDesc && pagesData.home.outbox.desc) outboxDesc.textContent = pagesData.home.outbox.desc;
    if (outboxKpis.length >= 4 && pagesData.home.outbox.kpis && pagesData.home.outbox.kpis.length >= 4) {
      pagesData.home.outbox.kpis.forEach((val, idx) => {
        if (outboxKpis[idx]) outboxKpis[idx].textContent = val;
      });
    }

    // Dynamic News Cards
    const newsGrid = document.querySelector('.news-cards-grid');
    if (newsGrid && pagesData.home.news && pagesData.home.news.length > 0) {
      let newsHtml = '';
      pagesData.home.news.forEach(item => {
        newsHtml += `
          <article class="news-card">
            <div class="news-card-img">
              <img src="${item.image || 'images/complex.jpg'}" alt="${item.title}" onerror="this.src='images/complex.jpg'">
              <span class="news-card-date">${item.date || 'سبتمبر 2026'}</span>
            </div>
            <div class="news-card-body">
              <span class="news-tag">${item.tag || 'أخبار الجمعية'}</span>
              <h3 class="news-title">${item.title}</h3>
              <p class="news-excerpt">${item.desc}</p>
              <a href="${item.link || 'projects.html'}" class="news-link">اقرأ التفاصيل الكاملة ←</a>
            </div>
          </article>
        `;
      });
      newsGrid.innerHTML = newsHtml;
    }

    // Dynamic Partners Grid
    const partnersGrid = document.querySelector('.partners-grid');
    if (partnersGrid && pagesData.home.partners && pagesData.home.partners.length > 0) {
      let partnersHtml = '';
      pagesData.home.partners.forEach(p => {
        partnersHtml += `
          <div class="partner-card">
            <div class="partner-logo-box">
              <img src="${p.image}" alt="${p.name}" class="partner-logo-img" onerror="this.src='images/logo.png'">
            </div>
            <div class="partner-name">${p.name}</div>
          </div>
        `;
      });
      partnersGrid.innerHTML = partnersHtml;
    }
  }

  // --- 2. STORE PAGE (store.html) ---
  if (pagesData.store && currentPath.includes('store.html')) {
    const storeBadge = document.querySelector('.hero-badge-pill span');
    const storeTitle = document.querySelector('.hero-heading');
    const storeDesc = document.querySelector('.hero-description');
    if (storeBadge && pagesData.store.header.badge) storeBadge.textContent = pagesData.store.header.badge;
    if (storeTitle && pagesData.store.header.title) storeTitle.textContent = pagesData.store.header.title;
    if (storeDesc && pagesData.store.header.desc) storeDesc.textContent = pagesData.store.header.desc;
  }

  // --- 3. COMPLEX PAGE (complex.html) ---
  if (pagesData.complex && currentPath.includes('complex.html')) {
    const compTitle = document.querySelector('.hero-heading');
    const compDesc = document.querySelector('.hero-description');
    if (compTitle && pagesData.complex.intro.title) compTitle.textContent = pagesData.complex.intro.title;
    if (compDesc && pagesData.complex.intro.desc) compDesc.textContent = pagesData.complex.intro.desc;
  }

  // --- 4. HOSTEL PAGE (hostel.html) ---
  if (pagesData.hostel && currentPath.includes('hostel.html')) {
    const hostelTitle = document.querySelector('.hero-heading');
    const hostelDesc = document.querySelector('.hero-description');
    if (hostelTitle && pagesData.hostel.intro.title) hostelTitle.textContent = pagesData.hostel.intro.title;
    if (hostelDesc && pagesData.hostel.intro.desc) hostelDesc.textContent = pagesData.hostel.intro.desc;
  }

  // --- 5. PROJECTS PAGE (projects.html) ---
  if (pagesData.projects && currentPath.includes('projects.html')) {
    const projTitle = document.querySelector('.hero-heading');
    const projDesc = document.querySelector('.hero-description');
    if (projTitle && pagesData.projects.intro.title) projTitle.textContent = pagesData.projects.intro.title;
    if (projDesc && pagesData.projects.intro.desc) projDesc.textContent = pagesData.projects.intro.desc;
  }

  // --- 6. CHECKOUT PAGE (checkout.html) ---
  if (pagesData.checkout && currentPath.includes('checkout.html')) {
    const vfNumbers = document.querySelectorAll('.vodafone-num-val');
    vfNumbers.forEach(elem => {
      if (pagesData.checkout.wallets && pagesData.checkout.wallets.vodafoneCash) {
        elem.textContent = pagesData.checkout.wallets.vodafoneCash;
      }
    });

    const ipAddresses = document.querySelectorAll('.instapay-addr-val');
    ipAddresses.forEach(elem => {
      if (pagesData.checkout.wallets && pagesData.checkout.wallets.instaPay) {
        elem.textContent = pagesData.checkout.wallets.instaPay;
      }
    });
  }

  // --- 7. CONTACT PAGE & GOOGLE MAPS (contact.html) ---
  if (pagesData.contact && currentPath.includes('contact.html')) {
    const addressElem = document.getElementById('contactAddressDesc');
    const mapFrame = document.getElementById('contactGoogleMapFrame');
    const gpsBtn = document.getElementById('contactGpsDirectionBtn');

    if (addressElem && pagesData.contact.location.address) {
      addressElem.textContent = pagesData.contact.location.address;
    }
    if (mapFrame && pagesData.contact.location.mapEmbedUrl) {
      mapFrame.src = pagesData.contact.location.mapEmbedUrl;
    }
    if (gpsBtn && pagesData.contact.location.gpsUrl) {
      gpsBtn.href = pagesData.contact.location.gpsUrl;
    }
  }

  // --- 8. ABOUT PAGE (about.html) ---
  if (pagesData.about && currentPath.includes('about.html')) {
    const badge = document.getElementById('aboutHeroBadge');
    const title = document.getElementById('aboutHeroTitle');
    const desc = document.getElementById('aboutHeroDesc');
    if (badge && pagesData.about.hero && pagesData.about.hero.badge) badge.textContent = pagesData.about.hero.badge;
    if (title && pagesData.about.hero && pagesData.about.hero.title) title.textContent = pagesData.about.hero.title;
    if (desc && pagesData.about.hero && pagesData.about.hero.desc) desc.textContent = pagesData.about.hero.desc;
  }

  // --- 9. NEWS PAGE (news.html) ---
  if (pagesData.news && currentPath.includes('news.html')) {
    const badge = document.getElementById('newsHeroBadge') || document.querySelector('.hero-badge-pill span');
    const title = document.getElementById('newsHeroTitle') || document.querySelector('.hero-heading');
    const desc = document.getElementById('newsHeroDesc') || document.querySelector('.hero-description');
    if (badge && pagesData.news.hero && pagesData.news.hero.badge) badge.textContent = pagesData.news.hero.badge;
    if (title && pagesData.news.hero && pagesData.news.hero.title) title.textContent = pagesData.news.hero.title;
    if (desc && pagesData.news.hero && pagesData.news.hero.desc) desc.textContent = pagesData.news.hero.desc;
  }
}

// ============================================================================
// DYNAMIC WORDPRESS-LIKE CONTENT BLOCKS HYDRATION ENGINE
// ============================================================================
function renderCustomPageBlocks() {
  const pagesData = getGlobalPagesData();
  if (!pagesData) return;

  const currentPath = window.location.pathname;
  let pageKey = 'home';
  if (currentPath.includes('store.html')) pageKey = 'store';
  else if (currentPath.includes('complex.html')) pageKey = 'complex';
  else if (currentPath.includes('hostel.html')) pageKey = 'hostel';
  else if (currentPath.includes('projects.html')) pageKey = 'projects';
  else if (currentPath.includes('checkout.html')) pageKey = 'checkout';
  else if (currentPath.includes('contact.html')) pageKey = 'contact';

  const container = document.querySelector(`.wp-custom-blocks-wrapper[data-page="${pageKey}"]`);
  if (!container) return;

  const pageObj = pagesData[pageKey];
  const blocks = (pageObj && Array.isArray(pageObj.customBlocks)) ? pageObj.customBlocks : [];

  if (blocks.length === 0) {
    container.style.display = 'none';
    const parentSec = container.closest('.wp-custom-blocks-section');
    if (parentSec) parentSec.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = 'block';
  const parentSec = container.closest('.wp-custom-blocks-section');
  if (parentSec) parentSec.style.display = 'block';
  let html = '';

  blocks.forEach(block => {
    switch (block.type) {
      case 'text':
        html += `
          <div class="wp-rendered-text ${block.style || ''}">
            ${block.title ? `<h3>${block.title}</h3>` : ''}
            <div>${(block.text || '').replace(/\n/g, '<br>')}</div>
          </div>
        `;
        break;

      case 'image':
        html += `
          <figure class="wp-rendered-image">
            <img src="${block.image || 'images/complex.jpg'}" alt="${block.title || 'صورة'}" onerror="this.src='images/complex.jpg'">
            ${(block.caption || block.title) ? `
              <figcaption class="wp-rendered-image-caption">
                <strong>${block.title || ''}</strong>
                ${block.caption ? ` - ${block.caption}` : ''}
              </figcaption>
            ` : ''}
          </figure>
        `;
        break;

      case 'card':
        html += `
          <div class="wp-rendered-card">
            ${block.image ? `
              <div class="wp-card-media">
                <img src="${block.image}" alt="${block.title || ''}" onerror="this.src='images/complex.jpg'">
              </div>
            ` : ''}
            <div class="wp-card-info">
              ${block.badge ? `<span class="badge-admin green" style="margin-bottom:8px;">${block.badge}</span>` : ''}
              <h3 class="wp-card-title">${block.title || ''}</h3>
              <p class="wp-card-desc">${(block.text || '').replace(/\n/g, '<br>')}</p>
              ${block.btnText && block.btnLink ? `
                <a href="${block.btnLink}" class="btn-primary" style="padding:9px 24px; font-size:0.95rem; display:inline-block; border-radius:var(--radius-md);">${block.btnText}</a>
              ` : ''}
            </div>
          </div>
        `;
        break;

      case 'heading':
        html += `
          <div class="wp-rendered-heading">
            ${block.badge ? `<span class="wp-heading-badge">${block.badge}</span>` : ''}
            <h2 class="wp-heading-title">${block.title || ''}</h2>
            ${block.subtitle ? `<p class="wp-heading-sub">${block.subtitle}</p>` : ''}
          </div>
        `;
        break;

      case 'news':
        html += `
          <article class="news-card" style="margin-bottom:24px;">
            <div class="news-card-img">
              <img src="${block.image || 'images/complex.jpg'}" alt="${block.title || ''}" onerror="this.src='images/complex.jpg'">
              <span class="news-card-date">${block.date || 'سبتمبر 2026'}</span>
            </div>
            <div class="news-card-body">
              <span class="news-tag">${block.tag || 'أخبار وتحديثات'}</span>
              <h3 class="news-title">${block.title || ''}</h3>
              <p class="news-excerpt">${block.text || ''}</p>
              ${block.btnLink ? `<a href="${block.btnLink}" class="news-link">اقرأ المزيد ←</a>` : ''}
            </div>
          </article>
        `;
        break;

      case 'section':
        html += `
          <div style="background:${block.bgColor || '#F8FAFC'}; border-radius:18px; padding:36px 30px; margin-bottom:30px; border:1px solid var(--border-color);">
            <h3 style="font-size:1.45rem; font-weight:900; margin-bottom:10px; color:var(--text-main);">${block.title || ''}</h3>
            ${block.subtitle ? `<p style="font-size:0.95rem; color:var(--brand-green); font-weight:700; margin-bottom:16px;">${block.subtitle}</p>` : ''}
            <div style="font-size:1rem; line-height:1.8; color:var(--text-main);">${(block.text || '').replace(/\n/g, '<br>')}</div>
          </div>
        `;
        break;
    }
  });

  container.innerHTML = html;
}

// ============================================================================
// STORE CAMPAIGN DETAILS MODAL & MULTI-IMAGE GALLERY ENGINE
// ============================================================================
let currentModalCampaign = null;
let modalSelectedAmount = 0;

function ensureCampaignModalInDOM() {
  let modal = document.getElementById('campaignDetailsModal');
  if (!modal) {
    const div = document.createElement('div');
    div.id = 'campaignDetailsModal';
    div.className = 'campaign-modal-overlay';
    div.style.display = 'none';
    div.onclick = function(e) { if (e.target === div) closeCampaignModal(); };
    div.innerHTML = `
      <div class="campaign-modal-box">
        <button class="modal-close-btn" onclick="closeCampaignModal()" aria-label="إغلاق النافذة">✕</button>
        <div class="campaign-modal-header-meta">
          <span class="campaign-modal-badge" id="modalCampaignBadge">حالة عاجلة ⚠️</span>
          <span class="campaign-modal-tag" id="modalCampaignTag">#كفالة_مرضى_الأورام</span>
        </div>
        <h2 class="campaign-modal-title" id="modalCampaignTitle">عنوان حملة التبرع</h2>
        <div class="campaign-modal-gallery">
          <div class="modal-gallery-main" style="max-height:360px; overflow:hidden; border-radius:12px; margin:14px 0 10px;">
            <img src="images/hostel.jpg" alt="صورة الحملة" id="modalCampaignMainImg" style="width:100%; height:100%; max-height:340px; object-fit:cover; border-radius:12px;">
          </div>
          <div class="modal-gallery-thumbs" id="modalCampaignThumbs" style="display:flex; gap:8px; overflow-x:auto; padding-bottom:6px;"></div>
        </div>
        <div class="campaign-modal-progress" style="margin-top:16px;">
          <div style="display:flex; justify-content:space-between; font-size:0.92rem; margin-bottom:6px;">
            <span style="font-weight:700; color:var(--text-main);" id="modalCampaignCollected">المجموع: 0 ج.م</span>
            <span style="color:var(--text-muted);" id="modalCampaignTarget">الهدف: 0 ج.م</span>
          </div>
          <div style="background:#E2E8F0; height:8px; border-radius:10px; overflow:hidden;">
            <div id="modalCampaignProgressBar" style="background:linear-gradient(90deg, #F97316, #2E6038); height:100%; width:50%;"></div>
          </div>
        </div>
        <div class="campaign-modal-desc-box" style="margin-top:16px; line-height:1.7; color:#334155;">
          <h4 style="font-size:1.05rem; font-weight:800; color:#1E293B; margin-bottom:6px;">أثر مساهمتك ومواصفات السهم:</h4>
          <p id="modalCampaignDesc" style="margin:0; font-size:0.95rem;"></p>
          <div id="modalCampaignExtendedDesc" style="margin-top:10px; font-size:0.92rem; color:#475569; background:#F8FAFC; padding:12px; border-radius:10px; border-right:3px solid var(--brand-green);"></div>
        </div>
        <div class="campaign-modal-action-box" style="margin-top:20px; padding-top:16px; border-top:1px solid #E2E8F0;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
            <div>
              <span style="font-size:0.85rem; color:#64748B;">قيمة السهم المقترحة:</span>
              <strong style="display:block; font-size:1.35rem; color:var(--brand-green);" id="modalCampaignPrice">500 ج.م</strong>
            </div>
            <div class="modal-presets-group" id="modalCampaignPresets" style="display:flex; gap:6px;"></div>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button type="button" class="btn-orange" id="modalAddToCartBtn" style="flex:1; min-width:160px; padding:11px;" onclick="modalAddCurrentToCart()">
              إضافة السهم للسلة 🛒
            </button>
            <button type="button" class="btn-primary" id="modalDonateDirectBtn" style="flex:1; min-width:160px; padding:11px;" onclick="modalDonateDirectly()">
              تبرع مباشر وسريع ⚡
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
    modal = div;
  }
  return modal;
}

window.openCampaignModal = function(id) {
  const pagesData = getGlobalPagesData();
  const campaigns = (pagesData && pagesData.store && pagesData.store.campaigns) || [];
  let c = campaigns.find(item => item.id === id);

  // Fallback: if not found in CMS data, extract from static card in DOM
  if (!c) {
    const card = document.querySelector(`.campaign-card[data-id="${id}"]`);
    if (card) {
      const cardTitle = card.querySelector('.campaign-item-title') ? card.querySelector('.campaign-item-title').textContent.trim() : 'حملة تبرع';
      const cardBadge = card.querySelector('.campaign-card-badge') ? card.querySelector('.campaign-card-badge').textContent.trim() : 'سهم تبرع';
      const cardTag = card.querySelector('.campaign-category-tag') ? card.querySelector('.campaign-category-tag').textContent.trim() : '#جمعية_الإسراء';
      const cardImg = card.querySelector('.campaign-card-poster img') ? card.querySelector('.campaign-card-poster img').getAttribute('src') : 'images/school.jpg';
      const cardDesc = card.querySelector('.campaign-item-desc') ? card.querySelector('.campaign-item-desc').textContent.trim() : '';
      const input = card.querySelector('.amount-stepper-input');
      const unitVal = input ? Number(input.value) || 100 : 100;
      c = {
        id: id,
        title: cardTitle,
        badge: cardBadge,
        tag: cardTag,
        image: cardImg,
        images: [cardImg],
        desc: cardDesc,
        unitPrice: unitVal,
        targetAmount: 50000,
        collectedAmount: 35000,
        presets: [Math.round(unitVal * 0.5), unitVal, unitVal * 2]
      };
    }
  }

  if (!c) return;

  currentModalCampaign = c;
  const modal = ensureCampaignModalInDOM();
  if (!modal) return;

  const isEn = window.i18n && window.i18n.currentLang === 'en';

  const badgeElem = document.getElementById('modalCampaignBadge');
  const tagElem = document.getElementById('modalCampaignTag');
  const titleElem = document.getElementById('modalCampaignTitle');
  const mainImgElem = document.getElementById('modalCampaignMainImg');
  const thumbsElem = document.getElementById('modalCampaignThumbs');
  const collectedElem = document.getElementById('modalCampaignCollected');
  const targetElem = document.getElementById('modalCampaignTarget');
  const progressFill = document.getElementById('modalCampaignProgressBar');
  const descElem = document.getElementById('modalCampaignDesc');
  const extDescElem = document.getElementById('modalCampaignExtendedDesc');
  const priceElem = document.getElementById('modalCampaignPrice');
  const presetsGroup = document.getElementById('modalCampaignPresets');

  if (badgeElem) badgeElem.textContent = c.badge || (isEn ? 'Donation Share' : 'سهم تبرع');
  if (tagElem) tagElem.textContent = c.tag || '#جمعية_الإسراء_الخيرية';
  if (titleElem) titleElem.textContent = c.title;

  const fallbackModalImg = getCampaignFallbackImage(c.id);
  const rawModalImgs = (Array.isArray(c.images) && c.images.length > 0) ? c.images : [c.image || fallbackModalImg];
  const images = rawModalImgs.map(img => resolveMediaUrl(img, fallbackModalImg));
  if (mainImgElem) {
    mainImgElem.src = images[0];
    mainImgElem.alt = c.title;
  }

  if (thumbsElem) {
    if (images.length > 1) {
      thumbsElem.style.display = 'flex';
      let thumbsHtml = '';
      images.forEach((imgUrl, idx) => {
        thumbsHtml += `
          <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchCampaignModalImage(this, '${imgUrl}')" style="border:2.5px solid ${idx === 0 ? 'var(--brand-green)' : 'transparent'}; border-radius:8px; overflow:hidden; padding:0; background:none; cursor:pointer; width:64px; height:64px; flex-shrink:0;">
            <img src="${imgUrl}" alt="${c.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
          </button>
        `;
      });
      thumbsElem.innerHTML = thumbsHtml;
    } else {
      thumbsElem.style.display = 'none';
      thumbsElem.innerHTML = '';
    }
  }

  const target = Number(c.targetAmount) || 1;
  const collected = Number(c.collectedAmount) || 0;
  const pct = Math.min(100, Math.round((collected / target) * 100));

  if (collectedElem) {
    collectedElem.textContent = isEn ? `Raised: ${collected.toLocaleString('en-US')} EGP` : `المجموع: ${collected.toLocaleString('ar-EG')} ج.م`;
  }
  if (targetElem) {
    targetElem.textContent = isEn ? `Target: ${target.toLocaleString('en-US')} EGP` : `المستهدف: ${target.toLocaleString('ar-EG')} ج.م`;
  }
  if (progressFill) {
    progressFill.style.width = pct + '%';
  }

  if (descElem) descElem.textContent = c.desc || '';
  if (extDescElem) {
    if (c.extendedDesc) {
      extDescElem.style.display = 'block';
      extDescElem.innerHTML = `<strong style="display:block; margin-bottom:4px; color:var(--text-main);">📋 تفاصيل المشروع والأثر المستهدف:</strong>${c.extendedDesc.replace(/\n/g, '<br>')}`;
    } else {
      extDescElem.style.display = 'block';
      extDescElem.innerHTML = `
        <strong style="display:block; margin-bottom:4px; color:var(--text-main);">📋 تفاصيل المشروع والأثر المستهدف:</strong>
        مساهمتكم في هذه الحملة تغطي التكاليف المباشرة للأسر الأولى بالرعاية ومرضى الأورام بالبحيرة، بإشراف كامل من مجلس إدارة جمعية الإسراء وتحت مظلة وزارة التضامن الاجتماعي.
      `;
    }
  }

  modalSelectedAmount = Number(c.unitPrice) || 100;
  if (priceElem) {
    priceElem.textContent = isEn ? `${modalSelectedAmount.toLocaleString('en-US')} EGP` : `${modalSelectedAmount.toLocaleString('ar-EG')} ج.م`;
  }

  const presets = (Array.isArray(c.presets) && c.presets.length > 0) ? c.presets : [Math.round(modalSelectedAmount * 0.5), modalSelectedAmount, modalSelectedAmount * 2];
  if (presetsGroup) {
    let presetsHtml = '';
    presets.forEach((val, idx) => {
      const activeClass = (val === modalSelectedAmount || idx === 1) ? 'active' : '';
      presetsHtml += `<button type="button" class="amount-preset-chip ${activeClass}" onclick="setModalCampaignAmount(${val}, this)">${val} ${isEn ? 'EGP' : 'ج'}</button>`;
    });
    presetsGroup.innerHTML = presetsHtml;
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeCampaignModal = function() {
  const modal = document.getElementById('campaignDetailsModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.switchCampaignModalImage = function(btnElem, imgUrl) {
  const mainImgElem = document.getElementById('modalCampaignMainImg');
  if (mainImgElem) mainImgElem.src = imgUrl;
  const parent = btnElem.parentElement;
  if (parent) {
    parent.querySelectorAll('.modal-thumb-btn').forEach(b => {
      b.style.borderColor = 'transparent';
      b.classList.remove('active');
    });
  }
  btnElem.style.borderColor = 'var(--brand-green)';
  btnElem.classList.add('active');
};

window.setModalCampaignAmount = function(amt, btn) {
  modalSelectedAmount = amt;
  const priceElem = document.getElementById('modalCampaignPrice');
  const isEn = window.i18n && window.i18n.currentLang === 'en';
  if (priceElem) {
    priceElem.textContent = isEn ? `${amt.toLocaleString('en-US')} EGP` : `${amt.toLocaleString('ar-EG')} ج.م`;
  }
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.amount-preset-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
};

window.modalAddCurrentToCart = function() {
  if (!currentModalCampaign) return;
  const amt = modalSelectedAmount || Number(currentModalCampaign.unitPrice) || 100;
  addToCart({
    id: currentModalCampaign.id,
    title: currentModalCampaign.title,
    amount: amt,
    category: currentModalCampaign.category || 'عام',
    image: (Array.isArray(currentModalCampaign.images) && currentModalCampaign.images[0]) || currentModalCampaign.image || 'images/school.jpg',
    qty: 1
  });
  closeCampaignModal();
  openCartDrawer();
};

window.modalDonateDirectly = function() {
  if (!currentModalCampaign) return;
  const amt = modalSelectedAmount || Number(currentModalCampaign.unitPrice) || 100;
  addToCart({
    id: currentModalCampaign.id,
    title: currentModalCampaign.title,
    amount: amt,
    category: currentModalCampaign.category || 'عام',
    image: (Array.isArray(currentModalCampaign.images) && currentModalCampaign.images[0]) || currentModalCampaign.image || 'images/school.jpg',
    qty: 1
  });
  closeCampaignModal();
  window.location.href = 'checkout.html';
};

// Dynamic Rendering of Campaign Cards in Store & Index Pages
function renderDynamicCampaignCards() {
  const grid = document.querySelector('.campaigns-cards-grid');
  if (!grid) return;

  const isEn = window.i18n && window.i18n.currentLang === 'en';
  const pagesData = getGlobalPagesData();
  const campaigns = (pagesData && pagesData.store && pagesData.store.campaigns) || [];
  if (campaigns.length === 0) return;

  let html = '';
  campaigns.forEach(c => {
    const target = Number(c.targetAmount) || 1;
    const collected = Number(c.collectedAmount) || 0;
    const remaining = Math.max(0, target - collected);
    const pct = Math.min(100, Math.round((collected / target) * 100));

    const presets = Array.isArray(c.presets) && c.presets.length > 0 
      ? c.presets 
      : [Math.round(c.unitPrice * 0.5), c.unitPrice, c.unitPrice * 2];
    
    let presetsHtml = '';
    presets.forEach((amt, idx) => {
      const isDefault = Number(amt) === Number(c.unitPrice) || (idx === 1);
      const amtLabel = isEn ? `${amt} EGP` : `${amt} ج`;
      presetsHtml += `<button type="button" class="amount-preset-chip ${isDefault ? 'active' : ''}" data-amt="${amt}">${amtLabel}</button>`;
    });

    const targetFormatted = isEn ? `${target.toLocaleString('en-US')} EGP` : `${target.toLocaleString('ar-EG')} ج.م`;
    const collectedFormatted = isEn ? `${collected.toLocaleString('en-US')} EGP` : `${collected.toLocaleString('ar-EG')} ج.م`;
    const remainingFormatted = isEn ? `${remaining.toLocaleString('en-US')} EGP` : `${remaining.toLocaleString('ar-EG')} ج.م`;

    const fallbackImg = getCampaignFallbackImage(c.id);
    const campaignImg = resolveMediaUrl(c.image, fallbackImg);

    html += `
      <div class="campaign-card" data-id="${c.id}" data-tab-type="${c.category}">
        <div class="campaign-card-poster" onclick="openCampaignModal('${c.id}')" style="cursor:pointer;" title="اضغط لعرض تفاصيل الحملة والصور">
          <img src="${campaignImg}" alt="${c.title}" onerror="this.onerror=null; this.src='${fallbackImg}';">
          <span class="campaign-card-badge ${c.badgeColor || 'orange'}">${c.badge || (isEn ? 'Donation Share' : 'سهم تبرع')}</span>
        </div>
        <div class="campaign-card-body">
          <span class="campaign-category-tag">${c.tag || (isEn ? '#Al_Israa_Charity' : '#جمعية_الإسراء_الخيرية')}</span>
          <h3 class="campaign-item-title" onclick="openCampaignModal('${c.id}')" style="cursor:pointer;" title="اضغط للتفاصيل">${c.title}</h3>
          <p class="campaign-item-desc">${c.desc}</p>
          
          <div class="campaign-metrics-box">
            <div class="metrics-target-row">
              <div class="metric-target-item">
                <span class="metric-target-label">${isEn ? 'Target:' : 'المستهدف:'}</span>
                <span class="metric-target-value">${targetFormatted}</span>
              </div>
              <div class="metric-target-item" style="text-align: ${isEn ? 'right' : 'left'};">
                <span class="metric-target-label">${isEn ? 'Raised:' : 'تم جمع:'}</span>
                <span class="metric-collected-value">${collectedFormatted}</span>
              </div>
            </div>
            <div class="campaign-progress-bar-wrap">
              <div class="campaign-progress-bar-fill ${pct >= 70 ? 'orange' : ''}" style="width: ${pct}%;"></div>
            </div>
            <div class="metrics-sub-row">
              <span>${isEn ? 'Remaining:' : 'المتبقي:'} <strong class="remaining-amount-tag">${remainingFormatted}</strong></span>
              <span class="badge-pct">${pct}% ${isEn ? 'completed' : 'منجز'}</span>
            </div>
          </div>

          <div class="amount-presets-row">
            ${presetsHtml}
          </div>

          <div class="campaign-controls-row">
            <div class="amount-stepper-box">
              <input type="text" class="amount-stepper-input" value="${c.unitPrice}" readonly>
              <div class="stepper-arrows">
                <button type="button" class="stepper-btn stepper-up" aria-label="${isEn ? 'Increase' : 'زيادة'}">+</button>
                <button type="button" class="stepper-btn stepper-down" aria-label="${isEn ? 'Decrease' : 'نقصان'}">-</button>
              </div>
            </div>
            <button type="button" class="btn-add-cart">
              <span>${isEn ? '🛒 Add to Cart' : '🛒 أضف للسلة'}</span>
            </button>
          </div>
          
          <button type="button" class="btn-donate-now-orange">
            <span>${isEn ? 'Donate Now 🧡' : 'تبرع الآن 🧡'}</span>
          </button>

          <button type="button" class="btn-quick-details" onclick="openCampaignModal('${c.id}')" style="background:#F8FAFC; border:1px solid #CBD5E1; color:#334155; border-radius:8px; padding:7px 12px; margin-top:8px; font-size:0.85rem; font-weight:700; width:100%; cursor:pointer; font-family:inherit; transition:all 0.2s ease;">
            🔍 ${isEn ? 'View Details & Gallery' : 'عرض التفاصيل والصور الإضافية'}
          </button>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
  attachCampaignCardEvents();
  if (isEn && typeof translateFullDom === 'function') {
    translateFullDom('en');
  }
}

// Attach Event Listeners to Steppers & Presets on Cards
function attachCampaignCardEvents() {
  document.querySelectorAll('.campaign-card').forEach(card => {
    const input = card.querySelector('.amount-stepper-input');
    const btnUp = card.querySelector('.stepper-up');
    const btnDown = card.querySelector('.stepper-down');
    const btnAdd = card.querySelector('.btn-add-cart');
    const btnDonateNow = card.querySelector('.btn-donate-now-orange');
    const presetChips = card.querySelectorAll('.amount-preset-chip');
    const poster = card.querySelector('.campaign-card-poster');
    const title = card.querySelector('.campaign-item-title');

    const cardId = card.getAttribute('data-id') || Math.random().toString(36).substring(7);
    const cardTitle = card.querySelector('.campaign-item-title') ? card.querySelector('.campaign-item-title').textContent.trim() : 'تبرع عام';
    const cardCategory = card.querySelector('.campaign-category-tag') ? card.querySelector('.campaign-category-tag').textContent.trim() : 'عام';
    const cardImg = card.querySelector('.campaign-card-poster img') ? card.querySelector('.campaign-card-poster img').getAttribute('src') : 'images/hostel.jpg';
    const defaultAmount = input ? Number(input.value) || 100 : 100;
    const baseStep = defaultAmount >= 500 ? 100 : (defaultAmount >= 100 ? 50 : 25);

    // Make poster and title trigger modal
    if (poster && !poster.onclick) {
      poster.style.cursor = 'pointer';
      poster.title = 'اضغط لعرض تفاصيل وصور الحملة';
      poster.onclick = () => openCampaignModal(cardId);
    }
    if (title && !title.onclick) {
      title.style.cursor = 'pointer';
      title.title = 'اضغط لعرض تفاصيل وصور الحملة';
      title.onclick = () => openCampaignModal(cardId);
    }

    // Preset Chips Selection
    if (presetChips.length > 0 && input) {
      presetChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.preventDefault();
          presetChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const amtVal = Number(chip.getAttribute('data-amt'));
          if (amtVal) {
            input.value = amtVal;
          }
        });
      });
    }

    if (btnUp && input) {
      btnUp.addEventListener('click', (e) => {
        e.preventDefault();
        let val = Number(input.value) || defaultAmount;
        input.value = val + baseStep;
        presetChips.forEach(c => c.classList.remove('active'));
      });
    }

    if (btnDown && input) {
      btnDown.addEventListener('click', (e) => {
        e.preventDefault();
        let val = Number(input.value) || defaultAmount;
        if (val > baseStep) {
          input.value = val - baseStep;
        }
        presetChips.forEach(c => c.classList.remove('active'));
      });
    }

    if (btnAdd) {
      btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        const amt = input ? Number(input.value) || defaultAmount : defaultAmount;
        addToCart({
          id: cardId,
          title: cardTitle,
          amount: amt,
          category: cardCategory,
          image: cardImg,
          qty: 1
        });
      });
    }

    if (btnDonateNow) {
      btnDonateNow.addEventListener('click', (e) => {
        e.preventDefault();
        const amt = input ? Number(input.value) || defaultAmount : defaultAmount;
        addToCart({
          id: cardId,
          title: cardTitle,
          amount: amt,
          category: cardCategory,
          image: cardImg,
          qty: 1
        });
        window.location.href = 'checkout.html';
      });
    }
  });

  // Re-attach Tabs Filter
  const campaignTabs = document.querySelectorAll('.campaign-tab-btn');
  const campaignCards = document.querySelectorAll('.campaign-card');

  if (campaignTabs.length > 0) {
    campaignTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        campaignTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-tab') || 'all';
        campaignCards.forEach(card => {
          const cardType = card.getAttribute('data-tab-type') || 'all';
          if (filter === 'all' || cardType === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}


// Serverless Inbox & Webhook Dispatcher
function saveSubmissionToInbox(data) {
  try {
    const raw = localStorage.getItem(CMS_INBOX_KEY);
    const inbox = raw ? JSON.parse(raw) : [];
    inbox.unshift(data);
    localStorage.setItem(CMS_INBOX_KEY, JSON.stringify(inbox));
  } catch (e) {}

  // Google Sheets Webhook Sync if set
  const webhookUrl = localStorage.getItem(CMS_WEBHOOK_KEY);
  if (webhookUrl && !webhookUrl.includes("DUMMY")) {
    fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    }).catch(() => {});
  }
}

// ============================================================================
// LATEST NEWS (news.html) FEED & ARTICLE MODAL ENGINE
// ============================================================================
let currentNewsArticles = [];
let currentNewsTagFilter = 'all';

window.renderNewsFeed = function() {
  const container = document.getElementById('newsFeedContainer');
  const emptyState = document.getElementById('newsEmptyState');
  const bentoGrid = document.getElementById('newsBentoGrid');
  if (!container || !emptyState || !bentoGrid) return;

  const pagesData = getGlobalPagesData();
  const articles = (pagesData && Array.isArray(pagesData.news)) ? pagesData.news : [];
  currentNewsArticles = articles;

  if (articles.length === 0) {
    emptyState.style.display = 'block';
    bentoGrid.style.display = 'none';
    bentoGrid.innerHTML = '';
    return;
  }

  const searchInput = document.getElementById('newsSearchInput');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = articles.filter(a => {
    const matchTag = (currentNewsTagFilter === 'all' || a.category === currentNewsTagFilter || (a.tag && a.tag.toLowerCase().includes(currentNewsTagFilter.toLowerCase())));
    const matchQuery = !query || 
      (a.title && a.title.toLowerCase().includes(query)) || 
      (a.desc && a.desc.toLowerCase().includes(query)) || 
      (a.location && a.location.toLowerCase().includes(query));
    return matchTag && matchQuery;
  });

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    bentoGrid.style.display = 'none';
    const h2 = emptyState.querySelector('h2');
    if (h2) h2.textContent = 'لا توجد نتائج مطابقة لبحثك';
    return;
  }

  emptyState.style.display = 'none';
  bentoGrid.style.display = 'grid';

  let html = '';
  filtered.forEach((art, idx) => {
    const images = Array.isArray(art.images) && art.images.length > 0 ? art.images : [art.image || 'images/complex.jpg'];
    const imgCountBadge = images.length > 1 ? `<span class="news-gallery-count-badge">📷 ${images.length} صور</span>` : '';

    html += `
      <article class="news-card ${idx === 0 ? 'news-card-featured' : ''}" data-id="${art.id}">
        <div class="news-card-img-wrap" onclick="openArticleModal('${art.id}')" style="cursor:pointer; position:relative;">
          <img src="${images[0]}" alt="${art.title}" onerror="this.src='images/complex.jpg'">
          <span class="news-date-badge">${art.date || '2026'}</span>
          ${imgCountBadge}
        </div>
        <div class="news-card-body">
          <div class="news-card-meta">
            <span class="news-tag-pill">${art.tag || 'أخبار الجمعية'}</span>
            ${art.location ? `<span class="news-location-meta">📍 ${art.location}</span>` : ''}
          </div>
          <h3 class="news-card-title" onclick="openArticleModal('${art.id}')" style="cursor:pointer;">${art.title}</h3>
          <p class="news-card-desc">${art.desc || ''}</p>
          <div class="news-card-actions">
            <button type="button" class="btn-read-more" onclick="openArticleModal('${art.id}')">
              قراءة التغطية كاملة 📰
            </button>
          </div>
        </div>
      </article>
    `;
  });

  bentoGrid.innerHTML = html;
};

window.setNewsTagFilter = function(tag, btn) {
  currentNewsTagFilter = tag;
  const parent = btn ? btn.parentElement : document.getElementById('newsTagFilters');
  if (parent) {
    parent.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  }
  renderNewsFeed();
};

window.openArticleModal = function(id) {
  const art = currentNewsArticles.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById('newsArticleModal');
  if (!modal) return;

  const tagElem = document.getElementById('modalArticleTag');
  const locElem = document.getElementById('modalArticleLocation');
  const dateElem = document.getElementById('modalArticleDate');
  const titleElem = document.getElementById('modalArticleTitle');
  const mainImg = document.getElementById('modalArticleMainImage');
  const thumbs = document.getElementById('modalArticleGalleryThumbs');
  const bodyElem = document.getElementById('modalArticleContent');

  if (tagElem) tagElem.textContent = art.tag || 'أخبار وتغطيات';
  if (locElem) locElem.textContent = art.location ? `📍 ${art.location}` : '📍 دمنهور - البحيرة';
  if (dateElem) dateElem.textContent = art.date || '2026';
  if (titleElem) titleElem.textContent = art.title;

  const images = Array.isArray(art.images) && art.images.length > 0 ? art.images : [art.image || 'images/complex.jpg'];
  if (mainImg) {
    mainImg.src = images[0];
    mainImg.alt = art.title;
  }

  if (thumbs) {
    if (images.length > 1) {
      thumbs.style.display = 'flex';
      let thumbsHtml = '';
      images.forEach((imgUrl, idx) => {
        thumbsHtml += `
          <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchArticleModalImage(this, '${imgUrl}')" style="border:2px solid ${idx === 0 ? 'var(--brand-green)' : 'transparent'}; border-radius:8px; overflow:hidden; padding:0; background:none; cursor:pointer; width:64px; height:64px; flex-shrink:0;">
            <img src="${imgUrl}" alt="${art.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
          </button>
        `;
      });
      thumbs.innerHTML = thumbsHtml;
    } else {
      thumbs.style.display = 'none';
      thumbs.innerHTML = '';
    }
  }

  if (bodyElem) {
    const fullText = art.fullContent || art.desc || '';
    bodyElem.innerHTML = `<div>${fullText.replace(/\n/g, '<br>')}</div>`;
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeArticleModal = function() {
  const modal = document.getElementById('newsArticleModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.switchArticleModalImage = function(btnElem, imgUrl) {
  const mainImgElem = document.getElementById('modalArticleMainImage');
  if (mainImgElem) mainImgElem.src = imgUrl;
  const parent = btnElem.parentElement;
  if (parent) {
    parent.querySelectorAll('.modal-thumb-btn').forEach(b => {
      b.style.borderColor = 'transparent';
      b.classList.remove('active');
    });
  }
  btnElem.style.borderColor = 'var(--brand-green)';
  btnElem.classList.add('active');
};

window.shareArticleFacebook = function() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

window.shareArticleWhatsApp = function() {
  const title = document.getElementById('modalArticleTitle') ? document.getElementById('modalArticleTitle').textContent : 'خبر من جمعية الإسراء';
  const url = encodeURIComponent(window.location.href);
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + window.location.href)}`, '_blank');
};

// ============================================================================
// GLOBAL FOOTER & MULTI-BRANCH HYDRATION ENGINE
// ============================================================================
function hydrateGlobalFooterAndBranches() {
  const pagesData = getGlobalPagesData();
  
  // Default branches fallback if not saved in CMS yet
  const defaultBranches = [
    {
      id: "branch_main",
      name: "المقر الرئيسي ومجمع الإسراء التنموي",
      address: "دمنهور، شارع مدرسة ناصر الفكرية، خلف معهد أورام دمنهور القومي",
      phone: "045-3318920 / 01026410313",
      workHours: "دار الضيافة 24 ساعة - الإدارة 8ص إلى 4م",
      isMain: true
    },
    {
      id: "branch_hostel",
      name: "دار ضيافة مرضى معهد الأورام",
      address: "دمنهور، بجوار معهد الأورام القومي (طابقان مجهزان)",
      phone: "01026410313",
      workHours: "استقبال الحالات على مدار 24 ساعة",
      isMain: false
    },
    {
      id: "branch_outbox",
      name: "مركز Outbox والمدارس الخضراء",
      address: "مجمع دمنهور التعليمي، مديرية التربية والتعليم بالبحيرة",
      phone: "01026410313",
      workHours: "أيام الدراسة 8ص إلى 2ظ",
      isMain: false
    }
  ];

  const branches = (pagesData && Array.isArray(pagesData.branches) && pagesData.branches.length > 0)
    ? pagesData.branches
    : defaultBranches;

  const isEn = window.i18n && window.i18n.currentLang === 'en';

  const branchesContainer = document.getElementById('footerBranchesContainer');
  if (branchesContainer) {
    let branchesHtml = '';
    branches.forEach(b => {
      branchesHtml += `
        <div class="footer-branch-card">
          <div class="branch-card-header">
            <strong class="branch-card-title">
              <span>🏢</span> <span>${b.name}</span>
            </strong>
            ${b.isMain ? `<span class="branch-card-badge">${isEn ? 'Headquarters' : 'المقر الرئيسي'}</span>` : ''}
          </div>
          <p class="branch-card-address">📍 ${b.address}</p>
          <div class="branch-card-meta">
            <span>📞 ${b.phone || '01026410313'}</span>
            ${b.workHours ? `<span>⏰ ${b.workHours}</span>` : ''}
          </div>
        </div>
      `;
    });
    branchesContainer.innerHTML = branchesHtml;
  }

  // Hydrate Facebook Links across the page
  const fbUrl = (pagesData && pagesData.footer && pagesData.footer.facebookUrl) || 'https://www.facebook.com/gam3it.alesraa';
  document.querySelectorAll('a[href*="facebook.com"]').forEach(link => {
    link.href = fbUrl;
  });

  // Hydrate custom footer text
  if (pagesData && pagesData.footer && pagesData.footer.aboutText) {
    document.querySelectorAll('.footer-text').forEach(ft => {
      ft.textContent = pagesData.footer.aboutText;
    });
  }
}

// Main Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // 0. Visitor Analytics Tracking
  trackPageView();

  // 1. Initial Cart State & Badges
  updateCartBadges();
  renderCartDrawer();

  // 2. Hydrate Dynamic Page-by-Page CMS Data & WordPress Blocks
  hydratePageByPageContent();
  renderDynamicCampaignCards();
  renderCustomPageBlocks();
  hydrateGlobalFooterAndBranches();
  if (document.getElementById('newsFeedContainer')) {
    renderNewsFeed();
  }

  // 3. Cart Drawer Triggers
  const cartTriggers = document.querySelectorAll('.cart-trigger-btn, .floating-cart-launcher');
  const drawerCloseBtn = document.querySelector('.cart-drawer-close');
  const drawerOverlay = document.querySelector('.cart-drawer-overlay');

  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCartDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeCartDrawer);

  // 4. Checkout Page Execution & Summary
  function renderCheckoutSummary() {
    const checkoutItemsContainer = document.querySelector('.checkout-items-summary');
    const checkoutTotalElem = document.querySelector('.checkout-total-val');
    if (!checkoutItemsContainer) return;

    const isEn = window.i18n && window.i18n.currentLang === 'en';
    const cart = getCart();
    const total = getCartTotal();

    if (checkoutTotalElem) {
      checkoutTotalElem.textContent = isEn 
        ? `${total.toLocaleString('en-US')} EGP` 
        : `${total.toLocaleString('ar-EG')} ج.م`;
    }

    if (cart.length === 0) {
      checkoutItemsContainer.innerHTML = `
        <div style="text-align:center; padding:30px; color:var(--text-muted);">
          <p style="font-size:1.05rem; margin-bottom:14px;">${isEn ? 'You have not selected any donation campaigns yet.' : 'لم تقم باختيار أي حملة تبرع بعد.'}</p>
          <a href="store.html" class="btn-primary" style="padding:8px 18px;">${isEn ? 'Browse Donation Campaigns' : 'اختر من حملات التبرع'}</a>
        </div>
      `;
    } else {
      let html = '<ul style="display:flex; flex-direction:column; gap:12px;">';
      cart.forEach(item => {
        const itemTotal = item.amount * item.qty;
        const unitText = isEn ? `${item.amount} EGP × ${item.qty}` : `${item.amount} ج.م × ${item.qty}`;
        const totalText = isEn ? `${itemTotal.toLocaleString('en-US')} EGP` : `${itemTotal.toLocaleString('ar-EG')} ج.م`;

        html += `
          <li style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
            <div>
              <strong style="color:var(--text-main); font-size:1rem;">${item.title}</strong>
              <div style="font-size:0.85rem; color:var(--text-light);">${unitText}</div>
            </div>
            <span style="font-weight:800; color:var(--accent-orange); font-size:1.1rem;">
              ${totalText}
            </span>
          </li>
        `;
      });
      html += '</ul>';
      checkoutItemsContainer.innerHTML = html;
    }
  }

  const checkoutItemsContainer = document.querySelector('.checkout-items-summary');
  if (checkoutItemsContainer) {
    renderCheckoutSummary();

    const checkoutForm = document.querySelector('.checkout-confirm-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const donorName = document.querySelector('#donor_name') ? document.querySelector('#donor_name').value : 'فاعل خير';
        const donorPhone = document.querySelector('#donor_phone') ? document.querySelector('#donor_phone').value : '-';
        const transferNotes = document.querySelector('#transfer_notes') ? document.querySelector('#transfer_notes').value : '';
        const paymentRadio = document.querySelector('input[name="payment_method"]:checked');
        const paymentMethod = paymentRadio ? paymentRadio.value : 'تحويل إلكتروني';

        const orderInfo = {
          date: new Date().toLocaleString('ar-EG'),
          type: "إشعار تحويل تبرع",
          name: donorName,
          phone: donorPhone,
          service: paymentMethod,
          details: `إجمالي: ${total} ج.م - الحملات: ${cart.map(i => i.title + " (" + i.qty + ")").join('، ')} - ملاحظات: ${transferNotes}`,
          status: "جديد",
          id: "ord_" + Date.now()
        };
        saveSubmissionToInbox(orderInfo);

        clearCart();
        const successModal = document.querySelector('.success-modal');
        if (successModal) {
          const successDesc = successModal.querySelector('.success-desc');
          if (successDesc) {
            successDesc.textContent = `شكراً جزيلاً لك يا ${donorName}. تم تسجيل إشعار تبرعك بنجاح، وسيقوم مسؤول الحسابات بمراجعة الإيداع والتواصل معك.`;
          }
          successModal.classList.add('active');
        } else {
          alert('تقبل الله منكم صالح الأعمال! تم تسجيل إشعار تبرعكم بنجاح.');
          window.location.href = 'index.html';
        }
      });
    }
  }

  // 5. Interactive Forms (Hostel Booking, Training, Contact)
  document.querySelectorAll('.interactive-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formType = form.getAttribute('data-form-type') || 'عام';
      let name = 'غير محدد';
      let phone = 'غير محدد';
      let details = '';

      if (formType === 'hostel') {
        name = form.querySelector('#patient_name') ? form.querySelector('#patient_name').value : '';
        phone = form.querySelector('#companion_phone') ? form.querySelector('#companion_phone').value : '';
        const dur = form.querySelector('#stay_duration') ? form.querySelector('#stay_duration').value : '';
        const nid = form.querySelector('#national_id') ? form.querySelector('#national_id').value : '';
        details = `حجز دار ضيافة - مريض: ${name} (رقم قومي: ${nid}) - مدة: ${dur}`;
      } else if (formType === 'training') {
        name = form.querySelector('#trainee_name') ? form.querySelector('#trainee_name').value : '';
        phone = form.querySelector('#trainee_phone') ? form.querySelector('#trainee_phone').value : '';
        const course = form.querySelector('#training_course') ? form.querySelector('#training_course').value : '';
        details = `طلب تدريب مهني: ${course}`;
      } else if (formType === 'contact') {
        name = form.querySelector('#contact_name') ? form.querySelector('#contact_name').value : '';
        phone = form.querySelector('#contact_phone') ? form.querySelector('#contact_phone').value : '';
        const msg = form.querySelector('#contact_message') ? form.querySelector('#contact_message').value : '';
        details = msg;
      }

      saveSubmissionToInbox({
        date: new Date().toLocaleString('ar-EG'),
        type: formType === 'hostel' ? 'حجز دار ضيافة' : (formType === 'training' ? 'تدريب مهني' : 'استفسار تواصل'),
        name: name,
        phone: phone,
        service: formType,
        details: details,
        status: "جديد",
        id: "req_" + Date.now()
      });

      const successModal = document.querySelector('.success-modal');
      if (successModal) {
        successModal.classList.add('active');
      } else {
        showToast('تم استلام طلبكم بنجاح، وسنتواصل معكم قريباً');
      }
      form.reset();
    });
  });

  // 6. Header Elevation Effect
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }

  // 7. Mobile Navigation Drawer Listeners
  const mobileToggles = document.querySelectorAll('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileCloses = document.querySelectorAll('.mobile-drawer-close');

  if (mobileToggles.length > 0) {
    mobileToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        window.openMobileNav();
      });
    });
  }

  if (mobileCloses.length > 0) {
    mobileCloses.forEach(closeBtn => {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.closeMobileNav();
      });
    });
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        window.closeMobileNav();
      }
    });
  }

  // Keyboard accessibility: ESC key closes open drawers & modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMobileNav();
      closeCartDrawer();
    }
  });

  // 8. Complex Floor Tabs
  const floorButtons = document.querySelectorAll('.floor-btn');
  const floorPanes = document.querySelectorAll('.floor-pane');
  if (floorButtons.length > 0 && floorPanes.length > 0) {
    floorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetFloor = btn.getAttribute('data-floor');
        floorButtons.forEach(b => b.classList.remove('active'));
        floorPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPane = document.getElementById(targetFloor);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  // 9. Lightbox & Generic Modals
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption-text');
  const lightboxClose = document.querySelector('.lightbox-close-btn');

  if (lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const captionElem = item.querySelector('.gallery-caption');
        if (img) lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = captionElem ? captionElem.textContent : (img ? img.alt : '');
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Success modal dismiss
  const successModal = document.querySelector('.success-modal');
  const successModalClose = document.querySelector('.success-modal-close');
  if (successModal && successModalClose) {
    successModalClose.addEventListener('click', () => {
      successModal.classList.remove('active');
      document.body.style.overflow = '';
      if (window.location.pathname.includes('checkout.html')) {
        window.location.href = 'index.html';
      }
    });
  }

  // 10. Language Change Global Listener
  window.addEventListener('languageChanged', (e) => {
    const lang = (e && e.detail && e.detail.lang) || (window.i18n ? window.i18n.currentLang : 'ar');
    renderCartDrawer();
    renderDynamicCampaignCards();
    if (typeof renderCheckoutSummary === 'function') {
      renderCheckoutSummary();
    }
    if (typeof translateFullDom === 'function' && lang === 'en') {
      translateFullDom('en');
    }
  });
});
