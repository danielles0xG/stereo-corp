import FooterThree from '../../../../layout/footers/footer-3';
import HeaderThree from '../../../../layout/headers/header-3';
import BackToTopCom from '../../../common/back-to-top-com';
import AboutArea from './about-area';
import BlogArea from './blog-area';
import Contact from './contact-area';
import GallerySection from './gallery-section';
import HeroArea from './hero-area';
import PricingArea from './pricing-area';
import Services from './services';
import SubscribeArea from './subscribe-area';
import TeamArea from './team-area';
import TestimonialArea from './testimonial-area';
import WorkProgress from './work-progress';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <HeroArea/>
      <Services/>
      <WorkProgress/>
      <AboutArea/>
      <TeamArea/>
      <TestimonialArea/>
      <PricingArea/>
      <SubscribeArea/>
      <GallerySection/>
      <BlogArea/>
      <Contact/>
      <FooterThree/>
      <BackToTopCom/>
    </div>
  );
};

export default index;