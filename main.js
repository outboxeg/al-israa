/**
 * جمعية الإسراء الخيرية لتنمية المجتمع بدمنهور
 * Comprehensive Donation Store, Cart & Interactive Engine
 * Powered by NGOhub
 */

// Cart State Management via LocalStorage
const CART_STORAGE_KEY = 'al_israa_donation_cart';

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

// UI Updaters
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

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// Global Copy to Clipboard Function
window.copyToClipboard = function(text, btnElem) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`تم نسخ: ${text}`);
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

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Cart Render
  updateCartBadges();
  renderCartDrawer();

  // 2. Cart Drawer Listeners
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

  // 3. Campaign Stepper Controls on Cards
  document.querySelectorAll('.campaign-card').forEach(card => {
    const input = card.querySelector('.amount-stepper-input');
    const btnUp = card.querySelector('.stepper-up');
    const btnDown = card.querySelector('.stepper-down');
    const btnAdd = card.querySelector('.btn-add-cart');
    const btnDonateNow = card.querySelector('.btn-donate-now-orange');

    const cardId = card.getAttribute('data-id') || Math.random().toString(36).substring(7);
    const cardTitle = card.querySelector('.campaign-item-title') ? card.querySelector('.campaign-item-title').textContent.trim() : 'تبرع عام';
    const cardCategory = card.querySelector('.campaign-category-tag') ? card.querySelector('.campaign-category-tag').textContent.trim() : 'عام';
    const defaultAmount = input ? Number(input.value) || 100 : 100;
    const baseStep = defaultAmount >= 500 ? 100 : (defaultAmount >= 100 ? 50 : 25);

    if (btnUp && input) {
      btnUp.addEventListener('click', () => {
        let val = Number(input.value) || defaultAmount;
        input.value = val + baseStep;
      });
    }

    if (btnDown && input) {
      btnDown.addEventListener('click', () => {
        let val = Number(input.value) || defaultAmount;
        if (val > baseStep) {
          input.value = val - baseStep;
        }
      });
    }

    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        const amt = input ? Number(input.value) || defaultAmount : defaultAmount;
        addToCart({
          id: cardId,
          title: cardTitle,
          amount: amt,
          category: cardCategory,
          qty: 1
        });
      });
    }

    if (btnDonateNow) {
      btnDonateNow.addEventListener('click', () => {
        const amt = input ? Number(input.value) || defaultAmount : defaultAmount;
        addToCart({
          id: cardId,
          title: cardTitle,
          amount: amt,
          category: cardCategory,
          qty: 1
        });
        window.location.href = 'checkout.html';
      });
    }
  });

  // 4. Campaign Tabs Filtering on Homepage
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

  // 5. Checkout Page Execution & Summary
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
        clearCart();
        const successModal = document.querySelector('.success-modal');
        if (successModal) {
          const successDesc = successModal.querySelector('.success-desc');
          if (successDesc) {
            successDesc.textContent = `شكراً جزيلاً لك يا ${donorName}. تم تسجيل إشعار تبرعك بنجاح، وسيقوم مسؤول الحسابات بتأكيد الإيداع وإرسال الإيصال.`;
          }
          successModal.classList.add('active');
        } else {
          alert('تقبل الله منكم صالح الأعمال! تم تسجيل إشعار تبرعكم بنجاح.');
          window.location.href = 'index.html';
        }
      });
    }
  }

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

  // 7. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeNavDrawer = () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeNavDrawer);
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeNavDrawer();
    });
  }

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
