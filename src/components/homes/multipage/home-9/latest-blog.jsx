import Link from 'next/link';
import { blogData } from '../../../../data';

const blog_contents = {
  subtitle: 'Our Update',
  title: 'Our Latest Blog & News'
}
const { subtitle, title } = blog_contents;

const LatestBlog = () => {
  const blogItems = blogData.filter(b => b.home_9);
  return (
    <>
      <section className="news-six-area rel z-1 pt-110 pb-90 rpt-90 rpb-70" id="news">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {blogItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-sm-6">
                <div className="news-six-item">
                  <div className="image">
                    <img src={item.img} alt="News" />
                  </div>
                  <h4>
                    <Link href={`/blog-details/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <ul className="post-meta-item">
                    <li>
                      <i className="far fa-calendar-check"></i>
                      <a href="#" rel="bookmark">{item.date}</a>
                    </li>
                    <li>
                      <i className="far fa-comment"></i>
                      <a href="#">{item.comments} Comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;