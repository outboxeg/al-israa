/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Full Admin CMS Dashboard Engine
 * Powered by NGOhub
 */

// Storage Keys
const CMS_CAMPAIGNS_KEY = 'al_israa_cms_campaigns';
const CMS_SETTINGS_KEY = 'al_israa_cms_settings';
const CMS_PARTNERS_KEY = 'al_israa_cms_partners';
const CMS_INBOX_KEY = 'al_israa_cms_inbox';
const CMS_WEBHOOK_KEY = 'al_israa_cms_webhook';
const CMS_AUTH_KEY = 'al_israa_admin_session';

// Default Seed Data
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

const DEFAULT_SETTINGS = {
  heroBadge: "الموقع الرسمي لجمعية الإسراء الخيرية بدمنهور",
  heroTitle: "أثرٌ إنساني وتنموي يمتد.. ورعاية كريمة لأهالينا بالبحيرة",
  heroDesc: "منذ 2006.. نقود مسيرة تنموية متكاملة عبر دار ضيافة مجانية لمرضى الأورام، مجمع خدمات طبية واجتماعية من 5 طوابق، مشروعات تمكين اقتصادي \"أرزاق\"، ومبادرة المدارس الخضراء الذكية \"برة الصندوق\" بالشراكة مع وزارة التضامن والتربية والتعليم.",
  vodafoneCash: "01026410313",
  instaPay: "israa.charity@instapay",
  bankMisr: "بنك مصر - فرع دمنهور - حساب رقم: 15400100009876",
  bankNBE: "البنك الأهلي المصري - فرع دمنهور - حساب رقم: 0102345678912",
  phone: "045-3318920 / 01026410313",
  whatsapp: "01026410313",
  email: "al_israa_ngo@yahoo.com",
  address: "دمنهور - محافظة البحيرة - شارع مدرسة ناصر الفكرية - خلف معهد الأورام القومي",
  adminUser: "admin",
  adminPass: "israa2026"
};

const DEFAULT_PARTNERS = [
  { id: "p1", name: "وزارة التضامن الاجتماعي", image: "partner-tadamun.png" },
  { id: "p2", name: "وزارة التربية والتعليم والتعليم الفني", image: "partner-education.png" },
  { id: "p3", name: "أمانة المراكز المتخصصة (معهد أورام دمنهور)", image: "partner-oncology.png" },
  { id: "p4", name: "هيئة إنقاذ الطفولة الدولية (Save the Children)", image: "partner-save-children.svg" },
  { id: "p5", name: "المبادرة الوطنية للمشروعات الخضراء الذكية", image: "partner-sgg.png" },
  { id: "p6", name: "مؤسسة Outbox (المدارس الخضراء الذكية)", image: "logo-outbox.png" },
  { id: "p7", name: "منصة NGOhub الرقمية", image: "ngohub-logo.png" }
];

// Helper Functions for Data
function getCmsCampaigns() {
  try {
    const raw = localStorage.getItem(CMS_CAMPAIGNS_KEY);
    if (!raw) {
      localStorage.setItem(CMS_CAMPAIGNS_KEY, JSON.stringify(DEFAULT_CAMPAIGNS));
      return DEFAULT_CAMPAIGNS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_CAMPAIGNS;
  }
}

function saveCmsCampaigns(campaigns) {
  try {
    localStorage.setItem(CMS_CAMPAIGNS_KEY, JSON.stringify(campaigns));
    showAdminToast('تم حفظ الحملات بنجاح 💾');
    renderCampaignsTable();
    updateOverviewStats();
  } catch (e) {
    alert('تعذر حفظ البيانات: ' + e.message);
  }
}

function getCmsSettings() {
  try {
    const raw = localStorage.getItem(CMS_SETTINGS_KEY);
    if (!raw) {
      localStorage.setItem(CMS_SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
      return DEFAULT_SETTINGS;
    }
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

function saveCmsSettings(settings) {
  try {
    localStorage.setItem(CMS_SETTINGS_KEY, JSON.stringify(settings));
    showAdminToast('تم تحديث النصوص والإعدادات 💾');
  } catch (e) {
    alert('تعذر الحفظ: ' + e.message);
  }
}

function getCmsPartners() {
  try {
    const raw = localStorage.getItem(CMS_PARTNERS_KEY);
    if (!raw) {
      localStorage.setItem(CMS_PARTNERS_KEY, JSON.stringify(DEFAULT_PARTNERS));
      return DEFAULT_PARTNERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_PARTNERS;
  }
}

function saveCmsPartners(partners) {
  try {
    localStorage.setItem(CMS_PARTNERS_KEY, JSON.stringify(partners));
    showAdminToast('تم تحديث قائمة الشركاء 🤝');
    renderPartnersTable();
  } catch (e) {
    alert('تعذر الحفظ: ' + e.message);
  }
}

function getCmsInbox() {
  try {
    const raw = localStorage.getItem(CMS_INBOX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCmsInbox(inbox) {
  try {
    localStorage.setItem(CMS_INBOX_KEY, JSON.stringify(inbox));
    renderInboxTable();
    updateOverviewStats();
  } catch (e) {}
}

// Toast Notification
function showAdminToast(msg, icon = '✅') {
  const toast = document.getElementById('adminToast');
  const msgElem = document.getElementById('adminToastMsg');
  const iconElem = document.getElementById('adminToastIcon');
  if (!toast) return;
  if (msgElem) msgElem.textContent = msg;
  if (iconElem) iconElem.textContent = icon;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

// Authentication Controller
function checkAuth() {
  const isLogged = sessionStorage.getItem(CMS_AUTH_KEY);
  const overlay = document.getElementById('loginOverlay');
  if (isLogged === 'true') {
    if (overlay) overlay.style.display = 'none';
  } else {
    if (overlay) overlay.style.display = 'flex';
  }
}

function initAuth() {
  const loginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('adminLogoutBtn');
  const errorMsg = document.getElementById('loginErrorMsg');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = document.getElementById('adminUsername').value.trim();
      const passInput = document.getElementById('adminPassword').value.trim();
      const settings = getCmsSettings();

      if (userInput === settings.adminUser && passInput === settings.adminPass) {
        sessionStorage.setItem(CMS_AUTH_KEY, 'true');
        document.getElementById('loginOverlay').style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';
        showAdminToast('مرحباً بك في لوحة تحكم جمعية الإسراء 🌟');
      } else {
        if (errorMsg) errorMsg.style.display = 'block';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(CMS_AUTH_KEY);
      window.location.reload();
    });
  }
}

// Navigation & Tab Switching
function switchAdminTab(targetTabId) {
  const tabs = document.querySelectorAll('.admin-nav-item');
  const panes = document.querySelectorAll('.admin-tab-pane');
  const heading = document.getElementById('pageTitleHeading');

  tabs.forEach(tab => {
    const btn = tab.querySelector('button');
    if (btn && btn.getAttribute('data-tab-target') === targetTabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  panes.forEach(pane => {
    if (pane.id === targetTabId) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  const titles = {
    'tab-overview': 'نظرة عامة وإحصائيات المنصة',
    'tab-campaigns': 'إدارة حملات المتجر والأسعار',
    'tab-content': 'إدارة نصوص الموقع والحسابات البنكية',
    'tab-inbox': 'صندوق الطلبات والاستمارات الواردة',
    'tab-partners': 'إدارة شركاء النجاح والرعاة',
    'tab-backup': 'الربط السحابي والنسخ الاحتياطي'
  };
  if (heading && titles[targetTabId]) {
    heading.textContent = titles[targetTabId];
  }
}

// Overview Stats Updater
function updateOverviewStats() {
  const campaigns = getCmsCampaigns();
  const inbox = getCmsInbox();

  const totalCampaigns = campaigns.length;
  const totalTarget = campaigns.reduce((s, c) => s + (Number(c.targetAmount) || 0), 0);
  const totalCollected = campaigns.reduce((s, c) => s + (Number(c.collectedAmount) || 0), 0);

  const statCamp = document.getElementById('statTotalCampaigns');
  const statTarget = document.getElementById('statTotalTarget');
  const statColl = document.getElementById('statTotalCollected');
  const statInbox = document.getElementById('statTotalInbox');

  if (statCamp) statCamp.textContent = totalCampaigns;
  if (statTarget) statTarget.textContent = `${totalTarget.toLocaleString('ar-EG')} ج.م`;
  if (statColl) statColl.textContent = `${totalCollected.toLocaleString('ar-EG')} ج.م`;
  if (statInbox) statInbox.textContent = inbox.length;
}

// Campaigns Table Renderer
function renderCampaignsTable() {
  const tbody = document.getElementById('campaignsTableBody');
  if (!tbody) return;
  const campaigns = getCmsCampaigns();

  if (campaigns.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:#64748B;">لا توجد حملات مسجلة حالياً. اضغط على "إضافة حملة جديدة" للبدء.</td></tr>`;
    return;
  }

  let html = '';
  campaigns.forEach((c, idx) => {
    const target = Number(c.targetAmount) || 1;
    const collected = Number(c.collectedAmount) || 0;
    const pct = Math.min(100, Math.round((collected / target) * 100));

    const categoryNames = {
      health: 'صحة وأورام 🏥',
      empowerment: 'تمكين وأرزاق 💼',
      green: 'تعليم وبيئة 🌿',
      ongoing: 'صدقة جارية ✨'
    };

    html += `
      <tr>
        <td>
          <img src="${c.image || 'school.jpg'}" alt="${c.title}" class="table-thumb" onerror="this.src='school.jpg'">
        </td>
        <td>
          <div style="font-weight:800; color:#0F172A;">${c.title}</div>
          <div style="font-size:0.75rem; color:#64748B;">${c.tag || ''}</div>
        </td>
        <td>
          <span style="font-size:0.85rem; font-weight:700;">${categoryNames[c.category] || c.category}</span>
        </td>
        <td>
          <span style="font-weight:800; color:var(--brand-green);">${Number(c.unitPrice).toLocaleString('ar-EG')} ج.م</span>
        </td>
        <td>${target.toLocaleString('ar-EG')} ج.م</td>
        <td>${collected.toLocaleString('ar-EG')} ج.م</td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="flex:1; height:8px; background:#E2E8F0; border-radius:4px; overflow:hidden;">
              <div style="height:100%; width:${pct}%; background:${pct >= 70 ? '#EA580C' : '#2F6E3A'};"></div>
            </div>
            <span style="font-size:0.78rem; font-weight:800; color:#475569;">${pct}%</span>
          </div>
        </td>
        <td style="text-align:center; white-space:nowrap;">
          <button type="button" class="btn-sm-edit" onclick="openEditCampaignModal('${c.id}')">تعديل ✏️</button>
          <button type="button" class="btn-sm-del" onclick="deleteCampaign('${c.id}')">حذف 🗑️</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// Modal CRUD for Campaigns
function openAddCampaignModal() {
  document.getElementById('campaignModalHeading').textContent = 'إضافة حملة تبرع جديدة';
  document.getElementById('modalCampaignId').value = '';
  document.getElementById('modalCampaignTitle').value = '';
  document.getElementById('modalCampaignCategory').value = 'health';
  document.getElementById('modalCampaignTag').value = '';
  document.getElementById('modalCampaignBadge').value = '';
  document.getElementById('modalCampaignBadgeColor').value = 'orange';
  document.getElementById('modalCampaignUnitPrice').value = '';
  document.getElementById('modalCampaignTarget').value = '';
  document.getElementById('modalCampaignCollected').value = '0';
  document.getElementById('modalCampaignPresets').value = '';
  document.getElementById('modalCampaignImageUrl').value = '';
  document.getElementById('modalCampaignDesc').value = '';

  const preview = document.getElementById('modalImagePreview');
  if (preview) {
    preview.src = '';
    preview.style.display = 'none';
  }

  document.getElementById('campaignModal').classList.add('active');
}

function openEditCampaignModal(id) {
  const campaigns = getCmsCampaigns();
  const c = campaigns.find(item => item.id === id);
  if (!c) return;

  document.getElementById('campaignModalHeading').textContent = `تعديل حملة: ${c.title}`;
  document.getElementById('modalCampaignId').value = c.id;
  document.getElementById('modalCampaignTitle').value = c.title || '';
  document.getElementById('modalCampaignCategory').value = c.category || 'health';
  document.getElementById('modalCampaignTag').value = c.tag || '';
  document.getElementById('modalCampaignBadge').value = c.badge || '';
  document.getElementById('modalCampaignBadgeColor').value = c.badgeColor || 'orange';
  document.getElementById('modalCampaignUnitPrice').value = c.unitPrice || '';
  document.getElementById('modalCampaignTarget').value = c.targetAmount || '';
  document.getElementById('modalCampaignCollected').value = c.collectedAmount || '0';
  document.getElementById('modalCampaignPresets').value = Array.isArray(c.presets) ? c.presets.join(', ') : (c.presets || '');
  document.getElementById('modalCampaignImageUrl').value = c.image || '';
  document.getElementById('modalCampaignDesc').value = c.desc || '';

  const preview = document.getElementById('modalImagePreview');
  if (preview && c.image) {
    preview.src = c.image;
    preview.style.display = 'block';
  }

  document.getElementById('campaignModal').classList.add('active');
}

function closeCampaignModal() {
  document.getElementById('campaignModal').classList.remove('active');
}

// Client-Side Image Resizer & Base64 Converter
function handleImageFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      // Auto-downsample using Canvas to max 800px width/height to conserve LocalStorage
      const canvas = document.createElement('canvas');
      const maxDim = 800;
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Generate optimized JPEG Data URL
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
      
      const preview = document.getElementById('modalImagePreview');
      const urlInput = document.getElementById('modalCampaignImageUrl');
      if (preview) {
        preview.src = compressedDataUrl;
        preview.style.display = 'block';
      }
      if (urlInput) {
        urlInput.value = compressedDataUrl;
      }
      showAdminToast('تم رفع وضغط الصورة بنجاح 🖼️');
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function deleteCampaign(id) {
  if (!confirm('هل أنت متأكد من حذف هذه الحملة من المتجر؟')) return;
  let campaigns = getCmsCampaigns();
  campaigns = campaigns.filter(c => c.id !== id);
  saveCmsCampaigns(campaigns);
}

// Settings Form Handlers
function loadSettingsToForm() {
  const s = getCmsSettings();
  document.getElementById('settingHeroBadge').value = s.heroBadge || '';
  document.getElementById('settingHeroTitle').value = s.heroTitle || '';
  document.getElementById('settingHeroDesc').value = s.heroDesc || '';
  document.getElementById('settingVodafoneCash').value = s.vodafoneCash || '';
  document.getElementById('settingInstaPay').value = s.instaPay || '';
  document.getElementById('settingBankMisr').value = s.bankMisr || '';
  document.getElementById('settingBankNBE').value = s.bankNBE || '';
  document.getElementById('settingPhone').value = s.phone || '';
  document.getElementById('settingWhatsapp').value = s.whatsapp || '';
  document.getElementById('settingEmail').value = s.email || '';
  document.getElementById('settingAddress').value = s.address || '';
  document.getElementById('settingAdminUser').value = s.adminUser || 'admin';
  document.getElementById('settingAdminPass').value = s.adminPass || 'israa2026';

  const webhookInput = document.getElementById('settingWebhookUrl');
  if (webhookInput) {
    webhookInput.value = localStorage.getItem(CMS_WEBHOOK_KEY) || '';
  }
}

function saveSettingsFromForm() {
  const current = getCmsSettings();
  const updated = {
    ...current,
    heroBadge: document.getElementById('settingHeroBadge').value.trim(),
    heroTitle: document.getElementById('settingHeroTitle').value.trim(),
    heroDesc: document.getElementById('settingHeroDesc').value.trim(),
    vodafoneCash: document.getElementById('settingVodafoneCash').value.trim(),
    instaPay: document.getElementById('settingInstaPay').value.trim(),
    bankMisr: document.getElementById('settingBankMisr').value.trim(),
    bankNBE: document.getElementById('settingBankNBE').value.trim(),
    phone: document.getElementById('settingPhone').value.trim(),
    whatsapp: document.getElementById('settingWhatsapp').value.trim(),
    email: document.getElementById('settingEmail').value.trim(),
    address: document.getElementById('settingAddress').value.trim(),
    adminUser: document.getElementById('settingAdminUser').value.trim() || 'admin',
    adminPass: document.getElementById('settingAdminPass').value.trim() || 'israa2026'
  };
  saveCmsSettings(updated);
}

// Partners Manager Table
function renderPartnersTable() {
  const tbody = document.getElementById('partnersTableBody');
  if (!tbody) return;
  const partners = getCmsPartners();

  let html = '';
  partners.forEach(p => {
    html += `
      <tr>
        <td>
          <img src="${p.image}" alt="${p.name}" class="table-thumb" style="object-fit:contain; background:#FFFFFF; padding:4px;" onerror="this.src='logo.png'">
        </td>
        <td style="font-weight:800; color:#0F172A;">${p.name}</td>
        <td><code>${p.image}</code></td>
        <td style="text-align:center;">
          <button type="button" class="btn-sm-del" onclick="deletePartner('${p.id}')">حذف 🗑️</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function openAddPartnerModal() {
  const name = prompt('أدخل اسم الجهة الشريكة الجديدة:');
  if (!name) return;
  const img = prompt('أدخل مسار صورة الشعار (مثال: partner-name.png أو رابط مباشر):', 'logo.png');
  if (!img) return;

  const partners = getCmsPartners();
  partners.push({
    id: 'partner_' + Date.now(),
    name: name.trim(),
    image: img.trim()
  });
  saveCmsPartners(partners);
}

function deletePartner(id) {
  if (!confirm('هل تريد حذف هذه الجهة الشريكة؟')) return;
  let partners = getCmsPartners();
  partners = partners.filter(p => p.id !== id);
  saveCmsPartners(partners);
}

// Inbox & Bookings Table
function renderInboxTable() {
  const tbody = document.getElementById('inboxTableBody');
  if (!tbody) return;
  const inbox = getCmsInbox();

  if (inbox.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:#64748B;">لا توجد طلبات أو استفسارات واردة حتى الآن.</td></tr>`;
    return;
  }

  let html = '';
  inbox.forEach((item, index) => {
    html += `
      <tr>
        <td style="font-size:0.8rem; color:#64748B;">${item.date || 'الآن'}</td>
        <td style="font-weight:800; color:#0F172A;">${item.name || 'فاعل خير'}</td>
        <td><a href="tel:${item.phone}" style="color:var(--brand-green); font-weight:700;">${item.phone || '-'}</a></td>
        <td><span class="badge-admin blue">${item.type || 'عام'}</span></td>
        <td style="font-size:0.85rem; max-width:240px;">${item.details || '-'}</td>
        <td>
          <span class="badge-admin ${item.status === 'تم المتابعة' ? 'green' : 'orange'}">
            ${item.status || 'جديد'}
          </span>
        </td>
        <td style="text-align:center;">
          <button class="btn-sm-edit" onclick="toggleInboxStatus(${index})">
            ${item.status === 'تم المتابعة' ? 'إعادة كجديد' : 'تم التواصل ✅'}
          </button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function toggleInboxStatus(index) {
  const inbox = getCmsInbox();
  if (inbox[index]) {
    inbox[index].status = inbox[index].status === 'تم المتابعة' ? 'جديد' : 'تم المتابعة';
    saveCmsInbox(inbox);
  }
}

function clearInbox() {
  if (!confirm('تحذير: هل أنت متأكد من مسح جميع سجلات الوارد نهائياً؟')) return;
  saveCmsInbox([]);
  showAdminToast('تم مسح سجلات الوارد');
}

function exportInboxCSV() {
  const inbox = getCmsInbox();
  if (inbox.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }
  let csv = "\uFEFFالتاريخ,الاسم,الهاتف,النوع,التفاصيل,الحالة\n";
  inbox.forEach(item => {
    csv += `"${item.date || ''}","${item.name || ''}","${item.phone || ''}","${item.type || ''}","${(item.details || '').replace(/"/g, '""')}","${item.status || ''}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `al_israa_inbox_${Date.now()}.csv`;
  link.click();
}

// Full Site Backup & Restore
function exportDataJSON() {
  const backup = {
    version: "2.0",
    exportDate: new Date().toISOString(),
    campaigns: getCmsCampaigns(),
    settings: getCmsSettings(),
    partners: getCmsPartners(),
    inbox: getCmsInbox(),
    webhook: localStorage.getItem(CMS_WEBHOOK_KEY) || ""
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const link = document.createElement('a');
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `al_israa_backup_${Date.now()}.json`);
  link.click();
  showAdminToast('تم تصدير النسخة الاحتياطية بنجاح 📥');
}

function importDataJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (data.campaigns) localStorage.setItem(CMS_CAMPAIGNS_KEY, JSON.stringify(data.campaigns));
      if (data.settings) localStorage.setItem(CMS_SETTINGS_KEY, JSON.stringify(data.settings));
      if (data.partners) localStorage.setItem(CMS_PARTNERS_KEY, JSON.stringify(data.partners));
      if (data.inbox) localStorage.setItem(CMS_INBOX_KEY, JSON.stringify(data.inbox));
      if (data.webhook) localStorage.setItem(CMS_WEBHOOK_KEY, data.webhook);

      showAdminToast('تمت استعادة كافة البيانات بنجاح! جاري التحديث... 🌟');
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      alert('الملف غير صالح أو تالف: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToFactoryDefaults() {
  if (!confirm('⚠️ تحذير شديد: سيتم مسح كافة التعديلات واستعادة البيانات الأصلية الافتراضية. هل تود المتابعة؟')) return;
  localStorage.setItem(CMS_CAMPAIGNS_KEY, JSON.stringify(DEFAULT_CAMPAIGNS));
  localStorage.setItem(CMS_SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
  localStorage.setItem(CMS_PARTNERS_KEY, JSON.stringify(DEFAULT_PARTNERS));
  showAdminToast('تمت استعادة الإعدادات الأصلية 🔄');
  setTimeout(() => window.location.reload(), 1000);
}

// Google Sheets Webhook
function saveWebhookUrl() {
  const url = document.getElementById('settingWebhookUrl').value.trim();
  localStorage.setItem(CMS_WEBHOOK_KEY, url);
  showAdminToast('تم حفظ رابط الويب هوك السحابي 🔗');
}

function testWebhookConnection() {
  const url = document.getElementById('settingWebhookUrl').value.trim();
  if (!url) {
    alert('يرجى كتابة رابط Webhook أولاً');
    return;
  }
  showAdminToast('جاري إرسال إشارة اختبارية...', '📡');
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      date: new Date().toLocaleString('ar-EG'),
      type: "اختبار اتصال لوحة التحكم",
      name: "إدارة جمعية الإسراء",
      phone: "01026410313",
      service: "اختبار الويب هوك",
      details: "إشارة اختبارية ناجحة من لوحة تحكم CMS جمعية الإسراء بدمنهور",
      id: "test_" + Date.now()
    })
  })
  .then(() => {
    showAdminToast('تم إرسال إشارة الاختبار إلى شيت جوجل بنجاح ✅');
  })
  .catch(err => {
    alert('حدث خطأ أثناء الاتصال: ' + err.message);
  });
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  initAuth();

  // Tab Navigation Listeners
  const navBtns = document.querySelectorAll('.admin-nav-item button');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      if (target) switchAdminTab(target);
    });
  });

  // Campaign Form Submission
  const campaignForm = document.getElementById('campaignForm');
  if (campaignForm) {
    campaignForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('modalCampaignId').value.trim() || ('campaign_' + Date.now());
      const title = document.getElementById('modalCampaignTitle').value.trim();
      const category = document.getElementById('modalCampaignCategory').value;
      const tag = document.getElementById('modalCampaignTag').value.trim();
      const badge = document.getElementById('modalCampaignBadge').value.trim();
      const badgeColor = document.getElementById('modalCampaignBadgeColor').value;
      const unitPrice = Number(document.getElementById('modalCampaignUnitPrice').value) || 100;
      const targetAmount = Number(document.getElementById('modalCampaignTarget').value) || 1000;
      const collectedAmount = Number(document.getElementById('modalCampaignCollected').value) || 0;
      
      const presetsRaw = document.getElementById('modalCampaignPresets').value;
      const presets = presetsRaw.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n) && n > 0);

      const image = document.getElementById('modalCampaignImageUrl').value.trim() || 'school.jpg';
      const desc = document.getElementById('modalCampaignDesc').value.trim();

      let campaigns = getCmsCampaigns();
      const existingIdx = campaigns.findIndex(c => c.id === id);

      const campaignObj = {
        id,
        title,
        category,
        tag,
        badge,
        badgeColor,
        unitPrice,
        targetAmount,
        collectedAmount,
        presets: presets.length > 0 ? presets : [unitPrice / 2, unitPrice, unitPrice * 2],
        image,
        desc
      };

      if (existingIdx > -1) {
        campaigns[existingIdx] = campaignObj;
      } else {
        campaigns.unshift(campaignObj);
      }

      saveCmsCampaigns(campaigns);
      closeCampaignModal();
    });
  }

  // Quick Save Button
  const quickSave = document.getElementById('quickSaveAllBtn');
  if (quickSave) {
    quickSave.addEventListener('click', () => {
      saveSettingsFromForm();
    });
  }

  // Initial renders
  renderCampaignsTable();
  updateOverviewStats();
  loadSettingsToForm();
  renderPartnersTable();
  renderInboxTable();
});
