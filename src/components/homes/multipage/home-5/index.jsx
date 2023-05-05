import React from 'react';
import FooterFive from '../../../../layout/footers/footer-5';
import HeaderFive from '../../../../layout/headers/header-5';
import BackToTopCom from '../../../common/back-to-top-com';
import AboutTwo from './about-2';
import AboutSection from './about-section';
import CallToAction from './call-to-action';
import CaseStudies from './case-studies';
import FactCounter from './fact-counter';
import HeroArea from './hero-area';
import LogoSection from './logo-section';
import NewsSection from './news-section';
import PricingSection from './pricing-section';
import ServiceContact from './ser-contact';
import Testimonial from './testimonial';
import WhatWeAre from './what-we-are';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderFive/>
      <HeroArea/>
      <CallToAction/>
      <AboutSection/>
      <WhatWeAre/>
      <FactCounter/>
      <AboutTwo/>
      <CaseStudies/>
      <ServiceContact/>
      <Testimonial/>
      <PricingSection/>
      <NewsSection/>
      <LogoSection/>
      <FooterFive/>
      <BackToTopCom/>
    </div>
  );
};

export default index;