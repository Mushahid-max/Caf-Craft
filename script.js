const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// menu
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active to clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    menuCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        if (card.classList.contains(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  });
});
// signup
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullname = signupForm.fullname.value.trim();
  const email = signupForm.email.value.trim();
  const password = signupForm.password.value;
  const confirmPassword = signupForm.confirmPassword.value;

  if (!fullname) {
    alert('Please enter your full name');
    return;
  }
  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email');
    return;
  }
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  alert('Signup successful! You can now login.');
  signupForm.reset();
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//login
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    alert('Login successful!');
    loginForm.reset();
  });
}

// contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name) {
      alert('Please enter your full name');
      return;
    }
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    if (!message) {
      alert('Please enter your message');
      return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
}


