import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesSevenMain from '../components/services/services-7';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <ServicesSevenMain/>
    </Wrapper>
  )
}
