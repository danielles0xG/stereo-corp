import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeSevenMain from '../components/homes/multipage/home-7';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Seven'} />
      <HomeSevenMain/>
    </Wrapper>
  );
};

export default index;