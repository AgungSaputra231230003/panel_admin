<?php
// Memproses data dari form jika ada
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $unbannama = $_POST['unbannama'];
    $unbanreason = $_POST['unbanreason'];

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

    // Memeriksa apakah UCP ada di dalam tabel
    $checkSql = "SELECT COUNT(*) FROM playerucp WHERE ucp = ?";
    $checkStmt = $conn->prepare($checkSql);
    $checkStmt->bind_param("s", $unbannama);
    $checkStmt->execute();
    $checkStmt->bind_result($count);
    $checkStmt->fetch();
    $checkStmt->close();

    if ($count > 0) {
        // Jika UCP ditemukan, lakukan unban dan simpan alasan unban
        $sql = "UPDATE playerucp SET banned = 0, banreason = ?, bannedby = NULL WHERE ucp = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $unbanreason, $unbannama);

        if ($stmt->execute()) {
            echo "<script>
                    alert('Anda berhasil melakukan unban kepada $unbannama dengan alasan: $unbanreason');
                    window.location.href = 'dashboard.html';
                  </script>";
        } else {
            echo "<script>
                alert('Terjadi kesalahan saat melakukan unban.');
                window.location.href = 'dashboard.html';
            </script>";
        }

        // Menutup pernyataan
        $stmt->close();
    } else {
        // Jika UCP tidak ditemukan
        echo "<script>alert('Player dengan ucp $unbannama tidak ditemukan');window.location.href = 'dashboard.html';</script>";
    }

    // Menutup koneksi
    $conn->close();
}
