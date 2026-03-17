$(document).ready(function(){

    const faders = document.querySelectorAll(".fade-in");


    $('.page').css("background-color","transparent");
    $('.page').animate({
        backgroundColor: '#020814d2'
    },3800,function(){
      $('.page').animate({
        // always expanding and shrinking background...
      },1000);
    });


    $('.profile-picture').css("visibility","hidden");
    $('.about-name').css("visibility","hidden");
    $('h3.about-text').css("visibility","hidden");
    $('ul.about-text').css("visibility","hidden");
    

    //Profile Pic ---> 
    $('.profile-picture').css("position","relative")
    $('.profile-picture').animate({right: '800'},function(){
        $('.profile-picture').css("visibility","visible");
        $('.profile-picture').animate({right: '0'},1800);
    });


    //about-name & h3 <--- + when h3 finish list shows up 
    $('.about-name').css("position","relative")
    $('.about-name').animate({left: '2000'},function(){
        $('.about-name').css("visibility","visible");
        $('.about-name').animate({left: '0'},2000);
    });
    $('h3.about-text').css("position","relative")
    $('h3.about-text').animate({left: '2000'},function(){
        $('h3.about-text').css("visibility","visible");
        $('h3.about-text').animate({left: '0'},2500,function(){
            $('ul.about-text').css("visibility","visible");
            $('ul.about-text').hide();
            $('ul.about-text').fadeIn(2500);
        });
    });

    //it work best values that identify screens intended for this animation
    if($(window).height() <= 960 && $(window).width()<=480){
        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -150px 0px"
          };
          
          const appearOnScroll = new IntersectionObserver(function(
            entries,
            appearOnScroll
          ) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return;
              } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
              }
            });
          },
          appearOptions);
          
          faders.forEach(fader => {
            appearOnScroll.observe(fader);
          });
    }
    else{ //for most of devices - if more buttons or page just will get more stuff
                        // then if section code can be applied to all devices..
        
        $('#cv-box').addClass("appear");
        $('#elog-box').addClass("appear");
        
        $('#cv-box').css("visibility","hidden");
        $('#elog-box').css("visibility","hidden");


        $('#cv-box').css("position","relative")
        $('#cv-box').animate({top: '800'},function(){
            $('#cv-box').css("visibility","visible");
            $('#cv-box').animate({top: '0'},2200);
        });
        
        $('#elog-box').css("position","relative")
        $('#elog-box').animate({top: '800'},function(){
            $('#elog-box').css("visibility","visible");
            $('#elog-box').animate({top: '0'},2400);
        });
    }

});