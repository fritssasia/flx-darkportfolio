// Navbar-highlight
$(document).ready(function () {
    $('.main-navbar li a').click(function () {
        $('li a').removeClass("current");
        $(this).addClass("current");
    });
});