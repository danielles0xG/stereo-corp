import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutSixMain from '../components/about-pages/about-6';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutSixMain />
    </Wrapper>
  )
}
