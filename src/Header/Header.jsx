import styles from './Header.module.css'
import logo from '../assets/logo.png'
import ktibetLogo from '../assets/Brand.png'
import profile from '../assets/profile.png'
import message from '../assets/message.png'
import heart from '../assets/heart.png'
import cart from '../assets/cart.png'



function Header() {
    return (
        <header>
            <a href="#">

                <div className={styles.logo}>
                    <div id={styles.iconLogo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <img src={ktibetLogo} alt="ktibetLogo" />
                </div>
            </a>
            <form action="" style={{display:'flex', height:'40px'}}>
                <input id={styles.search} type="text" defaultValue={'Search'} />         
                    <select name="" id={styles.select}>
                        <option value="">All category</option>
                        <option value="">barra</option>
                        <option value="">emchi</option>
                    </select>
                <button id={styles.buttonSearch}>Search</button>
            </form>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <a href="#" className={styles.i}>
                        <img className={styles.icon} src={profile} alt="" />
                        <span>Profile</span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="#" className={styles.i}>
                        <img className={styles.icon} src={message} alt="" />
                        <span>Message</span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="#" className={styles.i}>
                        <img className={styles.icon} src={heart} alt="" />
                        <span>Orders</span>
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="#" className={styles.i}>
                        <img className={styles.icon} src={cart} alt="" />
                        <span>My cart</span>
                    </a>
                </li>
            </ul>
        </header>

    )
}
export default Header