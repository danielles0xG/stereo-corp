import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import SEO from '../../components/seo';
import ShopDetailsArea from '../../components/shop-details/details-area';
import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Wrapper from '../../layout/wrapper';
import { selectProduct, single_product } from '../../redux/features/product-slice';

export default function ShopDetails() {
  const router = useRouter();
  const id = router.query.id;
  const product = useSelector(selectProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!id) {

    }
    else {
      dispatch(single_product(id))
    }
  }, [id, dispatch])

  return (
    <Wrapper>
      <SEO pageTitle={'Shop Details'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={product?.title ? product?.title : 'Shop Details'} subtitle={'Shop Details'} />
        <ShopDetailsArea product={product} />
        <FooterTwo />
      </div>
    </Wrapper>
  )
}
