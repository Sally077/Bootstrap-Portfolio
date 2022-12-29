$(".option").click(function () {
   $(".option").removeClass("active");
   $(this).addClass("active");
});



//checks if hash value exists
if ( window.location.hash != '' ) {
   //removes the initial hash
   openval = window.location.hash.slice(1);
   //opens the relavant accordion
   $('.' + openval).addClass('show');

}
            

    