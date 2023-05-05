import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingThreeMain from '../components/pricings/pricing-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Three'} />
      <PricingThreeMain/>
    </Wrapper>
  )
}
