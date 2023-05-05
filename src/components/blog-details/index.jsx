import React from 'react';
import { blogData } from '../../data';
import FooterTwo from '../../layout/footers/footer-2';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import BackToTopCom from '../common/back-to-top-com';
import BlogDetailsArea from './blog-details-area';

export default function index() {
  const blogItem = blogData.filter(b => b.blog_standard)[0]
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Blog Details'} subtitle={'Blog Details'} />
      <BlogDetailsArea item={blogItem} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  )
}
