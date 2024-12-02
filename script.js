function closeHeader() {
    document.querySelector('.header').style.display = 'none';
}

// JavaScript untuk tombol geser kiri dan kanan
const reviews = document.querySelector('.reviews');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentPosition = 0; // Posisi review saat ini
const reviewWidth = document.querySelector('.review').offsetWidth; // Lebar satu review
const totalReviews = document.querySelectorAll('.review').length; // Jumlah total review

// Tombol geser kiri
leftBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--; // Geser 1 review ke kiri
        reviews.style.transform = `translateX(-${currentPosition * reviewWidth}px)`;
    }
});

// Tombol geser kanan
rightBtn.addEventListener('click', () => {
    if (currentPosition < totalReviews - 3) { // 3 adalah jumlah review yang ditampilkan dalam satu waktu
        currentPosition++; // Geser 1 review ke kanan
        reviews.style.transform = `translateX(-${currentPosition * reviewWidth}px)`;
    }
});
