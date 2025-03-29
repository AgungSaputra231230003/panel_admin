// Menambahkan event listener untuk tombol login
document
  .querySelector(".loginAdminButton")
  .addEventListener("click", function () {
    // Sembunyikan elemen dengan kelas mainLogin
    document.querySelector(".mainLogin").style.display = "none";
    // Tampilkan elemen dengan kelas mainLogin2
    document.querySelector(".mainLogin2").style.display = "block";
  });
