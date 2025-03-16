import Layout from "../../components/Layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>お問い合わせ</h1>
        <form className={styles.form}>
          <label>
            お名前:
            <input
              type="text"
              name="name"
              required
              className={styles.inputField}
            />
          </label>
          <br />
          <label>
            メールアドレス:
            <input
              type="email"
              name="email"
              required
              className={styles.inputField}
            />
          </label>
          <br />
          <label>
            お問い合わせ内容:
            <textarea
              name="message"
              required
              className={styles.textareaField}
            ></textarea>
          </label>
          <br />
          <button type="submit" className={styles.submitButton}>
            送信
          </button>
        </form>
      </div>
    </Layout>
  );
}
