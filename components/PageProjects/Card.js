import styles from '../../styles/Home.module.css'

const Card = ({ src, title, description, modal, img }) => {
    return (
        <>
            <div className="modal fade" id={modal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe src={src} width={'100%'} height={600}></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button type="button" className={styles.btnCard} data-bs-toggle="modal" data-bs-target={`#${modal}`}>
                            Ver Mais
                        </button>
                    </div>
            </div>
            </div>
        </>
    )
};

export default Card;