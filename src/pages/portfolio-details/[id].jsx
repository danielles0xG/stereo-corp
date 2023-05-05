import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import NextPrevPost from "../../components/portfolio-details/next-prev-post";
import PortfolioDetailsArea from "../../components/portfolio-details/portfolio-details-area";
import RelatedProjects from "../../components/portfolio-details/related-projects";
import SEO from "../../components/seo";
import { galleryData } from "../../data";
import FooterTwo from "../../layout/footers/footer-2";
import HeaderThree from "../../layout/headers/header-3";
import Wrapper from "../../layout/wrapper";

const PortfolioDetails = () => {
  const [portfolioItem, setPortfolioItem] = useState({})
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!id) {

    }
    else {
      setPortfolioItem(galleryData.find(item => Number(item.id) === Number(id)))
    }
  }, [id])

  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={portfolioItem?.title ? portfolioItem?.title : 'Portfolio Details'} subtitle={'Portfolio Details'} />
        <PortfolioDetailsArea item={portfolioItem} />
        <NextPrevPost />
        <RelatedProjects />
        <FooterTwo />
      </div>
    </Wrapper>
  );
};

export default PortfolioDetails;