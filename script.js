$(document).ready(function(){
 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
           
        } else {
            $('.nav-menu').removeClass('custom-navbar');
            
            
        }
        if(position>=800)
        {
            $("#portfolios .card").addClass('changaeing');
        }
        else{
            $("#portfolios .card").removeClass('changaeing');
        }
        if(position>=1400) {
            $("#about .card").addClass('changaeing');
        }
        else{
            $("#about .card").removeClass('changaeing');
        }
        
    });
    
    
});
var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height;
        var bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');}
        else{
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
           
                // $("#portfolios .card").css({"animation-name":"anim3","animation-duration":"3s"});
           
            
        }

        if (cur_pos === 0) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');
            
        }
        else{
            $('#home').addClass('active');
            nav.find('a[href="#home"]').addClass('active');
           
        }
    });
   
});