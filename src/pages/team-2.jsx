import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TeamTwoMain from '../components/teams/team-2';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Two'} />
      <TeamTwoMain/>
    </Wrapper>
  )
}
