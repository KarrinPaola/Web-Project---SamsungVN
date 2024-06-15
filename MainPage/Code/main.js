// Lấy thẻ a cần xử lý sự kiện click
const menuToggle = document.querySelector('#header .nav-bar div a');

// Lấy phần nav-bar cần thay đổi
const navBar = document.querySelector('#header .nav-bar');

// Thêm sự kiện click vào thẻ a
menuToggle.addEventListener('click', function() {
    // Chuyển thuộc tính right của nav-bar sang 0 khi click
    navBar.style.right = '-100%';
});