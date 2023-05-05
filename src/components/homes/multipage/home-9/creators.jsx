import Slider from "react-slick"
import { creators } from "../../../../data"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}

export default function Creators() {
  return (
    <>
      <section className="sellers-section pt-120 rpt-100" id="sellers">
        <div className="container rel z-2 py-80">
          <div className="section-title text-center mb-65">
            <span className="sub-title">Creators</span>
            <h2>Our Top Sellers</h2>
          </div>
          <div className="sellers-active slick-gap">
            <Slider {...settings}>
              {creators.map((item, i) => (
                <div key={i} className="seller-item wow fadeInUp delay-0-1s">
                  <span className="number">0{i+1}</span>
                  <div className="image">
                    <img src={item.img} alt="Saller" />
                    <span className="check"><i className="fas fa-check"></i></span>
                  </div>
                  <h5>Michelle Yeoh</h5>
                  <span className="items">230 Item</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
