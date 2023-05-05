const faq_contents = {
  faq_items: [
    {
      show: true,
      title: 'What are the questions for data science?',
      desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
    },
    {
      title: 'Which is better AI or data science?',
      desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
    },
    {
      title: 'Why data science is the future?',
      desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
    },
  ],
  subtitle: '03 FAQ',
  title: 'Any Questions for Data science',
  text: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.'
}

const { faq_items, subtitle, title, text } = faq_contents;

const FaqArea = () => {
  return (
    <>
      <section className="faq-page rel z-1 pt-150 rpt-100" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-accordion rmb-55" id="faq-accordion">
                {faq_items.map((item, i) => (
                  <div key={i} className="card">
                    <a className={`${!item.show ? 'collapsed' : ''} card-header`} id={`heading${i}`} href="#" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}
                      aria-expanded={item.show ? "true" : 'false'} aria-controls={`collapse${i}`}>
                      {item.title}<span className="toggle-btn"></span>
                    </a>
                    <div id={`collapse${i}`} className={`collapse ${item.show ? 'show' : ''}`} data-bs-parent="#faq-accordion">
                      <div className="card-body">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="faq-content">
                <div className="section-title mb-30">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-triangle">
          <img src="/assets/images/shapes/faq-triangle.png" alt="Triangle" />
        </div>
        <div className="faq-box-shape"></div>
      </section>
    </>
  );
};

export default FaqArea;