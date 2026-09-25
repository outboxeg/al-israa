/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Comprehensive Donation Store, Cart, Dynamic CMS Sync & Interactive Engine
 * Powered by NGOhub
 */

// Storage Keys
const CART_STORAGE_KEY = 'al_israa_donation_cart';
const CMS_CAMPAIGNS_KEY = 'al_israa_cms_campaigns';
const CMS_SETTINGS_KEY = 'al_israa_cms_settings';
const CMS_PARTNERS_KEY = 'al_israa_cms_partners';
const CMS_INBOX_KEY = 'al_israa_cms_inbox';
const CMS_WEBHOOK_KEY = 'al_israa_cms_webhook';

// Default Seed Campaigns
const DEFAULT_CAMPAIGNS = [
  {
    id: "store_hostel_patient",
    title: "كفالة استضافة مريض أورام بدار ضيافة الإسراء",
    category: "health",
    tag: "#رعاية_مرضى_الأورام",
    badge: "حالة عاجلة ⚠️",
    badgeColor: "orange",
    unitPrice: 500,
    targetAmount: 50000,
    collectedAmount: 37500,
    presets: [250, 500, 1000],
    image: "hostel.jpg",
    desc: "إقامة كاملة وسرير مجهز ورعاية كريمة لمريض أورام ومرافقه من قرى ومراكز البحيرة طوال فترة تلقي العلاج بمعهد دمنهور للأورام."
  },
  {
    id: "store_oncology_meals",
    title: "وجبات علاجية طازجة لمرضى معهد الأورام",
    category: "health",
    tag: "#المطبخ_الخيري_للأورام",
    badge: "إطعام ورعاية",
    badgeColor: "green",
    unitPrice: 100,
    targetAmount: 30000,
    collectedAmount: 21000,
    presets: [50, 100, 250],
    image: "kitchen.jpg",
    desc: "توفير وجبات غذائية صحية ومتوازنة مطبوخة يومياً بمطبخ الجمعية لمرضى السرطان ومرافقيهم أثناء جلسات الكيماوي والإشعاعي."
  },
  {
    id: "store_arzaq_tricycle",
    title: "تمويل تروسيكل طعام مجهز (مشروع أرزاق)",
    category: "empowerment",
    tag: "#مشروع_أرزاق_دمنهور",
    badge: "تمكين اقتصادي 💼",
    badgeColor: "orange",
    unitPrice: 1000,
    targetAmount: 90000,
    collectedAmount: 63000,
    presets: [500, 1000, 2500],
    image: "arzaq.jpg",
    desc: "تصنيع وتجهيز عربات وتروسيكلات طعام بأيدي طلاب مدرسة دمنهور الزخرفية وتسليمها لمعيلي الأسر والشباب لفتح باب رزق كريم ومستدام."
  },
  {
    id: "store_carpet_loom",
    title: "سهم مشغل النول والسجاد اليدوي للسيدات المعيلات",
    category: "empowerment",
    tag: "#نول_وسجاد_البحيرة",
    badge: "صناعة وحرفة",
    badgeColor: "blue",
    unitPrice: 300,
    targetAmount: 40000,
    collectedAmount: 28000,
    presets: [150, 300, 600],
    image: "loom.jpg",
    desc: "تدريب وتوفير خامات الصوف والحرير والنول اليدوي للسيدات الريفيات لإنتاج سجاد وكليم تراثي عالي الجودة وتحقيق دخل عائلي مستقل."
  },
  {
    id: "store_sewing_workshop",
    title: "ماكينة خياطة وتدريب مهني للأرامل والمطلقات",
    category: "empowerment",
    tag: "#مشاغل_الإسراء_الإنتاجية",
    badge: "حياة كريمة",
    badgeColor: "green",
    unitPrice: 400,
    targetAmount: 45000,
    collectedAmount: 31500,
    presets: [200, 400, 800],
    image: "sewing.jpg",
    desc: "شراء ماكينة خياطة وتفصيل حديثة وتسليمها للأم المعيلة مع دورة تدريبية مكثفة لتأسيس مشغلها المنزلي وتوفير الكفاية لأطفالها."
  },
  {
    id: "store_clinic_share",
    title: "سهم عيادات مجمع الإسراء التخصصية والأدوية",
    category: "health",
    tag: "#مجمع_الإسراء_التنموي",
    badge: "صحة وعلاج ⚠️",
    badgeColor: "orange",
    unitPrice: 250,
    targetAmount: 80000,
    collectedAmount: 56000,
    presets: [150, 250, 500],
    image: "complex.jpg",
    desc: "كفالة الكشف التخصصي والتحاليل وصرف الأدوية الشهرية للأسر الأكثر احتياجاً وكبار السن بالمجمع الطبي المكون من 5 طوابق."
  },
  {
    id: "store_school_class",
    title: "كفالة تعليمية وتغذية لأطفال الفصول المجتمعية",
    category: "green",
    tag: "#مكافحة_التسرب_المدرسي",
    badge: "تعليم وبناء إنسان",
    badgeColor: "blue",
    unitPrice: 350,
    targetAmount: 40000,
    collectedAmount: 28000,
    presets: [150, 350, 700],
    image: "school.jpg",
    desc: "كفالة المصاريف، الحقيبة المدرسية، والوجبة اليومية لتلاميذ الفصول المجتمعية بقرى دمنهور لإعادتهم لمسار التعليم الكريم."
  },
  {
    id: "store_solar_ongoing",
    title: "سهم الصدقة الجارية بمجمع الإسراء الطبي",
    category: "ongoing",
    tag: "#صدقة_جارية_تنموية",
    badge: "صدقة جارية ممتدة",
    badgeColor: "green",
    unitPrice: 1000,
    targetAmount: 150000,
    collectedAmount: 112500,
    presets: [500, 1000, 2500],
    image: "solar.jpg",
    desc: "مساهمة ممتدة في البنية التحتية، محطة الطاقة الشمسية، والأجهزة الطبية بالمجمع الخيري ليبقى أثر صدقتك في كل مريض ومتعلم."
  }
];

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
      image: item.image || 'school.jpg'
    });
  }
  saveCart(cart);
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

  const cart = getCart();
  const total = getCartTotal();

  if (totalAmountElem) {
    totalAmountElem.textContent = `${total.toLocaleString('ar-EG')} ج.م`;
  }

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛒</div>
        <h4 style="font-size:1.2rem; font-weight:800; margin-bottom:8px;">سلة التبرعات فارغة</h4>
        <p style="font-size:0.95rem; margin-bottom:20px;">اختر ما يناسبك من حملات التبرع للمساهمة في رعاية مرضى الأورام والأسر والتعليم.</p>
        <a href="store.html" class="btn-primary" style="padding:10px 22px; font-size:0.95rem;">تصفح متجر التبرعات</a>
      </div>
    `;
    return;
  }

  let html = '<div class="cart-items-list">';
  cart.forEach(item => {
    html += `
      <div class="cart-item-card" data-id="${item.id}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${(item.amount * item.qty).toLocaleString('ar-EG')} ج.م (${item.amount} ج.م × ${item.qty})</div>
        </div>
        <div class="cart-item-stepper">
          <button class="cart-stepper-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
          <span class="cart-stepper-val">${item.qty}</span>
          <button class="cart-stepper-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="حذف">✕</button>
      </div>
    `;
  });
  html += '</div>';
  drawerBody.innerHTML = html;
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
  navigator.clipboard.writeText(text).then(() => {
    if (btnElem) {
      const origText = btnElem.innerHTML;
      btnElem.innerHTML = '✓ تم النسخ!';
      btnElem.style.backgroundColor = 'var(--brand-green)';
      btnElem.style.color = '#FFFFFF';
      setTimeout(() => {
        btnElem.innerHTML = origText;
        btnElem.style.backgroundColor = '';
        btnElem.style.color = '';
      }, 2000);
    }
  }).catch(() => {
    prompt('انسخ الرقم يدوياً:', text);
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

// Dynamic CMS Data Helpers
function getCmsCampaignsData() {
  try {
    const raw = localStorage.getItem(CMS_CAMPAIGNS_KEY);
    if (raw) return JSON.parse(raw);
    localStorage.setItem(CMS_CAMPAIGNS_KEY, JSON.stringify(DEFAULT_CAMPAIGNS));
    return DEFAULT_CAMPAIGNS;
  } catch (e) {
    return DEFAULT_CAMPAIGNS;
  }
}

function getCmsSettingsData() {
  try {
    const raw = localStorage.getItem(CMS_SETTINGS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

// Hydrate Public Pages with CMS Content & Settings
function hydrateCmsContent() {
  const settings = getCmsSettingsData();
  if (!settings) return;

  // Hero Section
  const heroBadge = document.querySelector('.hero-badge-pill span');
  const heroTitle = document.querySelector('.hero-heading');
  const heroDesc = document.querySelector('.hero-description');

  if (heroBadge && settings.heroBadge) heroBadge.textContent = settings.heroBadge;
  if (heroTitle && settings.heroTitle && !window.location.pathname.includes('store.html')) {
    heroTitle.textContent = settings.heroTitle;
  }
  if (heroDesc && settings.heroDesc && !window.location.pathname.includes('store.html')) {
    heroDesc.textContent = settings.heroDesc;
  }

  // Vodafone Cash & InstaPay in Checkout or contact
  const vfNumbers = document.querySelectorAll('.vodafone-num-val');
  vfNumbers.forEach(elem => {
    if (settings.vodafoneCash) elem.textContent = settings.vodafoneCash;
  });

  const ipAddresses = document.querySelectorAll('.instapay-addr-val');
  ipAddresses.forEach(elem => {
    if (settings.instaPay) elem.textContent = settings.instaPay;
  });
}

// Dynamic Rendering of Campaign Cards in Store & Index Pages
function renderDynamicCampaignCards() {
  const grid = document.querySelector('.campaigns-cards-grid');
  if (!grid) return;

  const campaigns = getCmsCampaignsData();
  let html = '';

  campaigns.forEach(c => {
    const target = Number(c.targetAmount) || 1;
    const collected = Number(c.collectedAmount) || 0;
    const remaining = Math.max(0, target - collected);
    const pct = Math.min(100, Math.round((collected / target) * 100));

    // Preset buttons
    const presets = Array.isArray(c.presets) && c.presets.length > 0 
      ? c.presets 
      : [Math.round(c.unitPrice * 0.5), c.unitPrice, c.unitPrice * 2];
    
    let presetsHtml = '';
    presets.forEach((amt, idx) => {
      const isDefault = Number(amt) === Number(c.unitPrice) || (idx === 1);
      presetsHtml += `<button type="button" class="amount-preset-chip ${isDefault ? 'active' : ''}" data-amt="${amt}">${amt} ج</button>`;
    });

    html += `
      <div class="campaign-card" data-id="${c.id}" data-tab-type="${c.category}">
        <div class="campaign-card-poster">
          <img src="${c.image || 'school.jpg'}" alt="${c.title}" onerror="this.src='school.jpg'">
          <span class="campaign-card-badge ${c.badgeColor || 'orange'}">${c.badge || 'سهم تبرع'}</span>
        </div>
        <div class="campaign-card-body">
          <span class="campaign-category-tag">${c.tag || '#جمعية_الإسراء_الخيرية'}</span>
          <h3 class="campaign-item-title">${c.title}</h3>
          <p class="campaign-item-desc">${c.desc}</p>
          
          <div class="campaign-metrics-box">
            <div class="metrics-target-row">
              <div class="metric-target-item">
                <span class="metric-target-label">المستهدف:</span>
                <span class="metric-target-value">${target.toLocaleString('ar-EG')} ج.م</span>
              </div>
              <div class="metric-target-item" style="text-align: left;">
                <span class="metric-target-label">تم جمع:</span>
                <span class="metric-collected-value">${collected.toLocaleString('ar-EG')} ج.م</span>
              </div>
            </div>
            <div class="campaign-progress-bar-wrap">
              <div class="campaign-progress-bar-fill ${pct >= 70 ? 'orange' : ''}" style="width: ${pct}%;"></div>
            </div>
            <div class="metrics-sub-row">
              <span>المتبقي: <strong class="remaining-amount-tag">${remaining.toLocaleString('ar-EG')} ج.م</strong></span>
              <span class="badge-pct">${pct}% منجز</span>
            </div>
          </div>

          <div class="amount-presets-row">
            ${presetsHtml}
          </div>

          <div class="campaign-controls-row">
            <div class="amount-stepper-box">
              <input type="text" class="amount-stepper-input" value="${c.unitPrice}" readonly>
              <div class="stepper-arrows">
                <button type="button" class="stepper-btn stepper-up" aria-label="زيادة">+</button>
                <button type="button" class="stepper-btn stepper-down" aria-label="نقصان">-</button>
              </div>
            </div>
            <button type="button" class="btn-add-cart">
              <span>🛒 أضف للسلة</span>
            </button>
          </div>
          
          <button type="button" class="btn-donate-now-orange">
            <span>تبرع الآن 🧡</span>
          </button>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
  attachCampaignCardEvents();
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

    const cardId = card.getAttribute('data-id') || Math.random().toString(36).substring(7);
    const cardTitle = card.querySelector('.campaign-item-title') ? card.querySelector('.campaign-item-title').textContent.trim() : 'تبرع عام';
    const cardCategory = card.querySelector('.campaign-category-tag') ? card.querySelector('.campaign-category-tag').textContent.trim() : 'عام';
    const cardImg = card.querySelector('.campaign-card-poster img') ? card.querySelector('.campaign-card-poster img').getAttribute('src') : 'hostel.jpg';
    const defaultAmount = input ? Number(input.value) || 100 : 100;
    const baseStep = defaultAmount >= 500 ? 100 : (defaultAmount >= 100 ? 50 : 25);

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

// Main Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Cart State & Badges
  updateCartBadges();
  renderCartDrawer();

  // 2. Hydrate Dynamic CMS Data
  hydrateCmsContent();
  renderDynamicCampaignCards();

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
  const checkoutItemsContainer = document.querySelector('.checkout-items-summary');
  const checkoutTotalElem = document.querySelector('.checkout-total-val');
  if (checkoutItemsContainer) {
    const cart = getCart();
    const total = getCartTotal();

    if (checkoutTotalElem) {
      checkoutTotalElem.textContent = `${total.toLocaleString('ar-EG')} ج.م`;
    }

    if (cart.length === 0) {
      checkoutItemsContainer.innerHTML = `
        <div style="text-align:center; padding:30px; color:var(--text-muted);">
          <p style="font-size:1.05rem; margin-bottom:14px;">لم تقم باختيار أي حملة تبرع بعد.</p>
          <a href="store.html" class="btn-primary" style="padding:8px 18px;">اختر من حملات التبرع</a>
        </div>
      `;
    } else {
      let html = '<ul style="display:flex; flex-direction:column; gap:12px;">';
      cart.forEach(item => {
        html += `
          <li style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
            <div>
              <strong style="color:var(--text-main); font-size:1rem;">${item.title}</strong>
              <div style="font-size:0.85rem; color:var(--text-light);">${item.amount} ج.م × ${item.qty}</div>
            </div>
            <span style="font-weight:800; color:var(--accent-orange); font-size:1.1rem;">
              ${(item.amount * item.qty).toLocaleString('ar-EG')} ج.م
            </span>
          </li>
        `;
      });
      html += '</ul>';
      checkoutItemsContainer.innerHTML = html;
    }

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
});
