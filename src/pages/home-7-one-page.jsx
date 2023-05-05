import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeSevenOnePageMain from '../components/homes/one-page/home-7';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Seven Landing Page'} />
      <HomeSevenOnePageMain />
    </Wrapper>
  )
}
