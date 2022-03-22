import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef, useLayoutEffect } from 'react'

function about(){

    return(
        <section className='container' id="section1">
        <div className="card mb-3" id={styles.card}>
          <div className="row g-0">
            <div className="col-md-3">
              <Image src={'/imagem 3.png'} width={350} height={250} alt="raphael caetano"></Image>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <p className="card-text">
                 {`Hello! I'm Raphael Caetano, UX/UI Designer and Front-end Developer in São Paulo. I've
                  Rich experience in web design and website building. Using the best methods and technologies for better and better results.`}</p>
                <div className='row' id={styles.about}>
                  <div className='col-md-5'>
                    <p><b>Age:</b> 23</p>
                    <p><b>Freelance:</b> Available</p>
                    <p><b>Phone:</b> +55(14)99719-0887</p>
                  </div>
                  <div className='col-md-7'>
                    <p><b>Residence:</b> Brazil</p>
                    <p><b>Address:</b> Bauru,SP</p>
                    <p><b>E-mail:</b> contato@raphaelcaetano.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default about