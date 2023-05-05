import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeEightOnePageMain from '../components/homes/one-page/home-8';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Eight Landing Page'} />
      <HomeEightOnePageMain />
    </Wrapper>
  )
}
