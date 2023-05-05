import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesFiveMain from '../components/services/services-5';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services Five'} />
      <ServicesFiveMain/>
    </Wrapper>
  )
}
