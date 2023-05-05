import { useState } from "react";
import Link from "next/link";
// import "./style.css";

function Drawer({ drawer, action, single_page, single_page_menu, home_nine,home_seven }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      if (item !== value) {
        setSize(`${50 * getItems}px`);
        setItem(value);
      } else {
        setItem("");
      }
    }
  };
  return (
    <>
      <div onClick={(e) => action(e)} className={`off_canvars_overlay ${drawer ? "active" : ""}`}></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${drawer ? "active" : ""} ${home_nine ? 'home_nine' : ''}`}>
                <Link href="/">
                  <a className="offcanvas-brand text-center mb-40 d-block">
                    <img src={'/assets/images/logos/logo-three.png'} alt="" />
                  </a>
                </Link>
                <div id="menu" className={`text-start ${home_seven ? 'home_seven' : ''}`}>
                  {!single_page && <ul className="offcanvas_main_menu">
                    <li onClick={(e) => handler(e, "home")}
                      id="home" className="menu-item-has-children active">
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Home Multipage</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "home" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/">Home 1</Link>
                        </li>
                        <li>
                          <Link href="/home-2">Home 2</Link>
                        </li>
                        <li>
                          <Link href="/home-3">Home 3</Link>
                        </li>
                        <li>
                          <Link href="/home-4">Home 4</Link>
                        </li>
                        <li>
                          <Link href="/home-5">Home 5</Link>
                        </li>
                        <li>
                          <Link href="/home-6">Home 6</Link>
                        </li>
                        <li>
                          <Link href="/home-7">Home 7</Link>
                        </li>
                        <li>
                          <Link href="/home-8">Home 8</Link>
                        </li>
                        <li>
                          <Link href="/home-9">Home 9</Link>
                        </li>
                      </ul>
                    </li>
                    <li onClick={(e) => handler(e, "home-one-page")}
                      id="home-one-page" className="menu-item-has-children active">
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Home One Page</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "home-one-page" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/home-1-one-page">Home 1</Link>
                        </li>
                        <li>
                          <Link href="/home-2-one-page">Home 2</Link>
                        </li>
                        <li>
                          <Link href="/home-3-one-page">Home 3</Link>
                        </li>
                        <li>
                          <Link href="/home-4-one-page">Home 4</Link>
                        </li>
                        <li>
                          <Link href="/home-5-one-page">Home 5</Link>
                        </li>
                        <li>
                          <Link href="/home-6-one-page">Home 6</Link>
                        </li>
                        <li>
                          <Link href="/home-7-one-page">Home 7</Link>
                        </li>
                        <li>
                          <Link href="/home-8-one-page">Home 8</Link>
                        </li>
                        <li>
                          <Link href="/home-9-one-page">Home 9</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "abouts")}
                      id="abouts"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">About</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "abouts" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/about">About 1</Link>
                        </li>
                        <li>
                          <Link href="/about-2">About 2</Link>
                        </li>
                        <li>
                          <Link href="/about-3">About 3</Link>
                        </li>
                        <li>
                          <Link href="/about-4">About four</Link>
                        </li>
                        <li>
                          <Link href="/about-5">About five</Link>
                        </li>
                        <li>
                          <Link href="/about-6">About Six</Link>
                        </li>
                        <li>
                          <Link href="/about-7">About Seven</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "service")}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Service</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "service" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/services">Service One</Link>
                        </li>
                        <li>
                          <Link href="/services-2">Service Two</Link>
                        </li>
                        <li>
                          <Link href="/services-3">Service Three</Link>
                        </li>
                        <li>
                          <Link href="/services-4">Service Four</Link>
                        </li>
                        <li>
                          <Link href="/services-4">Service five</Link>
                        </li>
                        <li>
                          <Link href="/services-5">Service Six</Link>
                        </li>
                        <li>
                          <Link href="/services-6">Service Seven</Link>
                        </li>
                        <li>
                          <Link href="/service-details">Service Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "portfolio")}
                      id="portfolio"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Portfolio</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "portfolio" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/portfolio">Portfolio One</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-2">Portfolio Two</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-3">Portfolio three</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-4">Portfolio Four</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-details">Portfolio Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "Pages")}
                      id="Pages"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Pages</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "Pages" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/counter">Counters</Link>
                        </li>
                        <li>
                          <Link href="/shop">Shop</Link>
                        </li>
                        <li>
                          <Link href="/shop-details">Shop details</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing One</Link>
                        </li>
                        <li>
                          <Link href="/pricing-2">Pricing Two</Link>
                        </li>
                        <li>
                          <Link href="/pricing-3">Pricing Three</Link>
                        </li>
                        <li>
                          <Link href="/pricing-4">Pricing Four</Link>
                        </li>
                        <li>
                          <Link href="/pricing-5">Pricing Five</Link>
                        </li>
                        <li>
                          <Link href="/pricing-6">Pricing Six</Link>
                        </li>
                        <li>
                          <Link href="/team-1">Team One</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team Two</Link>
                        </li>
                        <li>
                          <Link href="/team-3">Team Three</Link>
                        </li>
                        <li>
                          <Link href="/team-4">Team Four</Link>
                        </li>
                        <li>
                          <Link href="/team-single">Team Single</Link>
                        </li>
                        <li>
                          <Link href="/404">404</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "Blogs")}
                      id="Blogs"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Blog</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "Blogs" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link href="/blog">Blog Page</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>}
                  {single_page &&
                    <div className="offcanvas_main_menu" onClick={(e) => handler(e, "one-page")} id="one-page">
                      {single_page_menu}
                    </div>
                  }
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> support@restly.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> +(642) 342 762 44
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker-alt"></i> 442 Belle Terre
                        St Floor 7, San Francisco, AV 4206
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
