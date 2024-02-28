import styles from './Footer.module.css'
import logo from '../assets/logo.png'
import ktibetLogo from '../assets/Brand.png'
import play from '../assets/play.png'
import app from '../assets/app.png'
import fb from '../assets/fb.png'
import twi from '../assets/twi.png'
import lnk from '../assets/lnk.png'
import ins from '../assets/ins.png'
import yt from '../assets/yt.png'




function Footer(){



    return(
        <>        
            <div className={styles.containerr}>
                <div className={styles.lowel}>
                    <a href="#">
                        <div className={styles.logo}>
                            <div id={styles.iconLogo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <img src={ktibetLogo} alt="ktibetLogo" />
                        </div>
                    </a>
                    <p>
                    Best information about the company gies here but now lorem ipsum is
                    </p>
                    <div className={styles.tsawer}>
                        <img src={fb} alt="" />
                        <img src={twi} alt="" />
                        <img src={lnk} alt="" />
                        <img src={ins} alt="" />
                        <img src={yt} alt="" />
                    </div>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.i}>About</li>
                        <li className={styles.i}>About Us</li>
                        <li className={styles.i}>Find store</li>
                        <li className={styles.i}>Categories</li>
                        <li className={styles.i}>Blogs</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.i}>Patnership</li>
                        <li className={styles.i}>About Us</li>
                        <li className={styles.i}>Find store</li>
                        <li className={styles.i}>Categories</li>
                        <li className={styles.i}>Blogs</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.i}>Informatino</li>
                        <li className={styles.i}>Help Center</li>
                        <li className={styles.i}>Money Refund</li>
                        <li className={styles.i}>Shipping</li>
                        <li className={styles.i}>Contact us </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.i}>For users</li>
                        <li className={styles.i}>Login</li>
                        <li className={styles.i}>Register</li>
                        <li className={styles.i}>Settings</li>
                        <li className={styles.i}>My Orders</li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.i}>Get app</li>
                        <li className={styles.i}><button className={styles.button}><img src={app} alt="" /></button></li>
                        <li className={styles.i}><button className={styles.button}><img src={play} alt="" /></button></li>
                    </ul>
                </div>
            </div>
            <div className={styles.ekher}>
                © 2023 Ecommerce
            </div>
        </>
    )
}

export default Footer