import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import PricingSixMain from '../components/pricings/pricing-6';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing Six'} />
      <PricingSixMain/>
    </Wrapper>
  )
}
