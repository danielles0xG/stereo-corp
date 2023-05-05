import FooterSeven from '../../../../layout/footers/footer-7';
import HeaderSeven from '../../../../layout/headers/header-7';
import AboutSection from '../../multipage/home-7/about-section';
import BlogSection from '../../multipage/home-7/blog-section';
import CallToAction from '../../multipage/home-7/call-to-action';
import FaqArea from '../../multipage/home-7/faq-area';
import HeroSection from '../../multipage/home-7/hero-section';
import PricingArea from '../../multipage/home-7/pricing-area';
import Services from '../../multipage/home-7/services';
import SolutionPlace from '../../multipage/home-7/solution-place';
import Testimonial from '../../multipage/home-7/testimonial';

const index = () => {
  return (
    <div className='page-wrapper home-seven'>
      <HeaderSeven onePage={true} />
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
    </div>
  );
};

export default index;