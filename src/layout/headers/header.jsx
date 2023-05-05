import Image from 'next/image';
import Link from 'next/link';
import ScrollspyNav from "react-scrollspy-nav";

import logo from '../../../public/assets/images/logos/logo.png';
import Drawer from '../../components/common/Drawer';
import useSticky from '../../hooks/use-sticky';
import useToggle from '../../hooks/useToggle';
import { SocialLinksOne } from '../social-links';
import NavMenus from './nav-menus';


const Header = ({ single_page = false }) => {
  const { headerSticky } = useSticky();
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-one ${headerSticky ? 'fixed-header' : ''}`}>
        <div className="header-top bg-lighter py-10">
          <div className="top-left">
            <ul>
              <li>Call Us: <a href="tel:548978478">548978478</a></li>
              <li>Email us: <a href="mailto:demo@example.com">demo@example.com</a></li>
              <li>Our address: 45 Dream street Austria</li>
            </ul>
          </div>
          <div className="top-right">
            <div className="office-time">
              <i className="far fa-clock"></i><span>08:00 am - 06:00 pm</span>
            </div>
            <div className="social-style-one">
              <SocialLinksOne />
            </div>
          </div>
        </div>

        {/* <!--Header-Upper--> */}
        <div className="header-upper bg-white">
          <div className="container-fluid clearfix">

            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer bg-blue py-30 px-85">
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
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-blue p-15">
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
                    {/* nav menu start */}
                    {!single_page && <NavMenus />}
                    {/* nav menu end */}
                    {single_page && <ScrollspyNav
                      scrollTargetIds={["home", "services", "about", "work-progress", "pricing", "news"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="100"
                      headerBackground="true"
                    > <ul className="navigation onepage clearfix">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#work-progress">work Step</a></li>
                        <li><a href="#pricing">pricing</a></li>
                        <li><a href="#news">news</a></li>
                      </ul> </ScrollspyNav>}
                  </div>

                </nav>
                {/* <!-- Main Menu End--> */}

                {/* <!-- Menu Button --> */}
                <div className="menu-btn">
                  <Link href="/contact">
                    <a className="theme-btn">meet with us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={single_page} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "services", "about", "work-progress", "pricing", "news"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#work-progress">work Step</a></li>
          <li onClick={handleClick}><a href="#pricing">pricing</a></li>
          <li onClick={handleClick}><a href="#news">news</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default Header;