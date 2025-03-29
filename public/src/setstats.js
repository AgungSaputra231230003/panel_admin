// Menambahkan event listener untuk tombol BanUcp
// document.querySelector(".BanUcpButton").addEventListener("click", function () {
//   // Tampilkan elemen dengan kelas SetStatMain
//   document.querySelector(".SetStatMain").style.display = "block";
//   // Sembunyikan elemen dengan kelas mainLogin jika diperlukan
//   // document.querySelector(".mainLogin").style.display = "none";
//   // Tampilkan elemen lain jika diperlukan
//   // document.querySelector(".mainLogin2").style.display = "none"; // Contoh jika ingin menyembunyikan mainLogin2
// });
document.querySelector(".SETSTATS").addEventListener("click", function () {
  const SetStatMain = document.querySelector(".SetStatMain");
  const mainLogin = document.querySelector(".mainLogin");
  const mainLogin2 = document.querySelector(".mainLogin2");

  // Cek apakah SetStatMain ditampilkan
  if (SetStatMain.style.display === "block") {
    // Jika ditampilkan, sembunyikan
    SetStatMain.style.display = "none";
  } else {
    // Jika tidak ditampilkan, tampilkan
    SetStatMain.style.display = "block";
  }

  // Cek apakah mainLogin ditampilkan
  if (mainLogin.style.display === "block") {
    // Jika ditampilkan, sembunyikan
    mainLogin.style.display = "none";
  } else {
    // Jika tidak ditampilkan, sembunyikan
    mainLogin.style.display = "none"; // Pastikan ini sesuai dengan logika Anda
  }

  // Cek apakah mainLogin2 ditampilkan
  if (mainLogin2.style.display === "block") {
    // Jika ditampilkan, sembunyikan
    mainLogin2.style.display = "none";
  } else {
    // Jika tidak ditampilkan, sembunyikan
    mainLogin2.style.display = "none"; // Pastikan ini sesuai dengan logika Anda
  }
});
