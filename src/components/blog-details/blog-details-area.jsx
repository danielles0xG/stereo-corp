import Link from 'next/link';
import React from 'react';
import { blogData } from '../../data';
import { SocialLinksOne } from '../../layout/social-links';
import BlogSidebar from '../blog/blog-sidebar';
import BlogDetailsForm from '../forms/blog-details-form';

const BlogDetailsArea = ({ item }) => {
  const blogItem = blogData.filter(b => b.blog_standard)[0]
  return (
    <>
      <section className="blog-details-area bg-lighter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content pt-120 rpt-100 pb-95 rpb-75 pr-15 rpr-0">
                <div className="image ">
                  <img src={item.img ? item.img : blogItem.img} alt="Blog Standard" />
                </div>
                <div className="blog-header">
                  <ul className="post-meta-item mr-15">
                    <li>
                      <i className="far fa-user"></i>
                      <a href="#" rel="bookmark">{'Daniele Custer'}</a>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      <a href="#">25 Jan 2022</a>
                    </li>
                  </ul>
                  <div className="social-style-one">
                    <span>Share Now</span>
                    {item?.social_links?.map((social, i) => (
                      <a key={i} href={social.link} target={social.target ? social.target : ''}>
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt labore</p>
                <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehendermust explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone</p>
                <blockquote>
                  Avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter con sequences that are extremely painful again anyone
                  <span className="author">Tony R. Francois</span>
                </blockquote>
                <div className="blog-footer mb-40">
                  <div className="popular-tags mb-15">
                    <b>Popular Tag :</b> <a href="#">IT Services</a> <a href="#">Technology</a> <a href="#">Services</a>
                  </div>
                  <div className="social-style-two">
                    <span>Share</span>
                    <SocialLinksOne />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm-6">
                    <Link href="/blog-details">
                      <a className="next-prev-blog">
                        <h4>Building Pub Sub Service Using Node And Redis</h4>
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link href="/blog-details">
                      <a className="next-prev-blog">
                        <h4>Once Upon Time Use Story For Better Engagement</h4>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="comments-wrap mt-55 ">
                  <h3 className="comment-title mb-55">Client’s Comments</h3>
                  <div className="comment-item">
                    <div className="author-image">
                      <img src="/assets/images/news/comment-author-1.jpg" alt="Author" />
                    </div>
                    <div className="comment-details">
                      <div className="name-date">
                        <h5>Alexzeder Alex</h5>
                        <span className="date">25 Jan 2022</span>
                      </div>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                      <a href="#" className="reply">Reply Commets</a>
                    </div>
                  </div>
                  <div className="comment-item child-comment">
                    <div className="author-image">
                      <img src="/assets/images/news/comment-author-2.jpg" alt="Author" />
                    </div>
                    <div className="comment-details">
                      <div className="name-date">
                        <h5>John F. Medina</h5>
                        <span className="date">25 Jan 2022</span>
                      </div>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you</p>
                      <a href="#" className="reply">Reply Commets</a>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="author-image">
                      <img src="/assets/images/news/comment-author-3.jpg" alt="Author" />
                    </div>
                    <div className="comment-details">
                      <div className="name-date">
                        <h5>Alexzeder Alex</h5>
                        <span className="date">25 Jan 2022</span>
                      </div>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                      <a href="#" className="reply">Reply Commets</a>
                    </div>
                  </div>
                </div>
                <div className="comment-form-wrap mt-60 ">
                  <h3 className="comment-title mb-55">Send A Message</h3>
                  {/* blog form start */}
                  <BlogDetailsForm />
                  {/* blog form end */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              {/* sidebar start */}
              <BlogSidebar />
              {/* sidebar end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;