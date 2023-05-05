import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TestimonialFourMain from '../components/testimonials/testimonial-4';

export default function testimonial() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonial Four'} />
      <TestimonialFourMain/>
    </Wrapper>
  )
}
