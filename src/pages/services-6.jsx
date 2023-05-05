import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesSixMain from '../components/services/services-6';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <ServicesSixMain/>
    </Wrapper>
  )
}
