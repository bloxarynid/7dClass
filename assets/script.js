let currentUser = null;
let isLoggedIn = false;
let isGuestMode = false;
let currentAlbum = null;
let currentPhotoIndex = 0;
let isDarkMode = false;
let autoLoginProcessed = false;

let hamburger, sidebar, pages, loginBtn, guestLoginBtn, searchInput;
let modalOverlay, modalClose, photoModal, photoModalClose;
let prevPhotoBtn, nextPhotoBtn, notification, notificationText;
let rememberMeCheckbox, themeToggle;

const users = [
    { username: "abiyyu", fullname: "Abiyyu Nocherino Revantara" },
    { username: "ahmed", fullname: "Ahmed Fadee Aisyhafiy" },
    { username: "alifah", fullname: "Alifah Adeliza" },
    { username: "amalia", fullname: "Amalia Rezki Azizi" },
    { username: "argani", fullname: "Argani Wisnu Wibisana" },
    { username: "arni", fullname: "Arni Rahmadhani" },
    { username: "aryasatya", fullname: "Aryasatya Byakta" },
    { username: "azelia", fullname: "Azelia Nur Azzahra" },
    { username: "azzam", fullname: "Azzam Amanullah" },
    { username: "denessia", fullname: "Denessia Fahia Mahya" },
    { username: "dwika", fullname: "Dwika Hadi Wijaya" },
    { username: "erfira", fullname: "Erfira Anggraeni" },
    { username: "farzan", fullname: "Farzan Ahza Argani" },
    { username: "firli", fullname: "Firli Alisa Rahma" },
    { username: "ghatfaan", fullname: "Ghatfaan Fayaadh Aufaa" },
    { username: "hartts", fullname: "Harist Abdul Hakim" },
    { username: "joshua", fullname: "Joshua Veddyttarro" },
    { username: "keisha", fullname: "Keisha Novelis Nafeeza Zaafarani" },
    { username: "kirana", fullname: "Kirana Kamalia Ayu Wardaniningrum" },
    { username: "mohammad", fullname: "Mohammad Asadell Akhtar" },
    { username: "muhammad", fullname: "Muhammad Ardiansyah" },
    { username: "mutia", fullname: "Mutia Almas Fatimatuzzahra" },
    { username: "nafis", fullname: "Nafis Prawiro" },
    { username: "nara", fullname: "Nara Ayu Apriliani" },
    { username: "priska", fullname: "Priska Oktaviana" },
    { username: "rajendra", fullname: "Rajendra Veron Alerea" },
    { username: "reina", fullname: "Reina Al Yasmin" },
    { username: "riyan", fullname: "Riyan Ade Saputra" },
    { username: "selena", fullname: "Selena Zayna Tatum" },
    { username: "shafin", fullname: "Shafin Althaf" },
    { username: "zabarjad", fullname: "Zabarjad Nibras Alzain" },
    { username: "zauhair", fullname: "Zauhair Rakha Adi" }
];

function initializeApp() {
    hamburger = document.getElementById('hamburger-btn');
    sidebar = document.querySelector('.sidebar');
    pages = document.querySelectorAll('.page');
    loginBtn = document.getElementById('login-btn');
    guestLoginBtn = document.getElementById('guest-login-btn');
    searchInput = document.getElementById('search-input');
    modalOverlay = document.getElementById('user-modal-overlay');
    modalClose = document.getElementById('modal-close');
    photoModal = document.getElementById('photo-modal');
    photoModalClose = document.getElementById('photo-modal-close');
    prevPhotoBtn = document.getElementById('prev-photo');
    nextPhotoBtn = document.getElementById('next-photo');
    notification = document.getElementById('notification');
    notificationText = document.getElementById('notification-text');
    rememberMeCheckbox = document.getElementById('remember-me');
    themeToggle = document.getElementById('theme-toggle');
    
    if (hamburger) hamburger.addEventListener('click', toggleSidebar);
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    if (guestLoginBtn) guestLoginBtn.addEventListener('click', enterGuestMode);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (searchInput) searchInput.addEventListener('input', filterAnggota);
    if (photoModalClose) photoModalClose.addEventListener('click', closePhotoModal);
    if (prevPhotoBtn) prevPhotoBtn.addEventListener('click', showPrevPhoto);
    if (nextPhotoBtn) nextPhotoBtn.addEventListener('click', showNextPhoto);
    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);
    
    // Render halaman hubungi admin jika ada
    if (document.getElementById('hubungi-admin-container')) {
        renderHubungiAdmin();
    }
    
    // Modal overlay click to close
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
    // Accordion menu setup
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    const content = item.querySelector('.accordion-content');
                    if (content) content.classList.remove('active');
                }
            });

            accordionItem.classList.toggle('active');
            if (accordionContent) accordionContent.classList.toggle('active');
        });
    });
    
    // Sub-menu links setup
    const subMenuLinks = document.querySelectorAll('.sub-menu li');
    subMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/'([^']+)'/);
                if (match) {
                    const pageId = match[1];
                    showPage(pageId);
                    toggleSidebar();
                }
            }
        });
    });
    
    // Sembunyikan hamburger dan theme toggle di login page
    if (hamburger) hamburger.style.display = 'none';
    if (themeToggle) themeToggle.style.display = 'none';
    
    // Load preferences
    loadDarkModePreference();
    checkAutoLogin();
    
    // Render semua konten yang tersedia
    if (window.anggotaData && typeof renderAnggotaKelas === 'function') renderAnggotaKelas();
    if (typeof renderOrganisasiKelas === 'function') renderOrganisasiKelas();
    if (window.jadwalPelajaran && typeof renderJadwalPelajaran === 'function') renderJadwalPelajaran();
    if (window.jadwalPelajaranIps && typeof renderJadwalPelajaranIps === 'function') {
        // Jika halaman profil wali kelas aktif, render jadwal IPS
        const profilWalasPage = document.getElementById('profil-walas');
        if (profilWalasPage && profilWalasPage.classList.contains('active')) {
            setTimeout(() => renderJadwalPelajaranIps(), 300);
        }
    }
    if (window.jadwalPiket && typeof renderJadwalPiket === 'function') renderJadwalPiket();
    if (window.albumData && typeof renderPhotoAlbums === 'function') renderPhotoAlbums();
    if (window.pengumumanData && typeof renderPengumuman === 'function') renderPengumuman();
    if (window.tugasData && typeof renderTugas === 'function') renderTugas();
    if (window.kegiatanData && typeof renderKegiatan === 'function') renderKegiatan();
    
    // Setup keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (photoModal && photoModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closePhotoModal();
            } else if (e.key === 'ArrowLeft') {
                showPrevPhoto();
            } else if (e.key === 'ArrowRight') {
                showNextPhoto();
            }
        }
        
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
        }
        
        const passwordInput = document.getElementById('password');
        if (passwordInput && e.key === 'Enter' && document.activeElement === passwordInput) {
            handleLogin();
        }
        
        if (e.key === 'd' && e.ctrlKey) {
            e.preventDefault();
            toggleDarkMode();
        }
    });
    
    // Responsive behavior
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && sidebar && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
    
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') e.preventDefault();
        });
    }
    
    // Dark mode preference change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        const savedDarkMode = localStorage.getItem('class7d_darkmode');
        if (savedDarkMode === null) {
            if (e.matches) {
                isDarkMode = true;
                document.body.classList.add('dark-mode');
                if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                isDarkMode = false;
                document.body.classList.remove('dark-mode');
                if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
    });
}

function renderHubungiAdmin() {
    const container = document.getElementById('hubungi-admin-container');
    if (!container || !window.adminContactData) return;
    
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
        default:
            formContent = '<p>Form tidak tersedia</p>';
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
    const closeBtn = modal.querySelector('#admin-form-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }
    
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

function showPage(pageId) {
    if (!pages || pages.length === 0) return;
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    if (hamburger) {
        if (pageId === 'login-page') {
            hamburger.style.display = 'none';
            if (themeToggle) themeToggle.style.display = 'none';
        } else {
            hamburger.style.display = 'flex';
            if (themeToggle) themeToggle.style.display = 'flex';
        }
    }
    
    // Auto render jadwal IPS ketika halaman profil wali kelas dibuka
    if (pageId === 'profil-walas') {
        setTimeout(() => {
            if (window.jadwalPelajaranIps && typeof renderJadwalPelajaranIps === 'function') {
                renderJadwalPelajaranIps();
            }
        }, 100);
    }
    
    if (window.innerWidth < 768 && sidebar && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
}

function saveLoginData(username, remember) {
    if (remember) {
        const loginData = {
            username: username,
            timestamp: Date.now(),
            expiry: 30 * 24 * 60 * 60 * 1000 // 30 hari
        };
        localStorage.setItem('class7d_login', JSON.stringify(loginData));
    } else {
        sessionStorage.setItem('class7d_login', username);
    }
}

function checkAutoLogin() {
    if (autoLoginProcessed) return;
    
    const savedLogin = localStorage.getItem('class7d_login');
    let username = null;
    
    if (savedLogin) {
        try {
            const loginData = JSON.parse(savedLogin);
            const now = Date.now();
            
            if (now - loginData.timestamp < loginData.expiry) {
                username = loginData.username;
                if (rememberMeCheckbox) {
                    rememberMeCheckbox.checked = true;
                }
            } else {
                localStorage.removeItem('class7d_login');
            }
        } catch (e) {
            console.error('Error parsing login data:', e);
            localStorage.removeItem('class7d_login');
        }
    }
    
    if (!username) {
        username = sessionStorage.getItem('class7d_login');
    }
    
    if (username) {
        autoLoginProcessed = true;
        performAutoLogin(username);
    }
}

function performAutoLogin(username) {
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    
    if (user) {
        currentUser = {
            username: user.username,
            fullname: user.fullname
        };
        isLoggedIn = true;
        isGuestMode = false;
        
        showPage('anggota-kelas');
        
        setTimeout(() => {
            showNotification(`Selamat datang kembali, ${user.fullname}!`);
        }, 100);
        
        if (window.anggotaData && typeof renderAnggotaKelas === 'function') renderAnggotaKelas();
    }
}

function clearLoginData() {
    localStorage.removeItem('class7d_login');
    sessionStorage.removeItem('class7d_login');
    autoLoginProcessed = false;
}

function toggleSidebar() {
    if (!hamburger || !sidebar) return;
    
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    
    if (!sidebar.classList.contains('active')) {
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            const content = item.querySelector('.accordion-content');
            if (content) content.classList.remove('active');
        });
    }
}

function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMe = rememberMeCheckbox ? rememberMeCheckbox.checked : false;
    
    if (!usernameInput || !passwordInput) {
        showNotification('Form login tidak ditemukan!', true);
        return;
    }
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!username || !password) {
        showNotification('Username dan password harus diisi!', true);
        return;
    }
    
    let user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    
    if (!user) {
        user = users.find(u => u.fullname.toLowerCase().includes(username.toLowerCase()));
    }
    
    if (user) {
        const expectedPassword = user.username.toLowerCase() + "123";
        
        if (password === expectedPassword) {
            currentUser = {
                username: user.username,
                fullname: user.fullname
            };
            isLoggedIn = true;
            isGuestMode = false;
            autoLoginProcessed = true;
            
            saveLoginData(user.username, rememberMe);
            
            passwordInput.value = '';
            showPage('anggota-kelas');
            showNotification(`Selamat datang, ${user.fullname}!`);
            if (window.anggotaData && typeof renderAnggotaKelas === 'function') renderAnggotaKelas();
        } else {
            showNotification('Password salah! Password harus: ' + user.username + '123', true);
            passwordInput.value = '';
            passwordInput.focus();
        }
    } else {
        showNotification('Username tidak ditemukan!', true);
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.focus();
    }
}

function enterGuestMode() {
    isGuestMode = true;
    isLoggedIn = false;
    currentUser = null;
    autoLoginProcessed = true;
    
    clearLoginData();
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    if (rememberMeCheckbox) rememberMeCheckbox.checked = false;
    
    showPage('anggota-kelas');
    showNotification("Anda masuk sebagai pengunjung. Fitur terbatas.");
    if (window.anggotaData && typeof renderAnggotaKelas === 'function') renderAnggotaKelas();
}

function showNotification(message, isError = false) {
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.classList.remove('error', 'show');
    
    if (isError) notification.classList.add('error');
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function openUserModal(absen) {
    if (!modalOverlay || !window.anggotaData) return;
    
    const anggota = window.anggotaData.find(a => a.absen === absen);
    if (!anggota) {
        showNotification('Data anggota tidak ditemukan!', true);
        return;
    }
    
    const userInfo = document.getElementById('user-info');
    if (!userInfo) return;
    
    userInfo.innerHTML = `
        <div class="user-photo">
            <img src="anggota/icon/absen${absen}.jpg" alt="${anggota.nama}" 
                 onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png'; this.classList.add('default-profile');">
        </div>
        <div class="user-details">
            <h2>${anggota.nama}</h2>
            <p><span class="detail-label">Absen:</span> ${anggota.absen}</p>
            <p><span class="detail-label">Kedudukan:</span> ${anggota.kedudukan}</p>
            <p><span class="detail-label">Kelas:</span> 7D - Esphero</p>
            <p><span class="detail-label">Sekolah:</span> SMPN 2 Banjarnegara</p>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function filterAnggota() {
    if (!searchInput || !window.anggotaData || typeof renderAnggotaKelas !== 'function') return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderAnggotaKelas(window.anggotaData);
        return;
    }
    
    const filteredAnggota = window.anggotaData.filter(anggota => {
        return (
            (anggota.nama && anggota.nama.toLowerCase().includes(searchTerm)) ||
            (anggota.absen && anggota.absen.toString().includes(searchTerm)) ||
            (anggota.kedudukan && anggota.kedudukan.toLowerCase().includes(searchTerm))
        );
    });
    
    renderAnggotaKelas(filteredAnggota);
}

function renderAnggotaKelas(data = window.anggotaData) {
    const cardGrid = document.getElementById('anggota-container');
    if (!cardGrid) return;
    
    cardGrid.innerHTML = '';
    
    if (!data || !Array.isArray(data) || data.length === 0) {
        cardGrid.innerHTML = '<p class="no-result">Tidak ada anggota yang ditemukan</p>';
        return;
    }
    
    data.forEach((anggota, index) => {
        const card = document.createElement('div');
        card.className = 'card animate-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('click', () => openUserModal(anggota.absen));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') openUserModal(anggota.absen);
        });
        
        card.innerHTML = `
            <div class="card-img">
                <img src="anggota/icon/absen${anggota.absen}.jpg" 
                     alt="Foto ${anggota.nama}" 
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png'; this.classList.add('default-profile');">
            </div>
            <div class="card-content">
                <h3>${anggota.nama}</h3>
                <p>Absen: ${anggota.absen}</p>
                <p>${anggota.kedudukan || 'Anggota'}</p>
            </div>
        `;
        
        cardGrid.appendChild(card);
    });
}

function openPhoto(album, index) {
    if (!photoModal || !album || !album.photos || album.photos.length === 0) return;
    
    currentAlbum = album;
    currentPhotoIndex = index;
    
    const photo = album.photos[index];
    const modalPhoto = document.getElementById('modal-photo');
    const photoInfo = document.getElementById('photo-info');
    
    if (modalPhoto && photoInfo) {
        modalPhoto.src = photo.url;
        modalPhoto.alt = photo.caption || 'Foto';
        photoInfo.innerHTML = `
            <h3>${photo.caption || 'Tanpa Keterangan'}</h3>
            <p>${photo.uploadDate || ''}</p>
        `;
    }
    
    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    if (photoModal) {
        photoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showPrevPhoto() {
    if (!currentAlbum || !currentAlbum.photos || currentAlbum.photos.length === 0) return;
    
    currentPhotoIndex = (currentPhotoIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length;
    openPhoto(currentAlbum, currentPhotoIndex);
}

function showNextPhoto() {
    if (!currentAlbum || !currentAlbum.photos || currentAlbum.photos.length === 0) return;
    
    currentPhotoIndex = (currentPhotoIndex + 1) % currentAlbum.photos.length;
    openPhoto(currentAlbum, currentPhotoIndex);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('class7d_darkmode', 'true');
        showNotification('Mode gelap diaktifkan');
    } else {
        document.body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('class7d_darkmode', 'false');
        showNotification('Mode terang diaktifkan');
    }
}

function loadDarkModePreference() {
    const savedDarkMode = localStorage.getItem('class7d_darkmode');
    
    if (savedDarkMode === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        isDarkMode = false;
        document.body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (savedDarkMode === null && prefersDarkScheme.matches) {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('class7d_darkmode', 'true');
    }
}

// FUNGSI-FUNGSI UNTUK FORM ADMIN
function getProfileUpgradeForm() {
    const memberOptions = window.anggotaData ? 
        window.anggotaData.map(member => 
            `<option value="${member.absen}">${member.nama} (Absen ${member.absen})</option>`
        ).join('') : '<option value="">Data anggota tidak tersedia</option>';
    
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
                    ${memberOptions}
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

function generateProfileMessage() {
    const memberSelect = document.getElementById('member-select');
    const upgradeType = document.getElementById('upgrade-type');
    const upgradeDesc = document.getElementById('upgrade-desc')?.value || '';
    
    if (!memberSelect || !memberSelect.value) {
        alert('Silakan pilih anggota terlebih dahulu!');
        memberSelect?.focus();
        return;
    }
    
    if (!upgradeType || !upgradeType.value) {
        alert('Silakan pilih jenis request!');
        upgradeType?.focus();
        return;
    }
    
    const member = window.anggotaData ? 
        window.anggotaData.find(m => m.absen == memberSelect.value) : null;
    if (!member) {
        alert('Data anggota tidak ditemukan!');
        return;
    }
    
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
    const description = document.getElementById('bug-description')?.value || '';
    const severity = document.getElementById('bug-severity')?.value || 'medium';
    const browser = document.getElementById('bug-browser')?.value || '';
    
    if (!description.trim()) {
        alert('Silakan isi deskripsi bug terlebih dahulu!');
        document.getElementById('bug-description')?.focus();
        return;
    }
    
    const severityText = {
        'low': 'Rendah',
        'medium': 'Sedang', 
        'high': 'Tinggi',
        'critical': 'Kritis'
    }[severity] || 'Sedang';
    
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
    const title = document.getElementById('feature-title')?.value || '';
    const description = document.getElementById('feature-description')?.value || '';
    const priority = document.getElementById('feature-priority')?.value || 'medium';
    const category = document.getElementById('feature-category')?.value || 'feature';
    
    if (!title.trim() || !description.trim()) {
        alert('Silakan isi judul dan deskripsi fitur terlebih dahulu!');
        if (!title.trim()) {
            document.getElementById('feature-title')?.focus();
        } else {
            document.getElementById('feature-description')?.focus();
        }
        return;
    }
    
    const priorityText = {
        'low': 'Rendah',
        'medium': 'Sedang',
        'high': 'Tinggi'
    }[priority] || 'Sedang';
    
    const categoryText = {
        'ui': 'UI/Design Improvement',
        'feature': 'New Feature',
        'content': 'Content/Data Update',
        'performance': 'Performance Optimization',
        'other': 'Lainnya'
    }[category] || 'New Feature';
    
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
    if (!window.adminContactData || !window.adminContactData.phone) {
        alert('Nomor WhatsApp admin tidak tersedia!');
        return;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const phone = window.adminContactData.phone;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Tambahkan CSS untuk form admin

// Tambahkan CSS ke halaman
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = adminFormCSS;
    document.head.appendChild(style);
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', initializeApp);
