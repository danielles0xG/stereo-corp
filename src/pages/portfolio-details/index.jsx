import SEO from '../../components/seo';
import Wrapper from '../../layout/wrapper';
import PortfolioDetailsMain from '../../components/portfolio-details';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <PortfolioDetailsMain/>
    </Wrapper>
  )
}
