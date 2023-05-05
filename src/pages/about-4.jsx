import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutFourMain from '../components/about-pages/about-4';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutFourMain />
    </Wrapper>
  )
}
