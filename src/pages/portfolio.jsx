import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PortfolioMain from '../components/portfolios/portfolio';

export default function Portfolio() {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio'} />
      <PortfolioMain/>
    </Wrapper>
  )
}
