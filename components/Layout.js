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
          {/* 記事一覧のリンク（左下） */}
          <nav className={styles.headerLeft}>
            <Link href="/" className={styles.navLink}>
              記事一覧
            </Link>
            <Link href="/contact" className={styles.navLink}>
              お問い合わせ
            </Link>
          </nav>

          {/* プロフィール画像とタイトル（中央） */}
          <div className={styles.headerCenter}>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.headingMd}>{name}</h1>
          </div>
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
