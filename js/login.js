// mendapatkan elemen form
const formLogin = document.querySelector('#form-login');

// event listener untuk form login
formLogin.addEventListener('submit', function(event) {
  event.preventDefault();

  // mendapatkan data dari form login
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // memanggil fungsi untuk memeriksa email dan password
  const loginSukses = cekDataLogin(email, password);

  // jika login sukses, arahkan ke halaman utama
  if (loginSukses) {
    alert('Login berhasil!');
    localStorage.setItem('name-login', loginSukses.nama)
    window.location.href = 'welcome.html';
  } else {
    alert('Email atau password salah!');
  }

  // mengosongkan form
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
});

// fungsi untuk memeriksa email dan password
function cekDataLogin(email, password) {
  // mengambil data registrasi dari local storage
  const dataRegistrasi = JSON.parse(localStorage.getItem('dataRegistrasi'));

  // mencari apakah email dan password sesuai dengan data yang tersimpan
  for (let i = 0; i < dataRegistrasi.length; i++) {
    if (dataRegistrasi[i].email === email && dataRegistrasi[i].password === password) {
      return dataRegistrasi[i];
    }
  }

  return false;
}

