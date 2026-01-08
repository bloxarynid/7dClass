// Data Kegiatan
window.kegiatanData = [
    {
        title: "Peringatan Hari Santri Nasional",
        date: "20 Oktober 2025",
        lokasi: "Sekolah",
        content: "Memperingati Hari Santri secara Nasional dengan memakai baju bernuansa (serba) putih."
    },
    
    {
        title: "Kegiatan Evaluasi Semester Ganjil dan Persiapan Pemilihan Ketua Osis",
        date: "9 Januari 2026",
        lokasi: "Indoor, Esphero",content: '<p><em>Assalamualaikum wrwb</em></p>\n\n' +
'<p>Menginformasikan untuk kegiatan jumpa pakar hari Jum\'at, 9 Januari 2026 adalah <strong>evaluasi kegiatan semester ganjil dan persiapan pilketos</strong> dg ketentuan sebagai berikut:</p>\n\n' + // ← Perhatikan \' di "Jum'at"
'<ol>\n' +
'    <li>Setelah bel jam 07.00 Wib seluruh <em>siswa menuju ke indoor</em></li>\n' +
'    <li>Sholat Jum\'at dimasjid luar sekolah.</li>\n' + // ← Perhatikan \' di "Jum'at"
'    <li>Keputrian ditiadakan</li>\n' +
'    <li>Siswa/i berseragam Pramuka lengkap.</li>\n' +
'</ol>\n\n' +
'<p>Demikian informasi ini disampaikan, terimakasih.</p>\n\n' +
'<p><em>Wassalamu\'alaikum wrwb.</em></p>' // ← Perhatikan \' di "Wassalamu'alaikum"
        
    }
];

// Fungsi Render Kegiatan
function renderKegiatan() {
    const container = document.getElementById('kegiatan-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (window.kegiatanData.length === 0) {
        container.innerHTML = '<p class="no-result">Belum ada kegiatan</p>';
        return;
    }
    
    window.kegiatanData.forEach(kegiatan => {
        const kegiatanCard = document.createElement('div');
        kegiatanCard.className = 'kegiatan-card';
        
        kegiatanCard.innerHTML = `
            <div class="kegiatan-header">
                <h3 class="kegiatan-title">${kegiatan.title}</h3>
                <span class="kegiatan-date">${kegiatan.date}</span>
            </div>
            <span class="kegiatan-lokasi">${kegiatan.lokasi}</span>
            <p class="kegiatan-deskripsi">${kegiatan.content}</p>
        `;
        
        container.appendChild(kegiatanCard);
    });
}
