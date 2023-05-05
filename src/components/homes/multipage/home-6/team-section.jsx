import Link from 'next/link';
import React from 'react';
import { teamData } from '../../../../data';

const team_contents = {
  subtitle: 'Expert Team',
  title: 'Meet our colleague',
}
const { subtitle, title } = team_contents;

const TeamSection = () => {
  const teams = teamData.filter(t => t.home_6);
  return (
    <>
      <section className="team-section bg-lighter text-center pt-115 rpt-95 pb-90 rpb-70" id="team">
        <div className="container">
          <div className="section-title mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row">
            {teams.map((team, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="team-member-four wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={team.img} alt="Team Member" />
                    <div className="social-style-two">
                      {team.social_links.map((social, i) => (
                        <a key={i} href={social.link} target={social.target ? social.target : ''}>
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
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