import { socialLinks } from '../data';

export const SocialLinksOne = () => {
  return (
    <>
      {socialLinks.style_one.map((social, i) => (
        <a key={i} href={social.link} target={social.target ? social.target : ''}>
          <i className={social.icon}></i>
        </a>
      ))}
    </>
  );
};

