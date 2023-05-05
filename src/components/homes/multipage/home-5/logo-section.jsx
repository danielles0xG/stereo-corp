import React from 'react';
import Brands from '../../../brands/brands';

const LogoSection = () => {

  return (
    <>
      <div className="client-logo-area">
        <div className="container">
          <hr />
          <div className="logo-carousel-wrap pt-65 pb-170">
            {/* brands start */}
            <Brands brand_2={true} />
            {/* brands end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSection;