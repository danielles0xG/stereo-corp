import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeNineMain from '../components/homes/multipage/home-9';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Nine'} />
      <HomeNineMain/>
    </Wrapper>
  );
};

export default index;