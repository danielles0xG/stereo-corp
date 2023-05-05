import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import SEO from "../../components/seo";
import ServicesDetailsArea from "../../components/service-details/services-details-area";
import { services } from "../../data";
import FooterTwo from "../../layout/footers/footer-2";
import HeaderThree from "../../layout/headers/header-3";
import Wrapper from "../../layout/wrapper";


export default function ServiceDetails() {
  const [serviceItem, setServiceItem] = useState({})
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!id) {

    }
    else {
      setServiceItem(services.find(ser => Number(ser.id) === Number(id)))
    }
  }, [id])
  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={serviceItem?.title ? serviceItem?.title : 'Service Details'} subtitle={'Service Details'} />
        <ServicesDetailsArea item={serviceItem} />
        <FooterTwo />
      </div>
    </Wrapper>
  )
}
