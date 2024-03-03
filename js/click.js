$(document).ready(function(){

    $('#click_home').click(function(event){
        // alert('cliked home')
        document.location.href = "#home";
        $("#home").removeClass().addClass('hero-section d-flex justify-content-center align-items-center');
        $("#about").removeClass().addClass('cls-hide');
        $("#packages").hide();
        $("#gallery").hide();
        $("#contact_us").hide();
        // e.preventDefault();
    });
    $('#click_about').click(function(event){
        $("#about").removeClass().addClass('about-section section-padding');
        $("#packages").hide();
        $("#gallery").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        // e.preventDefault();
    });
    $('#click_packages').click(function(event){
        $("#packages").show();
        $("#gallery").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        $("#about").removeClass().addClass('cls-hide');
    });
    $('#click_gallery').click(function(event){
        $("#gallery").show();
        $("#packages").hide();
        $("#contact_us").hide();
        // $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        $("#about").removeClass().addClass('cls-hide');
    });
    $('#click_contact').click(function(event){
        $("#contact_us").show();
        $("#section_1").hide();
        $("#section_2").hide();
        $("#section_3").hide();
        $("#section_4").hide();
        $("#home").removeClass().addClass('cls-hide');
        $("#about").removeClass().addClass('cls-hide');
    });
})