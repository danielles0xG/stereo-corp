import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeFourOnePageMain from '../components/homes/one-page/home-4';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Four Landing Page'} />
      <HomeFourOnePageMain/>
    </Wrapper>
  )
}
