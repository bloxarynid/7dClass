// Data Tugas
window.tugasData = [
    {
        title: "Pengertian Sumber Daya Alam",
        date: "13 Januari 2026",
        mapel: "Ilmu Pengetahuan Sosial",
        content: `<div style="text-align: center; margin: 15px 0;">
                     <img src="image/tugas4.jpg" alt="Tugas Bahasa Indonesia" 
                          style="max-width: 100%; height: auto; border-radius: 8px; cursor: pointer;"
                          onclick="openImageModal('image/tugas4.jpg', 'Tugas Bahasa Indonesia')">
                     <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                         Klik gambar untuk melihat lebih jelas
                     </p>
                  </div>`,
        status: "Belum Selesai"
    },
    {
        title: "Keberagaman bangsa Indonesia Dalam Bhinneka Tunggal Ika",
        date: "13 Januari 2026",
        mapel: "Pendidikan Pancasila",
        content: `<div style="text-align: center; margin: 15px 0;">
                     <img src="image/tugas3.jpg" alt="Tugas Bahasa Indonesia" 
                          style="max-width: 100%; height: auto; border-radius: 8px; cursor: pointer;"
                          onclick="openImageModal('image/tugas3.jpg', 'Tugas Bahasa Indonesia')">
                     <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                         Klik gambar untuk melihat lebih jelas
                     </p>
                  </div>`,
        status: "Belum Selesai"
    },
    {
        title: "Bahasa Indonesia",
        date: "9 Januari 2026",
        mapel: "Bahasa Indonesia",
        content: `<div style="text-align: center; margin: 15px 0;">
                     <img src="image/tugas2.jpg" alt="Tugas Bahasa Indonesia" 
                          style="max-width: 100%; height: auto; border-radius: 8px; cursor: pointer;"
                          onclick="openImageModal('image/tugas2.jpg', 'Tugas Bahasa Indonesia')">
                     <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                         Klik gambar untuk melihat lebih jelas
                     </p>
                  </div>`,
        status: "Selesai"
    },
    {
        title: "PR PPKN",
        date: "25 Oktober 2025",
        mapel: "PPKN",
        content: `<div style="text-align: center; margin: 15px 0;">
                     <img src="information/tugas/image/tugas1.jpg" alt="Tugas PPKN" 
                          style="max-width: 100%; height: auto; border-radius: 8px; cursor: pointer;"
                          onclick="openImageModal('information/tugas/image/tugas1.jpg', 'Tugas PPKN')">
                     <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                         Klik gambar untuk melihat lebih jelas
                     </p>
                  </div>`,
        status: "Selesai"
    },
    {
        title: "Tugas Matematika",
        date: "7 Januari 2026",
        mapel: "Matematika",
        content: '<p>Informasi bagi besok, tepatnya di hari <strong>Rabu 7 Januari tahun 2026</strong>. Semua siswa/i <strong>harus membaca buku matematika halaman 124 dan halaman selanjutnya!</strong>',
        status: "Selesai"
    },
    {
        title: "Tugas IPA",
        date: "20 Oktober 2025",
        mapel: "IPA",
        content: `<p>1. Jelaskan langkah-langkah pembuatan termometer dengan menggunakan zat cair!</p>
                 <p>2. Jelaskan mengapa raksa dan alkohol di gunakan dalam pembuatan termometer!</p>
                 <p>3. Sebutkan dua titik tetap yabg di gunakan dalam pembuatan termometer!</p>
                 <p>4. titik tetap (Bawah/Atas), nama Termometer (pengukuran), Celcius titik tetap bawah dan atas, Reamur titik tetap bawah atas, Fahrenheit titik tetap bawah atas, kelvin titik tetap bawah dan atas</p>`,
        status: "Selesai"
    },
    {
        title: "Tugas Matematika",
        date: "Sabtu, 1 November 2025",
        mapel: "Matematika",
        content: `<p><strong>Buku:</strong> Halaman 80</p>
                 <p><strong>Soal:</strong> Nomor 4, 5, dan 6</p>
                 <p><strong>Deskripsi:</strong> Kerjakan soal-soal tersebut dengan menuliskan langkah-langkah pengerjaannya dengan jelas.</p>`,
        status: "Selesai"
    },
    {
        title: "Tugas Bahasa Indonesia",
        date: "20 Oktober 2025",
        mapel: "Bahasa Indonesia",
        content: `<p>Buatlah cerita fantasi!.</p>`,
        status: "Selesai"
    }
];

// Fungsi Render Tugas
function renderTugas() {
    const container = document.getElementById('tugas-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (window.tugasData.length === 0) {
        container.innerHTML = '<p class="no-result">Belum ada tugas</p>';
        return;
    }
    
    window.tugasData.forEach(tugas => {
        const tugasCard = document.createElement('div');
        tugasCard.className = 'tugas-card';
        
        const statusClass = tugas.status === "Terlambat" ? "status-terlambat" : 
                          tugas.status === "Selesai" ? "status-selesai" : "status-belum";
        
        tugasCard.innerHTML = `
            <div class="tugas-header">
                <h3 class="tugas-title">${tugas.title}</h3>
                <span class="tugas-date">${tugas.date}</span>
            </div>
            <span class="tugas-mapel">${tugas.mapel}</span>
            <div class="tugas-deskripsi">${tugas.content}</div>
            <span class="tugas-status ${statusClass}">${tugas.status}</span>
        `;
        
        container.appendChild(tugasCard);
    });
}
