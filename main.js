// Modal materi sederhana (kalau ada di index.html)
const materiModal = document.getElementById('materiModal')
if (materiModal){
  materiModal.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget
    const title = trigger.getAttribute('data-title')
    const content = trigger.getAttribute('data-content')
    materiModal.querySelector('.modal-title').textContent = title
    materiModal.querySelector('#materiBody').textContent = content
  })
}

// Pencarian materi
const searchMateri = document.getElementById('searchMateri')
if (searchMateri){
  searchMateri.addEventListener('input', function(e){
    const q = e.target.value.toLowerCase().trim()
    document.querySelectorAll('#materiList > div').forEach(col=>{
      const kws = col.getAttribute('data-keywords') || ''
      col.style.display = (q === '' || kws.includes(q) || kws.split(' ').some(k=>k.startsWith(q))) ? '' : 'none'
    })
  })
}

// Simulasi form kontak
const contactForm = document.getElementById('contactForm')
if (contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim (simulasi).')
    e.target.reset()
  })
}
