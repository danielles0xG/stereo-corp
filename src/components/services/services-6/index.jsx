import FooterTwo from '../../../layout/footers/footer-2';
import HeaderThree from '../../../layout/headers/header-3';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import BackToTopCom from '../../common/back-to-top-com';
import Contact from '../../homes/multipage/home-3/contact-area';
import WhatWeDo from '../../homes/multipage/home-6/what-we-do';
import PricingArea from '../../homes/multipage/home/pricing-area';
import SerWorkProgress from '../services/s-work-progress';

export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Services Six'} subtitle={'Services Six'} />
      <WhatWeDo/>
      <SerWorkProgress />
      <PricingArea s_page={true} />
      <Contact df={true} s_page={true} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
