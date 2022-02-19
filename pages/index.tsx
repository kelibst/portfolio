import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={[styles.container, styles.bgDark].join(" ")}>
      <Head>
        <title>Kekeli Dogbevi Jiresse</title>
        <meta name="description" content="Hey, I am Keli. It's really happy that you are reading this. If you are human, please prove if say hello on LinkedIn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='static p-32 flex flex-row h-screen'>
          <div className='w-1/2'>
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none font-Rubik">Hello, I am Keli</h1>
            <h6 className="text-gray-400 my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem placeat, nesciunt quisquam quos inventore suscipit ipsa cupiditate. Qui, rem.</h6>
          </div>
          <section className="left-sec w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae repellat hic voluptatem iure rerum maxime corrupti quia, commodi ratione sed provident consequuntur asperiores cupiditate tempora consequatur. Fuga consectetur reiciendis praesentium.
          </section>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home

