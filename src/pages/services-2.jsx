import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesTwoMain from '../components/services/services-2';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services Two'} />
      <ServicesTwoMain/>
    </Wrapper>
  )
}
