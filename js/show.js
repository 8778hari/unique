
$(document).ready(function(){
    // console.log(window.location,'738383838');
    let href = window.location.hash;
    if((/[/]/g).test(href)) {
        href = href.split('/')[0];
    }
    if((/[&]/g).test(href)) {
        href = href.split('&')[0];
    }
    console.log(href);
    var pageName = href;
 
    if(pageName === "#home") {
        $("#home").show();
        $("#about").removeClass().addClass('cls-hide');
        $("#packages").hide();
        $("#gallery").hide();
        $("#contact_us").hide();
    } else if(pageName === "#about") {
        $("#about").show();
        $("#packages").hide();
        $("#gallery").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
    } else if(pageName === "#contact_us") {
        console.log('in contact')
        $("#contact_us").show();
        $("#about").hide();
        $("#packages").hide();
        $("#gallery").hide();
        $("#home").removeClass().addClass('cls-hide');
    } else if(pageName === "#packages") {
        $("#packages").show();
        $("#gallery").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        $("#about").removeClass().addClass('cls-hide');
    } else if(pageName === "#gallery") {
        $("#gallery").show();
        $("#packages").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        $("#about").removeClass().addClass('cls-hide');
    } else {
        $("#home").show();
        $("#about").removeClass().addClass('cls-hide');
        $("#packages").hide();
        $("#gallery").hide();
        $("#contact_us").hide();
    }
});
