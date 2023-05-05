import React from 'react';
import { useSelector } from 'react-redux';
import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import { selectProducts } from '../../redux/features/product-slice';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import ShopDetailsArea from './details-area';

export default function Index() {
  const product = useSelector(selectProducts)[0];
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Shop Details'} subtitle={'Shop Details'} />
      <ShopDetailsArea product={product} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
