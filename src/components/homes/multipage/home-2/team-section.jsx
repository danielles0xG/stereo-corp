import Link from 'next/link';

import { teamData } from '../../../../data';

const team_content = {
  subtitle: 'Team Members',
  title: 'Our Awesome Team'
}
const { subtitle, title } = team_content;

const TeamSection = ({ team_p = false, style_two = false }) => {
  return (
    <>
      <section className={`team-section ${team_p ? 'pt-115 pb-240 rpt-95 pb-60 rpb-40'
        : 'pt-115 rpt-95 pb-60 rpb-40'}`} id="team">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {teamData.slice(0, 4).map((team, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className={`team-member ${style_two ? 'style-two text-white' : ''}`}>
                  <div className="image">
                    <img src={team.img} alt="Team Member" />
                  </div>
                  <div className="member-designation">
                    <h5>
                      <Link href={`/team-single/${team.id}`}>
                        <a>{team.name}</a>
                      </Link>
                    </h5>
                    <span>{team.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;