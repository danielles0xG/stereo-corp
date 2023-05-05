const contact_info_data = {
  title: "Don't hesitate to contact us",
  contact_info: [
    { icon: 'fas fa-phone-alt', title: 'Call Us', link: "callto:+012-345-6789", subtitle: '+012-345-6789' },
    { icon: 'fas fa-envelope', title: 'Write to Us', link: "mailto:info@example.com", subtitle: 'info@example.com' },
    { icon: 'fas fa-clock', title: 'Office hours', text: 'Mon-Sat 9:00 - 7:00' },
  ]
}
const { contact_info, title } = contact_info_data;

export default function ContactInfo() {
  return (
    <div className="contact-informations text-white">
    <h3>{title}</h3>
    <ul className="contact-info">
      {contact_info.map((info, i) => <li key={i}>
        <i className={info.icon}></i>
        <div className="content">
          <span>{info.title}</span>
          {info.subtitle && <h5><a href={info.link}>{info.subtitle}</a></h5>}
          {info.text && <h5>{info.text}</h5>}
        </div>
      </li>)}
    </ul>
  </div>
  )
}
