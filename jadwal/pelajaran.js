// Data Jadwal Pelajaran
window.jadwalPelajaran = {
    senin: [
        { time: "07.00 – 08.00", subject: "Upacara Bendera" },
        { time: "08.40 – 09.20", subject: "Bahasa Indonesia" },
        { time: "09.20 – 09.50", subject: "Istirahat I" },
        { time: "09.50 – 10.30", subject: "Penjaskes" },
        { time: "10.30 – 11.10", subject: "Penjaskes" },
        { time: "11.10 – 11.50", subject: "PAIBP" },
        { time: "11.50 – 12.30", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.30 – 13.10", subject: "Program MBG" },
        { time: "13.10 – 13.50", subject: "PAIBP" },
        { time: "13.50", subject: "Pulang" }
    ],
    selasa: [
        { time: "07.00 – 07.15", subject: "Tadarus" },
        { time: "07.15 – 07.55", subject: "Bahasa Inggris" },
        { time: "07.55 – 08.35", subject: "Bahasa Jawa" },
        { time: "08.35 – 09.15", subject: "Bahasa Jawa" },
        { time: "09.15 – 09.55", subject: "Bahasa Indonesia" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "Bahasa Indonesia" },
        { time: "11.05 – 11.45", subject: "Matematika" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Program MBG" },
        { time: "13.05 – 13.45", subject: "IPS" },
        { time: "13.45", subject: "Pulang" }
    ],
    rabu: [
        { time: "07.00 – 07.15", subject: "Tadarus" },
        { time: "07.15 – 07.55", subject: "PHBS / Pagi Ceria" },
        { time: "07.55 – 08.35", subject: "IPS" },
        { time: "08.35 – 09.15", subject: "IPS" },
        { time: "09.15 – 09.55", subject: "Matematika" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "IPA" },
        { time: "11.05 – 11.45", subject: "IPA" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Program MBG" },
        { time: "13.05 – 13.45", subject: "PHBS" },
        { time: "13.45 – 14.30", subject: "Kombel / Pulang" }
    ],
    kamis: [
        { time: "07.00 – 07.15", subject: "Dear (Membaca)" },
        { time: "07.15 – 07.55", subject: "Bahasa Inggris" },
        { time: "07.55 – 08.35", subject: "Bahasa Inggris" },
        { time: "08.35 – 09.15", subject: "Bahasa Indonesia" },
        { time: "09.15 – 09.55", subject: "Pendidikan Pancasila" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "Pendidikan Pancasila" },
        { time: "11.05 – 11.45", subject: "Seni Budaya" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Seni Budaya" },
        { time: "13.05", subject: "Pulang" }
    ],
    jumat: [
        { time: "07.00 – 08.00", subject: "Jumpa Pakar" },
        { time: "08.00 – 08.40", subject: "Jumpa Pakar" },
        { time: "08.40 – 09.00", subject: "Istirahat" },
        { time: "09.00 – 09.40", subject: "Informatika" },
        { time: "09.40 – 10.20", subject: "Informatika" },
        { time: "10.20 – 11.00", subject: "Program MBG" },
        { time: "11.00 – 12.00", subject: "Sholat Jum'at & Keputrian" },
        { time: "12.00", subject: "Pulang" }
    ],
    sabtu: [
        { time: "07.00 – 07.15", subject: "Asmaul Husna" },
        { time: "07.15 – 07.55", subject: "Matematika" },
        { time: "07.55 – 08.35", subject: "Matematika" },
        { time: "08.35 – 09.15", subject: "IPA" },
        { time: "09.15 – 09.55", subject: "IPA" },
        { time: "09.55 – 10.25", subject: "Istirahat I" },
        { time: "10.25 – 11.05", subject: "Konservasi" },
        { time: "11.05 – 11.45", subject: "Konservasi" },
        { time: "11.45 – 12.25", subject: "Istirahat II (Sholat Dzuhur)" },
        { time: "12.25 – 13.05", subject: "Kombel / Pulang" }
    ]
};

// Fungsi Render Jadwal Pelajaran
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