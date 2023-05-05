import Link from 'next/link';
import { teamData } from '../../../../data';

const team_content = {
  bg_img: '/assets/images/team/team-bg.jpg',
  subtitle: 'Team Members',
  title: 'Our Awesome Team',
}
const { bg_img, subtitle, title } = team_content;

const TeamArea = () => {
  return (
    <>
      <section className="team-section-two bgs-cover text-white pt-115 rpt-95 pb-90 rpb-70"
        style={{ backgroundImage: `url(${bg_img})` }} id="team">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {teamData.slice(0, 4).map((team, i) => (

              <div key={i} className="col-lg-3 col-sm-6">
                <div className="team-member style-two">
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

export default TeamArea;