import FooterNine from '../../../../layout/footers/footer-9';
import HeaderNine from '../../../../layout/headers/header-9';
import HeroArea from '../../multipage/home-9/hero-area';
import CallAction from '../../multipage/home-9/call-action';
import CollectionArea from '../../multipage/home-9/collection-area';
import Creators from '../../multipage/home-9/creators';
import LatestBlog from '../../multipage/home-9/latest-blog';
import LiveAuctions from '../../multipage/home-9/live-auctions';
import PopularCollection from '../../multipage/home-9/popular-collection';
import Testimonial from '../../multipage/home-9/testimonial';
import WorkProgress from '../../multipage/home-9/work-progress';

const index = () => {
  return (
    <div className='home-nine page-wrapper text-white'>
      <HeaderNine onePage={true} />
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
    </div>
  );
};

export default index;