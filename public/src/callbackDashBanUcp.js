// Menambahkan event listener untuk tombol BanUcp
// document.querySelector(".BanUcpButton").addEventListener("click", function () {
//   // Tampilkan elemen dengan kelas bancupMain
//   document.querySelector(".bancupMain").style.display = "block";
//   // Sembunyikan elemen dengan kelas mainLogin jika diperlukan
//   // document.querySelector(".mainLogin").style.display = "none";
//   // Tampilkan elemen lain jika diperlukan
//   // document.querySelector(".mainLogin2").style.display = "none"; // Contoh jika ingin menyembunyikan mainLogin2
// });
document.querySelector(".BanUcpButton").addEventListener("click", function () {
  const bancupMain = document.querySelector(".bancupMain");
  const mainLogin = document.querySelector(".mainLogin");
  const mainLogin2 = document.querySelector(".mainLogin2");

  // Cek apakah bancupMain ditampilkan
  if (bancupMain.style.display === "block") {
    // Jika ditampilkan, sembunyikan
    bancupMain.style.display = "none";
  } else {
    // Jika tidak ditampilkan, tampilkan
    bancupMain.style.display = "block";
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
