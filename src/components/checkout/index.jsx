import React from 'react';
import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import CheckoutArea from './checkout-area';
import CouponArea from './coupon-area';


const index = () => {
  return (
    <>
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={'Checkout'} subtitle={'Checkout'} />
        <CouponArea />
        <CheckoutArea />
        <FooterTwo />
        <BackToTopCom />
      </div>
    </>
  );
};

export default index;