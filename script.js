<script>
// ===== 1. Category Filter =====
const categories = document.querySelectorAll('#categories a');
const products = document.querySelectorAll('#product-grid .product');

categories.forEach(cat => {
  cat.addEventListener('click', e => {
    e.preventDefault();
    const filter = cat.getAttribute('data-filter');
    products.forEach(p => {
      if(filter === 'all' || p.dataset.category === filter){
        p.style.display = 'block';
        p.classList.add('fade-in');
      } else {
        p.style.display = 'none';
      }
    });
  });
});

// Image Zoom Modal
const modal = document.createElement('div');
modal.id = 'modal';
modal.style.cssText = "display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);text-align:center;padding-top:60px;";
modal.innerHTML = '<span id="close" style="position:absolute;top:20px;right:40px;color:#fff;font-size:40px;cursor:pointer;">&times;</span><img id="modal-img" style="max-width:80%;max-height:80%;border-radius:10px;">';
document.body.appendChild(modal);

document.querySelectorAll('.product img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal').style.display='block';
    document.getElementById('modal-img').src=img.src;
  });
});
document.getElementById('close').onclick = () => { document.getElementById('modal').style.display='none'; };

// Fade-in animation
document.querySelectorAll('.product').forEach((p,i)=>{p.style.opacity=0; setTimeout(()=>{p.style.transition='opacity 0.8s ease-in'; p.style.opacity=1;}, i*100);});

  modal.style.display = 'none';
};

// ===== 3. Contact Form Validation =====
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const email = form.email.value;
  const phone = form.phone.value;
  const phonePattern = /^\d{10,12}$/; // 10-12 digits
  if(!email.includes('@')){
    alert('Please enter a valid email.');
    return;
  }
  if(!phonePattern.test(phone)){
    alert('Please enter a valid phone number (10-12 digits).');
    return;
  }
  alert('Form submitted successfully!');
  form.reset();
});

// ===== 4. Fade-in Animation =====
products.forEach(p => {
  p.style.opacity = 0;
  setTimeout(() => {
    p.style.transition = 'opacity 0.8s ease-in';
    p.style.opacity = 1;
  }, 100);
});

// ===== 5. Dynamic Updates Example =====
products.forEach((p, index) => {
  if(index === 0){ // mark first product as New Arrival
    const badge = document.createElement('div');
    badge.textContent = 'New Arrival';
    badge.style.background = '#b76e79';
    badge.style.color = '#fff';
    badge.style.padding = '3px 8px';
    badge.style.position = 'absolute';
    badge.style.top = '10px';
    badge.style.left = '10px';
    badge.style.borderRadius = '5px';
    badge.style.fontSize = '12px';
    p.style.position = 'relative';
    p.appendChild(badge);
  }
});
</script>
