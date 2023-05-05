import Image from 'next/image';
import Link from 'next/link';
import ScrollspyNav from "react-scrollspy-nav";

import logo from '../../../public/assets/images/logos/logo.png';
import Drawer from '../../components/common/Drawer';
import useSticky from '../../hooks/use-sticky';
import useToggle from '../../hooks/useToggle';
import { SocialLinksOne } from '../social-links';
import NavMenus from './nav-menus';

const HeaderTwo = ({ onePage = false }) => {
  const { headerSticky } = useSticky();
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-two text-white bg-dark-blue ${headerSticky ? 'fixed-header' : ''}`}>
        <div className="logo-outer bg-dark-blue py-30 px-100 d-none d-lg-flex align-items-center">
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="header-wrap align-self-center">
          <div className="header-top py-10">
            <div className="top-left">
              <ul>
                <li>Call Us: <a href="callto:548978478">548978478</a></li>
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

          <div className="header-upper">
            <div className="container-fluid clearfix">
              <div className="header-inner d-flex align-items-center">
                <div className="nav-outer clearfix d-flex align-items-center">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header">
                      <div className="mobile-logo p-15">
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
                      {/* nav menu start */}
                      {!onePage && <NavMenus />}
                      {/* nav menu end */}

                      {onePage && <ScrollspyNav
                        scrollTargetIds={["home", "about", "services", "contact", "team", "gallery", "news"]}
                        offset={0}
                        activeNavClass="is-active"
                        scrollDuration="100"
                        headerBackground="true"
                      > <ul className="navigation onepage clearfix two">
                          <li><a href="#home" className='text-white'>Home</a></li>
                          <li><a href="#about" className='text-white'>about</a></li>
                          <li><a href="#services" className='text-white'>services</a></li>
                          <li><a href="#contact" className='text-white'>contact</a></li>
                          <li><a href="#team" className='text-white'>team</a></li>
                          <li><a href="#gallery" className='text-white'>gallery</a></li>
                          <li><a href="#news" className='text-white'>news</a></li>
                        </ul> </ScrollspyNav>}
                    </div>

                  </nav>

                  <div className="menu-btn">
                    <Link href="/contact">
                      <a className="theme-btn">meet with us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "about", "services", "contact", "team", "gallery", "news"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix two">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#contact">contact</a></li>
          <li onClick={handleClick}><a href="#team">team</a></li>
          <li onClick={handleClick}><a href="#gallery">gallery</a></li>
          <li onClick={handleClick}><a href="#news">news</a></li>
        </ul> </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderTwo;