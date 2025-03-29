let users = {
    user1: {
        username: "Administrator",
        password: "humanity",
    },
    user2: {
        username: "user2",
        password: "password2",
    },
    user3: {
        username: "user3",
        password: "password3",
    },
};

// Menangani pengiriman form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai dari input
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Memeriksa kredensial
    let isAuthenticated = false;

    for (let userKey in users) {
        if (users[userKey].username === usernameInput && users[userKey].password === passwordInput) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated) {
        // Jika login berhasil, arahkan ke dashboard
        alert("berhasil");
        window.location.href = 'public/dashboard.html'; // Ganti dengan URL dashboard Anda
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});