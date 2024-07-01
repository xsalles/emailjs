import styles from "../styles.module.css";

export default function Contact() {
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
            className={styles.textArea}
            name="name"
            id="name"
          ></textarea>
          <label className={styles.space} htmlFor="email">
            Email
          </label>
          <textarea
            className={styles.textArea}
            name="email"
            id="email"
          ></textarea>
          <label className={styles.space} htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="Type your message..."
            className={styles.textAreaMessage}
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
        <button className={styles.button}>Enviar</button>
      </div>
    </div>
  );
}
