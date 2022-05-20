import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Secondary website',
    link: 'santospangeni.com.np',
    href: 'http://santospangeni.com.np',
  },
  {
    social: 'email',
    link: 'sntshpangeni@gmail.com',
    href: 'mailto:sntshpangeni@gmail.com',
  },
  {
    social: 'github',
    link: 'Santosh-p23',
    href: 'https://github.com/Santosh-p23',
  },
  {
    social: 'linkedin',
    link: 'santosh-pangeni',
    href: 'linkedin.com/in/santosh-pangeni-107082229',
  },
  {
    social: 'twitter',
    link: '@sant0sh_pangeni',
    href: 'https://twitter.com/sant0sh_pangeni',
  },
  {
    social: 'instagram',
    link: 'santos_pangeni',
    href: 'https://www.instagram.com/santos_pangeni/'
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
