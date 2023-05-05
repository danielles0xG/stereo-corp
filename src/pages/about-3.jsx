import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutThreeMain from '../components/about-pages/about-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutThreeMain />
    </Wrapper>
  )
}
