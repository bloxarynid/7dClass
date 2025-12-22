let currentUser = null;
let isLoggedIn = false;
let isGuestMode = false;
let currentAlbum = null;
let currentPhotoIndex = 0;

let hamburger, sidebar, pages, loginBtn, guestLoginBtn, searchInput;
let modalOverlay, modalClose, photoModal, photoModalClose;
let prevPhotoBtn, nextPhotoBtn, notification, notificationText;

const users = [ ];

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
    
    if (hamburger) hamburger.addEventListener('click', toggleSidebar);
    if (loginBtn) loginBtn.addEventListener('click', login);
    if (guestLoginBtn) guestLoginBtn.addEventListener('click', enterGuestMode);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (searchInput) searchInput.addEventListener('input', filterAnggota);
    if (photoModalClose) photoModalClose.addEventListener('click', closePhotoModal);
    if (prevPhotoBtn) prevPhotoBtn.addEventListener('click', showPrevPhoto);
    if (nextPhotoBtn) nextPhotoBtn.addEventListener('click', showNextPhoto);
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }
    
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
    
    if (hamburger) hamburger.style.display = 'none';
    
    if (window.anggotaData) renderAnggotaKelas();
    if (typeof renderOrganisasiKelas === 'function') renderOrganisasiKelas();
    if (window.jadwalPelajaran && typeof renderJadwalPelajaran === 'function') renderJadwalPelajaran();
    if (window.jadwalPiket && typeof renderJadwalPiket === 'function') renderJadwalPiket();
    if (window.albumData && typeof renderPhotoAlbums === 'function') renderPhotoAlbums();
    if (window.pengumumanData && typeof renderPengumuman === 'function') renderPengumuman();
    if (window.tugasData && typeof renderTugas === 'function') renderTugas();
    if (window.kegiatanData && typeof renderKegiatan === 'function') renderKegiatan();
}

document.addEventListener('DOMContentLoaded', initializeApp);

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

function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
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
    
    const user = users.find(u => 
        (u.username.toLowerCase() === username.toLowerCase() || 
         u.fullname.toLowerCase() === username.toLowerCase()) && 
        u.password === password
    );
    
    if (user) {
        currentUser = user;
        isLoggedIn = true;
        isGuestMode = false;
        passwordInput.value = '';
        showPage('anggota-kelas');
        showNotification(`Selamat datang, ${user.fullname}!`);
        if (window.anggotaData) renderAnggotaKelas();
    } else {
        showNotification('Username atau password salah!', true);
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
    if (window.anggotaData) renderAnggotaKelas();
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
    if (!modalOverlay) return;
    
    const anggota = window.anggotaData ? window.anggotaData.find(a => a.absen === absen) : null;
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

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function filterAnggota() {
    if (!searchInput || !window.anggotaData) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderAnggotaKelas(window.anggotaData);
        return;
    }
    
    const filteredAnggota = window.anggotaData.filter(anggota => {
        return (
            anggota.nama.toLowerCase().includes(searchTerm) ||
            anggota.absen.toString().includes(searchTerm) ||
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
});

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
