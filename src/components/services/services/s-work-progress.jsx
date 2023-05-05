import { services } from '../../../data';
import { ServiceItem } from '../../homes/multipage/home-3/work-progress';

export default function SerWorkProgress() {
  return (
    <>
      <section className="work-progress-three bg-blue text-white pt-115 rpt-95 pb-85 rpb-65"
        style={{ backgroundImage: `url(/assets/images/background/progress.png)` }}>
        <div className="container">
          <div className="section-title text-center mb-35">
            <span className="sub-title">How We Do</span>
            <h2>Custom IT Solutions <br />for Your Business</h2>
          </div>
          <div className="work-progress-inner-three">
            <div className="row justify-content-center">
              {services.slice(26, 29).map((ser, i) => (
                <ServiceItem key={i} ser={ser} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
