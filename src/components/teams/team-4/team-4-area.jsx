import Link from 'next/link';

import { teamData } from '../../../data';

const TeamFourArea = () => {
  const teams = teamData.filter(t => t.team_P_4);
  return (
    <section className="team-section bg-lighter text-center pt-115 rpt-95 pb-200 rpb-70">
      <div className="container">
        <div className="section-title mb-55">
          <span className="sub-title">Export Team</span>
          <h2>Meet our colleague</h2>
        </div>
        <div className="row">
          {teams.map((t, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="team-member-four">
                <div className="image">
                  <img src={t.img} alt="Team Member" />
                  <div className="social-style-two">
                    {t.social_links.map((social, i) => (
                      <a key={i} href={social.link} target={social.target ? social.target : ''}>
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="member-designation">
                  <h5>
                    <Link href={`/team-single/${t.id}`}>
                      <a>{t.name}</a>
                    </Link>
                  </h5>
                  <span>{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamFourArea;