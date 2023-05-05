import Link from "next/link";
import Slider from "react-slick";

const popular_contents = {
  subtitle: 'Popular Collection',
  title: 'Collection Category',
  collection_items: [
    {
      style_1: ['/assets/images/categories/category1.png', '/assets/images/categories/category2.png'],
      img_3: '/assets/images/categories/category3.png',
      title: 'Creative Artwork',
      items: 220,
    },
    {
      style_2: ['/assets/images/categories/category4.png', '/assets/images/categories/category5.png',
        '/assets/images/categories/category6.png'],
      title: 'Creative Artwork',
      items: 225,
    },
    {
      style_3: ['/assets/images/categories/category7.png', '/assets/images/categories/category8.png',
        '/assets/images/categories/category9.png', '/assets/images/categories/category10.png'],
      title: 'Creative Artwork',
      items: 322,
    },
    {
      style_2: ['/assets/images/categories/category4.png', '/assets/images/categories/category5.png',
        '/assets/images/categories/category6.png'],
      title: 'Creative Artwork',
      items: 225,
    },
  ]
}

const { subtitle, title, collection_items } = popular_contents;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="next slick-arrow">
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="prev slick-arrow">
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  speed: 1000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const PopularCollection = () => {
  return (
    <>
      <section className="collection-category-area rel z-1 pt-115 pb-90 rpt-95 rpb-70" id="categories">
        <div className="container">
          <div className="row align-items-end mb-50">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-20">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="collection-category-btns text-lg-right mb-20">
                <Link href="/about">
                  <a className="theme-btn gradient-btn-one">Explore Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="collection-category-active">
            <Slider {...settings}>

              {collection_items.map((item, i) => (
                <div key={i} className="collection-category-item wow fadeInUp delay-0-2s">
                  <div className="category-images">
                    <div className="row">
                      {item.style_1 &&
                        <>
                          <div className="col-6">
                            {item.style_1.map((item, i) => <a key={i} href="#">
                              <img src={item} alt="Category" />
                            </a>)}
                          </div>
                          <div className="col-6">
                            <a href="#"><img src={item.img_3} alt="Category" /></a>
                          </div>
                        </>
                      }

                      {
                        item.style_2 && item.style_2.map((item, i) => <div key={i} className={`${i === 2 ? 'col-12'
                          : 'col-6'} `}>
                          <a href="#"><img src={item} alt="Category" /></a>
                        </div>)
                      }

                      {
                        item.style_3 && item.style_3.map((item, i) => <div key={i} className="col-6">
                          <a href="#"><img src={item} alt="Category" /></a>
                        </div>)
                      }

                    </div>
                  </div>
                  <div className="title-dots">
                    <div className="content">
                      <h4>{item.title}</h4>
                      <span className="items">{item.items} Item</span>
                    </div>
                    <div className="dots"><span></span><span></span><span></span></div>
                  </div>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCollection;