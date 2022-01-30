function PageClick() {
    $('#about').css('display', 'none');
    $('#portfolios').css('display', 'none');
    $('#contact').css('display', 'none');
    $('#navbar li').on('click', function () {
        $('#navbar li').removeClass('active')
        $(this).addClass('active')
        let page = $(this)[0].getAttribute('value').split('-')[0];
        $('#home').css('display', 'none');
        $('#about').css('display', 'none');
        $('#portfolios').css('display', 'none');
        $('#contact').css('display', 'none');
        $('#' + page).css('display', 'block');
    });

}
function LearnMoreInfo()
{
    $('#learn-more').removeClass('hidden');
}
function CloseInfo()
{
    $('#learn-more').addClass('hidden');
}
$(document).ready(function () {


    PageClick();
    $('#download').attr({target: '_blank', 
    href  : 'PHAMPHUOCSANG_cv.pdf'});

});