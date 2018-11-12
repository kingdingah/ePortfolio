$(document).ready(function() {
  var doch = $(window).height();
  var imgh = $(".logo").height();

  var contenth = $(window).height();
  var abouth = $(".about-title-area").height();
  var aboutah = $(".about-content").height();
  var contactah = $(".contact-content").height();
  var skillh = $(".skills-title-area").height();
  var resumeh = $(".resume-title-area").height();
  var contacth = $(".contact-title-area").height();

  var resumeimg = $(".resume-content img").width();
  var resumeb = $(".resume-content button").width();

  $(".langs, .soft, .artwork, .logos").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 0,
    dots: false,
    pagination:false,
    nav:false
  });

  $(".about-content").css({'top':'calc(50% - ' + (aboutah/2) + 'px)'});
  $(".contact-content").css({'top':'calc(50% - ' + (contactah/2) + 'px)'});

  $(".resume-content img").css({'left':'calc(50% - ' + (resumeimg/2) + 'px)'});
  $(".resume-content button").css({'left':'calc(50% - ' + (resumeb/2) + 'px)'});

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
    $(".hamburger").attr('src', 'img/icon/burger.svg');
    $(".myname, .sociallinks a i, .location").css({'color':'#f7f7f7'});
    $(".location").html("About");
  }
  else if(pix >= contenth && pix < (contenth*2))
  {
    $(".logo").attr('src', 'img/kingo2.svg');
    $(".hamburger").attr('src', 'img/icon/burger2.svg');
    $(".myname, .sociallinks a i, .location").css('color', '#252525');
    $(".location").html("Skills");
  }
  else if(pix >= (contenth*2) && pix < (contenth*3))
  {
    $(".logo").attr('src', 'img/kingo.svg');
    $(".hamburger").attr('src', 'img/icon/burger.svg');
    $(".myname, .sociallinks a i, .location").css('color', '#f7f7f7');
    $(".location").html("Resume");
  }
  else if(pix >= (contenth*3))
  {
    $(".logo").attr('src', 'img/kingo.svg');
    $(".hamburger").attr('src', 'img/icon/burger.svg');
    $(".myname, .sociallinks a i, .location").css('color', '#f7f7f7');
    $(".location").html("Contact");
  }

  $(window).scroll(function() {
    var pixs = $(document).scrollTop()
    pixs2 = pixs / 100;
    opOut = 1 - ((pixs2 / 3));
    opIn = 0 + ((pixs2 / 3));

    if(pixs < contenth)
    {
      $(".logo").attr('src', 'img/kingo.svg');
      $(".hamburger").attr('src', 'img/icon/burger.svg');
      $(".myname, .sociallinks a i, .location").css({'color':'#f7f7f7'});
      $(".location").html("About");
    }
    else if(pixs >= contenth && pixs < (contenth*2))
    {
      $(".logo").attr('src', 'img/kingo2.svg');
      $(".hamburger").attr('src', 'img/icon/burger2.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#252525');
      $(".location").html("Skills");
    }
    else if(pixs >= (contenth*2) && pixs < (contenth*3))
    {
      $(".logo").attr('src', 'img/kingo.svg');
      $(".hamburger").attr('src', 'img/icon/burger.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#f7f7f7');
      $(".location").html("Resume");
    }
    else if(pixs >= (contenth*3))
    {
      $(".logo").attr('src', 'img/kingo.svg');
      $(".hamburger").attr('src', 'img/icon/burger.svg');
      $(".myname, .sociallinks a i, .location").css('color', '#f7f7f7');
      $(".location").html("Contact");
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

  $(".mydiscord").hover(function() {
    $(".disc, .disc2").stop().fadeIn(250);
  }, function() {
    $(".disc, .disc2").stop().fadeOut(150);
  });

  var state = true;

  $(".hamburger").click(function() {
    console.log(state);

    if(state)
    {
      $(".minimenu").fadeIn(250);
      $(".location, .logo").fadeOut(150);
      state = false;
    }
    else
    {
      $(".minimenu").fadeOut(250);
      $(".location, .logo").fadeIn(150);
      state = true;
    }

    var socialdiv = $(".minimenu .sociallinks div.socialouter").width();
    $(".minimenu .sociallinks div.socialouter").css({'left':'calc(50% - ' + (socialdiv/2) + 'px)'});

    $(".minimenu .mydiscord").click(function() {
      var discnotice = $(".minimenu .sociallinks div.discnotice").width();
      $(".minimenu .sociallinks div.discnotice").fadeIn(250).delay(1000).fadeOut(250);
      $(".minimenu .sociallinks div.discnotice").css({'left':'calc(50% - ' + (discnotice/2) + 'px)'});
    });
  });

  $("#toAbout").click(function() {
    $("html, body").animate({scrollTop: 0}, 300);
    $(".minimenu").fadeOut(250);
    $(".location").fadeIn(150);

    state = true;
  });

  $("#toSkills").click(function() {
    $("html, body").animate({scrollTop: (contenth)}, 300);
    $(".minimenu").fadeOut(250);
    $(".location").fadeIn(150);

    state = true;
  });

  $("#toResume").click(function() {
    $("html, body").animate({scrollTop: (contenth*2)}, 300);
    $(".minimenu").fadeOut(250);
    $(".location").fadeIn(150);

    state = true;
  });

  $("#toContact").click(function() {
    $("html, body").animate({scrollTop: (contenth*3)}, 300);
    $(".minimenu").fadeOut(250);
    $(".location").fadeIn(150);

    state = true;
  });

  $(".about-title-area").css({'height':abouth});

  $(".artwork .item").click(function()
  {
    var img = $(this).find("img");
    var img_type = img.attr("src");

    console.log(img_type);

    $(".lightbox img").attr('src', img_type);
    $(".lbtitle").html("");
    $(".lightbox").fadeIn(250);
  });

  $(".logos .item").click(function()
  {
    var img = $(this).find("img");
    var img_type = img.attr("src");
    var ttl = $(this).find("span").html();

    console.log(img_type);

    $(".lightbox img").attr('src', img_type);
    $(".lbtitle").html(ttl);
    $(".lightbox").fadeIn(250);
  });

  $(".lbclose").click(function() {
    $(".lightbox").fadeOut(250);
  });

});
