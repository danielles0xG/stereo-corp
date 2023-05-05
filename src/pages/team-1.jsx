import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import TeamOneMain from '../components/teams/team';

export default function TeamOne() {
  return (
    <Wrapper>
      <SEO pageTitle={'Team'} />
      <TeamOneMain/>
    </Wrapper>
  )
}
