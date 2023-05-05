import FooterTwo from "../../../../layout/footers/footer-2";
import HeaderTwo from "../../../../layout/headers/header-2";
import AboutSection from "../../multipage/home-2/about-section";
import BlogArea from "../../multipage/home-2/blog-area";
import GallerySection from "../../multipage/home-2/gallery-section";
import HeroArea from "../../multipage/home-2/hero-area";
import LogoSection from "../../multipage/home-2/logo-section";
import ServicesContact from "../../multipage/home-2/ser-contact";
import Services from "../../multipage/home-2/services";
import ServicesTwo from "../../multipage/home-2/services-2";
import SmServices from "../../multipage/home-2/sm-services";
import Subscribe from "../../multipage/home-2/subscribe";
import TeamSection from "../../multipage/home-2/team-section";

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderTwo onePage={true} />
      <HeroArea/>
      <SmServices/>
      <AboutSection/>
      <LogoSection/>
      <Services/>
      <ServicesContact/>
      <TeamSection/>
      <ServicesTwo/>
      <Subscribe/>
      <GallerySection/>
      <BlogArea/>
      <FooterTwo/>
    </div>
  );
};

export default index;