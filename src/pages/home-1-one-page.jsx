import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeOnaPageMain from '../components/homes/one-page/home-1';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Landing Page'} />
      <HomeOnaPageMain/>
    </Wrapper>
  );
};

export default index;