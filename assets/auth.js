// ============================================
// AUTH.JS - SISTEM LOGIN AMAN
// ============================================

const KELAS7D_USERS = [
    { username: "abiyyu", fullname: "Abiyyu Nocherino Revantara" },
    { username: "ahmed", fullname: "Ahmed Fadee Aisyhafiy" },
    { username: "alifah", fullname: "Alifah Adeliza" },
    { username: "amalia", fullname: "Amalia Rezki Azizi" },
    { username: "argani", fullname: "Argani Wisnu Wibisana" },
    { username: "arni", fullname: "Arni Rahmadhani" },
    { username: "aryasatya", fullname: "Aryasatya Byakta" },
    { username: "azelia", fullname: "Azelia Nur Azzahra" },
    { username: "azzam", fullname: "Azzam Amanullah" },
    { username: "denessia", fullname: "Denessia Fahia Mahya" },
    { username: "dwika", fullname: "Dwika Hadi Wijaya" },
    { username: "erfira", fullname: "Erfira Anggraeni" },
    { username: "farzan", fullname: "Farzan Ahza Argani" },
    { username: "firli", fullname: "Firli Alisa Rahma" },
    { username: "ghatfaan", fullname: "Ghatfaan Fayaadh Aufaa" },
    { username: "hartts", fullname: "Harist Abdul Hakim" },
    { username: "joshua", fullname: "Joshua Veddyttarro" },
    { username: "keisha", fullname: "Keisha Novelis Nafeeza Zaafarani" },
    { username: "kirana", fullname: "Kirana Kamalia Ayu Wardaniningrum" },
    { username: "mohammad", fullname: "Mohammad Asadell Akhtar" },
    { username: "muhammad", fullname: "Muhammad Ardiansyah" },
    { username: "mutia", fullname: "Mutia Almas Fatimatuzzahra" },
    { username: "nafis", fullname: "Nafis Prawiro" },
    { username: "nara", fullname: "Nara Ayu Apriliani" },
    { username: "priska", fullname: "Priska Oktaviana" },
    { username: "rajendra", fullname: "Rajendra Veron Alerea" },
    { username: "reina", fullname: "Reina Al Yasmin" },
    { username: "riyan", fullname: "Riyan Ade Saputra" },
    { username: "selena", fullname: "Selena Zayna Tatum" },
    { username: "shafin", fullname: "Shafin Althaf" },
    { username: "zabarjad", fullname: "Zabarjad Nibras Alzain" },
    { username: "zauhair", fullname: "Zauhair Rakha Adi" }
];

class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.loginAttempts = 0;
        this.maxAttempts = 5;
    }

    login(usernameInput, passwordInput) {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validasi input
        if (!username || !password) {
            return { success: false, message: "Username dan password harus diisi!" };
        }

        // Cek attempt
        if (this.loginAttempts >= this.maxAttempts) {
            return { 
                success: false, 
                message: "Terlalu banyak percobaan login. Tunggu 5 menit." 
            };
        }

        // Cari user
        const user = this.findUser(username);

        if (!user) {
            this.loginAttempts++;
            return { success: false, message: "Username tidak ditemukan!" };
        }

        // GENERATE PASSWORD OTOMATIS: username + "123"
        const expectedPassword = user.username.toLowerCase() + "123";

        // Bandingkan password
        if (password === expectedPassword) {
            // Reset attempts
            this.loginAttempts = 0;
            
            // Set user
            this.currentUser = {
                username: user.username,
                fullname: user.fullname
            };
            this.isLoggedIn = true;
            
            return { 
                success: true, 
                message: `Selamat datang, ${user.fullname}!`,
                user: this.currentUser
            };
        } else {
            this.loginAttempts++;
            return { 
                success: false, 
                message: `Password salah! Gunakan: ${user.username}123` 
            };
        }
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.loginAttempts = 0;
        
        // Clear session storage
        try {
            localStorage.removeItem('kelas7d_session');
        } catch (e) {
            console.error('Gagal clear session:', e);
        }
        
        return { success: true, message: "Berhasil logout!" };
    }

    findUser(username) {
        return KELAS7D_USERS.find(u => 
            u.username.toLowerCase() === username.toLowerCase() ||
            u.fullname.toLowerCase().includes(username.toLowerCase())
        );
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isAuthenticated() {
        return this.isLoggedIn;
    }

    getPasswordHint(username) {
        const user = this.findUser(username);
        if (user) {
            return `Password untuk ${user.username}: ${user.username}123`;
        }
        return "Username tidak ditemukan";
    }
}

// Buat instance dan export
const auth = new AuthSystem();

// Export untuk window object
if (typeof window !== 'undefined') {
    window.auth = auth;
    window.KELAS7D_USERS = KELAS7D_USERS;
}
