import FooterEight from '../../../../layout/footers/footer-8';
import HeaderEight from '../../../../layout/headers/header-8';
import BlogArea from '../../multipage/home-8/blog-area';
import CallToAction from '../../multipage/home-8/call-to-action';
import CounterSection from '../../multipage/home-8/counter-section';
import FeatureAbout from '../../multipage/home-8/feature-about';
import HeroSlider from '../../multipage/home-8/hero-slider';
import ProjectSection from '../../multipage/home-8/project-section';
import ProtectReadyArea from '../../multipage/home-8/protect-ready-area';
import ServicesArea from '../../multipage/home-8/services-area';
import TestimonialArea from '../../multipage/home-8/testimonial-area';

const index = () => {
  return (
    <div className='page-wrapper home-eight'>
      <HeaderEight onePage={true} />
      <HeroSlider/>
      <FeatureAbout/>
      <ServicesArea/>
      <CounterSection/>
      <ProtectReadyArea/>
      <ProjectSection/>
      <TestimonialArea/>
      <BlogArea/>
      <CallToAction/>
      <FooterEight/>
    </div>
  );
};

export default index;