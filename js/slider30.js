    $('#slider30').slick({
    animate: "slow",
    slidesToShow:3,
    //autoplay:true,
    //autoplaySpeed: 10000,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay:true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay:true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 2000,
        }
      }
    ]
  })