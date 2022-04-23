import Head from "next/head";
import Image from 'next/image';
import Layout from "../../components/layout";
import cvStyles from "../../styles/cv.module.css";


export default function CV() {
  return (
    <Layout>
      <Head>
        <title> Ashwini Balnaves's CV/Resume </title>
      </Head>
      <h1>Job Experience</h1>
      <div className={cvStyles.entry}>
        <div className={cvStyles.companyHeaderWrapper}>
          {/* Can't set flex grow and flex shrink on Image */}
          <div className={cvStyles.logo}>
            <Image
              src="/images/logos/kapiche.jpg"
              layout="fixed"
              height={80}
              width={80}
              alt='Kapiche logo'
            />
          </div>
          <div className={cvStyles.companyHeader}>
            <h2>Kapiche</h2>
            <subtitle>
              An AI-powered Feedback Analytics Platform for
              understanding customer feedback at scale
            </subtitle>
          </div>
        </div>
        <div className={cvStyles.companyBody}>
          <h3>Senior Software Engineer and Squad Lead</h3>
          <subtitle>Dec 2021 - Present</subtitle>
          <ul>
            <li>
              My responsibilities as squad lead include:
              <ul>
                <li>
                  advocating and ensuring operational standards and accountability, i.e. the Kanban process and communicating to stakeholders
                </li>
                <li>
                  reinforcing organizational priorities and objectives
                </li>
                <li>
                  providing coaching and feedback
                </li>
                <li>
                  contributing to performance reviews
                </li>
              </ul>
            </li>
          </ul>
          <h3>Software Engineer</h3>
          <subtitle>Jan 2019 - Dec 2021</subtitle>
          <ul>
            <li>
              I was responsible for engaging directly with a customer to adapt the frontend Kapiche product, allowing it to be embedded within an iframe in the customer site, enabling their end clients to access Kapiche using an admin account.
            </li>
            <li>
              I was responsible for building a product integration with the 3rd party Chargebee service for controlling subscription features and financial invoicing for the Kapiche platform to enable pricing tiers for the product.
            </li>
            <li>
              I was responsible for building multiple product integrations with 3rd party customer feedback survey providers, including SurveyMonkey and Delighted. These integrations include automation capabilities to sync new data with the Kapiche platform. I improved an existing Qualtrics integration by adding these automation capabilities.
            </li>
            <li>
              I was responsible for developing a provider-agnostic AWS S3 integration capability to support larger enterprises having their own data lake automation systems, to enable integration into our own data pipeline automation system.
            </li>
            <li>
              I was responsible for introducing the Honeycomb observability service into our infrastructure in all layers of the infrastructure. The outcome was distributed tracing including request lifetime timings.
            </li>
            <li>
              I was responsible for a 250% performance improvement in our NLP text processing pipeline by identifying non-performant updates to existing data structures. This impact was significant because even though these are batch jobs, they would fill up processing queues for much longer than necessary. The outcome was that customers could consume daily updates of text processing results much sooner.
            </li>
            <li>
              I audited the SSL policies and upgraded the cyphers on Kubernetes services.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
