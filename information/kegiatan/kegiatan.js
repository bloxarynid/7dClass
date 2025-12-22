// Data Kegiatan
window.kegiatanData = [
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