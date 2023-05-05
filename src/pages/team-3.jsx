import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TeamThreeMain from '../components/teams/team-3';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Three'} />
      <TeamThreeMain/>
    </Wrapper>
  )
}
