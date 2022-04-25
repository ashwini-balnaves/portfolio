import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Footer from "./footer"

const name = "Ashwini Balnaves";
export const siteTitle = "Ashwini Balnaves · portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="The personal website of Ashwini Balnaves"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profilebig.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <p className={utilStyles.subtitle}> Senior, full stack software engineer &middot; Brisbane, QLD</p>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profilebig.jpg"
                    className={utilStyles.borderCircle}
                    height={100}
                    width={100}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
