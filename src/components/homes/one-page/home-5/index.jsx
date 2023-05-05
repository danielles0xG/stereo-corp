import FooterFive from '../../../../layout/footers/footer-5';
import HeaderFive from '../../../../layout/headers/header-5';
import AboutTwo from '../../multipage/home-5/about-2';
import AboutSection from '../../multipage/home-5/about-section';
import CallToAction from '../../multipage/home-5/call-to-action';
import CaseStudies from '../../multipage/home-5/case-studies';
import FactCounter from '../../multipage/home-5/fact-counter';
import HeroArea from '../../multipage/home-5/hero-area';
import LogoSection from '../../multipage/home-5/logo-section';
import NewsSection from '../../multipage/home-5/news-section';
import PricingSection from '../../multipage/home-5/pricing-section';
import ServiceContact from '../../multipage/home-5/ser-contact';
import Testimonial from '../../multipage/home-5/testimonial';
import WhatWeAre from '../../multipage/home-5/what-we-are';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderFive onePage={true} />
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
    </div>
  );
};

export default index;