import styles from "../styles.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_k9tu0oo",
        "template_f88z08c",
        templateParams,
        "wP0sveAxxoQ9X4vq5"
      )
      .then(
        (response) => {
          alert("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("ERRO:", error);
        }
      );
  }

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
          <input
            onChange={(e) => setName(e.target.value)}
            className={styles.textArea}
            name="name"
            value={name}
            id="name"
            type="text"
          ></input>
          <label className={styles.space} htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.textArea}
            value={email}
            name="email"
            id="email"
            type="text"
          ></input>
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
        <button onClick={sendEmail} type="submit" className={styles.button}><h3>Enviar</h3></button>
      </div>
    </div>
  );
}
