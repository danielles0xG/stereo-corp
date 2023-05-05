import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesMain from '../components/services/services';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <ServicesMain/>
    </Wrapper>
  )
}
