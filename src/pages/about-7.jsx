import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutSevenMain from '../components/about-pages/about-7';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutSevenMain />
    </Wrapper>
  )
}
