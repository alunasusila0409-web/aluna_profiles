// Aluna Profile's - Interactive Logic & Navigation Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('show')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // 2. Contact Form Handler (Contact Page)
  const contactForm = document.getElementById('formalContactForm');
  const formAlert = document.getElementById('formAlert');

  if (contactForm && formAlert) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve values
      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('messageSubject');
      const messageInput = document.getElementById('messageBody');

      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Mohon lengkapi seluruh kolom formulir sebelum mengirim pesan.');
        return;
      }

      // Display formal confirmation notice
      formAlert.className = 'form-alert success';
      formAlert.innerHTML = `
        <i class="fa-solid fa-circle-check"></i> 
        Terima kasih, <strong>${escapeHtml(nameInput.value)}</strong>. Pesan Anda dengan perihal "<strong>${escapeHtml(subjectInput.value || 'Pesan Umum')}</strong>" telah berhasil dikirim secara formal. Aluna akan meninjau dan merespons melalui alamat email Anda.
      `;

      contactForm.reset();

      // Scroll smoothly to alert
      formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});

// Helper function to prevent basic XSS in alert display
function escapeHtml(string) {
  const div = document.createElement('div');
  div.innerText = string;
  return div.innerHTML;
}
