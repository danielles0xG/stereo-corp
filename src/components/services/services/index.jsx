import FooterTwo from '../../../layout/footers/footer-2';
import HeaderThree from '../../../layout/headers/header-3';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BackToTopCom from '../../common/back-to-top-com';
import Contact from '../../homes/multipage/home-3/contact-area';
import PricingArea from '../../homes/multipage/home/pricing-area';
import Services from '../../homes/multipage/home/services';
import SerWorkProgress from './s-work-progress';

export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Services'} subtitle={'Services'} />
      <Services s_padd={'pt-115 rpt-95'} />
      <SerWorkProgress />
      <PricingArea s_page={true} />
      <Contact df={true} s_page={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
