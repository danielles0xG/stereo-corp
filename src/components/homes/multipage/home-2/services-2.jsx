import Link from 'next/link';
import { services } from '../../../../data';

const ServicesTwo = () => {
  return (
    <>
      <section className="work-progress-two" id="work-progress">
        <div className="container">
          <div className="work-progress-inner-two">
            <div className="row justify-content-center">
              {services.slice(20, 23).map((ser, i) => (
                <div key={ser.id} className="col-lg-4 col-sm-6">
                  <div className="progress-item-two">
                    <div className="icon">
                      <i className={ser.icon}></i>
                    </div>
                    <h3>{ser.title}</h3>
                    <p>{ser.desc}</p>
                    <Link href={`/service-details/${ser.id}`}>
                      <a className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
                    </Link>
                    <span className="progress-step">0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTwo;