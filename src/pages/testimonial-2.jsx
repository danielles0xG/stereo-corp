import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TestimonialTwoMain from '../components/testimonials/testimonial-2';

export default function testimonial() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonial Two'} />
      <TestimonialTwoMain/>
    </Wrapper>
  )
}
