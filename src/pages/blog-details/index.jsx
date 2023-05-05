import SEO from "../../components/seo";
import Wrapper from "../../layout/wrapper";
import BlogDetailsMain from '../../components/blog-details';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain/>
    </Wrapper>
  )
}
