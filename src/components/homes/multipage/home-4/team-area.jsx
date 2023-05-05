import Link from 'next/link';
import React from 'react';
import { teamData } from '../../../../data';

const team_content = {
  subtitle: 'Meet Our Team',
  title: 'Expert Team Member'
}

const { subtitle, title } = team_content;

const TeamArea = () => {
  const teams = teamData.filter(t => t.home_4);
  return (
    <>
      <section className="team-section-three pb-50 rpb-30" id="team">
        <div className="container">
          <div className="section-title-with-btn mb-60">
            <div className="section-title">
              <span className="sub-title">{subtitle}</span>
              <h2>{title}</h2>
            </div>
            <Link href={'/team-1'}>
              <a className="theme-btn style-two mt-15">view all member</a>
            </Link>
          </div>
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
    </>
  );
};

export default TeamArea;