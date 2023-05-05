import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogMain from '../components/blog/blog-standard';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog'} />
      <BlogMain/>
    </Wrapper>
  )
}
