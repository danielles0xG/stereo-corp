import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingTwoMain from '../components/pricings/pricing-2';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Two'} />
      <PricingTwoMain/>
    </Wrapper>
  )
}
