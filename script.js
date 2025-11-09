document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    
    // Sticky Header (Yapışkan Başlık)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Form İşlevi
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    if (form) { // Formun mevcut olup olmadığını kontrol et
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            form.reset(); 
            
            // Gizli mesajı gösterme
            if(message) {
                message.textContent = 'Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.';
                message.style.display = 'block'; // 'hidden' sınıfı yerine display kullan
                setTimeout(() => {
                    message.style.display = 'none';
                }, 5000);
            }
        });
    }
});

// Form mesajı için stil (eğer CSS'te yoksa)
const style = document.createElement('style');
style.innerHTML = `
    .success-message {
        display: none; /* Başlangıçta gizli */
        color: green;
        font-weight: 600;
        margin-top: 15px;
        padding: 10px;
        background: #e0f8e0;
        border: 1px solid green;
        border-radius: 8px;
    }
`;
document.head.appendChild(style);