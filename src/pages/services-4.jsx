import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesFourMain from '../components/services/services-4';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services Four'} />
      <ServicesFourMain/>
    </Wrapper>
  )
}
