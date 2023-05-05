import NavMenus from './nav-menus';
import logo from '../../../public/assets/images/logos/logo-white-three.png';
import Image from 'next/image';
import { useState } from 'react';

import useSticky from '../../hooks/use-sticky';
import ScrollspyNav from 'react-scrollspy-nav';
import Link from 'next/link';
import useToggle from '../../hooks/useToggle';
import Drawer from '../../components/common/Drawer';

const HeaderNine = ({ onePage = false }) => {
  const { headerSticky } = useSticky();
  const [showSearch, setShowSearch] = useState(false);
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-nine text-white ${headerSticky ? 'fixed-header' : ''}`}>
        {/* <!--Header-Upper--> */}
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
                {/* <!-- Main Menu --> */}
                <nav className="main-menu navbar-expand-lg ms-lg-auto">
                  <div className="navbar-header">
                    <div className="mobile-logo py-15">
                      <Link href="/">
                        <a>
                          <Image src={logo} alt="logo" />
                        </a>
                      </Link>
                    </div>

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
                      scrollTargetIds={["home", "action", "sellers", "collection", "categories", "testimonial", "news"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="100"
                      headerBackground="true"
                    > <ul className="navigation onepage clearfix nine">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#action">Action</a></li>
                        <li><a href="#sellers">sellers</a></li>
                        <li><a href="#collection">collection</a></li>
                        <li><a href="#categories">categories</a></li>
                        <li><a href="#testimonial">testimonial</a></li>
                        <li><a href="#news">news</a></li>
                      </ul>
                    </ScrollspyNav>}

                  </div>

                </nav>
                {/* <!-- Main Menu End--> */}

                {/* <!-- Menu Btns --> */}
                <div className="menu-icons">
                  {/* <!-- Nav Search --> */}
                  <div className="nav-search mx-15">
                    <button className="fa fa-search" onClick={() => setShowSearch(!showSearch)}></button>
                    <form className={`${showSearch ? '' : 'hide'}`}>
                      <input type="text" placeholder="Search" className="searchbox" required="" />
                      <button type="submit" className="searchbutton fa fa-search"></button>
                    </form>
                  </div>

                  <button>
                    <i className="fas fa-shopping-bag"></i>
                    <span className="number">0</span>
                  </button>
                </div>
                {/* <!-- Menu Button --> */}
                <div className="menu-btn">
                  <a href="#" className="theme-btn gradient-btn-one">wallet connect</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} home_nine={true} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "action", "sellers", "collection", "categories", "testimonial", "news"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix nine">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#action">Action</a></li>
          <li onClick={handleClick}><a href="#sellers">sellers</a></li>
          <li onClick={handleClick}><a href="#collection">collection</a></li>
          <li onClick={handleClick}><a href="#categories">categories</a></li>
          <li onClick={handleClick}><a href="#testimonial">testimonial</a></li>
          <li onClick={handleClick}><a href="#news">news</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderNine;