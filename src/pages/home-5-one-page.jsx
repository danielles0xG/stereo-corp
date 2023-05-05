import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeFiveOnePageMain from '../components/homes/one-page/home-5';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Five Landing Page'} />
      <HomeFiveOnePageMain />
    </Wrapper>
  )
}
