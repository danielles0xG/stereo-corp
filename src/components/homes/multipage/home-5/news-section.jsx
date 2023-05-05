import React from 'react';
import { blogData } from '../../../../data';
import BlogItem from '../../../blog/blog-item';

const NewsSection = () => {
  const blogItems = blogData.filter(i => i.home_5)
  return (
    <>
      <section className="news-section pt-115 rpt-95 pb-75 rpb-55" id="news">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">Recent Articles</span>
            <h2>Latest News from Us</h2>
          </div>
          <div className="row justify-content-center">
            {blogItems.map((item) => (
              <BlogItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;