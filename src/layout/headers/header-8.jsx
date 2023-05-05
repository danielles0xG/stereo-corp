import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';

import logo from '../../../public/assets/images/logos/logo-white-two.png';
import Drawer from '../../components/common/Drawer';
import useSticky from '../../hooks/use-sticky';
import useToggle from '../../hooks/useToggle';
import { SocialLinksOne } from '../social-links';
import NavMenus from './nav-menus';

const HeaderEight = ({ onePage = false }) => {
  const { headerSticky } = useSticky();
  const [showSearch, setShowSearch] = useState(false);
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-eight ${headerSticky ? 'fixed-header' : ''}`}>
        <div className="header-top-wrap bg-black text-white py-10">
          <div className="container">
            <div className="header-top">
              <div className="top-left">
                <ul>
                  <li><i className="far fa-envelope"></i> <a href="mailto:info.Restly@gmail.com">info.Restly@gmail.com</a></li>
                  <li>
                    <i className="fas fa-globe"></i>
                    <select name="language" id="language">
                      <option defaultValue="English">English</option>
                      <option defaultValue="Arabic">Arabic</option>
                      <option defaultValue="Spanish">Spanish</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <div className="hotline">
                  <i className="fas fa-headset"></i><span>Hotline : </span> <a href="callto:+125846589">+12 (584 6589</a>
                </div>
                <div className="social-style-one">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Header-Upper--> */}
        <div className="header-upper bg-white">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <Image src={logo} alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="nav-outer clearfix d-flex align-items-center">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu navbar-expand-lg mx-lg-auto">
                  <div className="navbar-header">
                    {/* <!-- Toggle Button --> */}
                    <button type="button" className="navbar-toggle" onClick={setValue.toggle}>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    {/* nav bar start */}
                    {!onePage && <NavMenus />}
                    {/* nav bar end */}
                    {onePage && <ScrollspyNav
                      scrollTargetIds={["home", "about", "services", "protect", "project", "testimonial", "news"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="100"
                      headerBackground="true"
                    > <ul className="navigation onepage clearfix">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#protect">protect</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#testimonial">testimonial</a></li>
                        <li><a href="#news">news</a></li>
                      </ul>
                    </ScrollspyNav>}
                  </div>

                </nav>
                {/* <!-- Main Menu End--> */}

                {/* <!-- Nav Search --> */}
                <div className="nav-search mx-25">
                  <button className="fa fa-search" onClick={() => setShowSearch(!showSearch)}></button>
                  <form className={`${showSearch ? '' : 'hide'}`}>
                    <input type="text" placeholder="Search" className="searchbox" required />
                    <button type="submit" className="searchbutton fa fa-search"></button>
                  </form>
                </div>
                {/* <!-- Menu Button --> */}
                <div className="menu-btn">
                  <Link href="/contact">
                    <a className="theme-btn style-nine">contact us
                      <i className="far fa-paper-plane"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "about", "services", "protect", "project", "testimonial", "news"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#protect">protect</a></li>
          <li onClick={handleClick}><a href="#project">Project</a></li>
          <li onClick={handleClick}><a href="#testimonial">testimonial</a></li>
          <li onClick={handleClick}><a href="#news">news</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderEight;