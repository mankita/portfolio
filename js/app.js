$(document).ready(function(){
    setContents();
    hideContents();
});

//scrolling to div when clicked on nav links

function setContents(){
    $(".scroller").click(function(e) {
        e.preventDefault();
        //var sectionID = e.currentTarget.id + "-section"
        var currentLink = $(this).attr('href');
        //alert("Button " + currentLink)
        $("body, html").animate({
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
    if (scroll >= 1500) {
        $(".progress-bar").addClass("animated fadeInLeft");
    }
    if (scroll >=2000) {

        $(".company1").addClass("animated fadeInLeft");
        $(".company2").addClass("animated fadeInRight");
    }
    
}); 

/*filter on project-category
function showProjects(){
    $(".projects-filter button a").click(function(e){
        e.preventDefault();
        var projectContent = $(this).attr('data-filter'); 
        $(projectContent).toggle();

    });


} */

function contactFormSubmit() {
    var name = $("#fromName").val();
    var from = $("#fromEmail").val();
    var textMessage = $("#textMessage").val();
    var form = $("#contact-form");
    var messageSent = $("#message-sent");
    $.ajax({
        url: "https://formspree.io/ankita.mishra2431@gmail.com", 
        method: "POST",
        data: {
            name: name,
            from: from,
            message: textMessage
        },
        dataType: "json",
        success: function(response) {
            form.hide();
            messageSent.show();
        }
    
    });

}






