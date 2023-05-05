import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TestimonialMain from '../components/testimonials/testimonial';

export default function testimonial() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonial'} />
      <TestimonialMain/>
    </Wrapper>
  )
}
