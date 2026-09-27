/**
 * Al-Israa Charity Association - Damanhour
 * Full Bilingual Localization & Translation Engine (Arabic / English)
 * Pure Vanilla JavaScript Client-Side i18n
 */

const LANG_STORAGE_KEY = 'al_israa_lang';

const TRANSLATIONS = {
  ar: {
    // Brand & General
    'brand.title': 'جمعية الإسراء الخيرية',
    'brand.subtitle': 'لتنمية المجتمع بدمنهور',
    'brand.short': 'جمعية الإسراء',
    'currency': 'ج.م',
    'currency.full': 'جنيه مصري',
    
    // Top Bar
    'topbar.location': 'دمنهور - محافظة البحيرة - مشهرة برقم 1124 لسنة 2006',
    'topbar.hours': 'مواعيد الاستقبال: يومياً 9:00 ص - 9:00 م',
    'topbar.phone': '01026410313',

    // Main Navigation
    'nav.home': 'الرئيسية',
    'nav.store': 'متجر التبرعات 🛒',
    'nav.complex': 'مجمع الإسراء',
    'nav.hostel': 'دار ضيافة الأورام',
    'nav.projects': 'المشروعات والتمكين',
    'nav.contact': 'تواصل معنا',
    'nav.checkout': 'إتمام التبرع 💳',
    'nav.cart': 'سلة التبرعات',
    'nav.donateNow': 'تبرع الآن 🧡',
    'nav.langSwitch': 'English',

    // Mobile Drawer
    'drawer.menuTitle': 'القائمة الرئيسية',
    'drawer.complex': 'مجمع الإسراء التنموي',
    'drawer.projects': 'مشروعات التمكين و Outbox',
    'drawer.checkout': 'الحسابات البنكية والمحافظ',
    'drawer.contact': 'تواصل معنا والتدريب',

    // Hero - Home
    'hero.badge': 'مؤسسة خيرية تنموية مشهرة برقم 1124 لسنة 2006',
    'hero.title': 'نبني الإنسان.. ونرعى الأمل في دمنهور والبحيرة',
    'hero.desc': 'صرح إنساني رائد يجمع بين الرعاية الطبية المجانية لمرضى الأورام، والتمكين الاقتصادي للأسر المستحقة، والمبادرات التعليمية الخضراء بالتعاون مع كبرى المؤسسات الوطنية.',
    'hero.ctaStore': 'متجر التبرعات السريع 🛒',
    'hero.ctaComplex': 'استكشف مجمع الإسراء 🏥',
    'hero.statYears': 'عاماً من العطاء التنموي',
    'hero.statBeds': 'سريراً بدار ضيافة الأورام',
    'hero.statProjects': 'مشروعاً للتمكين الاقتصادي',
    'hero.statBeneficiaries': 'مستفيد سنوياً بالبحيرة',

    // Outbox Showcase - Home
    'outbox.badge': 'مبادرة رائدة بالتعاون مع Outbox',
    'outbox.title': 'المدارس الخضراء الذكية بالبحيرة',
    'outbox.desc': 'مشروع استراتيجي يهدف إلى تحويل أسطح المدارس الحكومية والمراكز المجتمعية إلى وحدات طاقة شمسية ومساحات زراعية ذكية لتعليم الطلاب مفاهيم الاستدامة وتوفير عوائد تنموية.',
    'outbox.kpi1': 'طاقة شمسية نظيفة',
    'outbox.kpi2': 'مدرسة مستهدفة بالمرحلة الأولى',
    'outbox.kpi3': 'طالب مستفيد من الورش',
    'outbox.kpi4': 'خفض في البصمة الكربونية',

    // News Section - Home
    'news.title': 'أحدث الأخبار والفعاليات الميدانية',
    'news.subtitle': 'تغطيات مصورة لأنشطة جمعية الإسراء وقوافلها التنموية في محافظة البحيرة',
    'news.readMore': 'قراءة المزيد ←',

    // Partners Section - Home
    'partners.title': 'شركاء النجاح والتنمية المستدامة',
    'partners.subtitle': 'نفخر بالتعاون والتنسيق المستمر مع الوزارات والمؤسسات الأهلية والتحالف الوطني للعمل الأهلي التنموي',

    // Store Page
    'store.title': 'متجر التبرعات الشامل',
    'store.subtitle': 'اختر ما تجود به يدك وساهم في بناء الإنسان وشفاء المرضى بمحافظة البحيرة',
    'store.searchPlaceholder': 'ابحث في حملات وأسهم التبرع...',
    'store.allCategories': 'كافة المجالات 🌟',
    'store.catHealth': 'رعاية مرضى الأورام 🏥',
    'store.catEmpowerment': 'التمكين الاقتصادي 💼',
    'store.catEducation': 'التعليم والمدارس 🌿',
    'store.catOngoing': 'الصدقة الجارية ✨',
    'store.shareVal': 'سعر السهم:',
    'store.targetVal': 'المستهدف:',
    'store.collectedVal': 'تم جمع:',
    'store.completed': 'مكتمل بنسبة',
    'store.addToCart': 'أضف للسلة 🛒',
    'store.donateDirect': 'تبرع مباشر 🧡',
    'store.quickPresets': 'مبالغ سريعة:',

    // Complex Page
    'complex.title': 'مجمع الإسراء الطبي التنموي',
    'complex.subtitle': 'صرح متكامل مقام على مساحة 500 متر مربع ومكون من 5 طوابق لخدمة أهالي دمنهور ومحافظة البحيرة',
    'complex.area': '500 متر مربع مساحة الصرح',
    'complex.floors': '5 طوابق متخصصة',
    'complex.clinics': 'عيادات تخصصية مجانية',
    'complex.solar': 'محطة طاقة شمسية خضراء',
    'complex.floor1': 'الطابق الأول: الاستقبال والصيدلية الخيرية والعيادات',
    'complex.floor2': 'الطابق الثاني: المعامل المركزية ووحدات التشخيص المتطورة',
    'complex.floor3': 'الطابق الثالث: دار ضيافة مرضى الأورام والمرافقين',
    'complex.floor4': 'الطابق الرابع: مشاغل النول والتدريب الحرفي للسيدات',
    'complex.floor5': 'الطابق الخامس: قاعات التدريب التكنولوجي وإدارة المشروعات',

    // Hostel Page
    'hostel.title': 'دار ضيافة مرضى الأورام المجانية',
    'hostel.subtitle': 'ملاذ آمن ورعاية إنسانية مجانية 100% لمرضى المعهد القومي للأورام بدمنهور ومرافقيهم القادمين من القرى والمحافظات المجاورة',
    'hostel.bedCount': '24 سريراً فندقياً مجهزاً',
    'hostel.freeCare': 'إقامة وإعاشة مجانية تماماً',
    'hostel.serviceHours': 'خدمة واستقبال على مدار 24 ساعة',
    'hostel.criteriaTitle': 'شروط ومعايير القبول والاستضافة المجانية:',
    'hostel.crit1': 'أن يكون المريض يتلقى جلسات علاجية بمعهد الأورام بدمنهور ولديه بطاقة علاج رسمية.',
    'hostel.crit2': 'أن يكون محل إقامة المريض ومرافقه خارج نطاق مدينة دمنهور ويتعذر عليه السفر اليومي.',
    'hostel.crit3': 'تقديم إثبات الشخصية والتقارير الطبية الحديثة عند مكتب الاستقبال.',
    'hostel.crit4': 'يتم توفير وجبات غذائية متكاملة ورعاية فندقية وتمريضية وإشراف اجتماعي طوال فترة الإقامة.',

    // Projects Page
    'projects.title': 'مشروعات التمكين الاقتصادي وبناء القدرات',
    'projects.subtitle': 'ننتقل بالأسر من دائرة الاحتياج إلى آفاق الإنتاج والاستقلال المالي المستدام',
    'projects.arzaqTitle': 'مشروع أرزاق للتمكين الاقتصادي',
    'projects.arzaqDesc': 'تمويل المشروعات متناهية الصغر، شراء الدراجات التروسيكل لنقل البضائع، وتوفير الأكشاك ومستلزمات الإنتاج للأسر المعيلة.',
    'projects.loomTitle': 'مشاغل النول والخياطة الحديثة',
    'projects.loomDesc': 'تدريب مئات الفتيات والأمهات المعيلات على حرف النول اليدوي وصناعة السجاد والملابس الجاهزة وتوفير منافذ تسويق لمنتجاتهن.',

    // Checkout Page
    'checkout.title': 'إتمام التبرع والتحويل الرسمي',
    'checkout.subtitle': 'جميع تبرعاتكم تصل مباشرة إلى الحسابات البنكية الرسمية لجمعية الإسراء بدمنهور تحت إشراف وزارة التضامن الاجتماعي',
    'checkout.summaryTitle': 'ملخص سلة التبرعات',
    'checkout.emptyCart': 'سلة التبرعات فارغة حالياً. تفضل بزيارة المتجر لاختيار ما ترغب بالتبرع به.',
    'checkout.totalAmount': 'إجمالي التبرع المستحق:',
    'checkout.paymentMethods': 'طرق التحويل والتبرع المتاحة:',
    'checkout.vodafoneCash': 'محافظ الكاش (فودافون كاش / أورنج / وي):',
    'checkout.instaPay': 'حساب وتطبيق إنستاباي (InstaPay الرسمي):',
    'checkout.bankTransfer': 'الحسابات البنكية الرسمية المعتمدة:',
    'checkout.copy': 'نسخ الرقم 📋',
    'checkout.copied': 'تم النسخ! ✅',
    'checkout.donorFormTitle': 'بيانات المتبرع وإشعار التحويل (اختياري)',
    'checkout.donorName': 'الاسم بالكامل (أو فاعل خير):',
    'checkout.donorPhone': 'رقم الهاتف للتواصل / واتساب:',
    'checkout.receiptUpload': 'صورة إشعار التحويل أو رقم العملية:',
    'checkout.submitBtn': 'تأكيد وإرسال إشعار التبرع 📤',

    // Contact Page
    'contact.title': 'تواصل معنا وزيارة المقر',
    'contact.subtitle': 'أبوابنا مفتوحة لخدمة أهالينا واستقبال التبرعات والرد على استفساراتكم على مدار الساعة',
    'contact.addressTitle': 'عنوان المقر الرئيسي والمجمع التنموي:',
    'contact.addressDesc': 'دمنهور - محافظة البحيرة - بجوار معهد الأورام القومي - مجمع الإسراء التنموي',
    'contact.mapTitle': 'موقع الجمعية على خرائط جوجل (دمنهور):',
    'contact.phonesTitle': 'أرقام الاتصال والخط الساخن:',
    'contact.formTitle': 'أرسل لنا رسالة أو استفسار أو طلب مساعدة:',
    'contact.inputName': 'الاسم الكريم',
    'contact.inputPhone': 'رقم الهاتف / واتساب',
    'contact.inputType': 'نوع الاستفسار أو الطلب',
    'contact.inputDetails': 'تفاصيل الرسالة أو الطلب بالتفصيل',
    'contact.sendBtn': 'إرسال الرسالة الآن ✉️',

    // Cart Drawer
    'cart.title': 'سلة التبرعات 🛒',
    'cart.empty': 'سلة التبرعات فارغة حالياً.',
    'cart.emptyPrompt': 'تصفح المتجر واختر سهماً لتصنع فارقاً اليوم.',
    'cart.total': 'إجمالي التبرع:',
    'cart.checkoutBtn': 'المتابعة لإتمام التبرع 💳',
    'cart.clear': 'تفريغ السلة',

    // Footer
    'footer.aboutTitle': 'عن جمعية الإسراء بدمنهور',
    'footer.aboutDesc': 'جمعية خيرية أهلية مشهرة برقم 1124 لسنة 2006 بمديرية التضامن الاجتماعي بالبحيرة، تهدف إلى تقديم خدمات الرعاية الصحية المتكاملة لمرضى الأورام، والتمكين الاقتصادي والمبادرات الخضراء.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'بيانات التواصل',
    'footer.adminBtn': 'لوحة التحكم',
    'footer.copyright': 'جميع الحقوق محفوظة © 2026 جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور - مشهرة برقم 1124 لسنة 2006 - ذات نفع عام',

    // Admin Dashboard
    'admin.loginTitle': 'لوحة إدارة جمعية الإسراء',
    'admin.loginDesc': 'نظام التحكم الكامل المبوب بالصفحات (Page-by-Page CMS)',
    'admin.username': 'اسم المستخدم',
    'admin.password': 'كلمة المرور السرية',
    'admin.loginBtn': 'دخول إلى لوحة التحكم 🔐',
    'admin.credHint': 'بيانات الدخول الافتراضية:',
    'admin.overviewTitle': 'نظرة عامة وإحصائيات المنصة',
    'admin.overviewDesc': 'مؤشرات الأداء اللحظية، حركة الزوار، وإدارة صفحات وبلوكات الموقع.',
    'admin.saveAllBtn': 'حفظ كافة الصفحات 💾',
    'admin.previewBtn': 'معاينة هذه الصفحة ↗',
    'admin.kpiTotalVisits': 'إجمالي زيارات المنصة',
    'admin.kpiUniques': 'الزوار الفريدين الحقيقيين',
    'admin.kpiActive': 'المتصلين والزوار الآن',
    'admin.kpiDonations': 'إجمالي التبرعات المحققة',
    'admin.kpiInbox': 'الطلبات والوارد الجديد',
    'admin.kpiCampaigns': 'حملات التبرع النشطة',
    'admin.chartTitle': 'منحنى الزيارات والنمو الرقمي التفاعلي',
    'admin.filterToday': 'اليوم',
    'admin.filter7days': 'آخر 7 أيام',
    'admin.filter30days': 'آخر 30 يوماً',
    'admin.devicesTitle': 'توزيع الأجهزة والمتصفحات',
    'admin.sourcesTitle': 'مصادر حركة الزيارات (Acquisition)',
    'admin.topPagesTitle': 'ترتيب الصفحات الأكثر زيارة',
    'admin.activityTitle': 'تدفق النشاط والعمليات اللحظي',
    'admin.exportCsvBtn': 'تصدير تقرير الإحصائيات CSV 📄',
    'admin.resetStatsBtn': 'إعادة ضبط الإحصائيات 🔄',
    'admin.blockBuilderTitle': 'بناء وتخصيص البلوكات والمحتوى الإضافي (WordPress-like Block Builder)',
    'admin.addParagraph': '📝 فقرة نصية',
    'admin.addImage': '🖼️ صورة وميديا',
    'admin.addCard': '📦 بطاقة خدمة',
    'admin.addHeading': '🏷️ عنوان بارز',
    'admin.addNews': '📰 خبر / مقال',
    'admin.addSection': '✨ قسم مخصص',
    'admin.saveBlocks': 'حفظ البلوكات 💾',
    'admin.toastSuccess': 'تم الحفظ بنجاح ✅',
    'admin.logout': 'تسجيل الخروج 🚪'
  },

  en: {
    // Brand & General
    'brand.title': 'Al-Israa Charity Association',
    'brand.subtitle': 'Community Development in Damanhour',
    'brand.short': 'Al-Israa Charity',
    'currency': 'EGP',
    'currency.full': 'Egyptian Pound',

    // Top Bar
    'topbar.location': 'Damanhour, Beheira - Registered NGO No. 1124 (2006)',
    'topbar.hours': 'Hours: Daily 9:00 AM - 9:00 PM',
    'topbar.phone': '01026410313',

    // Main Navigation
    'nav.home': 'Home',
    'nav.store': 'Donation Store 🛒',
    'nav.complex': 'Al-Israa Complex',
    'nav.hostel': 'Oncology Hostel',
    'nav.projects': 'Projects & Empowerment',
    'nav.contact': 'Contact Us',
    'nav.checkout': 'Checkout 💳',
    'nav.cart': 'Donation Cart',
    'nav.donateNow': 'Donate Now 🧡',
    'nav.langSwitch': 'العربية',

    // Mobile Drawer
    'drawer.menuTitle': 'Main Menu',
    'drawer.complex': 'Al-Israa Development Complex',
    'drawer.projects': 'Empowerment & Outbox Projects',
    'drawer.checkout': 'Bank Accounts & Wallets',
    'drawer.contact': 'Contact & Training',

    // Hero - Home
    'hero.badge': 'Registered NGO No. 1124 of 2006 - Public Benefit',
    'hero.title': 'Empowering Lives.. Nurturing Hope Across Damanhour & Beheira',
    'hero.desc': 'A leading humanitarian institution combining free medical care for oncology patients, sustainable economic empowerment for needy families, and smart green schools in partnership with national institutions.',
    'hero.ctaStore': 'Quick Donation Store 🛒',
    'hero.ctaComplex': 'Explore Al-Israa Complex 🏥',
    'hero.statYears': 'Years of Community Service',
    'hero.statBeds': 'Beds at Free Oncology Hostel',
    'hero.statProjects': 'Economic Empowerment Projects',
    'hero.statBeneficiaries': 'Annual Beneficiaries in Beheira',

    // Outbox Showcase - Home
    'outbox.badge': 'Pioneering Initiative in Partnership with Outbox',
    'outbox.title': 'Smart Green Schools in Beheira',
    'outbox.desc': 'A strategic initiative transforming school rooftops and community centers into solar power stations and smart green learning hubs, teaching sustainability and generating sustainable revenue.',
    'outbox.kpi1': 'Clean Solar Energy',
    'outbox.kpi2': 'Targeted Schools in Phase 1',
    'outbox.kpi3': 'Students in Green Workshops',
    'outbox.kpi4': 'Carbon Footprint Reduction',

    // News Section - Home
    'news.title': 'Latest News & Field Activities',
    'news.subtitle': 'Photo reports and updates from Al-Israa humanitarian caravans and community development events in Beheira',
    'news.readMore': 'Read More →',

    // Partners Section - Home
    'partners.title': 'Partners in Sustainable Development',
    'partners.subtitle': 'Proudly collaborating with national ministries, prominent NGOs, and the National Alliance for Civil Development Work',

    // Store Page
    'store.title': 'Comprehensive Donation Store',
    'store.subtitle': 'Choose your donation share and make an immediate impact on patient health and community empowerment',
    'store.searchPlaceholder': 'Search donation campaigns & shares...',
    'store.allCategories': 'All Categories 🌟',
    'store.catHealth': 'Oncology Care 🏥',
    'store.catEmpowerment': 'Economic Empowerment 💼',
    'store.catEducation': 'Education & Schools 🌿',
    'store.catOngoing': 'Ongoing Charity (Sadaqah) ✨',
    'store.shareVal': 'Share Value:',
    'store.targetVal': 'Target:',
    'store.collectedVal': 'Raised:',
    'store.completed': 'Completed',
    'store.addToCart': 'Add to Cart 🛒',
    'store.donateDirect': 'Donate Directly 🧡',
    'store.quickPresets': 'Quick Presets:',

    // Complex Page
    'complex.title': 'Al-Israa Medical & Development Complex',
    'complex.subtitle': 'A 500-sqm, 5-story integrated center serving the residents of Damanhour and the Beheira Governorate',
    'complex.area': '500 sqm Built Facility',
    'complex.floors': '5 Specialized Floors',
    'complex.clinics': 'Free Specialty Clinics',
    'complex.solar': 'Clean Solar Power Station',
    'complex.floor1': 'Floor 1: Reception, Charity Pharmacy, and Outpatient Clinics',
    'complex.floor2': 'Floor 2: Central Diagnostic Laboratories and Imaging Center',
    'complex.floor3': 'Floor 3: Free Oncology Patient and Escort Accommodation Hostel',
    'complex.floor4': 'Floor 4: Handloom Weaving & Vocational Training Workshops for Women',
    'complex.floor5': 'Floor 5: Tech Training Labs, Project Management, and Volunteer Center',

    // Hostel Page
    'hostel.title': 'Free Oncology Patient Accommodation Hostel',
    'hostel.subtitle': 'A 100% free, safe haven providing hotel-grade accommodation and compassionate care for Damanhour Oncology Institute patients and their escorts',
    'hostel.bedCount': '24 Fully Equipped Hotel Beds',
    'hostel.freeCare': '100% Free Room, Board & Care',
    'hostel.serviceHours': '24/7 Reception & Support',
    'hostel.criteriaTitle': 'Free Accommodation Admission Criteria:',
    'hostel.crit1': 'Patient must be actively receiving treatment sessions at Damanhour Oncology Institute with verified hospital medical card.',
    'hostel.crit2': 'Patient and escort must reside outside Damanhour city where daily round-trip travel is difficult.',
    'hostel.crit3': 'Valid national ID and recent official medical reports presented at the reception desk.',
    'hostel.crit4': 'Nutritious meals, laundry, social support, and 24/7 nursing supervision provided at zero cost.',

    // Projects Page
    'projects.title': 'Economic Empowerment & Capacity Building',
    'projects.subtitle': 'Moving vulnerable families from dependence to productive, sustainable financial independence',
    'projects.arzaqTitle': 'Arzaq Micro-Enterprise Initiative',
    'projects.arzaqDesc': 'Financing micro-enterprises, cargo tricycles for local goods transport, and street kiosks with initial inventory for female-headed households.',
    'projects.loomTitle': 'Modern Handloom & Sewing Workshops',
    'projects.loomDesc': 'Training hundreds of young women and breadwinner mothers in handloom weaving, carpet crafts, and garment making, with direct marketing channels.',

    // Checkout Page
    'checkout.title': 'Complete Donation & Official Transfer',
    'checkout.subtitle': 'All your contributions go directly to the verified official bank accounts of Al-Israa Charity Association under Ministry of Social Solidarity supervision',
    'checkout.summaryTitle': 'Donation Cart Summary',
    'checkout.emptyCart': 'Your donation cart is currently empty. Please visit our store to choose your contribution.',
    'checkout.totalAmount': 'Total Donation Due:',
    'checkout.paymentMethods': 'Available Official Payment Channels:',
    'checkout.vodafoneCash': 'Mobile Cash Wallets (Vodafone Cash / Orange / WE):',
    'checkout.instaPay': 'InstaPay Official Account & Handle:',
    'checkout.bankTransfer': 'Official Registered Bank Accounts:',
    'checkout.copy': 'Copy Number 📋',
    'checkout.copied': 'Copied! ✅',
    'checkout.donorFormTitle': 'Donor Details & Receipt Notice (Optional)',
    'checkout.donorName': 'Full Name (or Anonymous Well-wisher):',
    'checkout.donorPhone': 'Phone Number / WhatsApp:',
    'checkout.receiptUpload': 'Transfer Receipt Screenshot or Ref #:',
    'checkout.submitBtn': 'Confirm & Send Donation Notice 📤',

    // Contact Page
    'contact.title': 'Contact Us & Headquarter Visit',
    'contact.subtitle': 'Our doors are open to serve our community, receive your contributions, and answer all inquiries around the clock',
    'contact.addressTitle': 'Main Headquarter & Complex Address:',
    'contact.addressDesc': 'Damanhour, Beheira - Next to the National Oncology Institute - Al-Israa Development Complex',
    'contact.mapTitle': 'Location on Google Maps (Damanhour):',
    'contact.phonesTitle': 'Official Hotline & Phone Numbers:',
    'contact.formTitle': 'Send Us a Message, Inquiry, or Assistance Request:',
    'contact.inputName': 'Your Name',
    'contact.inputPhone': 'Phone / WhatsApp Number',
    'contact.inputType': 'Inquiry or Request Category',
    'contact.inputDetails': 'Message Details',
    'contact.sendBtn': 'Send Message Now ✉️',

    // Cart Drawer
    'cart.title': 'Donation Cart 🛒',
    'cart.empty': 'Your donation cart is currently empty.',
    'cart.emptyPrompt': 'Browse the store and choose a share to make a lasting impact today.',
    'cart.total': 'Total Donation:',
    'cart.checkoutBtn': 'Proceed to Checkout 💳',
    'cart.clear': 'Clear Cart',

    // Footer
    'footer.aboutTitle': 'About Al-Israa Association',
    'footer.aboutDesc': 'A registered non-profit organization (No. 1124 of 2006, Beheira Directorate of Social Solidarity) dedicated to providing free integrated oncology care, sustainable economic empowerment, and green initiatives.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.adminBtn': 'Control Panel',
    'footer.copyright': 'All Rights Reserved © 2026 Al-Israa Charity Association for Community Development in Damanhour - Registered No. 1124 (2006) - Public Benefit',

    // Admin Dashboard
    'admin.loginTitle': 'Al-Israa Management Portal',
    'admin.loginDesc': 'Full Page-by-Page Content Management System (CMS)',
    'admin.username': 'Username',
    'admin.password': 'Secret Password',
    'admin.loginBtn': 'Login to Dashboard 🔐',
    'admin.credHint': 'Default Login Credentials:',
    'admin.overviewTitle': 'Executive Platform Analytics & Overview',
    'admin.overviewDesc': 'Real-time performance metrics, visitor traffic analysis, and full page block management.',
    'admin.saveAllBtn': 'Save All Pages 💾',
    'admin.previewBtn': 'Preview Live Page ↗',
    'admin.kpiTotalVisits': 'Total Platform Visits',
    'admin.kpiUniques': 'Unique Real Visitors',
    'admin.kpiActive': 'Online Now',
    'admin.kpiDonations': 'Total Raised Donations',
    'admin.kpiInbox': 'New Inquiries & Requests',
    'admin.kpiCampaigns': 'Active Donation Campaigns',
    'admin.chartTitle': 'Interactive Visitor Traffic & Growth Chart',
    'admin.filterToday': 'Today',
    'admin.filter7days': 'Last 7 Days',
    'admin.filter30days': 'Last 30 Days',
    'admin.devicesTitle': 'Device & Browser Breakdown',
    'admin.sourcesTitle': 'Traffic Acquisition Channels',
    'admin.topPagesTitle': 'Top Visited Pages Ranking',
    'admin.activityTitle': 'Live Real-time Activity Stream',
    'admin.exportCsvBtn': 'Export Analytics CSV 📄',
    'admin.resetStatsBtn': 'Reset Analytics 🔄',
    'admin.blockBuilderTitle': 'WordPress-like Block & Element Content Builder',
    'admin.addParagraph': '📝 Text Block',
    'admin.addImage': '🖼️ Image / Media',
    'admin.addCard': '📦 Content Card',
    'admin.addHeading': '🏷️ Prominent Heading',
    'admin.addNews': '📰 News Article',
    'admin.addSection': '✨ Custom Section',
    'admin.saveBlocks': 'Save Page Blocks 💾',
    'admin.toastSuccess': 'Saved successfully ✅',
    'admin.logout': 'Sign Out 🚪'
  }
};

/**
 * Get active language
 */
function getCurrentLanguage() {
  return localStorage.getItem(LANG_STORAGE_KEY) || 'ar';
}

/**
 * Get translation for key
 */
function t(key, fallback = '') {
  const lang = getCurrentLanguage();
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
    return TRANSLATIONS[lang][key];
  }
  if (TRANSLATIONS['ar'] && TRANSLATIONS['ar'][key] !== undefined) {
    return TRANSLATIONS['ar'][key];
  }
  return fallback || key;
}

/**
 * Set and apply language
 */
function setLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') lang = 'ar';
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyLanguage(lang);
}

/**
 * Toggle between Arabic and English
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = current === 'ar' ? 'en' : 'ar';
  setLanguage(next);
}

/**
 * Apply language to DOM
 */
function applyLanguage(lang) {
  const isEn = lang === 'en';
  const html = document.documentElement;
  
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isEn ? 'ltr' : 'rtl');

  // Update all [data-i18n] text nodes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) {
      el.textContent = val;
    }
  });

  // Update [data-i18n-html] elements
  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val) {
      el.innerHTML = val;
    }
  });

  // Update [data-i18n-placeholder] inputs
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) {
      el.setAttribute('placeholder', val);
    }
  });

  // Update [data-i18n-title] elements
  const titles = document.querySelectorAll('[data-i18n-title]');
  titles.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t(key);
    if (val) {
      el.setAttribute('title', val);
    }
  });

  // Update Language Switcher Buttons
  const switchers = document.querySelectorAll('.lang-switcher-btn');
  switchers.forEach(btn => {
    const label = btn.querySelector('.lang-label');
    if (label) {
      label.textContent = isEn ? 'العربية' : 'English';
    } else {
      btn.textContent = isEn ? 'العربية' : 'English';
    }
    btn.setAttribute('title', isEn ? 'التبديل إلى العربية' : 'Switch to English');
  });

  // Dispatch custom event for dependent engines (main.js, admin.js)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Auto-initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLanguage();
  applyLanguage(lang);
});

// Run immediate dir check to avoid layout shift before paint
(function immediateInit() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY) || 'ar';
  document.documentElement.setAttribute('lang', saved);
  document.documentElement.setAttribute('dir', saved === 'en' ? 'ltr' : 'rtl');
})();
