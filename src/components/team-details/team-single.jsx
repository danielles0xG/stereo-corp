import React from 'react';
import { SocialLinksOne } from '../../layout/social-links';

const TeamSingle = ({ team }) => {
  return (
    <>
      <section className="team-profile py-120 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="team-profile-image rmb-45">
                <img src={team?.img} alt="Team Profile" className='w-100' />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-profile-content ml-40 rml-0">
                <h2 className="name">{team?.name}</h2>
                <span className="designation">{team?.title}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                <ul className="list-style-three pt-15 pb-30">
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                </ul>
                <h3>Explore Skills</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo</p>
                <div className="row my-30">
                  <div className="col-sm-6">
                    <div className="service-normal style-two">
                      <div className="icon">
                        <i className="flaticon flaticon-computer"></i>
                      </div>
                      <h6>Software Development</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-normal style-two">
                      <div className="icon">
                        <i className="flaticon flaticon-design-process"></i>
                      </div>
                      <h6>Machine Learning</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
                    </div>
                  </div>
                </div>
                <h3>Explore Skills</h3>
                <div className="social-style-two mt-15">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSingle;
