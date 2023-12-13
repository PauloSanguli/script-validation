import styles from './Response.module.css'
import { useRef, useState } from 'react'
import Paragraph from './Paragraph/Paragraph'

export default function ({ textResponsed, textInsertedRef }) {

    return (
        <div className={styles.containerResponse}>
            <Paragraph textRef={textInsertedRef} text={textResponsed} />
            <div className={styles.responseButtons}>
                <button>See ofenses</button>
                <button>See symbols</button>
            </div>
        </div>
    )
}