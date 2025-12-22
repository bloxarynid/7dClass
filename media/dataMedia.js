// Data Album Foto
window.albumData = [
    {
        id: 1,
        name: "Foto Kelas 7D",
        description: "Foto bersama kelas 7D",
        cover: "media/image/1/cover.jpg",
        photos: [
            {
                id: 1,
                url: "media/image/1/konten/konten1.jpg",
                caption: "Foto Kelas 7D",
                uploadDate: "17 Agustus 2025"
            },
            {
                id: 2,
                url: "media/image/1/konten/konten2.jpg",
                caption: "Foto Bersama",
                uploadDate: "13 Agustus 2025"
            }
        ],
        created: "22 Desember 2025"
    },
    {
        id: 2,
        name: "Literasi Di Perpusda",
        description: "Kegiatan Perpusda Hari Ini",
        cover: "media/image/2/cover.jpg",
        photos: [
            {
                id: 1,
                url: "media/image/2/konten/konten1.jpg",
                caption: "Cisss",
                uploadDate: "23 Oktober 2025"
            },
            {
                id: 2,
                url: "media/image/2/konten/konten2.jpg",
                caption: "Nafis...",
                uploadDate: "23 Oktober 2025"
            },
            {
                id: 3,
                url: "media/image/2/konten/konten3.jpg",
                caption: "Khusus...",
                uploadDate: "23 Oktober 2025"
            },
            {
                id: 4,
                url: "media/image/2/konten/konten4.jpg",
                caption: "...",
                uploadDate: "23 Oktober 2025"
            }
        ],
        created: "23 Oktober 2025"
    }
];

// Fungsi Render Album Foto
function renderPhotoAlbums() {
    const container = document.getElementById('album-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (window.albumData.length === 0) {
        container.innerHTML = '<p class="no-result">Belum ada album foto</p>';
        return;
    }
    
    window.albumData.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.className = 'album-card';
        albumElement.innerHTML = `
            <div class="album-thumbnail">
                <img src="${album.cover}" alt="${album.name}" 
                     onerror="this.src='media/image/default.jpg'">
            </div>
            <div class="album-info">
                <h3 class="album-title">${album.name}</h3>
                <p>${album.description}</p>
                <div class="album-meta">
                    <span>${album.photos.length} foto</span>
                    <span>${album.created}</span>
                </div>
            </div>
        `;
        albumElement.addEventListener('click', () => openAlbum(album));
        container.appendChild(albumElement);
    });
}

// Fungsi Buka Album
function openAlbum(album) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="user-modal" style="max-width: 90%;">
            <div class="modal-header">
                <h2>${album.name}</h2>
                <button class="modal-close" id="album-modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>${album.description}</p>
                <div class="photo-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin-top: 20px;">
                    ${album.photos.map((photo, index) => `
                        <div class="photo-thumbnail" style="height: 150px; overflow: hidden; border-radius: 8px; cursor: pointer;">
                            <img src="${photo.url}" alt="${photo.caption}" 
                                 style="width: 100%; height: 100%; object-fit: cover;" 
                                 data-index="${index}"
                                 onerror="this.src='media/image/default.jpg'">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('#album-modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelectorAll('.photo-thumbnail img').forEach(img => {
        img.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            openPhoto(album, index);
            document.body.removeChild(modal);
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}