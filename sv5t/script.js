
let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function SearchDisplayStyle()
{
    if($("#the-fields").hasClass("hidden"))
    {
        $("#the-fields").removeClass("hidden");
        $("a.next").css("top","85%");
        $("a.prev").css("top","85%");
    }
    else
    {
        $("#the-fields").addClass("hidden");
        $("a.next").css("top","50%");
        $("a.prev").css("top","50%");
    }
  
};
function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("contestant-item");
        
        console.log(slides);
        //var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
       
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          
        }
      
        slides[slideIndex - 1].style.display = "block";
        //$('#'+String(slideIndex - 1)).removeClass('fade');
   
        //dots[slideIndex - 1].className += " active";
    }

    
   
    function listContestant(info) {
        $('#info-page').loadTemplate('contestant.html', info,{ complete: function()
        {
            console.log(info);
            showSlides(slideIndex);
        }});
    }
    var displayData,searchData;
    //Read data
    $.ajax({
        url: 'data.json'
    }).done(function (data) {
        displayData = searchData = data ;
        
        listContestant(displayData)
        
    });
    function InfoFind()
    {

        var selectName = document.querySelector('#name-filter').value;
        var selectClass = document.querySelector('#class-filter').value;
        var selectYear = document.querySelector('#year-filter').value;
        var selectFaculty = document.querySelector('#faculty-filter').value;
        var info=[selectName,selectClass,selectYear,selectFaculty];
        console.log(info);
        var displaySearchData= _.filter(searchData,function(item)
        {
            if(selectName!="")
            {
            return (
                item.name.toLowerCase().match(selectName.toLowerCase())
                )
            }
            else
            {
                return (
                  item
                    )
            }
        });
   
        displaySearchData= _.filter(displaySearchData,function(item)
        {
            if(selectClass!="")
            {
            return (
                item.class.toLowerCase().match(selectClass.toLowerCase())
                )
            }
            else
            {
                return (item )
            }
        });

        displaySearchData= _.filter(displaySearchData,function(item)
        {
            if(selectFaculty!="all")
            {
            return (
                item.faculty.toLowerCase().match(selectFaculty.toLowerCase())
                )
            }
            else
            {
                return (
                  item
                    )
            }
        });

        displaySearchData= _.filter(displaySearchData,function(item)
        {
            if(selectYear!="all")
            {
            return (
                String(item.year).toLowerCase().match(selectYear.toLowerCase())
                )
            }
            else
            {
                return (
                  item
                    )
            }
        });
        console.log(displaySearchData);
        listContestant(displaySearchData);
    }
$(function () {

      // Next/previous controls
   

    var countDownDate = new Date("Feb 10, 2022 15:37:25").getTime();
    $(document).ready(function () {
        var x = setInterval(function () {
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("count-down-clock").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("count-down-clock").innerHTML = "EXPIRED";
            }
        }, 1000);     
       
      
    });

});
