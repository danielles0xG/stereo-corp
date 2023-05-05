import Link from 'next/link';
import React from 'react';
import { blogData } from '../../../../data';

const BlogArea = () => {
  const blogItems = blogData.filter(b => b.home_8)
  return (
    <>
      <section className="news-section-five pt-115 rpt-95 pb-90 rpb-70" id="news">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-65">
                <span className="sub-title">Blog & News</span>
                <h2>Every single day update Security</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {blogItems.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="news-five-item wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="Blog" />
                  <div className="content">
                    <span className="date"><span>{item.date.substring(0, 2)}</span>
                      {item.date.substring(2, item.date.length)}</span>
                    <ul className="post-meta-item">
                      <li>
                        <i className="far fa-user"></i>
                        <a href="#" rel="bookmark">By {item.authorName}</a>
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        <a href="#">{item.comments} Comments</a>
                      </li>
                    </ul>
                    <h3>
                      <Link href={`/blog-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <Link href={`/blog-details/${item.id}`}>
                      <a className="learn-more">Read More <i className="fas fa-angle-double-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;