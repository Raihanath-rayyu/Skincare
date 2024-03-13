$(function(){
  $("#about_us").hide();

  $(window).scroll(function(){
    let x = $(document).scrollTop();
    if(x>200){
      $("#myBtn").show("slow");
      $("#about_us").show(1000);
     
    
    }else{
      $("#myBtn").hide("slow");
    }
  })

  $("#myBtn").click(function(){
    $(window).scrollTop(0);
  })
})


//product

$(function(){
 
  $("#productt").hide();
  $(window).scroll(function(){
    let x = $(document).scrollTop();
    if(x>900){
    
      $("#productt").show(1000);
    }
  })

})





//testimonial

$(function(){
 
  $("#testimoniall").hide();
  $(window).scroll(function(){
    let x = $(document).scrollTop();
    if(x>2000){
    
      $("#testimoniall").show(1000);
    }
  })

}) 
 

//form

$(function(){
 
  $("#form").hide();
  $(window).scroll(function(){
    let x = $(document).scrollTop();
    if(x>3000){
    
      $("#form").show(1000);
    }
  })

})



    