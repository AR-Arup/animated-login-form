/*  ################### 
        Preloader
    ###################  */

    $(window).on('load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut(1000);
    });





/*  ################### 
       form
    ###################  */

    $(".txtb input").on("focus",function(){
        $(this).addClass("focus");
       });

       $(".txtb input").on("blur",function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
       });
    
    
    
    