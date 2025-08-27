
// ====== Depression Mental Health - main.js ======
const toggle = document.getElementById('mobile-toggle');
const links = document.getElementById('nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    links.style.display = isOpen ? 'none' : 'flex';
  });
}

// Simple form handler
function handleForm(formId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    // basic validation
    for (const [k,v] of Object.entries(obj)){
      if(!String(v).trim()){
        alert('Please complete the ' + k + ' field.');
        return;
      }
    }
    alert('Thank you! Your request has been received. We will reach out within 24 hours.');
    form.reset();
  });
}
handleForm('contactForm');
handleForm('enquiryForm');
