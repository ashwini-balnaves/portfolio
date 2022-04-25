import styles from "./footer.module.css";


import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const linkedInUrl = "https://www.linkedin.com/in/ashwini-balnaves/";
const githubUrl = "https://github.com/ashwini-balnaves/";
const twitterUrl = "https://twitter.com/that_ashwini";


export default function Footer() {
  return (
    <footer className={styles.footer}>
    <a href={`${linkedInUrl}`} target="_blank">
        <FontAwesomeIcon icon={faLinkedin}
            className={`${styles.fa} ${styles.faLinkedin}`}
        />
    </a>
    <a href={`${githubUrl}`} target="_blank">
        <FontAwesomeIcon icon={faGithub} className={`${styles.fa} ${styles.faGithub}`} />
    </a>
    <a href={`${twitterUrl}`} taget="_blank">
        <FontAwesomeIcon icon={faTwitter} className={`${styles.fa} ${styles.faTwitter}`} />
    </a>
    </footer>
  )
}