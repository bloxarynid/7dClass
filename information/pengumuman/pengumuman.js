// Data Pengumuman
window.pengumumanData = [
    { 
        title: "Selamat Datang di Website Kelas 7D", 
        content: "Website ini adalah portal resmi untuk komunikasi dan informasi kelas. Semoga bermanfaat!", 
        date: "2023-05-01", 
        author: "Administrator" 
    },
    {
        title: "MBG - Jadwal Piket & Petunjuk",
        content: '<div style="text-align: center;">"<small>untuk box bekal yang dikumpulkan di indoor box makan yang berisi bekal. Jadi disampaikan ke anak bekal dimakannya bersama-sama di indoor.</small>"</div>',
        date: "24 Oktober 2025",
        author: "Dwika Hadi Wijaya",
        images: [
            { src: "information/pengumuman/image/pengumuman2.jpg", alt: "jadwal" },
            { src: "information/pengumuman/image/pengumuman3.jpg", alt: "petunjuk" }
        ]
    },
    {
        title: "Kegiatan Jum'at 7 November 2025",
        content: `<p><strong><em>Assalamualaikum wrwb</em></strong></p>
                 <p>Menginformasikan untuk kegiatan jumpa pakar hari Jum'at, 7 November 2025 adalah <strong>Jalan Sehat</strong>  dg ketentuan sebagai berikut:</p>
                 <ol>
                     <li>Setelah bel jam 07.00 seluruh siswa kelas 7,8 & 9  menuju ke indoor</li>
                     <li>Sholat Jum'at di sekolah.</li>
                     <li>Keputrian kelas 9</li>
                     <li>Sholat Jum'at di sekolah.</li>
                     <li>Keputrian kelas 9.</li>
                     <li>Siswa/i berseragam <strong>kaos dengan membawa ganti seragam Pramuka lengkap (kelas 7 membawa baret/topi serta dianjurkan membawa bendera semaphore guna mengikuti ekstra pramuka).</strong></li>
                 </ol>
                 <p>Demikian informasi ini disampaikan, terimakasih.</p>
                 <p><strong><em>Wassalamu'alaikum wrwb.</em></strong></p>`,
        date: "6 November 2025",
        author: "Dwika Hadi Wijaya"
    },
    {
        title: "Kegiatan Jumpa Pakar Hari Jum'at, 24 Oktober 2025",
        content: `<p><strong><em>Assalamualaikum wrwb</em></strong></p>
                 <p>Menginformasikan untuk kegiatan jumpa pakar hari Jum'at, 24 Oktober 2025 adalah <strong>Ketertiban</strong> dengan ketentuan sebagai berikut:</p>
                 <ol>
                     <li>Setelah bel jam 07.00 seluruh siswa kelas 7,8 & 9 menuju ke lapangan upacara untuk <strong><em>senam anak Indonesia hebat</em></strong></li>
                     <li>Siswa kelas 8-9 baris di lapangan upacara seperti biasa persiapan, kelas 7 baris di Indoor. Di awali dengan Berdoa, menyanyikan Lagu Indonesia Raya, dilanjutkan senam.</li>
                     <li>Setelah senam, seluruh siswa menuju ke indoor.</li>
                     <li>Sholat Jum'at di sekolah.</li>
                     <li>Keputrian kelas 9.</li>
                     <li>Siswa/i <strong>berseragam kaos</strong> dengan membawa ganti seragam Pramuka lengkap (kelas 7 membawa baret/topi).</li>
                 </ol>
                 <p>Demikian informasi ini disampaikan, terimakasih.</p>
                 <p><strong><em>Wassalamu'alaikum wrwb.</em></strong></p>`,
        date: "22 Oktober 2025",
        author: "Dwika Hadi Wijaya"
    },
    {
        title: "Gerakan Pramuka - Pembuatan KTA",
        content: '<div style="text-align: center;"><small>Klik gambar untuk melihat lebih jelas</small></div>',
        date: "22 Oktober 2025",
        author: "Dwika Hadi Wijaya",
        images: [
            { src: "information/pengumuman/image/pengumuman1.jpg", alt: "Gerakan Pramuka - Pembuatan KTA" }
        ]
    }
];

// Fungsi Render Pengumuman
function renderPengumuman() {
    const container = document.getElementById('pengumuman-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (window.pengumumanData.length === 0) {
        container.innerHTML = '<p class="no-result">Belum ada pengumuman</p>';
        return;
    }
    
    window.pengumumanData.forEach(announcement => {
        const announcementEl = document.createElement('div');
        announcementEl.className = 'announcement';
        
        let contentHTML = `
            <h3>${announcement.title}</h3>
            <div class="announcement-meta">
                <i class="far fa-calendar-alt"></i>
                <span>${announcement.date} - Oleh: ${announcement.author}</span>
            </div>
            <div>${announcement.content}</div>
        `;
        
        // Tambahkan gambar jika ada
        if (announcement.images) {
            announcement.images.forEach(img => {
                contentHTML += `
                    <div style="text-align: center; margin: 10px 0;">
                        <img src="${img.src}" alt="${img.alt}" 
                             style="max-width: 100%; height: auto; border-radius: 8px; cursor: pointer;"
                             onclick="openImageModal('${img.src}', '${img.alt}')">
                    </div>
                `;
            });
        }
        
        announcementEl.innerHTML = contentHTML;
        container.appendChild(announcementEl);
    });
}

// Fungsi Buka Gambar Modal
function openImageModal(src, title) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.style.zIndex = '3000';
    modal.innerHTML = `
        <div class="user-modal" style="max-width: 90%; max-height: 90%;">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close" id="image-modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body" style="text-align: center; overflow: auto;">
                <img src="${src}" alt="${title}" 
                     style="max-width: 100%; max-height: 70vh; border-radius: 8px;"
                     onerror="this.src='media/image/default.jpg'">
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('#image-modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    const closeOnEsc = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    };
    document.addEventListener('keydown', closeOnEsc);
}