import styles from '../../styles/Home.module.css'
import React from 'react'

function about() {

  return (
    <section className='container' id="section1">
      <div className="card mb-3" id={styles.card}>
        <div className="row align-items-center">
          <div className="col-md-10">
            <div>
              <p>
                I have experience in web development using programming language, JavaScript and TypeScript, my main skills are Front-end using React, Js and backend in Node, with sequelize and express.</p>
              <div className='row' id={styles.about}>
                <div className='col-md-5'>
                  <p><b>Age:</b> 23</p>
                  <p><b>Freelance:</b> Available</p>
                  <p><b>Phone:</b> +55(14)99719-0887</p>
                </div>
                <div className='col-md-7'>
                  <p><b>Residence:</b> Brazil</p>
                  <p><b>Address:</b> Bauru,SP</p>
                  <p><b>E-mail:</b> raphael.d.caetano48@gmail.com</p>
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