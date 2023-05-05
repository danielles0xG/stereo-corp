import FooterTwo from '../../../layout/footers/footer-2';
import HeaderThree from '../../../layout/headers/header-3';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BackToTopCom from '../../common/back-to-top-com';
import Contact from '../../homes/multipage/home-3/contact-area';
import TestimonialArea from '../../homes/multipage/home-3/testimonial-area';
import AboutSection from '../../homes/multipage/home-6/about-section';


export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'About Us Six'} subtitle={'About Six'} />
      <AboutSection padd={'py-120 rpb-100'} />
      <TestimonialArea/>
      <Contact df={true} />
      <FooterTwo/>
      <BackToTopCom/>
    </div>
  )
}
