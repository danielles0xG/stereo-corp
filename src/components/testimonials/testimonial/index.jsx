import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import AboutArea from "../../homes/multipage/home-3/about-area";
import Contact from "../../homes/multipage/home-3/contact-area";
import TestimonialArea from "../../homes/multipage/home-3/testimonial-area";
import WorkProgress from "../../homes/multipage/home-3/work-progress";


export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Testimonial'} subtitle={'Testimonial'} />
      <TestimonialArea />
      <AboutArea padd={'pt-120 rpt-100 pb-240 rpb-150'}/>
      <WorkProgress/>
      <Contact df={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
