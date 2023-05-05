import HeaderSeven from '../../../../layout/headers/header-7';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import CallToAction from './call-to-action';
import FaqArea from './faq-area';
import FooterSeven from '../../../../layout/footers/footer-7';
import HeroSection from './hero-section';
import PricingArea from './pricing-area';
import Services from './services';
import SolutionPlace from './solution-place';
import Testimonial from './testimonial';
import BackToTopCom from '../../../common/back-to-top-com';

const index = () => {
  return (
    <div className='page-wrapper home-seven'>
      <HeaderSeven/>
      <HeroSection/>
      <AboutSection/>
      <Services/>
      <SolutionPlace/>
      <FaqArea/>
      <PricingArea/>
      <Testimonial/>
      <BlogSection/>
      <CallToAction/>
      <FooterSeven/>
      <BackToTopCom/>
    </div>
  );
};

export default index;