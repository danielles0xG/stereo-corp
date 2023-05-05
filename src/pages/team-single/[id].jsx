import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { teamData } from '../../data';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import HeaderThree from '../../layout/headers/header-3';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import TeamSingle from '../../components/team-details/team-single';
import FooterTwo from '../../layout/footers/footer-2';

const TeamDetails = () => {
  const [team, setTeam] = useState({})
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {

    }
    else {
      setTeam(teamData.find(item => Number(item.id) === Number(id)))
    }
  }, [id])

  return (
    <Wrapper>
      <SEO pageTitle={'Team Details'} />
      <div className='page-wrapper'>
        <HeaderThree />
        <Breadcrumb title={team?.name ? team?.name : 'Team Details'} subtitle={'Team Details'} />
        <TeamSingle team={team} />
        <FooterTwo />
      </div>
    </Wrapper>
  );
};

export default TeamDetails;