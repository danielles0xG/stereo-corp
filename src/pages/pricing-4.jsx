import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingFourMain from '../components/pricings/pricing-4';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Four'} />
      <PricingFourMain/>
    </Wrapper>
  )
}
