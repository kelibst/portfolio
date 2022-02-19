import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kekeli Dogbevi Jiresse</title>
        <meta name="description" content="Hey, I am Keli. It's really happy that you are reading this. If you are human, please prove if say hello on LinkedIn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <header>
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none font-Rubik">Hello, I am Keli</h1>
          </header>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home
