import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutMain from '../components/about-pages/about';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutMain />
    </Wrapper>
  )
}
