import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setFormData({ name: "", email: "", message: "" });
  }, []);

  const handleChange = (e) => {
    if (!formData) return; // formData が null の間は変更しない
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("送信中...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("問い合わせが送信されました！");
      setFormData({ name: "", email: "", message: "" }); // 入力をリセット
    } else {
      setStatus("送信に失敗しました。");
    }
  };

  if (!formData) {
    return <p>読み込み中...</p>; // 初期データがセットされるまでローディングを表示
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>お問い合わせ</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            お名前:
            <input
              type="text"
              name="name"
              required
              className={styles.inputField}
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            お問い合わせ内容:
            <textarea
              name="message"
              required
              className={styles.textareaField}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />
          <button type="submit" className={styles.submitButton}>
            送信
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </Layout>
  );
}
