import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ShopMain from '../components/shop'

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <ShopMain/>
    </Wrapper>
  )
}
