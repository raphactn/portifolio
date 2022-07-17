import Works from "../components/PageProjects/works";
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import Footer from "../components/footer";

export default function Projects() {
    return(
        <div className={styles.container}>
        <Nav/>
        <h3 className="text-center">Projects</h3>
        <Works/>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
        </div>
    )
};
