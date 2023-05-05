import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../breadcrumb/breadcrumb';
import FooterTwo from '../../layout/footers/footer-2';
import { teamData } from '../../data';
import TeamSingle from './team-single';
import BackToTopCom from '../common/back-to-top-com';

const index = () => {
  const team = teamData[1]
  console.log(team);
  return (
    <div className='page-wrapper'>
      <HeaderThree />
      <Breadcrumb title={'Team Details'} subtitle={'Team Details'} />
      <TeamSingle team={team} />
      <FooterTwo />
      <BackToTopCom/>
    </div>
  );
};

export default index;