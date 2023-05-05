import FooterThree from '../../../../layout/footers/footer-3';
import HeaderThree from '../../../../layout/headers/header-3';
import AboutArea from '../../multipage/home-3/about-area';
import BlogArea from '../../multipage/home-3/blog-area';
import Contact from '../../multipage/home-3/contact-area';
import GallerySection from '../../multipage/home-3/gallery-section';
import HeroArea from '../../multipage/home-3/hero-area';
import PricingArea from '../../multipage/home-3/pricing-area';
import Services from '../../multipage/home-3/services';
import SubscribeArea from '../../multipage/home-3/subscribe-area';
import TeamArea from '../../multipage/home-3/team-area';
import TestimonialArea from '../../multipage/home-3/testimonial-area';
import WorkProgress from '../../multipage/home-3/work-progress';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderThree onePage={true} />
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
    </div>
  );
};

export default index;