/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Page-by-Page CMS Controller Engine (v3.0)
 * Powered by NGOhub
 */

// Storage Keys
const PAGES_DATA_KEY = 'al_israa_cms_pages_data';
const CMS_INBOX_KEY = 'al_israa_cms_inbox';
const CMS_AUTH_KEY = 'al_israa_admin_session';
const VISITOR_STATS_KEY = 'al_israa_visitor_analytics';

// Complete High-Fidelity Default Seed Data for All 7 Pages
const DEFAULT_PAGES_DATA = {
  home: {
    hero: {
      badge: "الموقع الرسمي لجمعية الإسراء الخيرية بدمنهور",
      title: "أثرٌ إنساني وتنموي يمتد.. ورعاية كريمة لأهالينا بالبحيرة",
      desc: "منذ 2006.. نقود مسيرة تنموية متكاملة عبر دار ضيافة مجانية لمرضى الأورام، مجمع خدمات طبية واجتماعية من 5 طوابق، مشروعات تمكين اقتصادي \"أرزاق\"، ومبادرة المدارس الخضراء الذكية \"برة الصندوق\" بالشراكة مع وزارة التضامن والتربية والتعليم.",
      cta1: "تبرع الآن للمشروعات 🧡",
      cta2: "حجز دار ضيافة الأورام"
    },
    stats: [
      { val: "+3,500", lbl: "أسرة أولى بالرعاية" },
      { val: "+48,000", lbl: "وجبة علاجية للأورام" },
      { val: "24 سرير", lbl: "بدار ضيافة الأورام" },
      { val: "26 مدرسة", lbl: "خضراء ذكية Outbox" }
    ],
    outbox: {
      title: "برة الصندوق (Outbox) – منظومة المدارس الخضراء الذكية بالبحيرة",
      desc: "مبادرة بيئية واقتصادية رائدة ابتكرتها وترعاها أ. فاطمة عبد المجيد راضي وجمعية الإسراء بدمنهور بالشراكة مع مديرية التربية والتعليم بالبحيرة. تقوم على تدوير 180 طناً من الورق والكتب المدرسية سنوياً، وتصنيع 9 وسائل وألعاب تعليمية كرتونية بديلة للبلاستيك، مع تشغيل 217 سيدة معيلة في 10 فرق عمل.",
      kpis: ["26 مدرسة", "180 طناً", "510,000 ج.م", "3,060 شجرة"]
    },
    news: [
      {
        id: "news_1",
        title: "بحث سبل التوسع في مشروعات التمكين الاقتصادي بالبحيرة",
        date: "24 سبتمبر 2026",
        tag: "شراكات رسمية",
        desc: "لقاء رسمي لبحث دعم تروسيكلات أرزاق ومشاغل النول والسجاد، والتنسيق لدعم ورعاية مرضى معهد أورام دمنهور.",
        image: "governor.jpg",
        link: "projects.html"
      },
      {
        id: "news_2",
        title: "توزيع الشنط والزي المدرسي لأطفال الفصول المجتمعية",
        date: "18 سبتمبر 2026",
        tag: "التعليم والطفولة",
        desc: "بالشراكة مع هيئة إنقاذ الطفولة وUSAID، احتفت الجمعية بتسليم الأدوات المدرسية والوجبات للأطفال المتفوقين في قرى دمنهور.",
        image: "school.jpg",
        link: "projects.html"
      },
      {
        id: "news_3",
        title: "تسليم دفعة جديدة من تروسيكلات الطعام المصنعة بمدرسة دمنهور الزخرفية",
        date: "10 سبتمبر 2026",
        tag: "مشروع أرزاق",
        desc: "تم تسليم عربات مجهزة بالكامل لعدد من الشباب والمعيلين بالبحيرة لبدء أنشطتهم وتوفير دخل شهري كريم ومستدام.",
        image: "arzaq.jpg",
        link: "projects.html"
      }
    ],
    partners: [
      { id: "p1", name: "وزارة التضامن الاجتماعي", image: "partner-tadamun.png" },
      { id: "p2", name: "وزارة التربية والتعليم والتعليم الفني", image: "partner-education.png" },
      { id: "p3", name: "أمانة المراكز المتخصصة (معهد أورام دمنهور)", image: "partner-oncology.png" },
      { id: "p4", name: "هيئة إنقاذ الطفولة الدولية (Save the Children)", image: "partner-save-children.svg" },
      { id: "p5", name: "المبادرة الوطنية للمشروعات الخضراء الذكية", image: "partner-sgg.png" },
      { id: "p6", name: "مؤسسة Outbox (المدارس الخضراء الذكية)", image: "logo-outbox.png" },
      { id: "p7", name: "منصة NGOhub الرقمية", image: "ngohub-logo.png" }
    ],
    customBlocks: [
      {
        id: "blk_home_pharmacy",
        type: "card",
        title: "صيدلية مجمع الإسراء للأدوية المجانية",
        badge: "خدمة طبية مستمرة",
        text: "توفر صيدلية المجمع العلاج الشهري المجاني للأسر الأولى بالرعاية ومرضى الأورام والأمراض المزمنة بدمنهور والبحيرة بإشراف صيادلة متطوعين.",
        image: "complex.jpg",
        btnText: "تعرف على خدمات الصيدلية",
        btnLink: "complex.html"
      }
    ]
  },
  store: {
    header: {
      badge: "🛒 متجر الخير والصدقة الجارية بدمنهور",
      title: "اختر ما تجود به نفسك.. وكن شريكاً في صناعة الأثر",
      desc: "جميع أسهم وحملات التبرع أدناه معتمدة وموجهة لخدمة المستحقين الأولى بالرعاية، مرضى الأورام، والتعليم المجتمعي بمحافظة البحيرة. يمكنك إضافة أكثر من بند لسلتك ثم إتمام التحويل عبر البنك أو فودافون كاش أو إنستاباي."
    },
    campaigns: [
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
    ],
    customBlocks: [
      {
        id: "blk_store_quote",
        type: "text",
        style: "highlight",
        title: "فضل الصدقة الجارية في دعم المستحقين",
        text: "قال رسول الله ﷺ: «ما نقصت صدقة من مال، وما زاد الله عبداً بعفو إلا عِزاً». تبرعك اليوم يساند مريضاً ويتيماً وأسرة معيلة في قرى ومراكز دمنهور."
      }
    ]
  },
  complex: {
    intro: {
      title: "مجمع الإسراء التنموي الخيري بدمنهور",
      desc: "صرح خيري متكامل مكون من 5 طوابق لخدمة أبناء محافظة البحيرة، يضم عيادات طبية متخصصة، صيدلية خيرية، معمل تحاليل، مشاغل حرفية، ومحطة طاقة شمسية نظيفة.",
      area: "مبنى متكامل من 5 طوابق",
      clinics: "8 عيادات ومعمل وصيدلية",
      solar: "محطة طاقة شمسية بالسطح"
    },
    floors: [
      {
        id: "floor_ground",
        number: "الدور الأرضي",
        title: "الاستقبال ومطبخ الإطعام الخيري والصيدلية المجانية",
        desc: "مخصص لاستقبال المترددين، ويضم المطبخ الخيري الذي ينتج آلاف الوجبات العلاجية الساخنة لمرضى معهد الأورام، وصيدلية الجمعية الخيرية.",
        image: "kitchen.jpg"
      },
      {
        id: "floor_1",
        number: "الدور الأول",
        title: "العيادات التخصصية ومعمل التحاليل الطبية",
        desc: "يضم عيادات: الباطنة، الأورام، الأطفال، الأسنان، العظام، ومعملاً متكاملاً لإجراء التحاليل الدورية للأسر الأولى بالرعاية.",
        image: "complex.jpg"
      },
      {
        id: "floor_2",
        number: "الدور الثاني",
        title: "دار ضيافة مرضى الأورام ومرافقيهم",
        desc: "24 سريراً فندقياً مجهزاً بالكامل لاستضافة مرضى السرطان القادمين من مراكز وقرى البحيرة مجاناً طوال فترات تلقي العلاج.",
        image: "hostel.jpg"
      },
      {
        id: "floor_3",
        number: "الدور الثالث",
        title: "مشاغل التمكين والتدريب الحرفي (النول والخياطة)",
        desc: "ورش ومشاغل النول اليدوي والسجاد والكليم، وقاعات التدريب المهني وتفصيل الملابس لتمكين الأرامل والمطلقات والسيدات المعيلات.",
        image: "loom.jpg"
      },
      {
        id: "floor_4",
        number: "السطح والروف",
        title: "محطة الطاقة الشمسية النظيفة وغرف التحكم",
        desc: "محطة كهروضوئية متطورة تولد الطاقة النظيفة لكامل مبنى المجمع لتقليل الانبعاثات وتحقيق الاستدامة البيئية وترشيد استهلاك الكهرباء.",
        image: "solar.jpg"
      }
    ],
    customBlocks: [
      {
        id: "blk_complex_clinics",
        type: "text",
        style: "regular",
        title: "نخبة الأطباء والاستشاريين المتطوعين بالعيادات",
        text: "يشارك نخبة من استشاريي وأخصائيي دمنهور والإسكندرية في تقديم الكشوفات الطبية الرمزية والمجانية أسبوعياً في تخصصات الباطنة، الأورام، الأطفال، والعيون."
      }
    ]
  },
  hostel: {
    intro: {
      title: "دار ضيافة مرضى الأورام المجانية بدمنهور",
      desc: "ملاذ إنساني آمن يوفر الإقامة الكريمة، الأسرة المجهزة، والوجبات الغذائية الصحية مجاناً لمرضى الأورام ومرافقيهم أثناء رحلتهم العلاجية بمعهد دمنهور للأورام.",
      beds: "24 سريراً مجهزاً بالكامل",
      cost: "مجانية 100% بدون أي رسوم",
      hours: "متاح 24 ساعة طوال أيام الأسبوع"
    },
    criteria: [
      "أن يكون المريض مسجلاً بمعهد دمنهور القومي للأورام ويتلقى جلسات علاجية دورية.",
      "تقديم بطاقة الرقم القومي سارية للمريض والمرافق (من الدرجة الأولى).",
      "أن يكون محل الإقامة في قرى ومراكز محافظة البحيرة أو المحافظات المجاورة البعيدة عن مقر المعهد.",
      "الالتزام الكامل بالإرشادات الصحية وتعليمات إدارة الدار لسلامة الجميع."
    ],
    customBlocks: [
      {
        id: "blk_hostel_notice",
        type: "text",
        style: "quote",
        title: "تنويه هام للنزلاء والمرافقين",
        text: "الاستضافة والوجبات مجانية بنسبة 100%، ولا يتم تحصيل أي مقابل نقدي أو عيني تحت أي مسمى من أي مريض أو مرافق."
      }
    ]
  },
  projects: {
    intro: {
      title: "مشروعات التمكين الاقتصادي والتنمية المستدامة",
      desc: "نؤمن في جمعية الإسراء بأن الكرامة الإنسانية تبدأ بامتلاك مصدر دخل مستدام، لذا نطلق حزمة مشروعات إنتاجية وحرفية تحول الطاقات المعطلة إلى كوادر منتجة."
    },
    arzaq: {
      title: "مشروع أرزاق لتروسيكلات وعربات الطعام المتنقلة",
      desc: "تصنيع وتجهيز عربات وتروسيكلات طعام بأيدي طلاب مدرسة دمنهور الزخرفية وتسليمها للشباب ومعيلي الأسر لفتح باب رزق كريم ومستدام.",
      partner: "مدرسة دمنهور الثانوية الزخرفية",
      target: "الشباب ومعيلو الأسر بالبحيرة"
    },
    loom: {
      title: "مشاغل النول والسجاد اليدوي والخياطة للسيدات المعيلات",
      desc: "تدريب مكثف وتوفير أنوال وخامات الحرير والصوف وماكينات خياطة حديثة لإنتاج سجاد تراثي وملابس عالية الجودة وتسويقها لصالح الأسر."
    },
    customBlocks: [
      {
        id: "blk_projects_exhibit",
        type: "card",
        title: "معرض منتجات السجاد اليدوي والمشاغل",
        badge: "صنع بأيدي أمهات البحيرة",
        text: "يمكنكم اقتناء منتجات النول والسجاد اليدوي والمفروشات لدعم استمرارية دخل السيدات المعيلات وتوسيع المشاغل.",
        image: "loom.jpg",
        btnText: "طلب شراء أو دعم المشغل",
        btnLink: "contact.html"
      }
    ]
  },
  checkout: {
    wallets: {
      vodafoneCash: "01026410313",
      instaPay: "israa.charity@instapay",
      notes: "يرجى الاحتفاظ برقم العملية أو لقطة الشاشة لتأكيد التبرع وإرسال الإيصال الرسمي."
    },
    bankAccounts: [
      {
        id: "bank_1",
        bankName: "بنك مصر",
        accountNumber: "15400100009876",
        branch: "فرع دمنهور",
        iban: "EG1200020154000100009876001"
      },
      {
        id: "bank_2",
        bankName: "البنك الأهلي المصري",
        accountNumber: "0102345678912",
        branch: "فرع دمنهور",
        iban: "EG5400030010002345678912002"
      }
    ]
  },
  contact: {
    location: {
      address: "دمنهور، محافظة البحيرة - شارع مدرسة ناصر الفكرية، خلف معهد أورام دمنهور القومي. مبنى مجمع الإسراء التنموي (5 طوابق).",
      mapEmbedUrl: "https://maps.google.com/maps?q=%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1%20%D9%85%D8%B9%D9%87%D8%AF%20%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85&t=&z=15&ie=UTF8&iwloc=&output=embed",
      gpsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1%20%D9%85%D8%B9%D9%87%D8%AF%20%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%85"
    },
    phones: {
      primary: "045-3318920",
      mobile: "01026410313",
      email: "al_israa_ngo@yahoo.com",
      hours: "استقبال دار الضيافة متاح 24 ساعة لاستقبال الحالات الطارئة"
    },
    legal: {
      registration: "1124 لسنة 2006",
      publicBenefit: "قرار وزاري رقم 646 لسنة 2024",
      president: "أ. فاطمة عبد المجيد راضي"
    },
    customBlocks: [
      {
        id: "blk_contact_transit",
        type: "text",
        style: "highlight",
        title: "خطوط المواصلات العامة للمقر بدمنهور",
        text: "من موقف دمنهور العمومي أو محطة القطار: استقل ميكروباص حي ناصر الفكرية، وانزل مباشرة أمام مجمع الإسراء خلف معهد أورام دمنهور."
      }
    ]
  },
  admin: {
    user: "admin",
    pass: "israa2026",
    webhookUrl: ""
  }
};

// Data Layer Helper
function getPagesData() {
  let data = null;
  try {
    const raw = localStorage.getItem(PAGES_DATA_KEY);
    if (!raw) {
      localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(DEFAULT_PAGES_DATA));
      data = JSON.parse(JSON.stringify(DEFAULT_PAGES_DATA));
    } else {
      data = JSON.parse(raw);
    }
  } catch (e) {
    data = JSON.parse(JSON.stringify(DEFAULT_PAGES_DATA));
  }

  // Ensure customBlocks exists on every page
  ['home', 'store', 'complex', 'hostel', 'projects', 'contact'].forEach(p => {
    if (data[p] && !Array.isArray(data[p].customBlocks)) {
      data[p].customBlocks = (DEFAULT_PAGES_DATA[p] && Array.isArray(DEFAULT_PAGES_DATA[p].customBlocks)) 
        ? JSON.parse(JSON.stringify(DEFAULT_PAGES_DATA[p].customBlocks)) 
        : [];
    }
  });

  return data;
}

function savePagesData(data, toastMsg = 'تم الحفظ بنجاح 💾') {
  try {
    localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(data));
    showAdminToast(toastMsg);
    updateOverviewStats();
  } catch (e) {
    alert('تعذر حفظ البيانات: ' + e.message);
  }
}

// Toast Engine
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

// Accordion Controller (User-Friendly UX)
function toggleAccordion(headerElem) {
  const parent = headerElem.closest('.admin-accordion');
  if (parent) {
    parent.classList.toggle('open');
  }
}

// Page Tab Switching
function switchAdminPage(targetPageId) {
  const navItems = document.querySelectorAll('.admin-nav-item');
  const pagePanes = document.querySelectorAll('.admin-page-pane');
  const heading = document.getElementById('pageTitleHeading');
  const subtitle = document.getElementById('pageSubtitleDesc');
  const previewLink = document.getElementById('pageLivePreviewLink');

  navItems.forEach(item => {
    const btn = item.querySelector('button');
    if (btn && btn.getAttribute('data-page-target') === targetPageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  pagePanes.forEach(pane => {
    if (pane.id === targetPageId) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  const pageMeta = {
    'page-overview': { title: 'نظرة عامة ومؤشرات المنصة', desc: 'إحصائيات سريعة وخريطة لكافة صفحات الموقع وعناصرها.', url: 'index.html' },
    'page-home': { title: 'إدارة الصفحة الرئيسية (index.html)', desc: 'تحكم كامل في الهيرو، الأرقام، المدارس الخضراء، الأخبار، والشركاء.', url: 'index.html' },
    'page-store': { title: 'إدارة متجر التبرعات (store.html)', desc: 'تحكم كامل في ترويسة المتجر وحملات وأسهم التبرع والأسعار.', url: 'store.html' },
    'page-complex': { title: 'إدارة مجمع الإسراء التنموي (complex.html)', desc: 'تحكم في مقدمة المجمع وتفاصيل وأقسام الطوابق الخمسة.', url: 'complex.html' },
    'page-hostel': { title: 'إدارة دار ضيافة الأورام (hostel.html)', desc: 'تحكم في خدمات الدار، السعة الاستيعابية، وشروط القبول المجاني.', url: 'hostel.html' },
    'page-projects': { title: 'إدارة المشروعات والتمكين (projects.html)', desc: 'تحكم في مشروع أرزاق، مشاغل النول، وفصول التعليم المجتمعي.', url: 'projects.html' },
    'page-checkout': { title: 'إدارة إتمام التبرع والحسابات (checkout.html)', desc: 'تحكم في محافظ الكاش، إنستاباي، والحسابات البنكية الرسمية.', url: 'checkout.html' },
    'page-contact': { title: 'إدارة تواصل معنا والمقر (contact.html)', desc: 'تحكم في خريطة Google Map لدمنهور، الهواتف، والبيانات القانونية.', url: 'contact.html' },
    'page-inbox': { title: 'صندوق الطلبات والاستفسارات الواردة', desc: 'استعراض وفرز طلبات دار الضيافة، التدريب، والتواصل، وتصدير Excel.', url: 'contact.html' },
    'page-backup': { title: 'النسخ الاحتياطي والربط السحابي', desc: 'تصدير واستعادة ملف JSON الشامل، وربط Google Sheets Webhook.', url: 'index.html' }
  };

  if (pageMeta[targetPageId]) {
    if (heading) heading.textContent = pageMeta[targetPageId].title;
    if (subtitle) subtitle.textContent = pageMeta[targetPageId].desc;
    if (previewLink) previewLink.href = pageMeta[targetPageId].url;
  }

  if (targetPageId === 'page-overview') {
    setTimeout(() => {
      refreshVisitorAnalyticsUI();
    }, 50);
  }
}

// Client-Side Image Resizer & Base64 Converter
function handleImageFileUpload(e, previewId, inputId) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
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

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
      
      const preview = document.getElementById(previewId);
      const urlInput = document.getElementById(inputId);
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

// ============================================================================
// ADVANCED VISITOR ANALYTICS & CANVAS CHART ENGINE
// ============================================================================
let currentChartPeriod = '7days';

function getVisitorAnalytics() {
  try {
    const raw = localStorage.getItem(VISITOR_STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

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
      { type: 'checkout', text: 'فتح صفحة إتمام التبرع والتحويل البنكي', time: 'منذ 14 دقيقة', icon: '💳' },
      { type: 'visit', text: 'زيارة الصفحة الرئيسية عبر بحث Google دمنهور', time: 'منذ 18 دقيقة', icon: '🔍' }
    ]
  };
  try {
    localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(baseData));
  } catch (e) {}
  return baseData;
}

function switchChartPeriod(period, btnElem) {
  currentChartPeriod = period;
  const btns = document.querySelectorAll('.analytics-filter-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
  renderVisitorChart();
}

function renderVisitorChart() {
  const canvas = document.getElementById('visitorTrafficCanvas');
  if (!canvas) return;

  const parent = canvas.parentElement;
  const dpr = window.devicePixelRatio || 1;
  const displayWidth = parent.clientWidth || 700;
  const displayHeight = 260;

  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;
  canvas.style.width = displayWidth + 'px';
  canvas.style.height = displayHeight + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, displayWidth, displayHeight);

  const analytics = getVisitorAnalytics();

  let points = [];
  if (currentChartPeriod === '7days') {
    points = (analytics.dailyHistory && analytics.dailyHistory.length > 0)
      ? analytics.dailyHistory.map(d => ({ label: d.dayName, val1: d.visits, val2: d.uniques }))
      : [
          { label: 'الأحد', val1: 1840, val2: 820 },
          { label: 'الإثنين', val1: 2120, val2: 940 },
          { label: 'الثلاثاء', val1: 1980, val2: 890 },
          { label: 'الأربعاء', val1: 2450, val2: 1090 },
          { label: 'الخميس', val1: 2790, val2: 1240 },
          { label: 'الجمعة', val1: 2210, val2: 990 },
          { label: 'السبت', val1: 1452, val2: 650 }
        ];
  } else if (currentChartPeriod === 'today') {
    points = [
      { label: '03:00 ص', val1: 42, val2: 18 },
      { label: '06:00 ص', val1: 110, val2: 45 },
      { label: '09:00 ص', val1: 320, val2: 140 },
      { label: '12:00 م', val1: 490, val2: 210 },
      { label: '03:00 م', val1: 440, val2: 195 },
      { label: '06:00 م', val1: 580, val2: 260 },
      { label: '09:00 م', val1: 670, val2: 310 },
      { label: 'الآن', val1: 340, val2: 155 }
    ];
  } else {
    points = [
      { label: 'الأسبوع 1', val1: 12800, val2: 5400 },
      { label: 'الأسبوع 2', val1: 14200, val2: 6100 },
      { label: 'الأسبوع 3', val1: 15600, val2: 6800 },
      { label: 'الأسبوع 4', val1: 17100, val2: 7400 },
      { label: 'هذا الأسبوع', val1: 14842, val2: 6430 }
    ];
  }

  const padding = { top: 35, right: 30, bottom: 40, left: 60 };
  const graphWidth = displayWidth - padding.left - padding.right;
  const graphHeight = displayHeight - padding.top - padding.bottom;

  const maxVal = Math.max(...points.map(p => p.val1)) * 1.15 || 100;

  // Background Grid Lines
  ctx.strokeStyle = '#F1F5F9';
  ctx.lineWidth = 1;
  ctx.font = '11px "Cairo", sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.textAlign = 'right';

  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const y = padding.top + (graphHeight / gridSteps) * i;
    const value = Math.round(maxVal - (maxVal / gridSteps) * i);
    
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(displayWidth - padding.right, y);
    ctx.stroke();

    ctx.fillText(value.toLocaleString('ar-EG'), padding.left - 10, y + 4);
  }

  const stepX = graphWidth / (points.length - 1);
  const coords1 = points.map((p, idx) => ({
    x: padding.left + idx * stepX,
    y: padding.top + graphHeight - (p.val1 / maxVal) * graphHeight,
    label: p.label,
    val: p.val1
  }));

  const coords2 = points.map((p, idx) => ({
    x: padding.left + idx * stepX,
    y: padding.top + graphHeight - (p.val2 / maxVal) * graphHeight,
    val: p.val2
  }));

  // Gradient area
  const areaGrad = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight);
  areaGrad.addColorStop(0, 'rgba(47, 110, 58, 0.28)');
  areaGrad.addColorStop(1, 'rgba(47, 110, 58, 0.0)');

  // Draw Area
  ctx.beginPath();
  ctx.moveTo(coords1[0].x, padding.top + graphHeight);
  coords1.forEach((pt, idx) => {
    if (idx === 0) {
      ctx.lineTo(pt.x, pt.y);
    } else {
      const prev = coords1[idx - 1];
      const cx = (prev.x + pt.x) / 2;
      ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
    }
  });
  ctx.lineTo(coords1[coords1.length - 1].x, padding.top + graphHeight);
  ctx.closePath();
  ctx.fillStyle = areaGrad;
  ctx.fill();

  // Draw Line 2 (Dotted blue uniques)
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = '#3B82F6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  coords2.forEach((pt, idx) => {
    if (idx === 0) {
      ctx.moveTo(pt.x, pt.y);
    } else {
      const prev = coords2[idx - 1];
      const cx = (prev.x + pt.x) / 2;
      ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
    }
  });
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw Line 1 (Solid emerald visits)
  ctx.strokeStyle = '#2F6E3A';
  ctx.lineWidth = 3;
  ctx.beginPath();
  coords1.forEach((pt, idx) => {
    if (idx === 0) {
      ctx.moveTo(pt.x, pt.y);
    } else {
      const prev = coords1[idx - 1];
      const cx = (prev.x + pt.x) / 2;
      ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
    }
  });
  ctx.stroke();

  // Draw Points & Labels
  ctx.textAlign = 'center';
  coords1.forEach((pt, idx) => {
    ctx.fillStyle = '#64748B';
    ctx.font = '11px "Cairo", sans-serif';
    ctx.fillText(pt.label, pt.x, displayHeight - 12);

    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#2F6E3A';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    if (idx === coords1.length - 1 || pt.val === Math.max(...points.map(p => p.val1))) {
      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 11px "Cairo", sans-serif';
      ctx.fillText(`${pt.val.toLocaleString('ar-EG')}`, pt.x, pt.y - 10);
    }
  });

  // Chart Legend at Top Right
  ctx.textAlign = 'right';
  ctx.font = 'bold 11px "Cairo", sans-serif';

  ctx.fillStyle = '#2F6E3A';
  ctx.beginPath();
  ctx.arc(displayWidth - padding.right - 130, padding.top - 18, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('إجمالي الزيارات', displayWidth - padding.right - 140, padding.top - 14);

  ctx.fillStyle = '#3B82F6';
  ctx.beginPath();
  ctx.arc(displayWidth - padding.right, padding.top - 18, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText('الزوار الفريدين', displayWidth - padding.right - 10, padding.top - 14);
}

function refreshVisitorAnalyticsUI() {
  const analytics = getVisitorAnalytics();
  const pagesData = getPagesData();
  const campaigns = (pagesData.store && pagesData.store.campaigns) || [];
  const totalDonated = campaigns.reduce((s, c) => s + (Number(c.collectedAmount) || 0), 0);

  // 1. KPI Cards
  const totalVisitsElem = document.getElementById('analyticsTotalVisits');
  const uniqueElem = document.getElementById('analyticsUniqueVisitors');
  const activeNowElem = document.getElementById('analyticsActiveNow');
  const donationsElem = document.getElementById('analyticsTotalDonations');

  if (totalVisitsElem) totalVisitsElem.textContent = Number(analytics.totalVisits || 14842).toLocaleString('ar-EG');
  if (uniqueElem) uniqueElem.textContent = Number(analytics.uniqueVisitors || 6430).toLocaleString('ar-EG');
  if (activeNowElem) activeNowElem.textContent = analytics.activeNow || 14;
  if (donationsElem) donationsElem.textContent = `${totalDonated.toLocaleString('ar-EG')} ج.م`;

  // 2. Devices Breakdown
  const dev = analytics.deviceStats || { mobile: 68, desktop: 26, tablet: 6 };
  const mobPct = document.getElementById('metricMobilePct');
  const mobBar = document.getElementById('metricMobileBar');
  const dskPct = document.getElementById('metricDesktopPct');
  const dskBar = document.getElementById('metricDesktopBar');
  const tabPct = document.getElementById('metricTabletPct');
  const tabBar = document.getElementById('metricTabletBar');

  if (mobPct) mobPct.textContent = `${dev.mobile}%`;
  if (mobBar) mobBar.style.width = `${dev.mobile}%`;
  if (dskPct) dskPct.textContent = `${dev.desktop}%`;
  if (dskBar) dskBar.style.width = `${dev.desktop}%`;
  if (tabPct) tabPct.textContent = `${dev.tablet}%`;
  if (tabBar) tabBar.style.width = `${dev.tablet}%`;

  // 3. Top Pages Ranking List
  const topPagesContainer = document.getElementById('topPagesListContainer');
  if (topPagesContainer) {
    const pageViews = analytics.pageViews || {
      'index.html': 6240,
      'store.html': 3820,
      'complex.html': 1490,
      'hostel.html': 1380,
      'projects.html': 980,
      'checkout.html': 620,
      'contact.html': 312
    };

    const pageMeta = [
      { file: 'index.html', name: 'الصفحة الرئيسية', icon: '🏠' },
      { file: 'store.html', name: 'متجر التبرعات الشامل', icon: '🛒' },
      { file: 'complex.html', name: 'مجمع الإسراء التنموي (5 طوابق)', icon: '🏥' },
      { file: 'hostel.html', name: 'دار ضيافة الأورام المجانية', icon: '🛏️' },
      { file: 'projects.html', name: 'مشروعات التمكين و Outbox', icon: '💼' },
      { file: 'checkout.html', name: 'إتمام التبرع والتحويل', icon: '💳' },
      { file: 'contact.html', name: 'تواصل معنا وخريطة دمنهور', icon: '📍' }
    ];

    const sortedPages = pageMeta.map(p => ({
      ...p,
      views: Number(pageViews[p.file]) || 0
    })).sort((a, b) => b.views - a.views);

    const maxViews = sortedPages[0].views || 1;

    let pagesHtml = '';
    sortedPages.forEach((p, idx) => {
      const pct = Math.round((p.views / maxViews) * 100);
      pagesHtml += `
        <div class="analytics-metric-row">
          <div class="analytics-metric-info">
            <span><strong>${idx + 1}.</strong> ${p.icon} ${p.name}</span>
            <span><strong style="color:var(--brand-green);">${p.views.toLocaleString('ar-EG')}</strong> زيارة</span>
          </div>
          <div class="analytics-progress-track">
            <div class="analytics-progress-bar ${idx === 0 ? '' : (idx === 1 ? 'orange' : (idx === 2 ? 'blue' : 'purple'))}" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    });
    topPagesContainer.innerHTML = pagesHtml;
  }

  // 4. Live Activity Stream Feed
  const streamContainer = document.getElementById('liveActivityStreamContainer');
  if (streamContainer) {
    const activity = analytics.recentActivity || [];
    let streamHtml = '';
    activity.slice(0, 5).forEach(item => {
      streamHtml += `
        <div class="analytics-activity-item">
          <div class="activity-item-icon">${item.icon || '⚡'}</div>
          <div class="activity-item-body">
            <div class="activity-item-title">${item.text}</div>
            <div class="activity-item-time">${item.time}</div>
          </div>
        </div>
      `;
    });
    streamContainer.innerHTML = streamHtml || '<p style="color:#64748B; font-size:0.85rem;">لا يوجد نشاط مسجل حديثاً.</p>';
  }

  // 5. Render Canvas Chart
  renderVisitorChart();
}

function exportAnalyticsCSV() {
  const analytics = getVisitorAnalytics();
  let csv = "المؤشر,القيمة\r\n";
  csv += `إجمالي الزيارات,${analytics.totalVisits || 14842}\r\n`;
  csv += `الزوار الفريدين,${analytics.uniqueVisitors || 6430}\r\n`;
  csv += `المتصلين الآن,${analytics.activeNow || 14}\r\n\r\n`;
  csv += "الصفحة,الزيارات\r\n";
  if (analytics.pageViews) {
    Object.keys(analytics.pageViews).forEach(page => {
      csv += `${page},${analytics.pageViews[page]}\r\n`;
    });
  }
  csv += "\r\nاليوم,التاريخ,إجمالي الزيارات,الزوار الفريدين\r\n";
  if (analytics.dailyHistory) {
    analytics.dailyHistory.forEach(d => {
      csv += `${d.dayName},${d.date},${d.visits},${d.uniques}\r\n`;
    });
  }

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `al_israa_visitor_analytics_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showAdminToast('تم تصدير تقرير الإحصائيات CSV بنجاح 📄');
}

function resetVisitorAnalytics() {
  if (!confirm('هل أنت متأكد من رغبتك في تصفير وإعادة ضبط إحصائيات الزوار إلى الحالة الافتراضية؟')) return;
  localStorage.removeItem(VISITOR_STATS_KEY);
  getVisitorAnalytics();
  refreshVisitorAnalyticsUI();
  showAdminToast('تمت إعادة ضبط إحصائيات الزوار بنجاح 🔄');
}

function updateOverviewStats() {
  refreshVisitorAnalyticsUI();
}

// ============================================================================
// WORDPRESS-LIKE ELEMENT & BLOCK BUILDER CONTROLLER
// ============================================================================
function renderPageCustomBlocks(pageKey) {
  const container = document.getElementById(`${pageKey}CustomBlocksBuilder`);
  if (!container) return;

  const d = getPagesData();
  const pageObj = d[pageKey] || {};
  const blocks = Array.isArray(pageObj.customBlocks) ? pageObj.customBlocks : [];

  if (blocks.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:24px; color:#64748B; background:#FFFFFF; border:1px dashed #CBD5E1; border-radius:10px; margin-bottom:12px;">
        <div style="font-size:1.8rem; margin-bottom:6px;">🧩</div>
        <div style="font-weight:700; font-size:0.95rem;">لم تتم إضافة أي بلوك مخصص في هذه الصفحة بعد.</div>
        <div style="font-size:0.8rem; margin-top:4px;">استخدم أزرار شريط الأدوات أعلاه لإضافة فقرات، صور، بطاقات، أو أخبار بحرية ومرونة.</div>
      </div>
    `;
    return;
  }

  let html = '';
  blocks.forEach((block, idx) => {
    const typeLabels = {
      text: { name: 'فقرة نصية', icon: '📝', cls: 'text-type' },
      image: { name: 'صورة وميديا', icon: '🖼️', cls: 'image-type' },
      card: { name: 'بطاقة محتوى', icon: '📦', cls: 'card-type' },
      heading: { name: 'عنوان بارز', icon: '🏷️', cls: 'heading-type' },
      news: { name: 'خبر أو مقال', icon: '📰', cls: 'news-type' },
      section: { name: 'قسم مخصص', icon: '✨', cls: 'section-type' }
    };

    const tInfo = typeLabels[block.type] || { name: 'عنصر مخصص', icon: '🧩', cls: '' };

    html += `
      <div class="wp-block-card ${tInfo.cls}" data-block-id="${block.id}" data-block-idx="${idx}">
        <div class="wp-block-header">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="wp-block-type-badge">${tInfo.icon} ${tInfo.name}</span>
            <strong style="font-size:0.92rem; color:#1E293B;">${block.title || `بلوك رقم ${idx + 1}`}</strong>
          </div>
          <div class="wp-block-actions">
            <button type="button" class="wp-action-btn" title="تحريك لأعلى" onclick="moveBlockInPage('${pageKey}', '${block.id}', -1)">⬆️</button>
            <button type="button" class="wp-action-btn" title="تحريك لأسفل" onclick="moveBlockInPage('${pageKey}', '${block.id}', 1)">⬇️</button>
            <button type="button" class="wp-action-btn" title="تكرار ونسخ البلوك" onclick="duplicateBlockInPage('${pageKey}', '${block.id}')">📋 نسخ</button>
            <button type="button" class="wp-action-btn del" title="حذف البلوك" onclick="deleteBlockFromPage('${pageKey}', '${block.id}')">🗑️ مسح</button>
          </div>
        </div>

        <div class="wp-block-body">
    `;

    if (block.type === 'text') {
      html += `
        <div class="admin-form-group">
          <label>عنوان الفقرة (اختياري)</label>
          <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="عنوان فرعي توضيحي...">
        </div>
        <div class="admin-form-group">
          <label>النص والفقرة</label>
          <textarea rows="3" class="admin-textarea block-field-text" placeholder="اكتب النص هنا بحرية...">${block.text || ''}</textarea>
        </div>
        <div class="admin-form-group">
          <label>أسلوب المظهر (Style)</label>
          <select class="admin-select block-field-style">
            <option value="" ${!block.style ? 'selected' : ''}>عادي - خلفية بيضاء</option>
            <option value="highlight" ${block.style === 'highlight' ? 'selected' : ''}>إبراز أخضر هادئ (Highlight Callout)</option>
            <option value="quote" ${block.style === 'quote' ? 'selected' : ''}>اقتباس ذهبي/برتقالي (Quote Box)</option>
          </select>
        </div>
      `;
    } else if (block.type === 'image') {
      html += `
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>عنوان أو وصف مختصر للصورة</label>
            <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="مثال: جانب من ورشة عمل...">
          </div>
          <div class="admin-form-group">
            <label>التعليق التوضيحي (Caption)</label>
            <input type="text" class="admin-input block-field-caption" value="${block.caption || ''}" placeholder="تعليق أسفل الصورة...">
          </div>
        </div>
        <div class="admin-form-group">
          <label>رفع صورة مباشرة من جهازك أو رابط الصورة</label>
          <div class="image-uploader-box" onclick="document.getElementById('imgUpload_${block.id}').click()">
            <div style="font-size:1.4rem; margin-bottom:2px;">📸</div>
            <div style="font-size:0.85rem; font-weight:700;">انقر لرفع صورة جديدة من جهازك</div>
            <input type="file" id="imgUpload_${block.id}" accept="image/*" style="display:none;" onchange="handleImageFileUpload(event, 'imgPreview_${block.id}', 'imgInput_${block.id}')">
            <img id="imgPreview_${block.id}" class="image-preview-slot" src="${block.image || 'complex.jpg'}" alt="معاينة">
          </div>
          <input type="text" id="imgInput_${block.id}" class="admin-input block-field-image" value="${block.image || ''}" style="margin-top:8px;" placeholder="مسار الصورة مثلاً complex.jpg أو رابط">
        </div>
      `;
    } else if (block.type === 'card') {
      html += `
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>عنوان البطاقة *</label>
            <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="عنوان البطاقة">
          </div>
          <div class="admin-form-group">
            <label>الشارة الترويجية (Badge)</label>
            <input type="text" class="admin-input block-field-badge" value="${block.badge || ''}" placeholder="مثال: خدمة مميزة">
          </div>
        </div>
        <div class="admin-form-group">
          <label>الوصف والتفاصيل</label>
          <textarea rows="2" class="admin-textarea block-field-text" placeholder="اكتب تفاصيل الخدمة أو البطاقة...">${block.text || ''}</textarea>
        </div>
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label>مسار / رابط صورة البطاقة</label>
            <input type="text" class="admin-input block-field-image" value="${block.image || ''}" placeholder="complex.jpg">
          </div>
          <div class="admin-form-group">
            <label>نص الزر</label>
            <input type="text" class="admin-input block-field-btnText" value="${block.btnText || ''}" placeholder="مثال: اقرأ المزيد">
          </div>
          <div class="admin-form-group">
            <label>رابط الزر (URL)</label>
            <input type="text" class="admin-input block-field-btnLink" value="${block.btnLink || ''}" placeholder="complex.html">
          </div>
        </div>
      `;
    } else if (block.type === 'heading') {
      html += `
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label>العنوان الرئيسي (H2) *</label>
            <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="عنوان القسم البارز...">
          </div>
          <div class="admin-form-group">
            <label>العنوان الفرعي (Subtitle)</label>
            <input type="text" class="admin-input block-field-subtitle" value="${block.subtitle || ''}" placeholder="شرح مبسط...">
          </div>
          <div class="admin-form-group">
            <label>شارة التبويب (Badge)</label>
            <input type="text" class="admin-input block-field-badge" value="${block.badge || ''}" placeholder="مثال: أثر مستدام 🌿">
          </div>
        </div>
      `;
    } else if (block.type === 'news') {
      html += `
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label>عنوان الخبر / التقرير *</label>
            <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="عنوان الخبر">
          </div>
          <div class="admin-form-group">
            <label>التاريخ</label>
            <input type="text" class="admin-input block-field-date" value="${block.date || ''}" placeholder="سبتمبر 2026">
          </div>
          <div class="admin-form-group">
            <label>التصنيف (Tag)</label>
            <input type="text" class="admin-input block-field-tag" value="${block.tag || ''}" placeholder="#أخبار_الإسراء">
          </div>
        </div>
        <div class="admin-form-group">
          <label>ملخص وتفاصيل المقال</label>
          <textarea rows="3" class="admin-textarea block-field-text" placeholder="اكتب ملخص الخبر هنا...">${block.text || ''}</textarea>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>صورة الخبر (مسار أو رابط)</label>
            <input type="text" class="admin-input block-field-image" value="${block.image || 'complex.jpg'}">
          </div>
          <div class="admin-form-group">
            <label>رابط قراءة التفاصيل</label>
            <input type="text" class="admin-input block-field-btnLink" value="${block.btnLink || 'projects.html'}">
          </div>
        </div>
      `;
    } else if (block.type === 'section') {
      html += `
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label>عنوان القسم الرئيسي *</label>
            <input type="text" class="admin-input block-field-title" value="${block.title || ''}" placeholder="عنوان القسم">
          </div>
          <div class="admin-form-group">
            <label>العنوان التوضيحي</label>
            <input type="text" class="admin-input block-field-subtitle" value="${block.subtitle || ''}" placeholder="وصف مقتضب">
          </div>
          <div class="admin-form-group">
            <label>لون خلفية القسم</label>
            <select class="admin-select block-field-bgColor">
              <option value="#FFFFFF" ${block.bgColor === '#FFFFFF' ? 'selected' : ''}>أبيض ناصع (#FFFFFF)</option>
              <option value="#F8FAFC" ${block.bgColor === '#F8FAFC' || !block.bgColor ? 'selected' : ''}>رمادي فاتح هادئ (#F8FAFC)</option>
              <option value="#F0FDF4" ${block.bgColor === '#F0FDF4' ? 'selected' : ''}>أخضر طبيعي ناعم (#F0FDF4)</option>
              <option value="#0F172A" ${block.bgColor === '#0F172A' ? 'selected' : ''}>داكن كحلي احترافي (#0F172A)</option>
            </select>
          </div>
        </div>
        <div class="admin-form-group">
          <label>محتوى القسم</label>
          <textarea rows="4" class="admin-textarea block-field-text" placeholder="اكتب محتوى القسم هنا...">${block.text || ''}</textarea>
        </div>
      `;
    }

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function addNewBlockToPage(pageKey, blockType) {
  const d = getPagesData();
  if (!d[pageKey]) d[pageKey] = {};
  if (!Array.isArray(d[pageKey].customBlocks)) d[pageKey].customBlocks = [];

  const newId = `blk_${pageKey}_${Date.now()}`;
  let newBlock = { id: newId, type: blockType };

  switch (blockType) {
    case 'text':
      newBlock.title = 'فقرة نصية جديدة';
      newBlock.text = 'أدخل نص ومحتوى الفقرة هنا بحرية تامة...';
      newBlock.style = '';
      break;
    case 'image':
      newBlock.title = 'صورة جديدة';
      newBlock.image = 'complex.jpg';
      newBlock.caption = 'تعليق توضيحي للصورة';
      break;
    case 'card':
      newBlock.title = 'بطاقة خدمة جديدة';
      newBlock.text = 'شرح تفصيلي لما تقدمه هذه الخدمة أو المشروع...';
      newBlock.badge = 'جديد ✨';
      newBlock.image = 'complex.jpg';
      newBlock.btnText = 'معرفة المزيد';
      newBlock.btnLink = 'complex.html';
      break;
    case 'heading':
      newBlock.title = 'عنوان رئيسي جديد';
      newBlock.subtitle = 'وصف توضيحي جذاب لمحتوى هذا القسم';
      newBlock.badge = 'قسم جديد 🌟';
      break;
    case 'news':
      newBlock.title = 'خبر جديد من أنشطة الجمعية';
      newBlock.date = 'سبتمبر 2026';
      newBlock.tag = '#أخبار_الإسراء';
      newBlock.text = 'تفاصيل الخبر أو الفعالية التنموية المنفذة...';
      newBlock.image = 'complex.jpg';
      newBlock.btnLink = 'projects.html';
      break;
    case 'section':
      newBlock.title = 'قسم مخصص جديد';
      newBlock.subtitle = 'نبذة موجزة عن هذا القسم';
      newBlock.text = 'محتوى تفصيلي للقسم المخصص...';
      newBlock.bgColor = '#F8FAFC';
      break;
  }

  d[pageKey].customBlocks.push(newBlock);
  savePagesData(d, 'تمت إضافة البلوك بنجاح 🧩');
  renderPageCustomBlocks(pageKey);
}

function deleteBlockFromPage(pageKey, blockId) {
  if (!confirm('هل أنت متأكد من مسح هذا البلوك؟')) return;
  const d = getPagesData();
  if (d[pageKey] && Array.isArray(d[pageKey].customBlocks)) {
    d[pageKey].customBlocks = d[pageKey].customBlocks.filter(b => b.id !== blockId);
    savePagesData(d, 'تم مسح البلوك 🗑️');
    renderPageCustomBlocks(pageKey);
  }
}

function moveBlockInPage(pageKey, blockId, delta) {
  const d = getPagesData();
  if (!d[pageKey] || !Array.isArray(d[pageKey].customBlocks)) return;
  const idx = d[pageKey].customBlocks.findIndex(b => b.id === blockId);
  if (idx < 0) return;

  const targetIdx = idx + delta;
  if (targetIdx < 0 || targetIdx >= d[pageKey].customBlocks.length) return;

  const temp = d[pageKey].customBlocks[idx];
  d[pageKey].customBlocks[idx] = d[pageKey].customBlocks[targetIdx];
  d[pageKey].customBlocks[targetIdx] = temp;

  savePagesData(d, 'تم إعادة ترتيب البلوك ↕️');
  renderPageCustomBlocks(pageKey);
}

function duplicateBlockInPage(pageKey, blockId) {
  const d = getPagesData();
  if (!d[pageKey] || !Array.isArray(d[pageKey].customBlocks)) return;
  const original = d[pageKey].customBlocks.find(b => b.id === blockId);
  if (!original) return;

  const clone = JSON.parse(JSON.stringify(original));
  clone.id = `blk_${pageKey}_${Date.now()}`;
  clone.title = (clone.title || '') + ' (نسخة)';

  d[pageKey].customBlocks.push(clone);
  savePagesData(d, 'تم نسخ البلوك بنجاح 📋');
  renderPageCustomBlocks(pageKey);
}

function savePageCustomBlocks(pageKey) {
  const container = document.getElementById(`${pageKey}CustomBlocksBuilder`);
  if (!container) return;

  const d = getPagesData();
  if (!d[pageKey]) d[pageKey] = {};

  const cards = container.querySelectorAll('.wp-block-card');
  const updatedBlocks = [];

  cards.forEach(card => {
    const id = card.getAttribute('data-block-id');
    const existing = (d[pageKey].customBlocks || []).find(b => b.id === id) || { id, type: 'text' };
    const type = existing.type;

    const blockObj = { id, type };

    const titleInput = card.querySelector('.block-field-title');
    if (titleInput) blockObj.title = titleInput.value.trim();

    const textInput = card.querySelector('.block-field-text');
    if (textInput) blockObj.text = textInput.value.trim();

    const styleInput = card.querySelector('.block-field-style');
    if (styleInput) blockObj.style = styleInput.value;

    const captionInput = card.querySelector('.block-field-caption');
    if (captionInput) blockObj.caption = captionInput.value.trim();

    const imgInput = card.querySelector('.block-field-image');
    if (imgInput) blockObj.image = imgInput.value.trim();

    const badgeInput = card.querySelector('.block-field-badge');
    if (badgeInput) blockObj.badge = badgeInput.value.trim();

    const btnTextInput = card.querySelector('.block-field-btnText');
    if (btnTextInput) blockObj.btnText = btnTextInput.value.trim();

    const btnLinkInput = card.querySelector('.block-field-btnLink');
    if (btnLinkInput) blockObj.btnLink = btnLinkInput.value.trim();

    const subtitleInput = card.querySelector('.block-field-subtitle');
    if (subtitleInput) blockObj.subtitle = subtitleInput.value.trim();

    const dateInput = card.querySelector('.block-field-date');
    if (dateInput) blockObj.date = dateInput.value.trim();

    const tagInput = card.querySelector('.block-field-tag');
    if (tagInput) blockObj.tag = tagInput.value.trim();

    const bgColorInput = card.querySelector('.block-field-bgColor');
    if (bgColorInput) blockObj.bgColor = bgColorInput.value;

    updatedBlocks.push(blockObj);
  });

  d[pageKey].customBlocks = updatedBlocks;
  savePagesData(d, `تم حفظ بلوكات صفحة (${pageKey}) بنجاح 💾`);
  renderPageCustomBlocks(pageKey);
}

// ============================================================================
// POPULATE & SAVE HANDLERS FOR EACH SECTION (PAGE-BY-PAGE)
// ============================================================================

// --- PAGE 1: HOME ---
function loadHomePage() {
  const d = getPagesData().home || DEFAULT_PAGES_DATA.home;

  // Hero
  document.getElementById('homeHeroBadge').value = d.hero.badge || '';
  document.getElementById('homeHeroTitle').value = d.hero.title || '';
  document.getElementById('homeHeroDesc').value = d.hero.desc || '';
  document.getElementById('homeHeroCta1').value = d.hero.cta1 || '';
  document.getElementById('homeHeroCta2').value = d.hero.cta2 || '';

  // Stats
  if (d.stats && d.stats.length >= 4) {
    document.getElementById('homeStat1Val').value = d.stats[0].val;
    document.getElementById('homeStat1Lbl').value = d.stats[0].lbl;
    document.getElementById('homeStat2Val').value = d.stats[1].val;
    document.getElementById('homeStat2Lbl').value = d.stats[1].lbl;
    document.getElementById('homeStat3Val').value = d.stats[2].val;
    document.getElementById('homeStat3Lbl').value = d.stats[2].lbl;
    document.getElementById('homeStat4Val').value = d.stats[3].val;
    document.getElementById('homeStat4Lbl').value = d.stats[3].lbl;
  }

  // Outbox
  document.getElementById('homeOutboxTitle').value = d.outbox.title || '';
  document.getElementById('homeOutboxDesc').value = d.outbox.desc || '';
  if (d.outbox.kpis && d.outbox.kpis.length >= 4) {
    document.getElementById('homeOutboxKpi1').value = d.outbox.kpis[0];
    document.getElementById('homeOutboxKpi2').value = d.outbox.kpis[1];
    document.getElementById('homeOutboxKpi3').value = d.outbox.kpis[2];
    document.getElementById('homeOutboxKpi4').value = d.outbox.kpis[3];
  }

  // News
  renderHomeNewsCards();

  // Partners
  renderHomePartners();

  // WordPress-like Custom Blocks
  renderPageCustomBlocks('home');
}

function saveHomeHero() {
  const d = getPagesData();
  d.home.hero = {
    badge: document.getElementById('homeHeroBadge').value.trim(),
    title: document.getElementById('homeHeroTitle').value.trim(),
    desc: document.getElementById('homeHeroDesc').value.trim(),
    cta1: document.getElementById('homeHeroCta1').value.trim(),
    cta2: document.getElementById('homeHeroCta2').value.trim()
  };
  savePagesData(d, 'تم حفظ قسم الهيرو بنجاح 💾');
}

function saveHomeStats() {
  const d = getPagesData();
  d.home.stats = [
    { val: document.getElementById('homeStat1Val').value.trim(), lbl: document.getElementById('homeStat1Lbl').value.trim() },
    { val: document.getElementById('homeStat2Val').value.trim(), lbl: document.getElementById('homeStat2Lbl').value.trim() },
    { val: document.getElementById('homeStat3Val').value.trim(), lbl: document.getElementById('homeStat3Lbl').value.trim() },
    { val: document.getElementById('homeStat4Val').value.trim(), lbl: document.getElementById('homeStat4Lbl').value.trim() }
  ];
  savePagesData(d, 'تم حفظ قسم الإحصائيات بنجاح 💾');
}

function saveHomeOutbox() {
  const d = getPagesData();
  d.home.outbox = {
    title: document.getElementById('homeOutboxTitle').value.trim(),
    desc: document.getElementById('homeOutboxDesc').value.trim(),
    kpis: [
      document.getElementById('homeOutboxKpi1').value.trim(),
      document.getElementById('homeOutboxKpi2').value.trim(),
      document.getElementById('homeOutboxKpi3').value.trim(),
      document.getElementById('homeOutboxKpi4').value.trim()
    ]
  };
  savePagesData(d, 'تم حفظ قسم مبادرة Outbox بنجاح 💾');
}

// News Dynamic Items
function renderHomeNewsCards() {
  const container = document.getElementById('homeNewsCardsContainer');
  if (!container) return;
  const news = (getPagesData().home && getPagesData().home.news) || [];

  let html = '';
  news.forEach((item, idx) => {
    html += `
      <div class="dynamic-item-card" data-idx="${idx}">
        <div class="dynamic-item-header">
          <strong>خبر ${idx + 1}: ${item.title}</strong>
          <button type="button" class="btn-sm-del" onclick="deleteNewsCard(${idx})">حذف الخبر 🗑️</button>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>عنوان الخبر</label>
            <input type="text" class="admin-input news-input-title" value="${item.title || ''}">
          </div>
          <div class="admin-form-group">
            <label>التاريخ والتصنيف</label>
            <div style="display:flex; gap:8px;">
              <input type="text" class="admin-input news-input-date" value="${item.date || ''}" placeholder="التاريخ">
              <input type="text" class="admin-input news-input-tag" value="${item.tag || ''}" placeholder="التصنيف">
            </div>
          </div>
        </div>
        <div class="admin-form-group">
          <label>ملخص وتفاصيل الخبر</label>
          <textarea rows="2" class="admin-textarea news-input-desc">${item.desc || ''}</textarea>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>مسار الصورة (مثلاً governor.jpg أو رابط أو رفع صورة)</label>
            <input type="text" class="admin-input news-input-img" id="newsImgInput_${idx}" value="${item.image || ''}">
          </div>
          <div class="admin-form-group" style="display:flex; align-items:flex-end;">
            <label class="btn-outline" style="padding:10px; cursor:pointer; width:100%; text-align:center;">
              <span>رفع صورة من جهازك 📸</span>
              <input type="file" accept="image/*" style="display:none;" onchange="handleImageFileUpload(event, 'newsImgPreview_${idx}', 'newsImgInput_${idx}')">
            </label>
          </div>
        </div>
        <img id="newsImgPreview_${idx}" class="image-preview-slot" src="${item.image || ''}" alt="معاينة" style="${item.image ? 'display:block;' : 'display:none;'}">
      </div>
    `;
  });
  container.innerHTML = html;
}

function addNewNewsCard() {
  const d = getPagesData();
  if (!d.home.news) d.home.news = [];
  d.home.news.push({
    id: 'news_' + Date.now(),
    title: 'خبر جديد من جمعية الإسراء',
    date: new Date().toLocaleDateString('ar-EG'),
    tag: 'أخبار الجمعية',
    desc: 'تفاصيل الخبر الجديد والأنشطة الميدانية المنفذة...',
    image: 'complex.jpg',
    link: 'projects.html'
  });
  savePagesData(d, 'تمت إضافة خبر جديد');
  renderHomeNewsCards();
}

function deleteNewsCard(idx) {
  if (!confirm('هل تريد حذف هذا الخبر؟')) return;
  const d = getPagesData();
  d.home.news.splice(idx, 1);
  savePagesData(d, 'تم حذف الخبر');
  renderHomeNewsCards();
}

function saveHomeNews() {
  const d = getPagesData();
  const cards = document.querySelectorAll('#homeNewsCardsContainer .dynamic-item-card');
  const updatedNews = [];

  cards.forEach(card => {
    updatedNews.push({
      id: 'news_' + Math.random().toString(36).substring(7),
      title: card.querySelector('.news-input-title').value.trim(),
      date: card.querySelector('.news-input-date').value.trim(),
      tag: card.querySelector('.news-input-tag').value.trim(),
      desc: card.querySelector('.news-input-desc').value.trim(),
      image: card.querySelector('.news-input-img').value.trim() || 'complex.jpg',
      link: 'projects.html'
    });
  });

  d.home.news = updatedNews;
  savePagesData(d, 'تم حفظ قسم الأخبار بنجاح 💾');
}

// Partners Dynamic Items
function renderHomePartners() {
  const container = document.getElementById('homePartnersContainer');
  if (!container) return;
  const partners = (getPagesData().home && getPagesData().home.partners) || [];

  let html = '';
  partners.forEach((p, idx) => {
    html += `
      <div class="dynamic-item-card" data-idx="${idx}">
        <div class="dynamic-item-header">
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="${p.image}" alt="${p.name}" style="height:36px; max-width:80px; object-fit:contain; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:2px;" onerror="this.src='logo.png'">
            <strong>${p.name}</strong>
          </div>
          <button type="button" class="btn-sm-del" onclick="deletePartnerCard(${idx})">حذف 🗑️</button>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>اسم الجهة الشريكة</label>
            <input type="text" class="admin-input partner-input-name" value="${p.name || ''}">
          </div>
          <div class="admin-form-group">
            <label>مسار الصورة / الشعار (مثلاً partner-tadamun.png)</label>
            <input type="text" class="admin-input partner-input-img" id="partnerImgInput_${idx}" value="${p.image || ''}">
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addNewPartnerCard() {
  const d = getPagesData();
  if (!d.home.partners) d.home.partners = [];
  d.home.partners.push({
    id: 'partner_' + Date.now(),
    name: 'جهة شريكة جديدة',
    image: 'logo.png'
  });
  savePagesData(d, 'تمت إضافة جهة شريكة');
  renderHomePartners();
}

function deletePartnerCard(idx) {
  if (!confirm('هل تريد حذف هذه الجهة الشريكة؟')) return;
  const d = getPagesData();
  d.home.partners.splice(idx, 1);
  savePagesData(d, 'تم حذف الشريك');
  renderHomePartners();
}

function saveHomePartners() {
  const d = getPagesData();
  const cards = document.querySelectorAll('#homePartnersContainer .dynamic-item-card');
  const updatedPartners = [];

  cards.forEach(card => {
    updatedPartners.push({
      id: 'partner_' + Math.random().toString(36).substring(7),
      name: card.querySelector('.partner-input-name').value.trim(),
      image: card.querySelector('.partner-input-img').value.trim() || 'logo.png'
    });
  });

  d.home.partners = updatedPartners;
  savePagesData(d, 'تم حفظ قسم الشركاء بنجاح 💾');
}

// --- PAGE 2: STORE ---
function loadStorePage() {
  const d = getPagesData().store || DEFAULT_PAGES_DATA.store;
  document.getElementById('storeHeroBadge').value = d.header.badge || '';
  document.getElementById('storeHeroTitle').value = d.header.title || '';
  document.getElementById('storeHeroDesc').value = d.header.desc || '';
  renderStoreCampaignsList();
  renderPageCustomBlocks('store');
}

function saveStoreHeader() {
  const d = getPagesData();
  d.store.header = {
    badge: document.getElementById('storeHeroBadge').value.trim(),
    title: document.getElementById('storeHeroTitle').value.trim(),
    desc: document.getElementById('storeHeroDesc').value.trim()
  };
  savePagesData(d, 'تم حفظ ترويسة المتجر 💾');
}

function renderStoreCampaignsList() {
  const container = document.getElementById('storeCampaignsListContainer');
  if (!container) return;
  const campaigns = (getPagesData().store && getPagesData().store.campaigns) || [];

  let html = '';
  campaigns.forEach((c, idx) => {
    const target = Number(c.targetAmount) || 1;
    const collected = Number(c.collectedAmount) || 0;
    const pct = Math.min(100, Math.round((collected / target) * 100));

    html += `
      <div class="dynamic-item-card">
        <div class="dynamic-item-header">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${c.image || 'school.jpg'}" alt="${c.title}" style="width:48px; height:40px; border-radius:6px; object-fit:cover; border:1px solid #CBD5E1;" onerror="this.src='school.jpg'">
            <div>
              <strong style="color:#0F172A; font-size:1rem;">${c.title}</strong>
              <div style="font-size:0.75rem; color:#64748B;">سعر السهم: ${Number(c.unitPrice).toLocaleString('ar-EG')} ج.م | إنجاز: ${pct}%</div>
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn-sm-edit" onclick="openEditCampaignModal('${c.id}')">تعديل كامل ✏️</button>
            <button type="button" class="btn-sm-del" onclick="deleteCampaign('${c.id}')">حذف 🗑️</button>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function saveStoreCampaignsList() {
  showAdminToast('جميع حملات وأسهم المتجر محفوظة ومحدثة 💾');
}

// Campaign Modal
function openAddCampaignModal() {
  document.getElementById('campaignModalHeading').innerHTML = '<span>🏷️</span><span>إضافة حملة تبرع جديدة</span>';
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
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  document.getElementById('campaignModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openEditCampaignModal(id) {
  const d = getPagesData();
  const c = d.store.campaigns.find(item => item.id === id);
  if (!c) return;

  document.getElementById('campaignModalHeading').innerHTML = `<span>✏️</span><span>تعديل حملة: ${c.title}</span>`;
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
  document.body.style.overflow = 'hidden';
}

function closeCampaignModal() {
  const m = document.getElementById('campaignModal');
  if (m) m.classList.remove('active');
  document.body.style.overflow = '';
}

// Modal Backdrop Click & Escape Key Listeners
document.addEventListener('click', (e) => {
  const m = document.getElementById('campaignModal');
  if (m && e.target === m) {
    closeCampaignModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCampaignModal();
  }
});


function deleteCampaign(id) {
  if (!confirm('هل تريد حذف هذه الحملة من المتجر؟')) return;
  const d = getPagesData();
  d.store.campaigns = d.store.campaigns.filter(c => c.id !== id);
  savePagesData(d, 'تم حذف الحملة من المتجر');
  renderStoreCampaignsList();
}

// --- PAGE 3: COMPLEX ---
function loadComplexPage() {
  const d = getPagesData().complex || DEFAULT_PAGES_DATA.complex;
  document.getElementById('complexTitle').value = d.intro.title || '';
  document.getElementById('complexDesc').value = d.intro.desc || '';
  document.getElementById('complexArea').value = d.intro.area || '';
  document.getElementById('complexClinicsCount').value = d.intro.clinics || '';
  document.getElementById('complexSolarPower').value = d.intro.solar || '';
  renderComplexFloors();
  renderPageCustomBlocks('complex');
}

function saveComplexIntro() {
  const d = getPagesData();
  d.complex.intro = {
    title: document.getElementById('complexTitle').value.trim(),
    desc: document.getElementById('complexDesc').value.trim(),
    area: document.getElementById('complexArea').value.trim(),
    clinics: document.getElementById('complexClinicsCount').value.trim(),
    solar: document.getElementById('complexSolarPower').value.trim()
  };
  savePagesData(d, 'تم حفظ مقدمة مجمع الإسراء 💾');
}

function renderComplexFloors() {
  const container = document.getElementById('complexFloorsContainer');
  if (!container) return;
  const floors = (getPagesData().complex && getPagesData().complex.floors) || [];

  let html = '';
  floors.forEach((f, idx) => {
    html += `
      <div class="dynamic-item-card" data-idx="${idx}">
        <div class="dynamic-item-header">
          <strong>${f.number}: ${f.title}</strong>
          <button type="button" class="btn-sm-del" onclick="deleteFloorCard(${idx})">حذف الطابق 🗑️</button>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>مسمى الطابق (مثلاً الدور الأول)</label>
            <input type="text" class="admin-input floor-input-num" value="${f.number || ''}">
          </div>
          <div class="admin-form-group">
            <label>عنوان خدمات الطابق</label>
            <input type="text" class="admin-input floor-input-title" value="${f.title || ''}">
          </div>
        </div>
        <div class="admin-form-group">
          <label>التفاصيل والخدمات المتاحة</label>
          <textarea rows="2" class="admin-textarea floor-input-desc">${f.desc || ''}</textarea>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>صورة الطابق</label>
            <input type="text" class="admin-input floor-input-img" id="floorImgInput_${idx}" value="${f.image || ''}">
          </div>
          <div class="admin-form-group" style="display:flex; align-items:flex-end;">
            <label class="btn-outline" style="padding:10px; cursor:pointer; width:100%; text-align:center;">
              <span>رفع صورة من جهازك 📸</span>
              <input type="file" accept="image/*" style="display:none;" onchange="handleImageFileUpload(event, 'floorImgPreview_${idx}', 'floorImgInput_${idx}')">
            </label>
          </div>
        </div>
        <img id="floorImgPreview_${idx}" class="image-preview-slot" src="${f.image || ''}" alt="معاينة" style="${f.image ? 'display:block;' : 'display:none;'}">
      </div>
    `;
  });
  container.innerHTML = html;
}

function addNewFloorCard() {
  const d = getPagesData();
  if (!d.complex.floors) d.complex.floors = [];
  d.complex.floors.push({
    id: 'floor_' + Date.now(),
    number: 'طابق جديد',
    title: 'خدمات وأقسام إضافية بالمجمع',
    desc: 'تفاصيل الخدمات والأقسام الجديدة...',
    image: 'complex.jpg'
  });
  savePagesData(d, 'تمت إضافة قسم طابق جديد');
  renderComplexFloors();
}

function deleteFloorCard(idx) {
  if (!confirm('هل تريد حذف هذا الطابق؟')) return;
  const d = getPagesData();
  d.complex.floors.splice(idx, 1);
  savePagesData(d, 'تم حذف الطابق');
  renderComplexFloors();
}

function saveComplexFloors() {
  const d = getPagesData();
  const cards = document.querySelectorAll('#complexFloorsContainer .dynamic-item-card');
  const updatedFloors = [];

  cards.forEach(card => {
    updatedFloors.push({
      id: 'floor_' + Math.random().toString(36).substring(7),
      number: card.querySelector('.floor-input-num').value.trim(),
      title: card.querySelector('.floor-input-title').value.trim(),
      desc: card.querySelector('.floor-input-desc').value.trim(),
      image: card.querySelector('.floor-input-img').value.trim() || 'complex.jpg'
    });
  });

  d.complex.floors = updatedFloors;
  savePagesData(d, 'تم حفظ أقسام الطوابق بنجاح 💾');
}

// --- PAGE 4: HOSTEL ---
function loadHostelPage() {
  const d = getPagesData().hostel || DEFAULT_PAGES_DATA.hostel;
  document.getElementById('hostelTitle').value = d.intro.title || '';
  document.getElementById('hostelDesc').value = d.intro.desc || '';
  document.getElementById('hostelBedsCount').value = d.intro.beds || '';
  document.getElementById('hostelCostLabel').value = d.intro.cost || '';
  document.getElementById('hostelHours').value = d.intro.hours || '';
  document.getElementById('hostelCriteriaText').value = Array.isArray(d.criteria) ? d.criteria.join('\n') : (d.criteria || '');
  renderPageCustomBlocks('hostel');
}

function saveHostelIntro() {
  const d = getPagesData();
  d.hostel.intro = {
    title: document.getElementById('hostelTitle').value.trim(),
    desc: document.getElementById('hostelDesc').value.trim(),
    beds: document.getElementById('hostelBedsCount').value.trim(),
    cost: document.getElementById('hostelCostLabel').value.trim(),
    hours: document.getElementById('hostelHours').value.trim()
  };
  savePagesData(d, 'تم حفظ مقدمة دار ضيافة الأورام 💾');
}

function saveHostelCriteria() {
  const d = getPagesData();
  const raw = document.getElementById('hostelCriteriaText').value;
  d.hostel.criteria = raw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  savePagesData(d, 'تم حفظ معايير استقبال النزلاء 💾');
}

// --- PAGE 5: PROJECTS ---
function loadProjectsPage() {
  const d = getPagesData().projects || DEFAULT_PAGES_DATA.projects;
  document.getElementById('projectsMainTitle').value = d.intro.title || '';
  document.getElementById('projectsMainDesc').value = d.intro.desc || '';
  document.getElementById('projectsArzaqTitle').value = d.arzaq.title || '';
  document.getElementById('projectsArzaqDesc').value = d.arzaq.desc || '';
  document.getElementById('projectsArzaqPartner').value = d.arzaq.partner || '';
  document.getElementById('projectsArzaqTarget').value = d.arzaq.target || '';
  document.getElementById('projectsLoomTitle').value = d.loom.title || '';
  document.getElementById('projectsLoomDesc').value = d.loom.desc || '';
  renderPageCustomBlocks('projects');
}

function saveProjectsIntro() {
  const d = getPagesData();
  d.projects.intro = {
    title: document.getElementById('projectsMainTitle').value.trim(),
    desc: document.getElementById('projectsMainDesc').value.trim()
  };
  savePagesData(d, 'تم حفظ مقدمة المشروعات 💾');
}

function saveProjectsArzaq() {
  const d = getPagesData();
  d.projects.arzaq = {
    title: document.getElementById('projectsArzaqTitle').value.trim(),
    desc: document.getElementById('projectsArzaqDesc').value.trim(),
    partner: document.getElementById('projectsArzaqPartner').value.trim(),
    target: document.getElementById('projectsArzaqTarget').value.trim()
  };
  savePagesData(d, 'تم حفظ مشروع أرزاق 💾');
}

function saveProjectsLoom() {
  const d = getPagesData();
  d.projects.loom = {
    title: document.getElementById('projectsLoomTitle').value.trim(),
    desc: document.getElementById('projectsLoomDesc').value.trim()
  };
  savePagesData(d, 'تم حفظ مشاغل النول والخياطة 💾');
}

// --- PAGE 6: CHECKOUT ---
function loadCheckoutPage() {
  const d = getPagesData().checkout || DEFAULT_PAGES_DATA.checkout;
  document.getElementById('checkoutVodafoneCash').value = d.wallets.vodafoneCash || '';
  document.getElementById('checkoutInstaPay').value = d.wallets.instaPay || '';
  document.getElementById('checkoutWalletNotes').value = d.wallets.notes || '';
  renderCheckoutBankAccounts();
}

function saveCheckoutWallets() {
  const d = getPagesData();
  d.checkout.wallets = {
    vodafoneCash: document.getElementById('checkoutVodafoneCash').value.trim(),
    instaPay: document.getElementById('checkoutInstaPay').value.trim(),
    notes: document.getElementById('checkoutWalletNotes').value.trim()
  };
  savePagesData(d, 'تم حفظ أرقام المحافظ وإنستاباي 💾');
}

function renderCheckoutBankAccounts() {
  const container = document.getElementById('checkoutBankAccountsContainer');
  if (!container) return;
  const accounts = (getPagesData().checkout && getPagesData().checkout.bankAccounts) || [];

  let html = '';
  accounts.forEach((acc, idx) => {
    html += `
      <div class="dynamic-item-card" data-idx="${idx}">
        <div class="dynamic-item-header">
          <strong>${acc.bankName} - ${acc.branch}</strong>
          <button type="button" class="btn-sm-del" onclick="deleteBankAccountCard(${idx})">حذف الحساب 🗑️</button>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>اسم البنك</label>
            <input type="text" class="admin-input bank-input-name" value="${acc.bankName || ''}">
          </div>
          <div class="admin-form-group">
            <label>الفرع</label>
            <input type="text" class="admin-input bank-input-branch" value="${acc.branch || ''}">
          </div>
        </div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label>رقم الحساب البنكي</label>
            <input type="text" class="admin-input bank-input-acc" value="${acc.accountNumber || ''}">
          </div>
          <div class="admin-form-group">
            <label>رقم الآيبان (IBAN)</label>
            <input type="text" class="admin-input bank-input-iban" value="${acc.iban || ''}">
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function addNewBankAccountCard() {
  const d = getPagesData();
  if (!d.checkout.bankAccounts) d.checkout.bankAccounts = [];
  d.checkout.bankAccounts.push({
    id: 'bank_' + Date.now(),
    bankName: 'بنك جديد',
    accountNumber: 'حساب رقم ...',
    branch: 'فرع دمنهور',
    iban: 'EG...'
  });
  savePagesData(d, 'تمت إضافة حساب بنكي جديد');
  renderCheckoutBankAccounts();
}

function deleteBankAccountCard(idx) {
  if (!confirm('هل تريد حذف هذا الحساب البنكي؟')) return;
  const d = getPagesData();
  d.checkout.bankAccounts.splice(idx, 1);
  savePagesData(d, 'تم حذف الحساب البنكي');
  renderCheckoutBankAccounts();
}

function saveCheckoutBankAccounts() {
  const d = getPagesData();
  const cards = document.querySelectorAll('#checkoutBankAccountsContainer .dynamic-item-card');
  const updatedAccounts = [];

  cards.forEach(card => {
    updatedAccounts.push({
      id: 'bank_' + Math.random().toString(36).substring(7),
      bankName: card.querySelector('.bank-input-name').value.trim(),
      branch: card.querySelector('.bank-input-branch').value.trim(),
      accountNumber: card.querySelector('.bank-input-acc').value.trim(),
      iban: card.querySelector('.bank-input-iban').value.trim()
    });
  });

  d.checkout.bankAccounts = updatedAccounts;
  savePagesData(d, 'تم حفظ الحسابات البنكية بنجاح 💾');
}

// --- PAGE 7: CONTACT & GOOGLE MAP ---
function loadContactPage() {
  const d = getPagesData().contact || DEFAULT_PAGES_DATA.contact;
  document.getElementById('contactLocationAddress').value = d.location.address || '';
  document.getElementById('contactMapEmbedUrl').value = d.location.mapEmbedUrl || '';
  document.getElementById('contactMapGpsUrl').value = d.location.gpsUrl || '';
  document.getElementById('contactPhonePrimary').value = d.phones.primary || '';
  document.getElementById('contactPhoneMobile').value = d.phones.mobile || '';
  document.getElementById('contactEmailOfficial').value = d.phones.email || '';
  document.getElementById('contactWorkingHours').value = d.phones.hours || '';
  document.getElementById('contactLegalRegistration').value = d.legal.registration || '';
  document.getElementById('contactLegalPublicBenefit').value = d.legal.publicBenefit || '';
  document.getElementById('contactLegalPresident').value = d.legal.president || '';
  renderPageCustomBlocks('contact');
}

function saveContactMapLocation() {
  const d = getPagesData();
  d.contact.location = {
    address: document.getElementById('contactLocationAddress').value.trim(),
    mapEmbedUrl: document.getElementById('contactMapEmbedUrl').value.trim(),
    gpsUrl: document.getElementById('contactMapGpsUrl').value.trim()
  };
  savePagesData(d, 'تم حفظ خريطة دمنهور وعنوان المقر 💾');
}

function saveContactPhones() {
  const d = getPagesData();
  d.contact.phones = {
    primary: document.getElementById('contactPhonePrimary').value.trim(),
    mobile: document.getElementById('contactPhoneMobile').value.trim(),
    email: document.getElementById('contactEmailOfficial').value.trim(),
    hours: document.getElementById('contactWorkingHours').value.trim()
  };
  savePagesData(d, 'تم حفظ أرقام الاتصال والواتساب 💾');
}

function saveContactLegal() {
  const d = getPagesData();
  d.contact.legal = {
    registration: document.getElementById('contactLegalRegistration').value.trim(),
    publicBenefit: document.getElementById('contactLegalPublicBenefit').value.trim(),
    president: document.getElementById('contactLegalPresident').value.trim()
  };
  savePagesData(d, 'تم حفظ البيانات القانونية ورقم القيد 💾');
}

// --- PAGE 8: INBOX ---
function loadInboxPage() {
  const tbody = document.getElementById('inboxTableBody');
  if (!tbody) return;
  let inbox = [];
  try {
    const raw = localStorage.getItem(CMS_INBOX_KEY);
    if (raw) inbox = JSON.parse(raw);
  } catch(e) {}

  if (inbox.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:#64748B;">لا توجد استفسارات أو طلبات واردة حالياً.</td></tr>`;
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
  try {
    const raw = localStorage.getItem(CMS_INBOX_KEY);
    let inbox = raw ? JSON.parse(raw) : [];
    if (inbox[index]) {
      inbox[index].status = inbox[index].status === 'تم المتابعة' ? 'جديد' : 'تم المتابعة';
      localStorage.setItem(CMS_INBOX_KEY, JSON.stringify(inbox));
      loadInboxPage();
    }
  } catch(e) {}
}

function clearInbox() {
  if (!confirm('هل أنت متأكد من مسح جميع سجلات الوارد نهائياً؟')) return;
  localStorage.setItem(CMS_INBOX_KEY, JSON.stringify([]));
  loadInboxPage();
  updateOverviewStats();
  showAdminToast('تم مسح سجلات الوارد');
}

function exportInboxCSV() {
  let inbox = [];
  try {
    const raw = localStorage.getItem(CMS_INBOX_KEY);
    if (raw) inbox = JSON.parse(raw);
  } catch(e) {}
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

// --- PAGE 9: BACKUP & WEBHOOK ---
function loadBackupPage() {
  const d = getPagesData();
  const webhookInput = document.getElementById('settingWebhookUrl');
  if (webhookInput) {
    webhookInput.value = (d.admin && d.admin.webhookUrl) || localStorage.getItem('al_israa_cms_webhook') || '';
  }
  const userElem = document.getElementById('settingAdminUser');
  const passElem = document.getElementById('settingAdminPass');
  if (userElem) userElem.value = (d.admin && d.admin.user) || 'admin';
  if (passElem) passElem.value = (d.admin && d.admin.pass) || 'israa2026';
}

function saveWebhookUrl() {
  const url = document.getElementById('settingWebhookUrl').value.trim();
  const d = getPagesData();
  if (!d.admin) d.admin = {};
  d.admin.webhookUrl = url;
  localStorage.setItem('al_israa_cms_webhook', url);
  savePagesData(d, 'تم حفظ رابط Webhook السحابي 🔗');
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
      details: "إشارة اختبارية ناجحة من لوحة تحكم CMS المبوبة بالصفحات بدمنهور",
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

function saveAdminCredentials() {
  const d = getPagesData();
  if (!d.admin) d.admin = {};
  d.admin.user = document.getElementById('settingAdminUser').value.trim() || 'admin';
  d.admin.pass = document.getElementById('settingAdminPass').value.trim() || 'israa2026';
  savePagesData(d, 'تم تحديث بيانات دخول لوحة التحكم 🔒');
}

function exportDataJSON() {
  const backup = {
    version: "3.0",
    exportDate: new Date().toISOString(),
    pagesData: getPagesData(),
    inbox: (function() {
      try { return JSON.parse(localStorage.getItem(CMS_INBOX_KEY)) || []; } catch(e) { return []; }
    })()
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const link = document.createElement('a');
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `al_israa_pages_backup_${Date.now()}.json`);
  link.click();
  showAdminToast('تم تصدير النسخة الاحتياطية لكافة الصفحات بنجاح 📥');
}

function importDataJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (data.pagesData) {
        localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(data.pagesData));
      } else if (data.campaigns || data.settings) {
        // Migration from older v2 backup format
        const current = getPagesData();
        if (data.campaigns) current.store.campaigns = data.campaigns;
        localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(current));
      }
      if (data.inbox) localStorage.setItem(CMS_INBOX_KEY, JSON.stringify(data.inbox));

      showAdminToast('تمت استعادة كافة بيانات الصفحات بنجاح! جاري التحديث... 🌟');
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      alert('الملف غير صالح أو تالف: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToFactoryDefaults() {
  if (!confirm('⚠️ تحذير شديد: سيتم مسح كافة التعديلات واستعادة البيانات الأصلية الافتراضية لكافة الصفحات الـ 7. هل تود المتابعة؟')) return;
  localStorage.setItem(PAGES_DATA_KEY, JSON.stringify(DEFAULT_PAGES_DATA));
  showAdminToast('تمت استعادة الإعدادات الأصلية 🔄');
  setTimeout(() => window.location.reload(), 1000);
}

// Global Save Button
function saveAllPages() {
  saveHomeHero();
  saveHomeStats();
  saveHomeOutbox();
  saveHomeNews();
  saveHomePartners();
  saveStoreHeader();
  saveComplexIntro();
  saveComplexFloors();
  saveHostelIntro();
  saveHostelCriteria();
  saveProjectsIntro();
  saveProjectsArzaq();
  saveProjectsLoom();
  saveCheckoutWallets();
  saveCheckoutBankAccounts();
  saveContactMapLocation();
  saveContactPhones();
  saveContactLegal();
  
  // Save WordPress-like Custom Blocks for all active pages
  ['home', 'store', 'complex', 'hostel', 'projects', 'contact'].forEach(p => {
    savePageCustomBlocks(p);
  });

  showAdminToast('تم حفظ كافة أقسام وصفحات وبلوكات الموقع بنجاح! 💾🌟');
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
      const d = getPagesData();
      const adminConf = d.admin || DEFAULT_PAGES_DATA.admin;

      if (userInput === adminConf.user && passInput === adminConf.pass) {
        sessionStorage.setItem(CMS_AUTH_KEY, 'true');
        document.getElementById('loginOverlay').style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';
        showAdminToast('مرحباً بك في لوحة تحكم صفحات جمعية الإسراء 🌟');
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

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  initAuth();

  // Navigation Click Handlers
  const navBtns = document.querySelectorAll('.admin-nav-item button');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageId = btn.getAttribute('data-page-target');
      if (pageId) switchAdminPage(pageId);
    });
  });

  // Global Save Button
  const globalBtn = document.getElementById('globalSaveBtn');
  if (globalBtn) globalBtn.addEventListener('click', saveAllPages);

  // Campaign Form Modal Listener
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

      const d = getPagesData();
      if (!d.store.campaigns) d.store.campaigns = [];
      const existingIdx = d.store.campaigns.findIndex(c => c.id === id);

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
        d.store.campaigns[existingIdx] = campaignObj;
      } else {
        d.store.campaigns.unshift(campaignObj);
      }

      savePagesData(d, 'تم حفظ حملة التبرع بنجاح 💾');
      renderStoreCampaignsList();
      closeCampaignModal();
    });
  }

  // Initial Load of All Pages
  loadHomePage();
  loadStorePage();
  loadComplexPage();
  loadHostelPage();
  loadProjectsPage();
  loadCheckoutPage();
  loadContactPage();
  loadInboxPage();
  loadBackupPage();
  // Window resize handler for traffic chart
  window.addEventListener('resize', () => {
    const overviewPane = document.getElementById('page-overview');
    if (overviewPane && overviewPane.classList.contains('active')) {
      renderVisitorChart();
    }
  });

  updateOverviewStats();
});
