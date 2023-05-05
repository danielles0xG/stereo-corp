import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import ContactSection from './contact-section';
import Map from './map';

const index = () => {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Contact Us'} subtitle={'Contact'} />
      <ContactSection/>
      <Map/>
      <FooterTwo />
      <BackToTopCom/>
    </div>
  );
};

export default index;