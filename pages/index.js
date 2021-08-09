import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import VideoSection from "../components/VideoSection";
import ApplySection from "../components/ApplySection";
import Footer from "../components/Footer";
import BrandsSection from "../components/BrandsSection";

const Container = styled.div`
  width: min(100%, 90rem); // 1440px
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Garousian</title>
        <meta name="description" content="just another website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <ServicesSection />
        <VideoSection />
        <TestimonialSection />
        <BrandsSection />
        <ApplySection />
        <Footer />
      </Container>
    </>
  );
}
