import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingMain from '../components/pricings/pricing';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing'} />
      <PricingMain/>
    </Wrapper>
  )
}
