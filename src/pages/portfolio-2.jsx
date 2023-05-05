import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PortfolioTwoMain from '../components/portfolios/portfolio-2';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Two'} />
      <PortfolioTwoMain/>
    </Wrapper>
  )
}
