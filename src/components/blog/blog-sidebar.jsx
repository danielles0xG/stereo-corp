import Link from "next/link";
import { blogData } from "../../data";


export default function BlogSidebar() {
  return (
    <div className="blog-sidebar mt-120 rmy-100">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <form action="#">
          <input type="text" placeholder="Search" className="searchbox" required />
          <button type="submit" className="searchbutton fa fa-search"></button>
        </form>
      </div>
      <div className="widget widget-recent-post wow fadeInUp delay-0-4s">
        <h3 className="widget-title">Recent News</h3>
        <div className="widget-news-wrap">
          {blogData.slice(0, 3).map((b, i) => (
            <div key={i} className="widget-news-item">
              <img src={b.img} alt="News" />
              <div className="widget-news-content">
                <h5>
                  <Link href={'/blog-details'}>
                    <a>{b.title.substring(0, 35)}...</a>
                  </Link>
                </h5>
                <span className="date"><a href="#">{b.date}</a></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="widget widget-category">
        <h3 className="widget-title">Category</h3>
        <ul className="list-style-two">
          <li><a href="#">Business Strategy</a> <span>(20)</span></li>
          <li><a href="#">Investment Planning</a> <span>(05)</span></li>
          <li><a href="#">Financial Investment</a> <span>(03)</span></li>
          <li><a href="#">Banking & Insurance</a> <span>(30)</span></li>
          <li><a href="#">Free Consulting</a> <span>(07)</span></li>
          <li><a href="#">Meet Our Team</a> <span>(09)</span></li>
        </ul>
      </div>
      <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
        <h3 className="widget-title">Category</h3>
        <div className="tags">
          <a href="#">Cleaning</a>
          <a href="#">Business</a>
          <a href="#">Booking</a>
          <a href="#">car</a>
          <a href="#">House</a>
          <a href="#">Apartment</a>
          <a href="#">Washing</a>
          <a href="#">Agency</a>
          <a href="#">Listing</a>
        </div>
      </div>
      <div className="widget widget-call-action wow fadeInUp delay-0-2s">
        <div className="call-action-widget">
          <h2>Work Together</h2>
          <p>Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore</p>
          <Link href={'/contact'}>
            <a className="theme-btn style-five btn-circle">Contact Now <i className="fas fa-angle-double-right"></i></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
