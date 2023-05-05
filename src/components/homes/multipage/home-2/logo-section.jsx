import Brands from "../../../brands/brands";

const LogoSection = () => {
  return (
    <>
      <div className="logo-section bg-lighter py-120 rpy-100" id="client">
        <div className="container">
          <div className="logo-carousel-wrap">
            {/* brands start */}
            <Brands />
            {/* brands end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSection;