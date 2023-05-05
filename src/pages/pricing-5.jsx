import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingFiveMain from '../components/pricings/pricing-5';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Five'} />
      <PricingFiveMain/>
    </Wrapper>
  )
}
