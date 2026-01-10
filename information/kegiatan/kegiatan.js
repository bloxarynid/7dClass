// Data Kegiatan
window.kegiatanData = [
  {
    title: "Pemilihan Ketua Osis 2026",
    date: "12 Januari 2026",
    lokasi: "indoor, Esphero",
    content: 
        '<div>' +
        '<p>Ngapunten bapak/ibu mohon ijin memberikan informasi <strong>Pengumuman Ketentuan PILKETOS, 12 Januari 2026 :</strong></p>' +
        '<div class="rule">1. Setiap kelas menyiapkan yel dan properti untuk mendukung salah satu kandidat.</div>' +
        '<div class="rule">2. Menggunakan atasan <strong>batik</strong>, bawahan <strong>hitam</strong> (bahan <strong>kain</strong>, tidak boleh jeans), menggunakan kerudung <strong>segi4</strong>, ciput, kaos kaki esphero, dan sepatu <strong>hitam</strong>.</div>' +
        '<div class="rule">3. Berangkat sebelum jam 07.00, tas letakan di laci meja kelas dan langsung menuju indoor, uang dan minum dibawa ke indoor, hp di kumpulkan ke wali kelas.</div>' +
        '<p>Matur nuwun</p>' +
        '</div>'
  },{
    title: "Ketentuan Berpakaian Saat PilKeTos",
    date: "12 Januari 2026",
    lokasi: "indoor, Esphero",
    content: `
        <div>
            <p>Ngapunten info tambahan</p>
            <div class="rule">- <strong>Tidak boleh pakai rok sepan sempit</strong></div>
            <div class="rule">- <strong>Tidak boleh rok yang press body</strong></div>
            <div class="rule">- <strong>Tidak boleh rok lilit</strong></div>
            <div class="rule">- <strong>Tidak boleh pakai rok yang ada belahan belakangnya</strong></div>
            <div class="rule">- <strong>Kalau bisa yg tanpa motif/gambar</strong></div>
            <div class="rule">- <strong>Boleh pakai kulot lebar (utk putri)</strong></div>
            <div class="rule">- <strong>Anak putra tidak boleh pakai celana pensil, celana komprang, celana training</strong></div>
            
            <p>Intinya memakai pakaian yang sopan.</p>
            <p><i>Ajining diri ono ing lathi, ajining rogo ono ing busono</i></p>
            <p>Dan 1 lagi Pakai atasan batik tidak dimasukkan, baik putra maupun putri.</p>
        </div>
    `
},
    {
        title: "Peringatan Hari Santri Nasional",
        date: "20 Oktober 2025",
        lokasi: "Sekolah",
        content: "Memperingati Hari Santri secara Nasional dengan memakai baju bernuansa (serba) putih."
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
