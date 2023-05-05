import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PortfolioFourMain from '../components/portfolios/portfolio-4';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Four'} />
      <PortfolioFourMain/>
    </Wrapper>
  )
}
