import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeThreeMain from '../components/homes/multipage/home-3';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three'} />
      <HomeThreeMain/>
    </Wrapper>
  );
};

export default index;