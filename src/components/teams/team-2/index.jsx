import FooterTwo from '../../../layout/footers/footer-2';
import HeaderThree from '../../../layout/headers/header-3';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BackToTopCom from '../../common/back-to-top-com';
import TeamSection from '../../homes/multipage/home-2/team-section';
import Contact from '../../homes/multipage/home-3/contact-area';
import TestimonialArea from '../../homes/multipage/home-3/testimonial-area';
import WorkProgress from '../../homes/multipage/home-3/work-progress';

export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Team Two'} subtitle={'Team Two'} />
      <TeamSection team_p={true} style_two={true} />
      <WorkProgress />
      <TestimonialArea />
      <Contact df={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
