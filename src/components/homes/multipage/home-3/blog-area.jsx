import { blogData } from '../../../../data';
import BlogItem from '../../../blog/blog-item';

const blog_content = {
  subtitle: 'Recent Articles',
  title: 'Latest News from Us'
}
const {subtitle, title } = blog_content;

const BlogArea = () => {
  return (
    <>
      <section className="news-section-two pb-10 rpb-25" id="news">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {blogData.slice(0, 3).map((item) => (
              <BlogItem key={item.id} item={item} style_two="style-two" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;