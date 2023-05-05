import React from 'react';
import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import CartArea from './cart-area';

const index = () => {
  return (
    <div className='page-wrapper'>
    <HeaderThree />
    <Breadcrumb title={'Your Cart'} subtitle={'Cart'} />
    <CartArea/>
    <FooterTwo />
    <BackToTopCom/>
  </div>
  );
};

export default index;