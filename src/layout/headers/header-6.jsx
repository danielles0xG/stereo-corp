import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ScrollspyNav from 'react-scrollspy-nav';

import logo from '../../../public/assets/images/logos/logo-three.png';
import Drawer from '../../components/common/Drawer';
import useSticky from '../../hooks/use-sticky';
import useToggle from '../../hooks/useToggle';
import NavMenus from './nav-menus';

const HeaderSix = ({ onePage = false }) => {
  const { headerSticky } = useSticky();
  const [showSearch, setShowSearch] = useState(false);
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-six ${headerSticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
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
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo py-15">
                      <Link href="/">
                        <a>
                          <Image src={logo} alt="logo" />
                        </a>
                      </Link>
                    </div>

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
                      scrollTargetIds={["home", "services", "about", "team", "pricing", "testimonial"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="100"
                      headerBackground="true"
                    > <ul className="navigation onepage clearfix">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#team">team</a></li>
                        <li><a href="#pricing">pricing</a></li>
                        <li><a href="#testimonial">testimonial</a></li>
                      </ul>
                    </ScrollspyNav>}
                  </div>
                </nav>

                <div className="menu-icons">
                  <div className="nav-search mx-15">
                    <button className="fa fa-search" onClick={() => setShowSearch(!showSearch)}></button>
                    <form className={`${showSearch ? '' : 'hide'}`}>
                      <input type="text" placeholder="Search" className="searchbox" required="" />
                      <button type="submit" className="searchbutton fa fa-search"></button>
                    </form>
                  </div>
                  <button>
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
                <div className="menu-btn">
                  <a href="#" className="theme-btn style-seven">LogIn/Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "services", "about", "team", "pricing", "testimonial"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#team">team</a></li>
          <li onClick={handleClick}><a href="#pricing">pricing</a></li>
          <li onClick={handleClick}><a href="#testimonial">testimonial</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderSix;