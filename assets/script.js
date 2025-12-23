// ============================================
// SCRIPT.JS - FILE UTAMA KELAS 7D ESPHERO
// ============================================

// Import dari file lain
let auth = window.auth;
let data = window.data;
let utils = window.utils;

// Global State
let currentUser = null;
let isLoggedIn = false;
let isGuestMode = false;
let currentAlbum = null;
let currentPhotoIndex = 0;

// DOM Elements
let hamburger, sidebar, pages, loginBtn, guestLoginBtn, searchInput;
let modalOverlay, modalClose, photoModal, photoModalClose;
let prevPhotoBtn, nextPhotoBtn, notification, notificationText;

// ============================================
// INITIALIZE APP
// ============================================
function initializeApp() {
    console.log("🚀 Memulai Aplikasi Kelas 7D...");
    
    // Inisialisasi auth dan data
    if (typeof window.auth === 'undefined') {
        console.error("❌ File auth.js tidak ditemukan!");
        showNotification("Error: Sistem autentikasi tidak dimuat!", true);
        return;
    }
    
    if (typeof window.data === 'undefined') {
        console.error("❌ File data.js tidak ditemukan!");
        showNotification("Error: Data aplikasi tidak dimuat!", true);
        return;
    }
    
    auth = window.auth;
    data = window.data;
    utils = window.utils || {};
    
    // Cache DOM Elements
    cacheElements();
    
    // Setup Event Listeners
    setupEventListeners();
    
    // Setup Accordion
    setupAccordion();
    
    // Setup Submenu
    setupSubMenu();
    
    // Load initial data
    loadInitialData();
    
    // Check session
    checkSavedSession();
    
    console.log("✅ Aplikasi siap digunakan!");
}

function cacheElements() {
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
}

function setupEventListeners() {
    // Hamburger Menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleSidebar);
        hamburger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleSidebar();
        }, { passive: false });
    }
    
    // Login Buttons
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
    
    if (guestLoginBtn) {
        guestLoginBtn.addEventListener('click', enterGuestMode);
    }
    
    // Modal Controls
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (photoModalClose) photoModalClose.addEventListener('click', closePhotoModal);
    if (prevPhotoBtn) prevPhotoBtn.addEventListener('click', showPrevPhoto);
    if (nextPhotoBtn) nextPhotoBtn.addEventListener('click', showNextPhoto);
    
    // Search with debounce
    if (searchInput) {
        const debouncedSearch = debounce(filterAnggota, 300);
        searchInput.addEventListener('input', debouncedSearch);
    }
    
    // Modal overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Window resize
    window.addEventListener('resize', debounce(handleResize, 200));
}

function setupAccordion() {
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
            accordionContent.classList.toggle('active');
        });
    });
}

function setupSubMenu() {
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
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (!usernameInput || !passwordInput) {
        showNotification('Form login tidak ditemukan!', true);
        return;
    }
    
    const result = auth.login(usernameInput, passwordInput);
    
    if (result.success) {
        currentUser = result.user;
        isLoggedIn = true;
        isGuestMode = false;
        
        passwordInput.value = '';
        showPage('anggota-kelas');
        showNotification(result.message);
        
        // Save session
        saveSession();
        
        // Update UI
        updateUserUI();
        
        // Load anggota data
        if (data && data.anggotaData) {
            renderAnggotaKelas(data.anggotaData);
        }
    } else {
        showNotification(result.message, true);
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function enterGuestMode() {
    isGuestMode = true;
    isLoggedIn = false;
    currentUser = null;
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    
    showPage('anggota-kelas');
    showNotification("Anda masuk sebagai pengunjung. Fitur terbatas.");
    
    if (data && data.anggotaData) {
        renderAnggotaKelas(data.anggotaData);
    }
}

function updateUserUI() {
    const userNameDisplay = document.getElementById('user-name-display');
    const userAvatar = document.getElementById('user-avatar');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (currentUser) {
        if (userNameDisplay) {
            userNameDisplay.textContent = currentUser.fullname;
            userNameDisplay.style.display = 'inline';
        }
        
        if (userAvatar) {
            userAvatar.src = `anggota/icon/absen${getAbsenFromName(currentUser.fullname)}.jpg`;
            userAvatar.style.display = 'block';
        }
        
        if (logoutBtn) logoutBtn.style.display = 'block';
    } else {
        if (userNameDisplay) userNameDisplay.style.display = 'none';
        if (userAvatar) userAvatar.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function getAbsenFromName(fullname) {
    if (!data || !data.anggotaData) return 'default';
    const anggota = data.anggotaData.find(a => a.nama === fullname);
    return anggota ? anggota.absen : 'default';
}

// ============================================
// UI FUNCTIONS
// ============================================
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

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
    
    if (hamburger) {
        if (pageId === 'login-page') {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = 'flex';
        }
    }
    
    if (window.innerWidth < 768 && sidebar && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
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

// ============================================
// DATA FUNCTIONS
// ============================================
function loadInitialData() {
    // Load anggota
    if (data && data.anggotaData) {
        renderAnggotaKelas(data.anggotaData);
    }
    
    // Load organisasi
    if (typeof renderOrganisasiKelas === 'function') {
        renderOrganisasiKelas();
    }
    
    // Load jadwal
    if (data && data.jadwalPelajaran && typeof renderJadwalPelajaran === 'function') {
        renderJadwalPelajaran();
    }
    
    if (data && data.jadwalPiket && typeof renderJadwalPiket === 'function') {
        renderJadwalPiket();
    }
    
    // Load media
    if (data && data.albumData && typeof renderPhotoAlbums === 'function') {
        renderPhotoAlbums();
    }
    
    // Load informasi
    if (data && data.pengumumanData && typeof renderPengumuman === 'function') {
        renderPengumuman();
    }
    
    if (data && data.tugasData && typeof renderTugas === 'function') {
        renderTugas();
    }
    
    if (data && data.kegiatanData && typeof renderKegiatan === 'function') {
        renderKegiatan();
    }
}

function renderAnggotaKelas(dataArray = data.anggotaData) {
    const cardGrid = document.getElementById('anggota-container');
    if (!cardGrid || !dataArray) return;
    
    cardGrid.innerHTML = '';
    
    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        cardGrid.innerHTML = '<p class="no-result">Tidak ada anggota yang ditemukan</p>';
        return;
    }
    
    dataArray.forEach((anggota, index) => {
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
                     onerror="this.onerror=null; this.src='anggota/icon/default.jpg';">
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

function filterAnggota() {
    if (!searchInput || !data || !data.anggotaData) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderAnggotaKelas(data.anggotaData);
        return;
    }
    
    const filteredAnggota = data.anggotaData.filter(anggota => {
        return (
            anggota.nama.toLowerCase().includes(searchTerm) ||
            anggota.absen.toString().includes(searchTerm) ||
            (anggota.kedudukan && anggota.kedudukan.toLowerCase().includes(searchTerm))
        );
    });
    
    renderAnggotaKelas(filteredAnggota);
}

function openUserModal(absen) {
    if (!modalOverlay || !data || !data.anggotaData) return;
    
    const anggota = data.anggotaData.find(a => a.absen === absen);
    if (!anggota) {
        showNotification('Data anggota tidak ditemukan!', true);
        return;
    }
    
    const userInfo = document.getElementById('user-info');
    if (!userInfo) return;
    
    userInfo.innerHTML = `
        <div class="user-photo">
            <img src="anggota/icon/absen${absen}.jpg" alt="${anggota.nama}" 
                 onerror="this.onerror=null; this.src='anggota/icon/default.jpg';">
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

// ============================================
// PHOTO MODAL FUNCTIONS
// ============================================
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

// ============================================
// UTILITY FUNCTIONS
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleKeyboardShortcuts(e) {
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
    
    // Ctrl/Cmd + K untuk fokus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) searchInput.focus();
    }
}

function handleResize() {
    if (window.innerWidth >= 768 && sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
}

function saveSession() {
    if (!currentUser) return;
    
    const sessionData = {
        user: currentUser,
        timestamp: Date.now()
    };
    
    try {
        localStorage.setItem('kelas7d_session', JSON.stringify(sessionData));
    } catch (e) {
        console.error('Gagal menyimpan session:', e);
    }
}

function checkSavedSession() {
    try {
        const sessionData = localStorage.getItem('kelas7d_session');
        if (sessionData) {
            const session = JSON.parse(sessionData);
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000; // 24 jam
            
            if (now - session.timestamp < oneDay) {
                currentUser = session.user;
                isLoggedIn = true;
                isGuestMode = false;
                
                showPage('anggota-kelas');
                updateUserUI();
                showNotification(`Selamat datang kembali, ${currentUser.fullname}!`);
            } else {
                localStorage.removeItem('kelas7d_session');
            }
        }
    } catch (e) {
        console.error('Error checking session:', e);
    }
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// START APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load file auth.js dan data.js terlebih dahulu
    loadScript('assets/auth.js', function() {
        loadScript('assets/data.js', function() {
            // Utils optional
            loadScript('assets/utils.js', function() {
                initializeApp();
            });
        });
    });
});

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = function() {
        console.error(`❌ Gagal memuat file: ${src}`);
        callback();
    };
    document.head.appendChild(script);
}
