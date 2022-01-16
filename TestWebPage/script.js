$(document).ready(function() {
    let summarydata=0
    let ProfilePerPage=5;
    let thepage=1;
   
    $(function()
    {
      var pageline=" <a id='prev' href='#prev' >&laquo;</a>"
      $(pageline).appendTo("#pagechange")
      $.getJSON('data.json', function(data) {
           $.each(data.person, function(i, f) {
            if(Math.floor(i/5+1)===(i/5)+1)
            {
              pageline=" <a "+ "id='thepage"+Math.floor(i/5+1).toString()+"' class='pagebutton-show' href='#pagenum"+Math.floor(i/5+1).toString()+"'>"+Math.floor(i/5+1).toString()+"</a>"
              $(pageline).appendTo("#pagechange")   
              $('#thepage'+thepage.toString()).addClass("active");  
            }
               
         });  
         pageline="<a id='next' href='#next' >&raquo;</a>"
         $(pageline).appendTo("#pagechange")
       });
   
     
       
    });
    
   
        $(function() {
    
    
       var people = [];
        let count=0;
        let countdv=0;
        var display_image=""
       $.getJSON('data.json', function(data) {
           $.each(data.person, function(i, f) {
              console.log(Math.floor(i/5+1))
                if(Math.floor(i/5+1)===(i/5)+1 && Math.floor(i/5+1)!=1)
                {
              var display_image="<div id='pagenum"+Math.floor(i/5+1).toString()+"' class ='page-inactive'>  </div>"
              $(display_image).appendTo("#userimg");
                }
                else{
                  if(Math.floor(i/5+1)===(i/5)+1 && Math.floor(i/5+1)===1)
                  {
                var display_image="<div id='pagenum"+Math.floor(i/5+1).toString()+"' class ='page-active'>  </div>"
                $(display_image).appendTo("#userimg");
                  }
                }
                
              })
            });
                $.getJSON('data.json', function(data) {
                  $.each(data.person, function(i, f) {    
                
                    var display_image="<div class ='zoom item col ' id='people"+Math.floor(i/5+1).toString()+"'> <img class='profile-picture'"+"id='image"+i.toString()+"'"+" src= '"+f.image+"' width=150 height=100>"
                    +"<span> "+f.firstName+" "+f.lastName+ "</span> </div> "
                    $(display_image).appendTo("div > #pagenum"+Math.floor(i/5+1).toString());
              
              var display_info= "<div class ='info-nonactive'id='info"+i.toString()+"'><ul class='info-display caption'> "+"<li><p>"+f.firstName+" "+f.lastName+"</p></li>"+ "<li> <p>"  + f.job + "</li> </p>" +"<li> <p> " + f.roll + "</li> </p>" + " </ul></div>"
               
                $(display_info).appendTo("#user-info-display")
            
               summarydata=summarydata+1;
               
         })})});
   
  
    setInterval(
    function() {
      
   
    var people = [];
     let count=0;
   
    
    $.getJSON('data.json', function(data) {
        $.each(data.person, function(i, f) {
              
           
               var check_hover="#image"+count.toString();
               var Id_check="#info"+count.toString();
               if($(check_hover).is(":hover") === true) 
               {
                $(Id_check).removeClass("info-nonactive");
                  $(Id_check).addClass("info-active");
                  var elementID=document.getElementById("image"+count.toString())
                
                  if(elementID!=null)
                 {
                  let width = screen.width;
                  var bodyRect = document.body.getBoundingClientRect()
                    var picpositionLeft=elementID.getBoundingClientRect().left - bodyRect.left
                    var picpositionTop=elementID.getBoundingClientRect().top - bodyRect.top
                    var picpositionRight=elementID.getBoundingClientRect().right - bodyRect.right
                   
                    if(picpositionLeft+200+300<width)
                    {
                  document.getElementById("info"+count.toString()).style.left=picpositionLeft+200+"px";
                    }
                    else{
                      document.getElementById("info"+count.toString()).style.left=picpositionLeft-310+"px";
                    }
                  document.getElementById("info"+count.toString()).style.top=picpositionTop+'px';
                 }
               }
               else{
                $(Id_check).removeClass("info-active");
                $(Id_check).addClass("info-nonactive");
            
                 
               }
        
               count=count+1;
      });  
 
    });
 
 });

 window.onload=function()
 {
 var pageItem = $(".pagination a").not("#prev, #next");
        
  pageItem.click(function() {
    
    pageItem.removeClass("active");
    $(this).not("#prev, #next").addClass("active");

    target = $(this).attr('href');
  
    $('div '+target).removeClass('page-inactive');
    $('div '+target).addClass('page-active');
    $('#userimg > div:not('+target+')').removeClass('page-active');
    $('#userimg > div:not('+target+')').addClass('page-inactive');
    $(target).fadeIn(600);
  });

  $("#prev").click(function() {
    var bar= $('a.active')
    bar.removeClass('active')
    var car=bar.prev()
    car.addClass('active');
    var laf =$('a.active').attr('href')
    console.log(laf)
    if(laf!='#prev')
    {
      $('div '+laf).removeClass('page-inactive');
      $('div '+laf).addClass('page-active');
      $('#userimg > div:not('+laf+')').removeClass('page-active');
      $('#userimg > div:not('+laf+')').addClass('page-inactive');
      $(laf).fadeIn(600);
    }
    if ($(this).hasClass("active"))
    {
      $(this).removeClass('active').next().addClass('active');
      
    }
  });

  $("#next").click(function() {
    $('a.active').removeClass('active').next().addClass('active');
    var laf =$('a.active').attr('href')
    if(laf!='#next')
    {
      $('div '+laf).removeClass('page-inactive');
      $('div '+laf).addClass('page-active');
      $('#userimg > div:not('+laf+')').removeClass('page-active');
      $('#userimg > div:not('+laf+')').addClass('page-inactive');
      $(laf).fadeIn(600);
    }
    if ($(this).hasClass("active"))

    {
      $(this).removeClass('active').prev().addClass('active');
    
   
    }
  });

  
 }
   
  });