import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeThreeOnePageMain from '../components/homes/one-page/home-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three Landing Page'} />
      <HomeThreeOnePageMain/>
    </Wrapper>
  )
}
