// Data Jadwal Piket
window.jadwalPiket = {
    senin: ["Abiyyu", "Hafiy", "Gani", "Zizi", "Alifah"],
    selasa: ["Arya", "Azzam", "Dwika", "Arni", "Denessia"],
    rabu: ["Farzan", "Fayaadh", "Harist", "Erfira", "Firli"],
    kamis: ["Joshua", "Akhtar", "Ardian", "Keysha", "Kirana"],
    jumat: ["Nafis", "Veron", "Riyan", "Mutia", "Nara"],
    sabtu: ["Shafin", "Alzain", "Rakha", "Priska", "Reina", "Selena"]
};

// Fungsi Render Jadwal Piket
function renderJadwalPiket() {
    const container = document.getElementById('piket-container');
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
    
    for (const [dayKey, students] of Object.entries(window.jadwalPiket)) {
        const dayElement = document.createElement('div');
        dayElement.className = 'piket-day';
        
        let piketHTML = `<h3><i class="fas fa-calendar-day"></i> ${dayNames[dayKey]}</h3>`;
        piketHTML += '<ul class="piket-list">';
        
        students.forEach(student => {
            piketHTML += `
                <li>
                    <span>${student}</span>
                    <span class="piket-status pending"></span>
                </li>
            `;
        });
        
        piketHTML += '</ul>';
        dayElement.innerHTML = piketHTML;
        container.appendChild(dayElement);
    }
}