import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';

export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <ContactMain/>
    </Wrapper>
  )
}
