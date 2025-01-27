document.addEventListener('DOMContentLoaded', function () {
    // Form gönderme işlemi
    document.querySelector('#contactForm').addEventListener('submit', function (e) {
        // Hata mesajlarını gizle
        document.querySelector('#error-message').style.display = 'none';
        document.querySelector('#email-error').style.display = 'none';

        // Form elemanları
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Eğer herhangi bir alan boşsa, hata mesajını göster ve formu göndermeyi engelle
        if (!name || !email || !message) {
            e.preventDefault(); // Formu gönderme
            document.querySelector('#error-message').style.display = 'block'; // Hata mesajını göster
        }
        // E-posta alanı geçerli bir e-posta adresi değilse, hata mesajını göster
        else if (!email.includes('@')) {
            e.preventDefault(); // Formu gönderme
            document.querySelector('#email-error').style.display = 'block'; // E-posta hatası mesajını göster
        } else {
            alert('Mesajınız gönderildi!');
        }
    });

    // Sayfa yüklendiğinde 2 saniye bekleme ve kalp efekti gösterme
    window.onload = function () {
        setTimeout(function () {
            document.getElementById("loadingScreen").style.display = "none";
        }, 2000);
    };

    // Sepete ekleme butonu etkileşimi
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert("Ürün sepete başarıyla eklendi!");
            button.innerHTML = "Sepete Eklendi ✔️";
        });
    });

    // Slider işlemleri (Resimleri sırayla gösterme)
    const slides = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].style.display = 'none'; // Şu anki resmi gizle
        currentIndex = (currentIndex + 1) % slides.length; // İndex'i güncelle
        slides[currentIndex].style.display = 'block'; // Yeni resmi göster
    }

    setInterval(showNextSlide, 2000);

    // Slider işlemleri (Kaydırma efektiyle)
    const slidesContainer = document.querySelector('.slides');
    const totalImages = document.querySelectorAll('.slides img').length;
    let slideIndex = 0;

    function slideWithEffect() {
        slideIndex = (slideIndex + 1) % totalImages; // Sıradaki resmi seç
        const offset = -slideIndex * 100; // Resim genişliğine göre kaydır
        slidesContainer.style.transform = `translateX(${offset}%)`; // Kaydırma işlemi
    }

    setInterval(slideWithEffect, 2000); // 2 saniyede bir geçiş
});
