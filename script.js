// Data Profil
const profiles = {
  Marvel: 'Hobi: Coding, Nonton, Riding',
  Adit: 'Hobi: Modif Motor, Bikin Knalpot Custom',
  Rizky: 'Hobi: Touring, Bikin Konten',
  Bima: 'Hobi: Fotografi, Hunting Motor Unik'
};

// Fungsi untuk redirect ke profil.html dan simpan nama di localStorage
function showProfile(nama) {
  localStorage.setItem('selectedProfile', nama);
  window.location.href = 'profil.html';
}

// Tampilkan profil yang dipilih saat halaman profil dimuat
window.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('profilBox');
  const selected = localStorage.getItem('selectedProfile');

  if (box && selected && profiles[selected]) {
    box.innerHTML = `
      <h2>${selected}</h2>
      <p>${profiles[selected]}</p>
    `;
  }
});

// Toggle Navbar untuk responsive menu
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

if (menu && navbar) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
}
