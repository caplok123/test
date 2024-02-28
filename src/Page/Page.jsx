import styles from './Page.module.css'
import Card from '../Card/Card.jsx'
import taswira from '../assets/tel.png'







function Page(){

    return (
        <div className={styles.container}>
            <div className={styles.ktiba}>
                <h1>Our products</h1>
                <h5>Latest trending</h5>
            </div>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
            <Card source={taswira} price='99.50' text='GoPro HERO6 4K Action Camera - Black'/>
        </div>
    )
}

export default Page