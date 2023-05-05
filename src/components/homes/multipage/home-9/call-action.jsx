import Link from "next/link";

const data = {
  bg_img: '/assets/images/call-action/call-action-bg.png',
  title: 'Truly, Madly, Deeply in love with This NFT collection.',
  btn_text: 'Connect NFT'
}

const { bg_img, title, btn_text } = data;

const CallAction = () => {
  return (
    <>
      <section className="call-action-four-area">
        <div className="container">
          <div className="call-action-four rel z-1 p-70 pb-80 rpx-55" style={{ backgroundImage: `url(${bg_img})` }}>
            <div className="section-title mb-35">
              <h2>{title}</h2>
            </div>
            <Link href="/contact">
              <a className="theme-btn style-twelve">{btn_text}</a>
            </Link>
            <div className="right-image">
              <img src="/assets/images/call-action/call-action-right.png" alt="Call To Action" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallAction;