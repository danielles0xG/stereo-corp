import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeEightMain from '../components/homes/multipage/home-8';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Eight'} />
      <HomeEightMain/>
    </Wrapper>
  );
};

export default index;