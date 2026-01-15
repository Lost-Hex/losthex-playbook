/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            src="/logo.svg"
            alt="LostHex"
            className={styles.logo}
            width={160}
            height={100}
          />

          <h1>LostHex Base</h1>
          <p>
            Production-ready SST + Next.js 15 starter with integrated spec
            framework
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>🚀 SST v3</h2>
            <p>Serverless deployment to AWS with infrastructure as code</p>
          </div>

          <div className={styles.feature}>
            <h2>⚛️ Next.js 15</h2>
            <p>App Router, React Server Components, TypeScript</p>
          </div>

          <div className={styles.feature}>
            <h2>📋 Spec Framework</h2>
            <p>ITDs, data structures, and project documentation templates</p>
          </div>

          <div className={styles.feature}>
            <h2>🔄 CI/CD Ready</h2>
            <p>GitHub Actions with OIDC authentication to AWS</p>
          </div>
        </div>

        <div className={styles.cta}>
          <h3>Get Started</h3>
          <ol>
            <li>
              Clone and install: <code>npm install</code>
            </li>
            <li>
              Start dev server: <code>npm run dev</code>
            </li>
            <li>
              Deploy to AWS: <code>npm run sst:deploy</code>
            </li>
          </ol>
        </div>

        <div className={styles.links}>
          <a href="/api/health" className={styles.link}>
            Health Check →
          </a>
          <a
            href="https://losthex.com"
            className={styles.linkSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            losthex.com
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Built with LostHex Base • SST + Next.js 15</p>
      </footer>
    </div>
  );
}
