import styles from "../styles.module.css";
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearText = () => {
    setName(' ');
    setEmail(' ');
    setMessage(' ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>Contact us</h2>
        <p className={styles.sectionText}>
          Tire suas dúvidas enviando uma mensagem diretamente para o nosso
          email!
        </p>
        <form className={styles.formContainer}>
          <label htmlFor="name">Name</label>
          <textarea
            onChange={(e) => setName(e.target.value)}
            className={styles.textArea}
            name="name"
            value={name}
            id="name"
          ></textarea>
          <label className={styles.space} htmlFor="email">
            Email
          </label>
          <textarea
            onChange={(e) => setEmail(e.target.value)}
            className={styles.textArea}
            value={email}
            name="email"
            id="email"
          ></textarea>
          <label className={styles.space} htmlFor="message">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className={styles.textAreaMessage}
            value={message}
            name="message"
            id="message"
          ></textarea>
        </form>
        <div className={styles.termsContainer}>
          <input className={styles.checkbox} type="checkbox" id="terms" />
          <label htmlFor="terms">
            I accept the{" "}
            <a className={styles.termsText} href="#">
              Terms
            </a>
          </label>
        </div>
        <button type="submit" onClick={clearText} className={styles.button}>
          Enviar
        </button>
      </div>
    </div>
  );
}
