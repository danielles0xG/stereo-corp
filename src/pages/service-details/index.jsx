import SEO from '../../components/seo';
import Wrapper from '../../layout/wrapper';
import ServiceDetailsMain from '../../components/service-details';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <ServiceDetailsMain/>
    </Wrapper>
  )
}
