import Link from 'next/link';
import React from 'react';
import { blogData } from '../../../../data';

const blog_contents = {
  subtitle: 'Recent Articles',
  title: 'Get News & Blog',
  text_1: 'Lorem ipsum dolor amet consectetur adips elit sed do eiusmod tempor incididunt laboey dolore magna aliqua enim minim',
  text_2: 'On the other hand, we denounce righteous indignation and dislike men who are beguiled and demoralized by the charms',
  btn_text: 'view all news'
}

const { subtitle, title, text_1, text_2, btn_text } = blog_contents;

const BlogArea = () => {
  const blog_items = blogData.filter(b => b.home_4);
  return (
    <>
      <section className="news-section-two pb-90 rpb-70" id="news">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-seciton-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text_1}</p>
                <p>{text_2}</p>
                <Link href={'/blog'}>
                  <a className="theme-btn mt-15">{btn_text}</a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item">
                <div className="image">
                  <img src={blog_items[0].img} alt="News" />
                </div>
                <div className="news-content">
                  <ul className="post-meta-item">
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      <a href="#" rel="bookmark">{blog_items[0].date}</a>
                    </li>
                    <li>
                      <i className="fas fa-tag"></i>
                      <a href="#">{blog_items[0].tag}</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href={`/blog-details/${blog_items[0].id}`}>
                      <a>{blog_items[0].title}</a>
                    </Link>
                  </h4>
                  <p>{blog_items[0].desc} </p>
                </div>
                <div className="news-author">
                  <img src={blog_items[0].authorImg} alt="Authro" />
                  <span className="posted-by">
                    By <a href="#">{blog_items[0].authorName}</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row">
                {blog_items.slice(1, 3).map((blog, i) => (
                  <div key={i} className="col-xl-12 col-sm-6">
                    <div className="news-item style-three wow fadeInUp delay-0-6s">
                      <div className="news-content">
                        <ul className="post-meta-item">
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            <a href="#" rel="bookmark">{blog.date}</a>
                          </li>
                          <li>
                            <i className="fas fa-tag"></i>
                            <a href="#">{blog.tag}</a>
                          </li>
                        </ul>
                        <h4>
                          <Link href={`/blog-details/${blog.id}`}>
                            <a>{blog.title}</a>
                          </Link>
                        </h4>
                        <p>{blog.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;