import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import ShopArea from './shop-area';

export default function index() {
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Shop'} subtitle={'products'} />
      <ShopArea/>
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
