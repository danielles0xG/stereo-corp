import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import AboutArea from "../../homes/multipage/home-3/about-area";
import Contact from "../../homes/multipage/home-3/contact-area";
import WorkProgress from "../../homes/multipage/home-3/work-progress";
import Testimonial from "../../homes/multipage/home-7/testimonial";


export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Testimonial Four'} subtitle={'Testimonial Four'} />
      <Testimonial test_p_4={true} />
      <AboutArea padd={'rpt-100 pb-240 rpb-150'}/>
      <WorkProgress/>
      <Contact df={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
