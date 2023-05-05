import Counter from "../../../counter";

const counter_data = [
  { number: 45, icon: '/assets/images/counter/icon1.png', title: 'Global Projects', text: 'k' },
  { number: 45, icon: '/assets/images/counter/icon2.png', title: 'Global Projects', text: 'k' },
  { number: 220, icon: '/assets/images/counter/icon3.png', title: 'Global Projects', text: '+' },
]

const CounterSection = () => {
  return (
    <>
      <div className="cournter-section-five bg-black text-white pt-95 rpt-75 pb-65 rpb-45">
        <div className="container">
          <div className="row justify-content-center">
            {counter_data.map((c, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="success-item style-five">
                  <div className="icon">
                    <img src={c.icon} alt="Icon" />
                  </div>
                  <div className="content">
                    <span className="count-text">
                      <Counter number={c.number} text={c.text} />
                    </span>
                    <span className="count-text bg-text">
                      <Counter number={c.number} text={c.text} />
                    </span>
                    <span>{c.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;