import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProjectsSection from "../components/ProjectsSection";
import UserSection from "../components/UserSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="md:max-w-screen-2xl md:block md:my-2 mx-auto scroll-smooth ease-in-out duration-300">
      <Head>
        <title>Kekeli Dogbevi Jiresse</title>
        <meta
          name="description"
          content="Hey, I am Keli. It's really happy that you are reading this. If you are human, please prove if say hello on LinkedIn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="md:flex flex-row justify-between  xl:max-w-screen-2xl">
          <UserSection />
          <ProjectsSection />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
