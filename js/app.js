$(document).ready(function(){
    setContents();
    hideContents();
    showProjects();
});

//scrolling to div when clicked on nav links

function setContents(){
    $(".scroller").click(function(e) {
        e.preventDefault();
        //var sectionID = e.currentTarget.id + "-section"
        var currentLink = $(this).attr('href');
        //alert("Button " + currentLink)
        $("html body").animate({
            scrollTop:$(currentLink).offset().top

        }, 1000) 

    })
}

//hiding menus on mobile when clicked on nav links
function hideContents(){
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    })
}



// onscroll animation for skills section(progress-bar)

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var elementOffset = $('.company1').offset().top;
    // prompt(elementOffset)

    if (scroll >= 1500) {
        $(".progress-bar").addClass("animated fadeInLeft");
    }

    if (scroll >=2000) {

        $(".company1").addClass("animated fadeInUp");
        $(".company2").addClass("animated fadeInUp");
    }
}); 

function showProjects(){
    $(".projects-filter button a").click(function(e){
        e.preventDefault();
        var projectContent = $(this).attr('data-filter'); 
        $(projectContent).toggle();
       
    });


}






