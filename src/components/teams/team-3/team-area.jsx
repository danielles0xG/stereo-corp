import Link from 'next/link';
import { teamData } from '../../../data';

const TeamArea = () => {
  const teams = teamData.filter(t => t.team_P_3).reverse();
  return (
    <section className="team-section-three pt-100 pb-150 rpb-30">
      <div className="container">
        <div className="row">
          {teams.map((t, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <div className="team-member-three">
                <div className="image">
                  <img src={t.img} alt="Team Member" />
                </div>
                <div className="member-designation">
                  <h3>
                    <Link href={`/team-single/${t.id}`}>
                      <a>{t.name}</a>
                    </Link>
                  </h3>
                  <span>{t.title}</span>
                  <div className="social-style-one">
                    {t.social_links.map((social, i) => (
                      <a key={i} href={social.link} target={social.target ? social.target : ''}>
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;