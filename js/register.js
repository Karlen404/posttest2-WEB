// mendapatkan elemen form
const formRegistrasi = document.querySelector('#form-registrasi');

// event listener untuk form registrasi
formRegistrasi.addEventListener('submit', function(event) {
  event.preventDefault();

  // mendapatkan data dari form registrasi
  const nama = document.querySelector('#nama').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // memanggil fungsi untuk menyimpan data registrasi ke local storage
  simpanDataRegistrasi(nama, email, password);

  // mengosongkan form
  document.querySelector('#nama').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
});

// fungsi untuk menyimpan data registrasi ke local storage
function simpanDataRegistrasi(nama, email, password) {
  // mengambil data registrasi dari local storage
  let dataRegistrasi = JSON.parse(localStorage.getItem('dataRegistrasi'));

  // jika tidak ada data registrasi sebelumnya, inisialisasi sebagai array kosong
  if (!dataRegistrasi) {
    dataRegistrasi = [];
  }

  // menambahkan data registrasi baru ke array
  const dataBaru = {
    'nama': nama,
    'email': email,
    'password': password
  };
  dataRegistrasi.push(dataBaru);

  // menyimpan data registrasi ke local storage
  localStorage.setItem('dataRegistrasi', JSON.stringify(dataRegistrasi));

  alert('Registrasi berhasil!');
}
