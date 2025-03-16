import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../src/styles/utils.module.css";
import Link from "next/link";

const name = "フロントエンドを学ぶインフラエンジニアのブログ";
export const siteTitle = "フロントエンドを学ぶインフラエンジニアのブログ";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>{name}</h1>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              記事一覧
            </Link>
            <Link href="/contact" className={styles.navLink}>
              問い合わせ
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </>
  );
}
