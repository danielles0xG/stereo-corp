import { blogData } from '../../../data';
import BlogSidebar from '../blog-sidebar';
import StandardBlogItem from './standard-blog-item';

const blogItems = blogData.filter(b => b.blog_standard);

const BlogArea = () => {
  return (
    <>
      <section className="blog-page-area bg-lighter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-content pt-120 rpt-100 pb-110 rpb-90 pr-15 rpr-0">
                <StandardBlogItem items={blogItems} itemsPerPage={3} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default BlogArea;