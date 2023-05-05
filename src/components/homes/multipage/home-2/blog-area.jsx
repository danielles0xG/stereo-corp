import { blogData } from "../../../../data";
import BlogItem from "../../../blog/blog-item";

const blog_content = {
  bg_img: '/assets/images/news/news-bg-two.jpg',
  subtitle: 'Recent Articles',
  title: 'Latest News from Us'
}
const { bg_img, subtitle, title } = blog_content;

const BlogArea = () => {
  return (
    <>
      <section className="news-section-two pb-90 rpb-70"
        style={{ backgroundImage: `url(${bg_img})` }} id="news">
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