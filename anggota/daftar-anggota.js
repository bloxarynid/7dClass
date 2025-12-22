// Data Anggota Kelas 7D
window.anggotaData = [
    { no: 1, nama: "Abiyyu Nocherino Revantara", absen: 1, kedudukan: "Anggota" },
    { no: 2, nama: "Ahmed Fadee Aisyhafiy", absen: 2, kedudukan: "Anggota" },
    { no: 3, nama: "Alifah Adeliza", absen: 3, kedudukan: "Seksi Kebersihan" },
    { no: 4, nama: "Amalia Rezki Azizi", absen: 4, kedudukan: "Bendahara I" },
    { no: 5, nama: "Argani Wisnu Wibisana", absen: 5, kedudukan: "Anggota" },
    { no: 6, nama: "Arni Rahmadhani", absen: 6, kedudukan: "Anggota" },
    { no: 7, nama: "Aryasatya Byakta", absen: 7, kedudukan: "Anggota" },
    { no: 8, nama: "Azelia Nur Azzahra", absen: 8, kedudukan: "Bendahara II" },
    { no: 9, nama: "Azzam Amanullah", absen: 9, kedudukan: "Seksi Kebersihan" },
    { no: 10, nama: "Denessia Fahia Mahya", absen: 10, kedudukan: "Anggota" },
    { no: 11, nama: "Dwika Hadi Wijaya", absen: 11, kedudukan: "Seksi Kebersihan" },
    { no: 12, nama: "Erfira Anggraeni", absen: 12, kedudukan: "Sekertaris I" },
    { no: 13, nama: "Farzan Ahza Argani", absen: 13, kedudukan: "Seksi Keamanan" },
    { no: 14, nama: "Firli Alisa Rahma", absen: 14, kedudukan: "Anggota" },
    { no: 15, nama: "Ghatfaan Fayaadh Aufaa", absen: 15, kedudukan: "Wakil Ketua" },
    { no: 16, nama: "Harist Abdul Hakim", absen: 16, kedudukan: "Ketua Kelas" },
    { no: 17, nama: "Joshua Veddyttarro", absen: 17, kedudukan: "Anggota" },
    { no: 18, nama: "Keisha Novelis Nafeeza Zaafarani", absen: 18, kedudukan: "Sekertaris II" },
    { no: 19, nama: "Kirana Kamalia Ayu Wardaniningrum", absen: 19, kedudukan: "Seksi Kebersihan" },
    { no: 20, nama: "Mohammad Asadell Akhtar", absen: 20, kedudukan: "Anggota" },
    { no: 21, nama: "Muhammad Ardiansyah", absen: 21, kedudukan: "Anggota" },
    { no: 22, nama: "Mutia Almas Fatimatuzzahra", absen: 22, kedudukan: "Literasi" },
    { no: 23, nama: "Nafis Prawiro", absen: 23, kedudukan: "Anggota" },
    { no: 24, nama: "Nara Ayu Apriliani", absen: 24, kedudukan: "Anggota" },
    { no: 25, nama: "Priska Oktaviana", absen: 25, kedudukan: "Anggota" },
    { no: 26, nama: "Rajendra Veron Alerea", absen: 26, kedudukan: "Seksi Kebersihan" },
    { no: 27, nama: "Reina Al Yasmin", absen: 27, kedudukan: "Seksi Kebersihan" },
    { no: 28, nama: "Riyan Ade Saputra", absen: 28, kedudukan: "Seksi Keagamaan" },
    { no: 29, nama: "Selena Zayna Tatum", absen: 29, kedudukan: "Anggota" },
    { no: 30, nama: "Shafin Althaf", absen: 30, kedudukan: "Anggota" },
    { no: 31, nama: "Zabarjad Nibras Alzain", absen: 31, kedudukan: "Anggota" },
    { no: 32, nama: "Zauhair Rakha Adi", absen: 32, kedudukan: "Anggota" }
];

// Data Struktur Organisasi
window.organisasiData = [
    { jabatan: "Ketua Kelas", nama: "Harist Abdul Hakim", icon: "fas fa-user-tie" },
    { jabatan: "Wakil Ketua", nama: "Ghatfaan Fayaadh Aufaa", icon: "fas fa-user-tie" },
    { jabatan: "Wali Kelas", nama: "SRI LESTRAI, S.Pd", icon: "fas fa-chalkboard-teacher" },
    { jabatan: "Sekretaris 1", nama: "Erfira Anggraeni", icon: "fas fa-clipboard-list" },
    { jabatan: "Sekretaris 2", nama: "Keisha Novelis Nafeeza Zaafarani", icon: "fas fa-clipboard-list" },
    { jabatan: "Bendahara 1", nama: "Amalia Rezki Azizi", icon: "fas fa-money-bill-wave" },
    { jabatan: "Bendahara 2", nama: "Azelia Nur Azzahra", icon: "fas fa-money-bill-wave" },
    { jabatan: "Literasi", nama: "Mutia Almas Fatimatuzzahra", icon: "fas fa-book" },
    { jabatan: "Seksi Keagamaan", nama: "Riyan Ade Saputra", icon: "fas fa-mosque" },
    { jabatan: "Seksi Keamanan", nama: "Farzan Arza Argani", icon: "fas fa-shield-alt" }
];

// Fungsi Render Organisasi Kelas
function renderOrganisasiKelas() {
    const container = document.getElementById('organisasi-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    window.organisasiData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <i class="${item.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${item.jabatan}</h3>
                <p>Nama: ${item.nama}</p>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Tambahkan kartu untuk Seksi Kebersihan
    const kebersihanCard = document.createElement('div');
    kebersihanCard.className = 'card';
    kebersihanCard.innerHTML = `
        <div class="card-img">
            <i class="fas fa-broom"></i>
        </div>
        <div class="card-content">
            <h3>Seksi Kebersihan</h3>
            <p>• Dwika Hadi Wijaya</p>
            <p>• Kirana Kamalia Ayu Wardaningrum</p>
            <p>• Reina Al Yasmin</p>
            <p>• Alifah Adeliza</p>
            <p>• Rajendra Veron Alerea</p>
            <p>• Azzam Amanullah</p>
        </div>
    `;
    container.appendChild(kebersihanCard);
}
