import styles from './Response.module.css'
import { useRef, useState } from 'react'


export default function () {
    const [textResponsed,setTextResponsed] = useState("Text inserted")
    const textInsertedRef = useRef(null)

    return (
        <div className={styles.containerResponse}>
            <p ref={textInsertedRef}>{textResponsed}</p>
            <div className={styles.responseButtons}>
                <button>See ofenses</button>
                <button>See symbols</button>
            </div>
        </div>
    )
}