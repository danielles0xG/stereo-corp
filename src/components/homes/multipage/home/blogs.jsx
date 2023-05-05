import { blogData } from '../../../../data';
import BlogItem from '../../../blog/blog-item';

const blog_content = {
  subtitle: 'Recent Articles',
  title: 'Latest News from Us'
}
const { subtitle, title } = blog_content;

const Blogs = () => {
  return (
    <>
      <section className="news-section pb-90 rpb-70" id="news">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {blogData.slice(0, 3).map((item) => (
              <BlogItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;