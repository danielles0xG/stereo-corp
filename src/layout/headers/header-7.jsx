import Image from 'next/image';
import ScrollspyNav from 'react-scrollspy-nav';
import Link from 'next/link';

import useSticky from '../../hooks/use-sticky';
import logo from '../../../public/assets/images/logos/logo-black.png';
import NavMenus from './nav-menus';
import Drawer from '../../components/common/Drawer';
import useToggle from '../../hooks/useToggle';

const HeaderSeven = ({ onePage = false }) => {
  const { headerSticky } = useSticky();
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <>
      <header className={`main-header header-seven ${headerSticky ? 'fixed-header' : ''}`}>
        {/* <!--Header-Upper--> */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
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
                <nav className="main-menu navbar-expand-lg">
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
                      scrollTargetIds={["home", "about", "services", "faq", "pricing", "testimonial", "blog"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="100"
                      headerBackground="true"
                    > <ul className="navigation onepage clearfix">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#pricing">pricing</a></li>
                        <li><a href="#testimonial">testimonial</a></li>
                        <li><a href="#blog">blog</a></li>
                      </ul>
                    </ScrollspyNav>}
                  </div>

                </nav>
                {/* <!-- Main Menu End--> */}

                {/* <!-- Header Number --> */}
                <div className="header-number">
                  <i className="fas fa-phone-alt"></i>
                  <div className="number-content">
                    <span>Tell Us</span>
                    <a href="callto:+1223558656">+12 ) 235 - 586 - 56</a>
                  </div>
                </div>
                {/* <!-- Menu Button --> */}
                <div className="menu-btn">
                  <a href="#" className="theme-btn style-eight">Start Free Tral <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}
      </header>

      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} home_seven={true} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "about", "services", "faq", "pricing", "testimonial", "blog"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#faq">FAQs</a></li>
          <li onClick={handleClick}><a href="#pricing">pricing</a></li>
          <li onClick={handleClick}><a href="#testimonial">testimonial</a></li>
          <li onClick={handleClick}><a href="#blog">blog</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderSeven;