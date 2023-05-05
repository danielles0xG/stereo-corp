import FooterSix from '../../../../layout/footers/footer-6';
import HeaderSix from '../../../../layout/headers/header-6';
import AboutSection from '../../multipage/home-6/about-section';
import CallToAction from '../../multipage/home-6/call-to-action';
import CounterArea from '../../multipage/home-6/counter-area';
import Customization from '../../multipage/home-6/customization';
import HeroArea from '../../multipage/home-6/hero-area';
import LogoArea from '../../multipage/home-6/logo-area';
import PricingSection from '../../multipage/home-6/pricing-section';
import SubscribeArea from '../../multipage/home-6/subscribe-area';
import TeamSection from '../../multipage/home-6/team-section';
import Testimonial from '../../multipage/home-6/testimonial';
import WhatWeDo from '../../multipage/home-6/what-we-do';

const index = () => {
  return (
    <div className='page-wrapper home-six'>
      <HeaderSix onePage={true} />
      <HeroArea/>
      <WhatWeDo/>
      <AboutSection/>
      <CallToAction/>
      <LogoArea/>
      <Customization/>
      <TeamSection/>
      <PricingSection/>
      <CounterArea/>
      <Testimonial/>
      <SubscribeArea/>
      <FooterSix/>
    </div>
  );
};

export default index;