import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TeamFourMain from '../components/teams/team-4'

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team Four'} />
      <TeamFourMain />
    </Wrapper>
  )
}
