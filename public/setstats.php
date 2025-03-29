<?php
// Memproses data dari form jika ada
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $setstatsname = $_POST['setstatsname'];
    $statType = $_POST['statType']; // Menangkap jenis statistik dari dropdown
    $statValue = $_POST['statValue']; // Menangkap nilai statistik dari input

    // Koneksi ke database
    $servername = "51.79.246.218"; // Ganti dengan server Anda
    $username = "u335_xIoZHDP2G4"; // Ganti dengan username MySQL Anda
    $password = "+oXWnh9X@9ECRWCiodRjbZj."; // Ganti dengan password MySQL Anda
    $dbname = "s335_s335_Alphey1233"; // Ganti dengan nama database Anda

    // Membuat koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Memeriksa koneksi
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Validasi dan konversi nilai statistik ke integer
    if (!is_numeric($statValue)) {
        echo "<script>alert('Jumlah harus berupa angka.');</script>";
    } else {
        // Menyiapkan pernyataan UPDATE berdasarkan jenis statistik
        $sql = "UPDATE players SET $statType = ? WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("is", $statValue, $setstatsname); // Menggunakan 'is' untuk integer dan string

        if ($stmt->execute()) {
            echo "<script>alert('Statistik untuk $setstatsname berhasil diperbarui!');</script>";
        } else {
            echo "<script>alert('Terjadi kesalahan saat memperbarui statistik.');</script>";
        }

        // Menutup pernyataan
        $stmt->close();
    }

    // Menutup koneksi
    $conn->close();
}
