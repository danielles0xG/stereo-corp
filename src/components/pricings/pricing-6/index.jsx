import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import Contact from "../../homes/multipage/home-3/contact-area";
import TestimonialArea from "../../homes/multipage/home-3/testimonial-area";
import PricingArea from "../../homes/multipage/home-7/pricing-area";

export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Pricing Six'} subtitle={'Pricing Six'} />
      <PricingArea pricing_p_6={true} />
      <TestimonialArea />
      <Contact df={true} />
      <FooterTwo/>
      <BackToTopCom/>
    </div>
  )
}
