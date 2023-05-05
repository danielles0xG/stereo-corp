import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CounterMain from '../components/all-counters';

export default function counter() {
  return (
    <Wrapper>
      <SEO pageTitle={'Counter'} />
      <CounterMain/>
    </Wrapper>
  )
}
