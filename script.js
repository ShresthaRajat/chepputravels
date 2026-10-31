const searchForm = document.querySelector('#trip-search');
const cards = [...document.querySelectorAll('.experience-card')];
const filters = [...document.querySelectorAll('.filter-pill')];
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
let activeCategory = 'all';

function applyFilters() {
  const interest = document.querySelector('#interest').value;
  const duration = document.querySelector('#duration').value;
  const style = document.querySelector('#style').value;
  const category = activeCategory !== 'all' ? activeCategory : (interest !== 'all' ? interest : style);
  let shown = 0;
  cards.forEach(card => {
    const matchesCategory = category === 'all' || card.dataset.category === category;
    const matchesDuration = duration === 'all' || card.dataset.duration === duration;
    const visible = matchesCategory && matchesDuration;
    card.hidden = !visible;
    if (visible) shown++;
  });
  resultCount.textContent = `${shown} experience${shown === 1 ? '' : 's'}`;
  emptyState.hidden = shown !== 0;
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  activeCategory = 'all';
  filters.forEach(button => button.classList.toggle('active', button.dataset.filter === 'all'));
  applyFilters();
  document.querySelector('#experiences').scrollIntoView({ behavior: 'smooth' });
});
filters.forEach(button => button.addEventListener('click', () => {
  activeCategory = button.dataset.filter;
  filters.forEach(item => item.classList.toggle('active', item === button));
  document.querySelector('#interest').value = 'all';
  document.querySelector('#style').value = 'all';
  applyFilters();
}));

document.querySelectorAll('.save-trip').forEach(button => button.addEventListener('click', () => {
  const saved = button.classList.toggle('saved');
  button.textContent = saved ? '♥' : '♡';
  button.setAttribute('aria-pressed', String(saved));
}));

document.querySelectorAll('[data-trip]').forEach(link => link.addEventListener('click', () => {
  const trip = link.dataset.trip;
  const message = document.querySelector('textarea[name="message"]');
  if (message && !message.value.trim()) message.value = `I'm interested in: ${trip}. Please share more details.`;
}));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#form-feedback');
  if (!form.reportValidity()) {
    feedback.textContent = 'Please complete the required fields and consent checkbox before preparing your enquiry.';
    feedback.style.color = '#a23b32';
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Travel enquiry from ${data.get('name')} — Cheppu Travels`);
  const body = encodeURIComponent(
`Hello Cheppu Travels,\n\nI'd like to enquire about a trip.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPreferred dates: ${data.get('dates') || 'Flexible / not specified'}\nTravellers: ${data.get('travellers')}\nInterest: ${data.get('interest')}\nMessage: ${data.get('message') || 'No additional details provided.'}\n\nPlease let me know the next steps.\n`
  );
  // Replace this placeholder with the verified business email before launch.
  const businessEmail = 'ADD-YOUR-REAL-EMAIL-HERE';
  if (businessEmail === 'ADD-YOUR-REAL-EMAIL-HERE') {
    feedback.textContent = 'Your details passed the form checks, but the business email is not configured yet. Add the real email in script.js before launch; nothing has been sent.';
    feedback.style.color = '#8b4e1a';
    return;
  }
  feedback.textContent = 'Opening your email app with the enquiry draft. Please review and send it there.';
  feedback.style.color = '#426b35';
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
applyFilters();
