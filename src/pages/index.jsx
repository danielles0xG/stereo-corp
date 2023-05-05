import HomeMain from '../components/homes/multipage/home';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
      <HomeMain />
    </Wrapper>
  )
}
