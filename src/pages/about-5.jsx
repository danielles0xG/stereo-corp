import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutFiveMain from '../components/about-pages/about-5';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutFiveMain />
    </Wrapper>
  )
}
