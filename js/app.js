$(document).ready(function(){
    setContents();
});


function setContents(){
    $("li a").click(function(e) {
        e.preventDefault();
        var sectionID = e.currentTarget.id + "-section"
        //alert("Button " + sectionID)
        $("html body").animate({
            scrollTop:$("#" + sectionID).offset().top

        }, 1000) 

    })
}

//scrollTop: $("#" + sectionID).offset().top - $("#" + sectionID).height() / 2