import React from 'react';
import FactCounter from '../fact-counter';
import CounterArea from '../homes/multipage/home-6/counter-area';
import CounterFour from '../homes/multipage/home-5/fact-counter';
import Counter from '../counter';

const counter_five_data = [
  { number: 12, title: 'Successful work', text: '+' },
  { number: 18, title: 'upgrade conversion', text: '%' },
  { number: 18, title: 'upgrade conversion', text: '%' },
]

export default function Counters() {
  return (
    <>
      {/* counter number one start */}
      <section className="counter-section pt-120 rpt-100 pb-90 rpb-70">
        <div className="container">
          {/* <!-- fact counter start --> */}
          <FactCounter />
          {/* <!-- end fact counter --> */}

          {/* <!-- Start fact counter --> */}
          <div className="fact-counter-color text-center pb-90 pt-90">
            <FactCounter counter_2={true} />
          </div>
          {/* <!-- end fact counter --> */}
        </div>
      </section>
      {/* counter number one end */}

      {/* counter 3 start */}
      <CounterArea />
      {/* counter 3 end */}


      {/* counter 4 start */}
      <CounterFour counter_4={true} />
      {/* counter 4 end */}

      <section className="solution-place bgs-cover rel z-1 pt-150 pb-150 rpb-100"
        style={{ backgroundImage: `url(/assets/images/background/counter-bg.png)` }}>
        <div className="container">
          <div className="counter-four-inner rmb-100">
            <div className="row justify-content-center">
              {counter_five_data.map((c, i) => (
                <div key={i} className="col-lg-4 col-sm-6">
                  <div className="success-item style-four">
                    <i className="fas fa-check"></i>
                    <div className="success-content">
                      <span className="count-text">
                        <Counter number={c.number} text={c.text} />
                      </span>
                      <span className="normal-text">{c.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
