const progress_contents = {
  subtitle:'How It Works',
  title:'Create and Sell Your NFTs',
  progress_items:[
    {icon:'/assets/images/work-progress/icon-1.png',title:'Set Up Your Wallet',subtitle:'Praesent euismod eu elit id maximus. Donec'},
    {icon:'/assets/images/work-progress/icon-2.png',mt:'mt-50',title:'Create Collection',subtitle:'Praesent euismod eu elit id maximus. Donec'},
    {icon:'/assets/images/work-progress/icon-3.png',title:'Add Your NFT',subtitle:'Praesent euismod eu elit id maximus. Donec'},
    {icon:'/assets/images/work-progress/icon-4.png',mt:'mt-50',title:'List For Sale',subtitle:'Praesent euismod eu elit id maximus. Donec'},
  ]
}

const {subtitle,title,progress_items} = progress_contents;

const WorkProgress = () => {
  return (
    <>
      <section className="work-progress-area-five rel z-1 pt-110 pb-90 rpt-90 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {progress_items.map((item,i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
              <div className={`work-progress-item-five ${item?.mt}`}>
                <div className="icon-number">
                  <div className="icon">
                    <img src={item.icon} alt="Icon"/>
                  </div>
                  <span className="number">0{i+1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProgress;