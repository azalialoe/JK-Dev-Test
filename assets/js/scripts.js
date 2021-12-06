// function to change the nav bar when users scroll down

$(function() {
    const navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('bg-F0EFF4')
            navbar.addClass('navbar-dark')
            }        
        else {
                navbar.addClass('bg-F0EFF4')
                navbar.removeClass('navbar-dark')              
            };
        });
});

// function to not show thank you modal if form inputs are left empty

$(function() {
    const btn = $('.form-btn');
    const inputs = $('input');
    const modal = $('#thanksModal');
    
    $(btn).on('click', function() {
        if (inputs.val() != '') {
            modal.show();
        } else {
            return false;
        }
    })
});
