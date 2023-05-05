import Footer from "../../../../layout/footers/footer";
import Header from "../../../../layout/headers/header";
import AboutSection from "../../multipage/home/about-section";
import Blogs from "../../multipage/home/blogs";
import FeatureServices from "../../multipage/home/f-services";
import GalleryArea from "../../multipage/home/gallery-area";
import HeroArea from "../../multipage/home/hero-area";
import PricingArea from "../../multipage/home/pricing-area";
import Services from "../../multipage/home/services";
import WorkProgress from "../../multipage/home/work-progress";



const index = () => {
  return (
    <div className="page-wrapper">
      <Header single_page={true} />
      <HeroArea/>
      <FeatureServices/>
      <AboutSection/>
      <Services/>
      <WorkProgress/>
      <PricingArea/>
      <GalleryArea/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default index;