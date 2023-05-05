import React from 'react';
import FooterSix from '../../../../layout/footers/footer-6';
import HeaderSix from '../../../../layout/headers/header-6';
import BackToTopCom from '../../../common/back-to-top-com';
import AboutSection from './about-section';
import CallToAction from './call-to-action';
import CounterArea from './counter-area';
import Customization from './customization';
import HeroArea from './hero-area';
import LogoArea from './logo-area';
import PricingSection from './pricing-section';
import SubscribeArea from './subscribe-area';
import TeamSection from './team-section';
import Testimonial from './testimonial';
import WhatWeDo from './what-we-do';

const index = () => {
  return (
    <div className='page-wrapper home-six'>
      <HeaderSix/>
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
      <BackToTopCom/>
    </div>
  );
};

export default index;