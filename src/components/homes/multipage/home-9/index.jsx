import React from 'react';
import FooterNine from '../../../../layout/footers/footer-9';
import HeaderNine from '../../../../layout/headers/header-9';
import BackToTopCom from '../../../common/back-to-top-com';
import CallAction from './call-action';
import CollectionArea from './collection-area';
import Creators from './creators';
import HeroArea from './hero-area';
import LatestBlog from './latest-blog';
import LiveAuctions from './live-auctions';
import PopularCollection from './popular-collection';
import Testimonial from './testimonial';
import WorkProgress from './work-progress';

const index = () => {
  return (
    <div className='home-nine page-wrapper text-white'>
      <HeaderNine/>
      <HeroArea/>
      <LiveAuctions/>
      <Creators/>
      <CollectionArea/>
      <WorkProgress/>
      <PopularCollection/>
      <CallAction/>
      <Testimonial/>
      <LatestBlog/>
      <FooterNine/>
      <BackToTopCom/>
    </div>
  );
};

export default index;