import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../../lib/post";
import { siteTitle } from "../../components/Layout";

//静的サイト生成（SSG）
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>こんにちは、みみみです。</p>
        </section>

        <section>
          <div className={styles.articleList}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id} className={styles.articleCard}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnail} />
                </Link>
                <div className={styles.articleInfo}>
                  <Link href={`/posts/${id}`} className={styles.articleTitle}>
                    {title}
                  </Link>
                  <br />
                  <small className={styles.articleDate}>{date}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
