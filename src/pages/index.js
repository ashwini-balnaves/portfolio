import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


const calendlyLink = 'https://calendly.com/coffee-with-ashwini/30min'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingSm}>
        <p>
          Ashwini is a full stack, senior software engineer and team lead. She is currently working at Kapiche,
          a Natural Language Processing startup that makes uncovering customer insights accessible at scale.
          She also has experience in automating network configuration and test automation. She also spends time
          mentoring coding boot camps and is a conference speaker.
        </p>
        <p>
          While she has an Electrical and Computer Engineering degree from the University of Queensland she changed
          domains to software as she discovered it satisfies her creative itch while being technically
          challenging. She loves to talk about the benefits of test automation, logs, monitoring and observability,
          and listening to other people’s passions.
        </p>
      </section>
      <section>
        <a href={calendlyLink}>
          Have coffee with me!
        </a>
      </section>
    </Layout>
  )
}
