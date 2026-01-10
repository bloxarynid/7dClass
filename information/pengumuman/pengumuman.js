// Data Pengumuman
window.pengumumanData = [
    {
        title: "Surat Untuk Wali Murid",
        content: '<div style="text-align: center;">"<small>surat resmi untuk wali murud.</small>"</div>',
        date: "12 Januari 2026",
        author: "Dwika Hadi Wijaya",
        images: [
            { src: "information/pengumuman/image/pengumuman4.jpg", alt: "wali murid" }
        ]
    },
    { 
        title: "Selamat Datang di Website Kelas 7D", 
        content: "Website ini adalah portal resmi untuk komunikasi dan informasi kelas. Semoga bermanfaat!", 
        date: "2023-05-01", 
        author: "Administrator" 
    },
    {
        title: "Daftar Ranking Kelas 7D Semester Satu",
        content: "", // Akan diisi oleh generateRankingContent()
        date: "2023-12-20",
        author: "Wali Kelas"
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

// Data Ranking Lengkap
window.rankingData = [
    { rank: 1, name: "Dwika Hadi Wijaya" },
    { rank: 2, name: "Denessia Fahia Mahya" },
    { rank: 3, name: "Arni Rahmadhani" },
    { rank: 4, name: "Erfira Anggraeni" },
    { rank: 5, name: "Zauhair Rakha Adi" },
    { rank: 6, name: "Shafin Althaf" },
    { rank: 7, name: "Argani Wisnu Wibisana & Azzam Amanullah", notes: "(Ranking 7)" },
    { rank: 9, name: "Rajendra Veron Alerea & Azelia Nur Azzahra", notes: "(Ranking 9)" },
    { rank: 11, name: "Mutia Almas Fatimatuzzahra" },
    { rank: 12, name: "Reina Al Yasmin" },
    { rank: 13, name: "Nafis Prawiro & Alifah Adeliza", notes: "(Ranking 13)" },
    { rank: 15, name: "Mohammad Asadell Akhtar" },
    { rank: 16, name: "Kirana Kamalia Ayu Wardaniningrum" },
    { rank: 17, name: "Firli Alisa Rahma" },
    { rank: 18, name: "Keisha Novelis Nafeeza Zaafarani" },
    { rank: 19, name: "Amalia Rezki Azizi" },
    { rank: 20, name: "Muhammad Ardiansyah, Aryasatya Byakta, & Priska Oktaviana", notes: "(Ranking 20)" },
    { rank: 23, name: "Nara Ayu Apriliani" },
    { rank: 24, name: "Farzan Ahza Argani"},
    { rank: 25, name: "Selena Zayna Tatum" },
    { rank: 26, name: "Zabarjad Nibras Alzain"},
    { rank: 27, name: "Harist Abdul Hakim" },
    { rank: 28, name: "Joshua Veddyttarro" },
    { rank: 29, name: "Riyan Ade Saputra" },
    { rank: 30, name: "Abiyyu Nocherino Revantara" },
    { rank: 31, name: "Ahmed Fadee Aisyhafiy" },
    { rank: 32, name: "Ghatfaan Fayaadh Aufaa" }
];

// Fungsi untuk membuat konten ranking dengan desain menarik
function generateRankingContent() {
    let html = `
        <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="
                color: #4a6baf; 
                margin-bottom: 5px;
                font-size: 1.8em;
                background: linear-gradient(135deg, #4a6baf 0%, #6a8acf 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            ">
                🏆 Ranking Kelas 7D ✨
            </h2>
            <p style="color: #888; font-size: 0.95em; margin-top: 5px;">
                Hasil Akhir Semester Satu
            </p>
        </div>
        
        <div style="
            max-width: 650px;
            margin: 0 auto;
            background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            border: 1px solid #e8eef9;
            position: relative;
            overflow: hidden;
        ">
            <!-- Dekorasi Background -->
            <div style="
                position: absolute;
                top: 0;
                right: 0;
                width: 120px;
                height: 120px;
                background: linear-gradient(45deg, rgba(74, 107, 175, 0.05) 0%, rgba(106, 138, 207, 0.05) 100%);
                border-radius: 0 0 0 100%;
                z-index: 0;
            "></div>
            
            <div style="position: relative; z-index: 1;">
                <!-- Header Tabel Ranking -->
                <div style="
                    display: grid;
                    grid-template-columns: 80px 1fr;
                    gap: 15px;
                    padding: 15px 20px;
                    background: rgba(74, 107, 175, 0.07);
                    border-radius: 12px 12px 0 0;
                    border-bottom: 2px solid rgba(74, 107, 175, 0.1);
                    margin-bottom: 15px;
                ">
                    <div style="
                        font-weight: bold;
                        color: #4a6baf;
                        font-size: 1em;
                        text-align: center;
                    ">
                        RANK
                    </div>
                    <div style="
                        font-weight: bold;
                        color: #4a6baf;
                        font-size: 1em;
                    ">
                        NAMA LENGKAP SISWA
                    </div>
                </div>
                
                <!-- List Ranking -->
                <div style="
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                ">
    `;
    
    // Tambahkan setiap peringkat
    window.rankingData.forEach((item, index) => {
        const isTopThree = index < 3;
        const bgColor = isTopThree ? 
            (index === 0 ? 'rgba(255, 215, 0, 0.12)' : 
             index === 1 ? 'rgba(192, 192, 192, 0.12)' : 
             'rgba(205, 127, 50, 0.12)') : 
            (index % 2 === 0 ? 'rgba(248, 249, 250, 0.8)' : 'rgba(255, 255, 255, 0.8)');
        
        const rankColor = isTopThree ? 
            (index === 0 ? '#FFD700' : 
             index === 1 ? '#C0C0C0' : 
             '#CD7F32') : 
            '#4a6baf';
        
        html += `
            <div style="
                display: grid;
                grid-template-columns: 80px 1fr;
                gap: 15px;
                align-items: center;
                padding: ${isTopThree ? '18px 20px' : '14px 20px'};
                background: ${bgColor};
                border-radius: ${isTopThree ? '12px' : '10px'};
                border: ${isTopThree ? '2px solid ' + rankColor : '1px solid rgba(74, 107, 175, 0.1)'};
                box-shadow: ${isTopThree ? '0 4px 12px rgba(0,0,0,0.1)' : '0 2px 6px rgba(0,0,0,0.03)'};
                transition: all 0.3s ease;
                position: relative;
            ">
                <div style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                ">
                    <div style="
                        font-weight: bold;
                        color: ${rankColor};
                        font-size: ${isTopThree ? '1.4em' : '1.1em'};
                        text-align: center;
                        min-width: 50px;
                        padding: ${isTopThree ? '8px 12px' : '5px 8px'};
                        background: white;
                        border-radius: ${isTopThree ? '50px' : '30px'};
                        border: 2px solid ${rankColor};
                        box-shadow: 0 3px 8px rgba(0,0,0,0.08);
                        ${isTopThree ? `
                            animation: pulse ${2 + index * 0.5}s infinite alternate;
                        ` : ''}
                    ">
                        ${item.rank}
                        ${isTopThree ? 
                            (index === 0 ? '🥇' : 
                             index === 1 ? '🥈' : '🥉') : 
                            ''}
                    </div>
                </div>
                <div style="
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                ">
                    <strong style="
                        color: #333;
                        font-size: ${isTopThree ? '1.1em' : '1em'};
                        line-height: 1.4;
                    ">
                        ${item.name}
                    </strong>
                    ${item.notes ? `
                        <span style="
                            color: #888;
                            font-size: 0.9em;
                            font-style: italic;
                        ">
                            ${item.notes}
                        </span>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    // Tutup kontainer dan tambahkan footer
    html += `
                </div>
                
                <!-- Footer Informasi -->
                <div style="
                    margin-top: 30px;
                    padding: 20px;
                    background: rgba(74, 107, 175, 0.05);
                    border-radius: 12px;
                    border-left: 4px solid #4a6baf;
                ">
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        color: #4a6baf;
                        font-size: 0.95em;
                        margin-bottom: 10px;
                    ">
                        <span style="
                            background: #4a6baf;
                            color: white;
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 0.8em;
                        ">
                            ⓘ
                        </span>
                        <strong>Informasi Ranking:</strong>
                    </div>
                    <div style="
                        color: #666;
                        font-size: 0.9em;
                        line-height: 1.5;
                        padding-left: 36px;
                    ">
                        <p>• Ranking berdasarkan nilai kumulatif semua mata pelajaran</p>
                        <p>• Jika terdapat ranking yang sama, berarti memiliki nilai total yang sama</p>
                        <p>• Data diurutkan dari nilai tertinggi ke terendah</p>
                        <p>• Ranking 7, 9, 13, dan 20 memiliki lebih dari satu siswa dengan nilai sama</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- CSS Animation untuk ranking top 3 -->
        <style>
            @keyframes pulse {
                0% {
                    transform: scale(1);
                    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
                }
                100% {
                    transform: scale(1.05);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
                }
            }
        </style>
    `;
    
    return html;
}

// Fungsi Render Pengumuman - FIX BUG SAJA
function renderPengumuman() {
    const container = document.getElementById('pengumuman-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (window.pengumumanData.length === 0) {
        container.innerHTML = '<p class="no-result">Belum ada pengumuman</p>';
        return;
    }
    
    window.pengumumanData.forEach((announcement, index) => {
        const announcementEl = document.createElement('div');
        announcementEl.className = 'announcement';
        
        // FIX: Ganti index 1 menjadi index 2 (ranking ada di index 2)
        let content = announcement.content;
        if (index === 2) { // INI PERBAIKAN UTAMA: index 2 bukan 1
            content = generateRankingContent();
        }
        
        let contentHTML = `
            <h3>${announcement.title}</h3>
            <div class="announcement-meta">
                <i class="far fa-calendar-alt"></i>
                <span>${announcement.date} - Oleh: ${announcement.author}</span>
            </div>
            <div class="announcement-content">${content}</div>
        `;
        
        // Tambahkan gambar jika ada
        if (announcement.images) {
            announcement.images.forEach(img => {
                contentHTML += `
                    <div style="text-align: center; margin: 20px 0;">
                        <img src="${img.src}" alt="${img.alt}" 
                             class="announcement-image"
                             onclick="openImageModal('${img.src}', '${img.alt}')">
                        <p style="color: #888; font-size: 0.9em; margin-top: 8px;">
                            Klik gambar untuk memperbesar
                        </p>
                    </div>
                `;
            });
        }
        
        announcementEl.innerHTML = contentHTML;
        container.appendChild(announcementEl);
    });
}

// Fungsi Buka Gambar Modal - FIX BUG ESCAPE
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
                     onerror="this.onerror=null; this.src='media/image/default.jpg'">
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
    
    // FIX: Tambahkan cleanup event listener
    const closeOnEsc = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    };
    document.addEventListener('keydown', closeOnEsc);
    
    // FIX: Hapus event listener saat modal ditutup
    const originalClose = modal.querySelector('#image-modal-close').onclick;
    modal.querySelector('#image-modal-close').onclick = function() {
        document.removeEventListener('keydown', closeOnEsc);
        if (originalClose) originalClose();
        document.body.removeChild(modal);
    };
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderPengumuman();
    
    // Tambahkan style untuk gambar pengumuman
    const style = document.createElement('style');
    style.textContent = `
        .announcement-image {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 2px solid #e8eef9;
        }
        
        .announcement-image:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .announcement-content {
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
});
