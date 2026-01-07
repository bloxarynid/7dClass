// Data Anggota Kelas 7D
window.anggotaData = [
    { no: 1, nama: "Abiyyu Nocherino Revantara", absen: 1, kedudukan: "Anggota" },
    { no: 2, nama: "Ahmed Fadee Aisyhafiy", absen: 2, kedudukan: "Anggota" },
    { no: 3, nama: "Alifah Adeliza", absen: 3, kedudukan: "Seksi Kebersihan" },
    { no: 4, nama: "Amalia Rezki Azizi", absen: 4, kedudukan: "Bendahara I" },
    { no: 5, nama: "Argani Wisnu Wibisana", absen: 5, kedudukan: "Anggota" },
    { no: 6, nama: "Arni Rahmadhani", absen: 6, kedudukan: "Anggota" },
    { no: 7, nama: "Aryasatya Byakta", absen: 7, kedudukan: "Anggota" },
    { no: 8, nama: "Azelia Nur Azzahra", absen: 8, kedudukan: "Bendahara II" },
    { no: 9, nama: "Azzam Amanullah", absen: 9, kedudukan: "Seksi Kebersihan" },
    { no: 10, nama: "Denessia Fahia Mahya", absen: 10, kedudukan: "Seksi Keagamaan II" },
    { no: 11, nama: "Dwika Hadi Wijaya", absen: 11, kedudukan: "Seksi Kebersihan" },
    { no: 12, nama: "Erfira Anggraeni", absen: 12, kedudukan: "Sekertaris I" },
    { no: 13, nama: "Farzan Ahza Argani", absen: 13, kedudukan: "Seksi Keamanan" },
    { no: 14, nama: "Firli Alisa Rahma", absen: 14, kedudukan: "Anggota" },
    { no: 15, nama: "Ghatfaan Fayaadh Aufaa", absen: 15, kedudukan: "Wakil Ketua" },
    { no: 16, nama: "Harist Abdul Hakim", absen: 16, kedudukan: "Ketua Kelas" },
    { no: 17, nama: "Joshua Veddyttarro", absen: 17, kedudukan: "Anggota" },
    { no: 18, nama: "Keisha Novelis Nafeeza Zaafarani", absen: 18, kedudukan: "Sekertaris II" },
    { no: 19, nama: "Kirana Kamalia Ayu Wardaniningrum", absen: 19, kedudukan: "Seksi Kebersihan" },
    { no: 20, nama: "Mohammad Asadell Akhtar", absen: 20, kedudukan: "Anggota" },
    { no: 21, nama: "Muhammad Ardiansyah", absen: 21, kedudukan: "Anggota" },
    { no: 22, nama: "Mutia Almas Fatimatuzzahra", absen: 22, kedudukan: "Literasi" },
    { no: 23, nama: "Nafis Prawiro", absen: 23, kedudukan: "Anggota" },
    { no: 24, nama: "Nara Ayu Apriliani", absen: 24, kedudukan: "Anggota" },
    { no: 25, nama: "Priska Oktaviana", absen: 25, kedudukan: "Anggota" },
    { no: 26, nama: "Rajendra Veron Alerea", absen: 26, kedudukan: "Seksi Kebersihan" },
    { no: 27, nama: "Reina Al Yasmin", absen: 27, kedudukan: "Seksi Kebersihan" },
    { no: 28, nama: "Riyan Ade Saputra", absen: 28, kedudukan: "Seksi Keagamaan" },
    { no: 29, nama: "Selena Zayna Tatum", absen: 29, kedudukan: "Anggota" },
    { no: 30, nama: "Shafin Althaf", absen: 30, kedudukan: "Anggota" },
    { no: 31, nama: "Zabarjad Nibras Alzain", absen: 31, kedudukan: "Anggota" },
    { no: 32, nama: "Zauhair Rakha Adi", absen: 32, kedudukan: "Anggota" }
];

// Data Struktur Organisasi
window.organisasiData = [
    { jabatan: "Ketua Kelas", nama: "Harist Abdul Hakim", icon: "fas fa-user-tie" },
    { jabatan: "Wakil Ketua", nama: "Ghatfaan Fayaadh Aufaa", icon: "fas fa-user-tie" },
    { jabatan: "Wali Kelas", nama: "SRI LESTRAI, S.Pd", icon: "fas fa-chalkboard-teacher" },
    { jabatan: "Sekretaris 1", nama: "Erfira Anggraeni", icon: "fas fa-clipboard-list" },
    { jabatan: "Sekretaris 2", nama: "Keisha Novelis Nafeeza Zaafarani", icon: "fas fa-clipboard-list" },
    { jabatan: "Bendahara 1", nama: "Amalia Rezki Azizi", icon: "fas fa-money-bill-wave" },
    { jabatan: "Bendahara 2", nama: "Azelia Nur Azzahra", icon: "fas fa-money-bill-wave" },
    { jabatan: "Literasi", nama: "Mutia Almas Fatimatuzzahra", icon: "fas fa-book" },
    { jabatan: "Seksi Keagamaan", nama: "Riyan Ade Saputra", icon: "fas fa-mosque" },
    { jabatan: "Seksi Keamanan", nama: "Farzan Arza Argani", icon: "fas fa-shield-alt" }
];

// Data untuk form Hubungi Admin
window.adminContactData = {
    phone: "6287711478032", // Format internasional tanpa +
    options: [
        {
            id: "profile-upgrade",
            title: "Profile Image",
            description: "Request upgrade foto profil ke admin",
            icon: "fas fa-user-circle"
        },
        {
            id: "bug-report", 
            title: "Menemukan Bug",
            description: "Laporkan bug di website",
            icon: "fas fa-bug"
        },
        {
            id: "feature-request",
            title: "Request Fitur/UI baru",
            description: "Sarankan fitur atau UI baru",
            icon: "fas fa-lightbulb"
        }
    ]
};

// Fungsi Render Organisasi Kelas
function renderOrganisasiKelas() {
    const container = document.getElementById('organisasi-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    window.organisasiData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <i class="${item.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${item.jabatan}</h3>
                <p>Nama: ${item.nama}</p>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Tambahkan kartu untuk Seksi Kebersihan
    const kebersihanCard = document.createElement('div');
    kebersihanCard.className = 'card';
    kebersihanCard.innerHTML = `
        <div class="card-img">
            <i class="fas fa-broom"></i>
        </div>
        <div class="card-content">
            <h3>Seksi Kebersihan</h3>
            <p>• Dwika Hadi Wijaya</p>
            <p>• Kirana Kamalia Ayu Wardaningrum</p>
            <p>• Reina Al Yasmin</p>
            <p>• Alifah Adeliza</p>
            <p>• Rajendra Veron Alerea</p>
            <p>• Azzam Amanullah</p>
        </div>
    `;
    container.appendChild(kebersihanCard);
}

// Fungsi Render Hubungi Admin
function renderHubungiAdmin() {
    const container = document.getElementById('hubungi-admin-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    window.adminContactData.options.forEach(option => {
        const card = document.createElement('div');
        card.className = 'admin-option-card';
        card.dataset.option = option.id;
        
        card.innerHTML = `
            <div class="admin-option-icon">
                <i class="${option.icon}"></i>
            </div>
            <div class="admin-option-content">
                <h4>${option.title}</h4>
                <p>${option.description}</p>
            </div>
            <div class="admin-option-arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openAdminForm(option.id);
        });
        
        container.appendChild(card);
    });
}

// Fungsi Buka Form Admin
function openAdminForm(optionId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.style.zIndex = '3000';
    
    let formContent = '';
    
    switch(optionId) {
        case 'profile-upgrade':
            formContent = getProfileUpgradeForm();
            break;
        case 'bug-report':
            formContent = getBugReportForm();
            break;
        case 'feature-request':
            formContent = getFeatureRequestForm();
            break;
    }
    
    modal.innerHTML = `
        <div class="admin-form-modal">
            <div class="modal-header">
                <h2>${getFormTitle(optionId)}</h2>
                <button class="modal-close" id="admin-form-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${formContent}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners
    modal.querySelector('#admin-form-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Initialize form
    setTimeout(() => {
        initAdminForm(optionId);
    }, 100);
}

// FUNGSI UNTUK PROFILE UPGRADE FORM (SEDERHANA, TANPA UPLOAD)
function getProfileUpgradeForm() {
    return `
        <div class="admin-form-container">
            <div class="form-info" style="text-align: center; margin-bottom: 25px;">
                <div style="font-size: 3rem; color: var(--warna-utama); margin-bottom: 10px;">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h3 style="color: var(--warna-utama); margin-bottom: 10px;">Profile Image Report</h3>
                <p style="color: #666;">Request upgrade foto profil ke Admin</p>
            </div>
            
            <div class="form-group">
                <label for="member-select">Pilih Anggota *</label>
                <select id="member-select" class="form-control" required>
                    <option value="">-- Pilih Nama Anda --</option>
                    ${window.anggotaData.map(member => 
                        `<option value="${member.absen}">${member.nama} (Absen ${member.absen})</option>`
                    ).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label for="upgrade-type">Jenis Request *</label>
                <select id="upgrade-type" class="form-control" required>
                    <option value="">-- Pilih Jenis Request --</option>
                    <option value="upgrade">Upgrade Foto (Admin yang membuat)</option>
                    <option value="replace">Ganti Foto (Saya kirim via WhatsApp)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="upgrade-desc">Deskripsi Request</label>
                <textarea id="upgrade-desc" class="form-control" rows="4" 
                          placeholder="Jelaskan request Anda:
• Untuk request upgrade: gaya foto yang diinginkan
• Untuk request ganti: sebutkan gambar yang akan dikirim via WhatsApp
• Catatan khusus lainnya..."></textarea>
            </div>
            
            <div class="form-note" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <p><strong>📝 Cara Kerja:</strong></p>
                <ul style="margin: 10px 0 0 20px; color: #666;">
                    <li>Pilih jenis request di atas</li>
                    <li>Generate pesan WhatsApp</li>
                    <li>Jika memilih "Ganti Foto", siapkan foto di galeri</li>
                    <li>Admin akan membalas via WhatsApp</li>
                    <li>Kirim foto via WhatsApp jika diminta</li>
                </ul>
            </div>
            
            <button class="btn btn-primary" id="generate-profile-message" style="margin-top: 15px;">
                <i class="fab fa-whatsapp"></i> Generate Pesan WhatsApp
            </button>
        </div>
    `;
}

// FUNGSI UNTUK BUG REPORT FORM
function getBugReportForm() {
    return `
        <div class="admin-form-container">
            <div class="form-info" style="text-align: center; margin-bottom: 25px;">
                <div style="font-size: 3rem; color: var(--warna-utama); margin-bottom: 10px;">
                    <i class="fas fa-bug"></i>
                </div>
                <h3 style="color: var(--warna-utama); margin-bottom: 10px;">Bug Report</h3>
                <p style="color: #666;">Laporkan bug yang ditemukan di website</p>
            </div>
            
            <div class="form-group">
                <label for="bug-description">Deskripsi Bug *</label>
                <textarea id="bug-description" class="form-control" rows="6" required
                          placeholder="WAJIB DIISI! Jelaskan bug secara detail:
• Halaman mana bug terjadi
• Langkah-langkah untuk membuat bug muncul
• Apa yang seharusnya terjadi
• Apa yang benar-benar terjadi
• Tanggal & waktu kejadian
..."></textarea>
            </div>
            
            <div class="form-group">
                <label for="bug-severity">Tingkat Keparahan</label>
                <select id="bug-severity" class="form-control">
                    <option value="low">🔵 Rendah (Minor UI issue)</option>
                    <option value="medium">🟡 Sedang (Fitur tidak berfungsi optimal)</option>
                    <option value="high">🟠 Tinggi (Fitur tidak berfungsi sama sekali)</option>
                    <option value="critical">🔴 Kritis (Website crash/error)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="bug-browser">Browser & Device</label>
                <input type="text" id="bug-browser" class="form-control" 
                       placeholder="Contoh: Chrome 120 di Windows 10 / Safari di iPhone 13">
            </div>
            
            <div class="form-note" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <p><strong>💡 Tips Melaporkan Bug:</strong></p>
                <ul style="margin: 10px 0 0 20px; color: #666;">
                    <li>Jelaskan dengan jelas dan spesifik</li>
                    <li>Sertakan screenshot via WhatsApp jika perlu</li>
                    <li>Browser dan device membantu reproduksi bug</li>
                    <li>Admin akan membalas via WhatsApp</li>
                </ul>
            </div>
            
            <button class="btn btn-primary" id="generate-bug-message" style="margin-top: 15px;">
                <i class="fab fa-whatsapp"></i> Kirim ke WhatsApp Admin
            </button>
        </div>
    `;
}

// FUNGSI UNTUK FEATURE REQUEST FORM
function getFeatureRequestForm() {
    return `
        <div class="admin-form-container">
            <div class="form-info" style="text-align: center; margin-bottom: 25px;">
                <div style="font-size: 3rem; color: var(--warna-utama); margin-bottom: 10px;">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <h3 style="color: var(--warna-utama); margin-bottom: 10px;">Feature Request</h3>
                <p style="color: #666;">Sarankan fitur atau UI baru untuk website</p>
            </div>
            
            <div class="form-group">
                <label for="feature-title">Judul Fitur/UI *</label>
                <input type="text" id="feature-title" class="form-control" required
                       placeholder="Contoh: Dark Mode Toggle, Album Foto dengan Tags...">
            </div>
            
            <div class="form-group">
                <label for="feature-description">Deskripsi Detail *</label>
                <textarea id="feature-description" class="form-control" rows="6" required
                          placeholder="WAJIB DIISI! Jelaskan secara detail:
• Apa fitur/UI yang diinginkan
• Manfaatnya untuk kelas
• Contoh implementasi (jika ada)
• Referensi dari website lain (jika ada)
..."></textarea>
            </div>
            
            <div class="form-group">
                <label for="feature-priority">Prioritas</label>
                <select id="feature-priority" class="form-control">
                    <option value="low">Rendah (Nice to have)</option>
                    <option value="medium" selected>Sedang (Useful improvement)</option>
                    <option value="high">Tinggi (Important feature)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="feature-category">Kategori</label>
                <select id="feature-category" class="form-control">
                    <option value="ui">UI/Design Improvement</option>
                    <option value="feature">New Feature</option>
                    <option value="content">Content/Data Update</option>
                    <option value="performance">Performance Optimization</option>
                    <option value="other">Lainnya</option>
                </select>
            </div>
            
            <div class="form-note" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <p><strong>✨ Tips Feature Request:</strong></p>
                <ul style="margin: 10px 0 0 20px; color: #666;">
                    <li>Jelaskan manfaatnya untuk seluruh kelas</li>
                    <li>Sertakan referensi jika ada</li>
                    <li>Admin akan review dan beri feedback</li>
                    <li>Feature yang diterima akan diimplementasikan</li>
                </ul>
            </div>
            
            <button class="btn btn-primary" id="generate-feature-message" style="margin-top: 15px;">
                <i class="fab fa-whatsapp"></i> Kirim ke WhatsApp Admin
            </button>
        </div>
    `;
}

// HELPER FUNCTIONS
function getFormTitle(optionId) {
    const titles = {
        'profile-upgrade': 'Profile Image Report',
        'bug-report': 'Bug Report',
        'feature-request': 'Feature Request'
    };
    return titles[optionId] || 'Hubungi Admin';
}

function initAdminForm(optionId) {
    // WhatsApp message generators
    const profileBtn = document.getElementById('generate-profile-message');
    const bugBtn = document.getElementById('generate-bug-message');
    const featureBtn = document.getElementById('generate-feature-message');
    
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateProfileMessage();
        });
    }
    
    if (bugBtn) {
        bugBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateBugMessage();
        });
    }
    
    if (featureBtn) {
        featureBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateFeatureMessage();
        });
    }
}

// MESSAGE GENERATORS
function generateProfileMessage() {
    const memberSelect = document.getElementById('member-select');
    const upgradeType = document.getElementById('upgrade-type');
    const upgradeDesc = document.getElementById('upgrade-desc').value;
    
    if (!memberSelect.value) {
        alert('Silakan pilih anggota terlebih dahulu!');
        memberSelect.focus();
        return;
    }
    
    if (!upgradeType.value) {
        alert('Silakan pilih jenis request!');
        upgradeType.focus();
        return;
    }
    
    const member = window.anggotaData.find(m => m.absen == memberSelect.value);
    if (!member) return;
    
    const requestType = upgradeType.value === 'upgrade' ? 'Upgrade Foto' : 'Ganti Foto';
    
    let message = `Halo Admin, saya *${member.nama}* (Absen ${member.absen}) ingin request ${requestType.toLowerCase()}.\n\n`;
    message += `*Jenis Request:* ${requestType}\n\n`;
    
    if (upgradeDesc) {
        message += `*Detail Request:*\n${upgradeDesc}\n\n`;
    }
    
    if (upgradeType.value === 'replace') {
        message += `*Note:* Saya siap mengirimkan foto via WhatsApp jika diperlukan.\n\n`;
    }
    
    message += `*Data Diri:*\n`;
    message += `- Nama: ${member.nama}\n`;
    message += `- Absen: ${member.absen}\n`;
    message += `- Kedudukan: ${member.kedudukan}\n\n`;
    message += `Mohon diproses ya. Terima kasih!`;
    
    sendWhatsAppMessage(message);
}

function generateBugMessage() {
    const description = document.getElementById('bug-description').value;
    const severity = document.getElementById('bug-severity').value;
    const browser = document.getElementById('bug-browser').value;
    
    if (!description.trim()) {
        alert('Silakan isi deskripsi bug terlebih dahulu!');
        document.getElementById('bug-description').focus();
        return;
    }
    
    const severityText = {
        'low': 'Rendah',
        'medium': 'Sedang', 
        'high': 'Tinggi',
        'critical': 'Kritis'
    }[severity];
    
    let message = `*BUG REPORT - Website Kelas 7D*\n\n`;
    message += `*Deskripsi Bug:*\n${description}\n\n`;
    message += `*Tingkat Keparahan:* ${severityText}\n`;
    
    if (browser) {
        message += `*Browser & Device:* ${browser}\n`;
    }
    
    message += `\nLaporan ini dikirim melalui form bug report di website.\n`;
    message += `Mohon segera dicek dan diperbaiki. Terima kasih!`;
    
    sendWhatsAppMessage(message);
}

function generateFeatureMessage() {
    const title = document.getElementById('feature-title').value;
    const description = document.getElementById('feature-description').value;
    const priority = document.getElementById('feature-priority').value;
    const category = document.getElementById('feature-category').value;
    
    if (!title.trim() || !description.trim()) {
        alert('Silakan isi judul dan deskripsi fitur terlebih dahulu!');
        if (!title.trim()) {
            document.getElementById('feature-title').focus();
        } else {
            document.getElementById('feature-description').focus();
        }
        return;
    }
    
    const priorityText = {
        'low': 'Rendah',
        'medium': 'Sedang',
        'high': 'Tinggi'
    }[priority];
    
    const categoryText = {
        'ui': 'UI/Design Improvement',
        'feature': 'New Feature',
        'content': 'Content/Data Update',
        'performance': 'Performance Optimization',
        'other': 'Lainnya'
    }[category];
    
    let message = `*FEATURE REQUEST - Website Kelas 7D*\n\n`;
    message += `*Judul:* ${title}\n\n`;
    message += `*Deskripsi Detail:*\n${description}\n\n`;
    message += `*Kategori:* ${categoryText}\n`;
    message += `*Prioritas:* ${priorityText}\n`;
    
    message += `\nSaran fitur ini dikirim melalui form feature request di website.\n`;
    message += `Semoga dapat dipertimbangkan untuk pengembangan website. Terima kasih!`;
    
    sendWhatsAppMessage(message);
}

function sendWhatsAppMessage(message) {
    const encodedMessage = encodeURIComponent(message);
    const phone = window.adminContactData.phone;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// CSS untuk form admin
const adminFormCSS = `
/* Admin Option Cards */
.admin-option-card {
    background: white;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.admin-option-card:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: var(--warna-muda);
}

.admin-option-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--warna-muda), var(--warna-kedua));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--warna-utama);
}

.admin-option-content {
    flex: 1;
}

.admin-option-content h4 {
    color: var(--warna-utama);
    margin-bottom: 5px;
    font-size: 1rem;
}

.admin-option-content p {
    color: #666;
    font-size: 0.85rem;
    line-height: 1.4;
}

.admin-option-arrow {
    color: #888;
    font-size: 0.9rem;
}

/* Admin Form Modal */
.admin-form-modal {
    background-color: white;
    border-radius: 15px;
    width: 95%;
    max-width: 500px;
    max-height: 90vh;
    overflow: hidden;
    transform: translateY(50px) scale(0.9);
    opacity: 0;
    transition: all 0.4s ease;
}

.modal-overlay.active .admin-form-modal {
    transform: translateY(0) scale(1);
    opacity: 1;
}

.admin-form-container {
    padding: 20px;
    max-height: calc(90vh - 80px);
    overflow-y: auto;
}

/* Form Controls */
.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s;
    margin-bottom: 15px;
}

.form-control:focus {
    border-color: var(--warna-utama);
    outline: none;
}

textarea.form-control {
    resize: vertical;
    min-height: 100px;
}

select.form-control {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 15px;
    padding-right: 40px;
}

/* Button styles */
.btn.btn-primary {
    background: var(--gradasi-tampilan);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-top: 10px;
}

.btn.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(33, 150, 243, 0.4);
}

/* Dark Mode Adjustments */
.dark-mode .admin-option-card {
    background-color: #2d2d2d;
    color: #e0e0e0;
}

.dark-mode .admin-option-content h4 {
    color: var(--warna-kedua);
}

.dark-mode .admin-option-content p {
    color: #b0b0b0;
}

.dark-mode .form-control {
    background-color: #3a3a3a;
    color: #e0e0e0;
    border-color: #555;
}

.dark-mode .form-control::placeholder {
    color: #999;
}

.dark-mode .form-note {
    background-color: #3a3a3a;
    color: #e0e0e0;
}

/* Responsive */
@media (max-width: 768px) {
    .admin-form-modal {
        width: 95%;
        margin: 10px;
    }
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

// Tambahkan CSS ke halaman
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = adminFormCSS;
    document.head.appendChild(style);
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('hubungi-admin-container')) {
        renderHubungiAdmin();
    }
});
