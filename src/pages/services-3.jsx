import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServicesThreeMain from '../components/services/services-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Services Three'} />
      <ServicesThreeMain/>
    </Wrapper>
  )
}
