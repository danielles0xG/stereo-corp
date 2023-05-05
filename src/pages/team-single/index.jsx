import SEO from "../../components/seo";
import Wrapper from "../../layout/wrapper";
import TeamDetailsMain from '../../components/team-details';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Details'} />
      <TeamDetailsMain />
    </Wrapper>
  )
}
