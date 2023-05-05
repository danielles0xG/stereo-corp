import SEO from '../../components/seo';
import Wrapper from '../../layout/wrapper';
import ShopDetailsMain from'../../components/shop-details';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop Details'} />
      <ShopDetailsMain/>
    </Wrapper>
  )
}
