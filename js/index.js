$(document).ready(function() {
  var doch = $(window).height();
  var imgh = $(".logo").height();

  var contenth = $(window).height();
  var abouth = $(".about-title-area").height();
  var skillh = $(".skills-title-area").height();
  var resumeh = $(".resume-title-area").height();
  var contacth = $(".contact-title-area").height();

  $(".langs, .soft, .artwork, .logos").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 0,
    dots: false,
    pagination:false,
    nav:false
  });

  $(".about-title-area").css({'top':'calc(50% - ' + ((abouth/2) + 20) + 'px)'});
  $(".skills-title-area").css({'top':'calc(50% - ' + ((skillh/2) + 20) + 'px)'});
  $(".resume-title-area").css({'top':'calc(50% - ' + ((resumeh/2) + 20) + 'px)'});
  $(".contact-title-area").css({'top':'calc(50% - ' + ((contacth/2) + 20) + 'px)'});

  $(window).resize(function() {
    $(".about-title-area").css({'top':'calc(50% - '     + ((abouth/2) + 20) + 'px)'});
    $(".skills-title-area").css({'top':'calc(50% - '    + ((skillh/2) + 20) + 'px)'});
    $(".resume-title-area").css({'top':'calc(50% - '    + ((resumeh/2) + 20) + 'px)'});
    $(".contact-title-area").css({'top':'calc(50% - '   + ((contacth/2) + 20) + 'px)'});
  });

  var pix = $(document).scrollTop()

  if(pix < contenth)
  {
    $(".logo").attr('src', 'img/kingo.svg');
    $(".myname").css('color', '#eee');
  }
  else if(pix >= contenth && pix < (contenth*2))
  {
    $(".logo").attr('src', 'img/kingo2.svg');
    $(".myname").css('color', '#333');
  }
  else if(pix >= (contenth*2))
  {
    $(".logo span").attr('src', 'img/kingo.svg');
    $(".myname").css('color', '#eee');
  }

  $(window).scroll(function() {
    var pixs = $(document).scrollTop()
    pixs2 = pixs / 100;
    opOut = 1 - ((pixs2 / 3));
    opIn = 0 + ((pixs2 / 3));

    console.log(pixs);

    if(pixs < contenth)
    {
      $(".logo").attr('src', 'img/kingo.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#eee');
    }
    else if(pixs >= contenth && pixs < (contenth*2))
    {
      $(".logo").attr('src', 'img/kingo2.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#252525');
    }
    else if(pixs >= (contenth*2))
    {
      $(".logo").attr('src', 'img/kingo.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#eee');
    }

    //$('.parallax-mirror img').css({
    //  'filter':'blur(' + pixs + 'px)'
    //});
  });

  $(".skills-content .next").click(function()
  {
    if($(".skills1").is(":visible"))
    {
      $(".skills1").fadeOut(250);
      $(".skills2").fadeIn(250);
      $(".skills-title").html("A GRAPHICS DESIGNER");
      $(".skills-desc").html("From abstract to minimalist, logos to print. I believe I have a unique and personal flair that exists in everything that I produce.");
      $(".skills-content .prev").show();
      $(".skills-content .next").hide();
    }
  });

  $(".skills-content .prev").click(function()
  {
    if($(".skills2").is(":visible"))
    {
      $(".skills2").fadeOut(250);
      $(".skills1").fadeIn(250);
      $(".skills-title").html("A WEB DEVELOPER");
      $(".skills-desc").html("I am always looking for new and exciting ways to develop beautiful websites for clients and individuals.");
      $(".skills-content .next").show();
      $(".skills-content .prev").hide();
    }
  });

  $(".logo").hover(function() {
    $(".myname").stop().animate({top: "30px"}, 250);
    $(".location").stop().fadeOut(250);
  }, function() {
    $(".myname").stop().animate({top: "-40px"}, 150);
    $(".location").stop().fadeIn(150);
  });

});
