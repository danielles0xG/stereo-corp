import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeTwoMain from '../components/homes/multipage/home-2';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two'} />
      <HomeTwoMain/>
    </Wrapper>
  );
};

export default index;