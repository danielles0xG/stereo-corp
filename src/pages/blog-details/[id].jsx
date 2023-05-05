import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { blogData } from '../../data';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import BlogDetailsArea from '../../components/blog-details/blog-details-area';
import FooterTwo from '../../layout/footers/footer-2';

export default function BlogDetails() {
  const [blogItem, setBlogItem] = useState({})
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {

    }
    else {
      setBlogItem(blogData.find(item => Number(item.id) === Number(id)))
    }
  }, [id])
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={'Blog Details'} subtitle={'Blog Details'} />
        <BlogDetailsArea item={blogItem} />
        <FooterTwo />
      </div>
    </Wrapper>
  )
}
