import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeTwoOnePageMain from '../components/homes/one-page/home-2';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two Landing Page'} />
      <HomeTwoOnePageMain/>
    </Wrapper>
  );
};

export default index;