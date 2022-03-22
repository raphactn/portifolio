import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";
function works(){
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <main className='container' id="section2">
        <h3>My Works</h3>
        <div>
          <Slider {...settings} className={styles.slider} id="section2">
            <div>
              <Image src={'/emp.png'} width={280} height={200} alt="emporium acrilicos"></Image>
            </div>
            <div>
              <Image src={'/neon.png'} width={280} height={200} alt="neon personalizado"></Image>
            </div>
            <div>
              <Image src={'/acrilic.png'} width={280} height={200} alt="acrilic"></Image>
            </div>
            <div>
              <Image src={'/eco.png'} width={280} height={200} alt="ecoville"></Image>
            </div>
            <div>
              <Image src={'/detail.png'} width={280} height={200} alt="xdetail"></Image>
            </div>
            <div>
              <Image src={'/sim.png'} width={280} height={200} alt="sim soluções"></Image>
            </div>
          </Slider>
        </div>

        <div className="container" id={styles.second}>
        <h3>
        About Development
        </h3>
        <br/>
        <p className="text-center text2">
        Tools and methods used in the development of web pages.
        </p>
        <br/>
        <div className="row sessao3">
            <div className="col-md-4">
                <div className={styles.card}>
                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-aspect-ratio-fill" viewBox="0 0 16 16">
                            <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1h-3zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1h3z"></path>
                        </svg>
                        <h5 className="card-title">Responsive</h5>
                        <p className="card-text">
                        Landing Page templates have a responsive look and are ideal for mobile use.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.card}>
                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
                            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"></path>
                        </svg>
                        <h5 className="card-title">Framework Bootstrap</h5>
                        <p className="card-text">
                        Landing Pages created using the Bootstrap framework.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={styles.card}>
                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" fill="currentColor" className="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"></path>
                        </svg>
                        <h5 className="card-title">Light Layout</h5>
                        <p className="card-text">
                        Landing Pages with a light and dynamic layout, always prioritizing fast loading.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </main>
    )
}

export default works