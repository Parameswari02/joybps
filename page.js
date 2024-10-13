
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>JoyBPS - Digital Marketing & SEO Experts</title>
        <meta name="description" content="We are a leading digital marketing agency specializing in SEO, PPC, and social media marketing." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
