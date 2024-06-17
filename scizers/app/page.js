import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './globals.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Harbour Lights</title>
        <meta name="description" content="Seaside Apartments in Dubai Maritime City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
