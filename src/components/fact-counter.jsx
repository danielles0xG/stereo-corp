import Counter from "./counter";

const counter_data = [
  { number: 520, title: 'Projects Done' },
  { number: 24, title: 'Awards Won', text: '+' },
  { number: 12, title: 'Years Experience', text: '+' },
  { number: 352, title: 'Happy Clients', text: '+' },
]

const FactCounter = ({ counter_2 = false }) => {
  return (
    <>
      {!counter_2 && <div className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center"
        style={{ background: `url(/assets/images/counter/counter-bg.jpg)` }}>
        <div className="row">
          {counter_data.map((c, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="success-item ">
                <span className="count-text">
                  <Counter number={c.number} text={c.text} />
                </span>
                <p>{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>}

      {counter_2 && <div className="row">
        {counter_data.map((c, i) => (
          <div key={i} className="col-lg-3 col-sm-6">
            <div className="success-item ">
              <span className="count-text">
                <Counter number={c.number} text={c.text} />
              </span>
              <p>{c.title}</p>
            </div>
          </div>
        ))}
      </div>}
    </>
  );
};

export default FactCounter;