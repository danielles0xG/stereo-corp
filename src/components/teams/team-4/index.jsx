import FooterTwo from "../../../layout/footers/footer-2";
import HeaderThree from "../../../layout/headers/header-3";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import BackToTopCom from "../../common/back-to-top-com";
import Contact from "../../homes/multipage/home-3/contact-area";
import TestimonialArea from "../../homes/multipage/home-3/testimonial-area";
import WorkProgress from "../../homes/multipage/home-3/work-progress";
import TeamFourArea from "./team-4-area";



export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Team Four'} subtitle={'Team Four'} />
      <TeamFourArea />
      <WorkProgress />
      <TestimonialArea />
      <Contact df={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
