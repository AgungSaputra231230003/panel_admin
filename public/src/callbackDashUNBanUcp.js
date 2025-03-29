document.querySelector(".UNBanUcpButton").addEventListener("click", function () {
  const UNbancupMain = document.querySelector(".UNbancupMain");
  const mainLogin = document.querySelector(".mainLogin");
  const mainLogin2 = document.querySelector(".mainLogin2");

  // Cek apakah UNbancupMain ditampilkan
  if (UNbancupMain.style.display === "block") {
    // Jika ditampilkan, sembunyikan
    UNbancupMain.style.display = "none";
  } else {
    // Jika tidak ditampilkan, tampilkan
    UNbancupMain.style.display = "block";
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
