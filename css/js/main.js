$(document).ready(function(){
    var typed = new Typed('#typed',{
        strings: ["Hello There","I am Rajkumar","A UI / Web Developer","A Photographer"],
        typeSpeed:40,
        backSpeed:40,
        backDelay:1000,
        loop:true
    });

    $('.menu').click(function(){
        $('.navbar nav ul li').toggleClass('active');
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('.nbr').addClass('black');
        }else{
            $('.nbr').removeClass('black');
        }
    })
    //scroll 
    var scrollClick = $('.nav-item');
    scrollClick.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop:
            $(this.hash).offset().top
        },1000);
    });
    //link switch
    //hash is resprsending id
    
});
