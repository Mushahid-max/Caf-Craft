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
