import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProjectsSection from "../components/ProjectsSection";
import UserSection from "../components/UserSection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="xl:max-w-scree-2xl">
      <Head>
        <title>Kekeli Dogbevi Jiresse</title>
        <meta
          name="description"
          content="Hey, I am Keli. It's really happy that you are reading this. If you are human, please prove if say hello on LinkedIn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 lg:p-32 h-screen flex flex-row justify-between  relative">
        <UserSection />
        <ProjectsSection />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
