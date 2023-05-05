import React from 'react';

const FooterContactStyle = ({ style_six, home_8 }) => {
  return (
    <>
      {!style_six && !home_8 && 
        <><li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 27949</li>
        <li><i className="fas fa-clock"></i> Mon-Sat 9:00 - 7:00</li>
        <li><i className="fas fa-phone-alt"></i> <a href="callto:+012-345-6789">+012-345-6789</a></li>
        <li><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li></>}

      {style_six && !home_8 &&
        <>
          <li><i className="fas fa-phone-alt"></i> <a href="callto:+123-589-847">+123 - 589 - 847</a></li>
          <li><i className="fas fa-envelope"></i> <a href="mailto:resly@gmail.com">resly@gmail.com</a></li>
          <li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 279499</li>
        </>
      }

      {
        home_8 && <>
          <li><i className="fas fa-phone-alt"></i>
            <span><b>Phone : </b> <a href="callto:(+001)256689">(+001) 256 689</a></span>
          </li>
          <li><i className="fas fa-envelope">
          </i><span><b>Email : </b> <a href="mailto:motal@gmail.com">motal@gmail.com</a></span>
          </li>
          <li><i className="fas fa-map-marker-alt">
          </i><span><b>Address : </b>9FW6+599 Egham, United Kingdom</span>
          </li>
        </>
      }
    </>
  );
};

export default FooterContactStyle;