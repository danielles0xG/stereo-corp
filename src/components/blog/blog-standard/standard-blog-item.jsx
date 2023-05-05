import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useModal from '../../../hooks/use-modal';
import Pagination from '../../../ui/pagination';
import VideoModal from '../../modals/modal-video';

const StandardBlogItem = ({ items, itemsPerPage }) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems && currentItems.map((item) => {
        return <div key={item.id} className={`blog-standard-item ${item.quote_blog ? 'quote-blog' : ''}
          ${item.without_img ? 'without-image' : ''}`}>
          {!item.quote_blog && <> {!item.without_img && <>
            <div className={`image ${item.video ? 'video-blog' : ''}`}>
              <img src={item.img} alt="Blog Standard" />
              {item.video && <button onClick={() => setIsVideoOpen(true)} className="mfp-iframe video-play">
                <i className="fas fa-play"></i>
              </button>}
            </div></>}
            <div className="blog-header">
              <ul className="post-meta-item mr-15">
                <li>
                  <i className="far fa-user"></i>
                  <a href="#" rel="bookmark">{item.author}</a>
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i>
                  <a href="#">{item.date}</a>
                </li>
              </ul>
              <div className="social-style-one">
                <span>Share Now</span>
                {item.social_links.map((social, i) => (
                  <a key={i} href={social.link} target={social.target ? social.target : ''}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <h3>
              <Link href={`/blog-details/${item.id}`}>
                <a>{item.title}s</a>
              </Link>
            </h3>
            <p>{item.desc}</p>
            <Link href={`/blog-details/${item.id}`}>
              <a className="theme-btn">Read More</a>
            </Link>
          </>}
          {item.quote_blog && <h3>
            <Link href={`/blog-details/${item.id}`}>
              <a>{item.title}s</a>
            </Link>
          </h3>}
        </div>
      })}

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="-pPHfdXMtuU" />
      {/* video modal end */}
    </>
  );
};

export default StandardBlogItem;