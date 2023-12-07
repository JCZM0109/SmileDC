import Head from "next/head";
import { MainPage } from "@/components/MainPage";
import "../config/i18next.config";
import { Navbar } from "@/components/Layout/Navbar";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NoSSR from "react-no-ssr";

const Home = () => {
  return (
    <Suspense>
      <Head>
        <title>Smile Design Center</title>
        <meta name="description" content="Experience the difference exceptional dental care can make. Our compassionate team is dedicated to helping you achieve optimal oral health. Schedule a consultation now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link href="https://cdn.jsdelivr.net/npm/i18next-http-backend@1.3.1/i18nextHttpBackend.min.js"></link>
      </Head>
      <main>
        <NoSSR>
          <Navbar />
          <MainPage />
        </NoSSR>
      </main>
    </Suspense>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {}, // Deshabilitar SSR para esta página
  };
};

export default Home;
