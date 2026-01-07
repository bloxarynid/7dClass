// Data Jadwal Pelajaran
window.jadwalPelajaran = {
    senin: [
        { time: "07.00 – 08.00", subject: "Upacara Bendera" },
        { time: "08.00 – 09.20", subject: "Bahasa Indonesia" },
        { time: "09.20 – 09.50", subject: "Istirahat I" },
        { time: "09.50 – 11.10", subject: "Ilmu Pengetahuan Alam" },
        { time: "11.10 – 11.50", subject: "Informatika" },
        { time: "11.50 – 12.30", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.30 – 13.10", subject: "Program MBG" },
        { time: "13.10 – 13.50", subject: "Informatika" },
        { time: "13.50", subject: "Pulang" }
    ],
    selasa: [
        { time: "07.00 – 07.15", subject: "Tadarus" },
        { time: "07.15 – 08.35", subject: "Ilmu Pengetahuan Sosial" },
        { time: "08.35 – 09.55", subject: "Pendidikan Pancasila dan Kewarganegaraan" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "Matematika" },
        { time: "11.05 – 11.45", subject: "Ilmu Pengetahuan Alam" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Program MBG" },
        { time: "13.05 – 13.45", subject: "Ilmu Pengetahuan Alam" },
        { time: "13.45", subject: "Pulang" }
    ],
    rabu: [
        { time: "07.00 – 07.15", subject: "Tadarus" },
        { time: "07.15 – 07.55", subject: "PHBS" },
        { time: "07.55 – 09.15", subject: "Matematika" },
        { time: "09.15 – 09.55", subject: "Bahasa Inggris" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.45", subject: "Bahasa Jawa" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Program MBG" },
        { time: "13.05 – 13.45", subject: "PHBS" },
        { time: "13.45 – 14.30", subject: "Kombel / Pulang" }
    ],
    kamis: [
        { time: "07.00 – 07.15", subject: "Dear (Membaca)" },
        { time: "07.15 – 07.55", subject: "Bahasa Indonesia" },
        { time: "07.55 – 09.15", subject: "Penjaskes" },
        { time: "09.15 – 09.55", subject: "Matematika" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "Ilmu Pengetahuan Sosial" },
        { time: "11.05 – 11.45", subject: "Pendidikan Agama Islam dan Budi Pekerti" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Program MBG" },
        { time: "13.05 – 13.45", subject: "Pendidikan Agama Islam dan Budi Pekerti" },
        { time: "13.45", subject: "Pulang" }
    ],
    jumat: [
        { time: "07.00 – 08.40", subject: "Jumpa Pakar / Pagi Ceria" },
        { time: "08.40 – 09.00", subject: "Istirahat I" },
        { time: "09.00 – 10.20", subject: "Bahasa Indonesia" },
        { time: "10.20 – 11.00", subject: "Program MBG" },
        { time: "11.00 – 12.00", subject: "Jum'atan / Keputrian" },
        { time: "12.00", subject: "Pulang" }
    ],
    sabtu: [
        { time: "07.00 – 07.15", subject: "Asmaul Husna" },
        { time: "07.15 – 08.35", subject: "Seni Budaya" },
        { time: "08.35 – 09.55", subject: "Bahasa Inggris" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.45", subject: "Konservasi" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Kombel / Pulang" }
    ]
};

function renderJadwalPelajaran() {
    const container = document.getElementById('jadwal-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const dayNames = {
        senin: "Senin",
        selasa: "Selasa",
        rabu: "Rabu",
        kamis: "Kamis",
        jumat: "Jumat",
        sabtu: "Sabtu"
    };
    
    for (const [dayKey, schedule] of Object.entries(window.jadwalPelajaran)) {
        const dayElement = document.createElement('div');
        dayElement.className = 'schedule-day';
        
        let scheduleHTML = `<h3><i class="fas fa-calendar-day"></i> ${dayNames[dayKey]}</h3>`;
        
        schedule.forEach(item => {
            const classType = item.subject.toLowerCase().includes('istirahat') ? 'istirahat' : 
                             item.subject.toLowerCase().includes('upacara') ? 'upacara' :
                             item.subject.toLowerCase().includes('pulang') ? 'kombel' : '';
            
            scheduleHTML += `
                <div class="schedule-item ${classType}">
                    <span class="schedule-time">${item.time}</span>
                    <span class="schedule-subject">${item.subject}</span>
                </div>
            `;
        });
        
        dayElement.innerHTML = scheduleHTML;
        container.appendChild(dayElement);
    }
}
