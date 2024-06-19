window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        var headerSup = document.querySelector('.header-sup');
        var main = document.querySelector('.main');

        var rectHeaderSup = headerSup.getBoundingClientRect();
        var rectMain = main.getBoundingClientRect();
        var headerSupHeight = headerSup.offsetHeight;

        if (rectHeaderSup.top <= 0 && rectMain.top < headerSupHeight) {
            headerSup.classList.add("sticky");
        } else if (rectMain.top >= headerSupHeight) {
            headerSup.classList.remove("sticky");
        }
    });
});

window.addEventListener('load', function() {
    var searchBox1 = document.getElementById('sb-1');
    var clearBtn1 = document.getElementById('clearBtn-1');
    var placeholderText1 = searchBox1.placeholder; // Lưu trữ placeholder ban đầu

    searchBox1.addEventListener('input', function() {
        if (searchBox1.value !== '') {
            clearBtn1.style.display = 'inline';
        } else {
            clearBtn1.style.display = 'none';
        }
    });

    clearBtn1.addEventListener('click', function() {
        searchBox1.value = '';
        clearBtn1.style.display = 'none';
        searchBox1.focus();
    });

    searchBox1.addEventListener('focus', function() {
        searchBox1.style.border = "2px dotted black";
        searchBox1.placeholder = ''; // Xóa placeholder khi input nhận sự chú ý
    });

    searchBox1.addEventListener('blur', function() {
        searchBox1.style.border = "none";
        if (searchBox1.value === '') {
            searchBox1.placeholder = placeholderText1; // Đặt lại placeholder khi input mất sự chú ý và không có text nào được nhập vào
        }
    });
});

window.addEventListener('load', function() {
    var searchBox2 = document.getElementById('sb-2');
    var clearBtn2 = document.getElementById('clearBtn-2');
    var searchBtn2 = document.getElementById('searchBtn-2');
    var inputDiv = document.getElementById('search-box-2');
    var borderForm = document.getElementById('in-sb2');
    var placeholderText2 = searchBox2.placeholder; // Lưu trữ placeholder ban đầu

    searchBox2.addEventListener('input', function() {
        if (searchBox2.value !== '') {
            clearBtn2.style.display = 'inline';
        } else {
            clearBtn2.style.display = 'none';
        }
    });

    clearBtn2.addEventListener('click', function() {
        searchBox2.value = '';
        clearBtn2.style.display = 'none';
        searchBox2.focus();
    });

    searchBox2.addEventListener('focus', function() {
        inputDiv.style.boxShadow = '0px 3px 3px 0px rgba(0,0,0,0.2)';
        borderForm.style.border = "2px dotted black";
        searchBox2.placeholder = ''; // Xóa placeholder khi input nhận sự chú ý
        searchBox2.style.backgroundColor = 'white';
        clearBtn2.style.backgroundColor = 'white';
        searchBtn2.style.backgroundColor = 'white';
        inputDiv.style.backgroundColor = 'white';
    });

    searchBox2.addEventListener('blur', function() {
        borderForm.style.border = "none";
        searchBox2.style.border = "none";
        inputDiv.style.boxShadow = 'none';
        searchBox2.style.backgroundColor = '#F7F7F7';
        clearBtn2.style.backgroundColor = '#F7F7F7';
        searchBtn2.style.backgroundColor = '#F7F7F7';
        inputDiv.style.backgroundColor = '#F7F7F7';
        if (searchBox2.value === '') {
            searchBox2.placeholder = placeholderText2; // Đặt lại placeholder khi input mất sự chú ý và không có text nào được nhập vào
        }
    });
});

window.addEventListener('load', function() {
    var listUnderlineEffectElement = document.querySelectorAll('.underline');
    listUnderlineEffectElement.forEach(function(listItem){
        listItem.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        listItem.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
});
window.addEventListener('load', function() {
    // Lấy tất cả phần tử li
    var listItems = document.querySelectorAll('.product-kind li');

    // Thêm sự kiện click cho từng phần tử li
    listItems.forEach(function(listItem) {
        listItem.addEventListener('click', function() {
            // Xóa class 'active' khỏi tất cả phần tử li
            listItems.forEach(function(li) {
                li.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
window.addEventListener('load', function() {
    let loadMoreBtn = document.querySelector('#load-more');
    let currentItem = 6;
    loadMoreBtn.onclick = () =>{
        let boxes = [...document.querySelectorAll('.info-more .box-container .info-item')];
        for (var i = currentItem; i < currentItem + 9; i++) {
            boxes[i].style.display = 'inline-block';
        }
        currentItem += 9;

        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
});
window.addEventListener('load', function() {
    var items = document.querySelectorAll('.items');

    items.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            var buyNow = item.querySelector('.buy-now');
            buyNow.style.visibility = 'visible';
            buyNow.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function() {
            var buyNow = item.querySelector('.buy-now');
            buyNow.style.visibility = 'hidden';
            buyNow.style.opacity = '0';
        });
    });
});
window.addEventListener('load', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const phoneNumber = document.getElementById('phoneNumber');

    toggleButton.addEventListener('click', function() {
        if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
            phoneNumber.style.display = 'block';
            this.textContent = 'Hiển thị ít hơn';
        } else {
            phoneNumber.style.display = 'none';
            this.textContent = 'Hiển thị số điện thoại';
        }
    });
});