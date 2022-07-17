import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function contact() {

    return (
        <>
            <div className='container' id={styles.contact}>
                <form action="https://api.staticforms.xyz/submit" method="post" id="section3">
                    <input type="hidden" name="accessKey" value="deb009da-ebf4-4483-b706-f98776743537" className="btn" />
                    <input type="hidden" name="replyTo" value="@" />
                    <input type="hidden" name="redirectTo" value="https://raphaelcaetano.com" />
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>Name</label>
                            <input type='text' name="name" className='form-control' required></input>
                        </div>
                        <div className='col-md-6'>
                            <label>E-mail</label>
                            <input type='email' name="email" className='form-control' required></input>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-12'>
                            <label>Message</label>
                            <textarea cols={50} rows='2' name="message" className='form-control' required></textarea>
                        </div>
                    </div>
                    <br />
                    <input type='submit' value={'Submit'} className={styles.btnSubmit} id='btn'></input>
                    <button className={styles.btnCv}><a href='/curriculo.pdf' download>Download CV</a></button>
                </form>
            </div>
        </>
    )
}
export default contact