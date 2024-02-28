import styles from './Card.module.css'
import love from '../assets/love.png'


function Card(props) {



    return(
        <div className={styles.card}>
            <div className={styles.imContainer}>
                <img src={props.source}></img>
            </div>
            <div className={styles.beki}>
                <div className={styles.middle}>
                    <div className={styles.ktiba}>
                        <h4 className="price">{`$${props.price}`}</h4>
                        <p className="text">{props.text}</p>
                    </div>
                    <button className={styles.buttonHeart}><img src={love}></img></button>
                </div>
                <button className={styles.command}>Commander</button>
            </div>
        </div>
    )
}

export default Card