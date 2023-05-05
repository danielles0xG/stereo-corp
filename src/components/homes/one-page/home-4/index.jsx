import FooterFour from '../../../../layout/footers/footer-4';
import HeaderFour from '../../../../layout/headers/header-4';
import AboutArea from '../../multipage/home-4/about-area';
import AboutTabSection from '../../multipage/home-4/about-tab-section';
import BlogArea from '../../multipage/home-4/blog-area';
import GallerySection from '../../multipage/home-4/gallery-section';
import HeroArea from '../../multipage/home-4/hero-area';
import PricingArea from '../../multipage/home-4/pricing-area';
import Services from '../../multipage/home-4/services';
import TeamArea from '../../multipage/home-4/team-area';
import WorkProgress from '../../multipage/home-4/work-progress';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderFour onePage={true}/>
      <HeroArea/>
      <Services/>
      <AboutArea/>
      <AboutTabSection/>
      <GallerySection/>
      <TeamArea/>
      <WorkProgress/>
      <PricingArea/>
      <BlogArea/>
      <FooterFour/>
    </div>
  );
};

export default index;