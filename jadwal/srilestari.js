window.jadwalPelajaranIps = [
    {
        hari: 'Senin',
        jadwal: [
            // KOSONG - Tidak ada pelajaran IPS untuk VII D di hari Senin
        ]
    },
    {
        hari: 'Selasa',
        jadwal: [
            { waktu: '07.15 - 07.55', mataPelajaran: 'IPS', kelas: 'VII D', guru: 'Sri Lestari' },
            { waktu: '07.55 - 08.35', mataPelajaran: 'IPS', kelas: 'VII D', guru: 'Sri Lestari' }
        ]
    },
    {
        hari: 'Rabu',
        jadwal: [
            // KOSONG - Tidak ada pelajaran IPS untuk VII D di hari Rabu
        ]
    },
    {
        hari: 'Kamis',
        jadwal: [
            { waktu: '10.25 - 11.05', mataPelajaran: 'IPS', kelas: 'VII D', guru: 'Sri Lestari' }
        ]
    },
    {
        hari: 'Jumat',
        jadwal: [
            // KOSONG - Tidak ada pelajaran IPS untuk VII D di hari Jumat
        ]
    },
    {
        hari: 'Sabtu',
        jadwal: [
            // y
        ]
    }
];

// FUNGSI RENDER JADWAL IPS KELAS 7D SAJA
function renderJadwalPelajaranIps() {
    const container = document.getElementById('jadwal-pelajaran-ips');
    if (!container || !window.jadwalPelajaranIps) {
        console.error('Container jadwal IPS tidak ditemukan atau data tidak tersedia');
        return;
    }
    
    console.log('Membuat jadwal IPS Kelas 7D...');
    container.innerHTML = '';
    
    window.jadwalPelajaranIps.forEach((hariData, index) => {
        // Filter hanya jadwal untuk kelas VII D
        const jadwal7D = hariData.jadwal.filter(item => item.kelas === 'VII D');
        
        // Jika tidak ada jadwal untuk VII D, skip hari ini
        if (jadwal7D.length === 0) {
            return;
        }
        
        const dayCard = document.createElement('div');
        dayCard.className = 'schedule-day';
        dayCard.style.animationDelay = `${index * 0.1}s`;
        
        let scheduleHTML = '';
        
        jadwal7D.forEach((item, itemIndex) => {
            scheduleHTML += `
                <div class="schedule-item" style="animation-delay: ${itemIndex * 0.05}s">
                    <div class="schedule-time">${item.waktu}</div>
                    <div class="schedule-subject">
                        ${item.mataPelajaran}
                        ${item.guru ? `<span class="schedule-guru">(${item.guru})</span>` : ''}
                    </div>
                </div>
            `;
        });
        
        dayCard.innerHTML = `
            <h3><i class="fas fa-calendar-day"></i> ${hariData.hari}</h3>
            ${scheduleHTML}
        `;
        
        container.appendChild(dayCard);
    });
    
    // Jika tidak ada jadwal sama sekali
    if (container.children.length === 0) {
        container.innerHTML = '<div class="no-schedule"><i class="fas fa-calendar-times"></i> Tidak ada jadwal IPS untuk Kelas 7D minggu ini</div>';
    }
    
    console.log('Jadwal IPS Kelas 7D berhasil dibuat');
}