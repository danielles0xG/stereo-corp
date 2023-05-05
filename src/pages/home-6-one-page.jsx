import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeSixOnePageMain from '../components/homes/one-page/home-6';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Six Landing Page'} />
      <HomeSixOnePageMain />
    </Wrapper>
  )
}
