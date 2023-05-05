import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeNineOnePageMain from '../components/homes/one-page/home-9';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Eight Landing Page'} />
      <HomeNineOnePageMain />
    </Wrapper>
  )
}
