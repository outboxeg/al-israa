/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Official Website JavaScript Engine
 * Powered by NGOhub
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll elevation effect
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

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerCloseBtn = document.querySelector('.mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeDrawer();
      }
    });

    const drawerLinks = mobileDrawer.querySelectorAll('.mobile-drawer-links a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 3. Complex Floor Navigator (Tab Switcher for complex.html)
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
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // 4. Image Lightbox Modal
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
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'جمعية الإسراء الخيرية';
        }
        if (lightboxCaption) {
          lightboxCaption.textContent = captionElem ? captionElem.textContent : (img ? img.alt : '');
        }
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 5. Interactive Form Handlers (Cancer Hostel, Training, Contact)
  const appForms = document.querySelectorAll('.interactive-form');
  const successModal = document.querySelector('.success-modal');
  const successModalClose = document.querySelector('.success-modal-close');
  const successTitle = document.querySelector('.success-title');
  const successMessage = document.querySelector('.success-desc');

  if (appForms.length > 0) {
    appForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check HTML5 validity
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const formType = form.getAttribute('data-form-type') || 'contact';
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'جاري الإرسال...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          if (successModal) {
            if (formType === 'hostel') {
              if (successTitle) successTitle.textContent = 'تم استلام طلب استضافة مريض الأورام بنجاح';
              if (successMessage) successMessage.textContent = 'سيتواصل معكم فريق دار ضيافة جمعية الإسراء خلال ساعتين لتأكيد الحجز وتجهيز الغرفة والوجبات المجانية.';
            } else if (formType === 'training') {
              if (successTitle) successTitle.textContent = 'تم تسجيل طلب التدريب والتمكين بنجاح';
              if (successMessage) successMessage.textContent = 'شكراً لاهتمامكم. سيقوم مسؤول التدريب الحرفي بالتواصل لتحديد موعد المقابلة وبدء الورشة المجانية.';
            } else {
              if (successTitle) successTitle.textContent = 'تم إرسال رسالتكم بنجاح';
              if (successMessage) successMessage.textContent = 'شكراً لتواصلكم مع جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور. سيتم الرد عليكم في أقرب وقت.';
            }
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
          } else {
            alert('تم استلام طلبكم بنجاح! سيتواصل معكم فريق جمعية الإسراء قريباً.');
          }

          form.reset();
        }, 600);
      });
    });

    const closeSuccessModal = () => {
      if (successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    if (successModalClose) {
      successModalClose.addEventListener('click', closeSuccessModal);
    }

    if (successModal) {
      successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
          closeSuccessModal();
        }
      });
    }
  }
});
