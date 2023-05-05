import Footer from '../../../../layout/footers/footer';
import Header from '../../../../layout/headers/header';
import BackToTopCom from '../../../common/back-to-top-com';
import AboutSection from './about-section';
import Blogs from './blogs';
import FeatureServices from './f-services';
import GalleryArea from './gallery-area';
import HeroArea from './hero-area';
import PricingArea from './pricing-area';
import Services from './services';
import WorkProgress from './work-progress';

const index = () => {
  return (
    <div className="page-wrapper">
      <Header/>
      <HeroArea/>
      <FeatureServices/>
      <AboutSection/>
      <Services/>
      <WorkProgress/>
      <PricingArea/>
      <GalleryArea/>
      <Blogs/>
      <Footer/>
      <BackToTopCom/>
    </div>
  );
};

export default index;