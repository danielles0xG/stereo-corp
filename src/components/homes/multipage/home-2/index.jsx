import HeroArea from './hero-area';
import FooterTwo from '../../../../layout/footers/footer-2';
import HeaderTwo from '../../../../layout/headers/header-2';
import AboutSection from './about-section';
import BlogArea from './blog-area';
import GallerySection from './gallery-section';
import LogoSection from './logo-section';
import ServicesContact from './ser-contact';
import Services from './services';
import ServicesTwo from './services-2';
import SmServices from './sm-services';
import Subscribe from './subscribe';
import TeamSection from './team-section';
import BackToTopCom from '../../../common/back-to-top-com';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderTwo/>
      <HeroArea/>
      <SmServices/>
      <AboutSection/>
      <LogoSection/>
      <Services/>
      <ServicesContact/>
      <TeamSection/>
      <ServicesTwo/>
      <Subscribe/>
      <GallerySection/>
      <BlogArea/>
      <FooterTwo/>
      <BackToTopCom/>
    </div>
  );
};

export default index;