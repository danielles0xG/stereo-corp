import Counter from "../../../counter";

const counter_contents = {
  title: <>Over 1200+ finished work and <br />Still counting.</>,
  counter_data: [
    { number: 35, title: 'Complete', text: 'k', color: '' },
    { number: 34, title: 'Trusted Users', text: 'k', color: 'color-two' },
    { number: 119, title: 'Awards', text: '+', color: 'color-three' },
    { number: 119, title: 'Happy Clients', text: '+', color: 'color-four' },
  ]
}

const { title, counter_data } = counter_contents;

const CounterArea = () => {
  return (
    <>
      <section className="cournter-section-three bg-lighter text-center pt-115 rpt-95 pb-70 rpb-50">
        <div className="container">
          <div className="section-title mb-55">
            <h2>{title}</h2>
          </div>
          <div className="row">
            {counter_data.map((c, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className={`success-item circle-style ${c.color}`}>
                  <span className="count-text">
                    <Counter add_style={true} number={c.number} text={c.text} />
                  </span>
                  <span>{c.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterArea;