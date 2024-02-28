import styles from './Above.module.css'
import noktaRose from '../assets/ptrose.png'
import noktaKahla from '../assets/ptakhel.png'
import { useState } from 'react'
import Nkot from '../nkot/Nkot.jsx'


function Above() {

    // const [show,setShow] = useState(true);
    


    return (
        <div className={styles.container}>
            <h5>Latest trending</h5>
            <h2>Electronic items</h2>
            <button>Learn more</button>
            <div className={styles.noukat}>
              <Nkot></Nkot>
            </div>
        </div>
    )
}
export default Above

// function toggle(p) {
//     const [test,setTest]=useState(true)
//     return(
//         <div>
//             {test? <img src={p} alt="" />:null}
//         </div>
//     )
// }