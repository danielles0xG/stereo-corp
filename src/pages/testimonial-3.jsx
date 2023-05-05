import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TestimonialThreeMain from '../components/testimonials/testimonial-3';

export default function testimonial() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonial Three'} />
      <TestimonialThreeMain/>
    </Wrapper>
  )
}
