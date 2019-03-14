$(document).ready(function(){
    //toggler
    var toggler = $(".toggler");

    toggler.click(function(){
        $('.navbar-menu').toggleClass('active');
    });
});