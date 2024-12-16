document.addEventListener('click', function (event) {
    var isClickInsideNavbar = event.target.closest('.navbar');
    if (!isClickInsideNavbar) {
        var navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            var toggler = document.querySelector('.navbar-toggler');
            toggler.click();
        }
    }
});

//动态调整padding-===================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    function adjustPaddingTop() {
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
    }

    // 调整初始的padding-top
    adjustPaddingTop();

    // 当窗口大小改变时，调整padding-top
    window.addEventListener('resize', adjustPaddingTop);
});
