$('#slider4').slick({
    animate: "slow",
    slidesToShow:5,
    slidesToScroll: 5,
    //autoplay:true,
    //autoplaySpeed: 10000,
    arrows:true,
    prevArrow:'.arrow-prev',
    nextArrow:'.arrow-next',
    dots:false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: false,
          
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
         
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  });

