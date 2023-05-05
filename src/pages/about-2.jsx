import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutTwoMain from '../components/about-pages/about-2';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutTwoMain />
    </Wrapper>
  )
}
