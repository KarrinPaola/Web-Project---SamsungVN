window.addEventListener('load',function(){
    var email = document.getElementById('emailInput');
    var nextButton = document.getElementById('submitButton');
    var placeholderText = email.placeholder; // Lưu trữ placeholder ban đầu

    email.addEventListener('input', checkInputs);
    function checkInputs() {
        if (email.value !== '') {
            nextButton.style.backgroundColor = "#0381FE";
            nextButton.disabled = false;
        } else {
            nextButton.style.backgroundColor = "#D4E8FC";
            nextButton.disabled = true;
        }
    }
    email.addEventListener('focus', function() {
        email.placeholder = ''; // Xóa placeholder khi input nhận sự chú ý
    });

    email.addEventListener('blur', function() {
        if (email.value === '') {
            email.placeholder = placeholderText; // Đặt lại placeholder khi input mất sự chú ý và không có text nào được nhập vào
        }
    });
});
