$(document).ready(function(){
    $("#home").click(function(){
        if  ($("#apps-section").toggle(true)){
            $("#apps-section").toggle()}
    if  ($("#contact-section").toggle(true)){
            $("#contact-section").toggle()
    }
    if  ($("#about-section").toggle(true)){
        $("#about-section").toggle()
}})


    $("#about").click(function(){

        //  $("#a").toggle();
        $("#checkbox").click();

         $("#about-section").toggle();
        if  ($("#apps-section").toggle(true)){
                $("#apps-section").toggle()}
        if  ($("#contact-section").toggle(true)){
                $("#contact-section").toggle()
        }})



     $("#apps").click(function(){

        //  $("#a").toggle();
        $("#checkbox").click();

         $("#apps-section").toggle();
         if  ($("#about-section").toggle(true)){
            $("#about-section").toggle()}
    if  ($("#contact-section").toggle(true)){
            $("#contact-section").toggle()
     }});

     $("#contact").click(function(){

        //  $("#a").toggle();
        $("#checkbox").click();

         $("#contact-section").toggle();
         if  ($("#apps-section").toggle(true)){
            $("#apps-section").toggle()}
    if  ($("#about-section").toggle(true)){
            $("#about-section").toggle()
     }});})

  
     
