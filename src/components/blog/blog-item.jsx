import Link from 'next/link';
import React from 'react';

const BlogItem = ({ item, style_two }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className={`news-item ${style_two ? style_two : ''}`}>
        <div className="image">
          <img src={item.img} alt="News" />
        </div>
        <div className="news-content">
          {style_two && <div className="news-author">
            <img src={item.author} alt="Authro" />
          </div>}
          <ul className="post-meta-item">
            {style_two && <li>
              <b>By <a href="#">{item.authorName}</a></b>
            </li>}
            <li>
              <i className="fas fa-calendar-alt"></i>
              <a href="#" rel="bookmark">{item.date}</a>
            </li>
            {!style_two && <li>
              <i className="fas fa-tag"></i>
              <a href="#">{item.tag}</a>
            </li>}
          </ul>
          <h4>
            <Link href={`/blog-details/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </h4>
          <p>{item.subtitle}</p>
        </div>
        {!style_two && <div className="news-author">
          <img src={item.author} alt="Authro" />
          <span className="posted-by">
            By <a href="#">{item.authorName}</a>
          </span>
        </div>}
      </div>
    </div>
  );
};

export default BlogItem;