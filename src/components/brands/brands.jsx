import Slider from "react-slick";

const brand_data = [
  { img: '/assets/images/client-logo/client-logo-1.png' },
  { img: '/assets/images/client-logo/client-logo-2.png' },
  { img: '/assets/images/client-logo/client-logo-3.png' },
  { img: '/assets/images/client-logo/client-logo-4.png' },
  { img: '/assets/images/client-logo/client-logo-5.png' },
  { img: '/assets/images/client-logo/client-logo-2.png' },
  { img: '/assets/images/client-logo/client-logo-1.png' },
  { img: '/assets/images/client-logo/client-logo-4.png' },
  { img: '/assets/images/client-logo/client-logo-3.png' },
]

const brand_data_2 = [
  { img: '/assets/images/client-logo/client-logo-6.png' },
  { img: '/assets/images/client-logo/client-logo-7.png' },
  { img: '/assets/images/client-logo/client-logo-8.png' },
  { img: '/assets/images/client-logo/client-logo-9.png' },
  { img: '/assets/images/client-logo/client-logo-10.png' },
  { img: '/assets/images/client-logo/client-logo-8.png' },
  { img: '/assets/images/client-logo/client-logo-6.png' },
]

const brand_data_3 = [
  { img: '/assets/images/client-logo/client-logo-11.png' },
  { img: '/assets/images/client-logo/client-logo-12.png' },
  { img: '/assets/images/client-logo/client-logo-13.png' },
  { img: '/assets/images/client-logo/client-logo-14.png' },
  { img: '/assets/images/client-logo/client-logo-15.png' },
  { img: '/assets/images/client-logo/client-logo-16.png' },
]


const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const Brands = ({ brand_2,brand_3 }) => {
  return (
    <>
      {!brand_2 && !brand_3 && <Slider {...settings}>
        {
         brand_data.map((item, i) => {
            return <div key={i} className="logo-item">
              <a href="#">
                <img src={item.img} alt="Client Logo" />
              </a>
            </div>
          })
        }
      </Slider>}

      {brand_2 && !brand_3 && <Slider {...settings}>
        {
         brand_data_2.map((item, i) => {
            return <div key={i} className="logo-item">
              <a href="#">
                <img src={item.img} alt="Client Logo" />
              </a>
            </div>
          })
        }
      </Slider>}

      {brand_3 && <Slider {...settings}>
        {
         brand_data_3.map((item, i) => {
            return <div key={i} className="logo-item">
              <a href="#">
                <img src={item.img} alt="Client Logo" />
              </a>
            </div>
          })
        }
      </Slider>}
    </>
  );
};

export default Brands;