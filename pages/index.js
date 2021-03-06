import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Header from '../components/HomePage/header';
import Works from '../components/PageProjects/works'
import About from '../components/HomePage/about'
import Contact from '../components/HomePage/contact'
import Footer from '../components/footer';
import Script from 'next/script';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Portifólio Raphael Caetano</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Nav />
      <Header />
      <div className='container'>
        <h3 className={styles.title}>Contact</h3>
        <div className='row align-items-center'>
          <div className='col-md-8'><About /></div>
          <div className='col-md-4'><Contact /></div>
        </div>
      </div>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
    </div>

  )
}
