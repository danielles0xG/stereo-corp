import Link from "next/link";
import { services } from "../../../../data";

const ser_content = {
  subtitle: 'What We Do',
  title: <>Preparing For Your Business Success <br />With IT Solution</>
}
const { subtitle, title } = ser_content;

const Services = () => {
  return (
    <>
      <section className="what-we-do bg-lighter pt-115 rpt-95 pb-90 rpb-70" id="services">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {services.slice(29, 32).map((ser, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <Link href={`/service-details/${ser.id}`}>
                    <a className="feature-btn">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </Link>
                  <div className="icon">
                    <i className={ser.icon}></i>
                  </div>
                  <div className="feature-content">
                    <h5>{ser.title}</h5>
                    <p>{ser.desc}</p>
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

export default Services;