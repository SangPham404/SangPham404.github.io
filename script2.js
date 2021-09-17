$(document).ready(function(){
  
    $('.preload').removeClass('active');
    window.setTimeout(function(){$('.preload').addClass('active');},500);
    $(document).on("mousemove",onMove);
    function onMove(evt)
    {    
        
        
        $('#circle-cursor').animate({top: evt.pageY-19},0).animate({left:evt.pageX-19},0);
        
         
    }
})