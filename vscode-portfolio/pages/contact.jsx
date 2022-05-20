import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });

  const submitForm = async (e) => {
    e.preventDefault();
    var params =
    {
      "from_name": name,
      "from_email":email,
      "message": message
    }
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
      params, // the values in your EmailJS template
      process.env.NEXT_PUBLIC_EMAIL_JS_USER,
    ).then(({ status }) => {
        console.log(status)
        if(status === 200)
          setFormSubmitted({ title: 'Message has been sent', paragraph: 'Santosh will be in contact with you soon.' });
        // Show success message
      }, () => {
        // Show error message
        setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Santosh by email.' });
      });

      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      console.log(formSubmitted.title)

  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Connect with socials.</h3>
        <ContactCode />
      </div>
      <div>
        
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
