import styles from './Container.module.css'
import UseValidator from './useValidator/UseValidator'
import { useState, useRef } from 'react'



export default function Container ({ textResponsed, textInsertedRef }) {
    const [response, setResponse] = useState(true)
    const buttonRef = useRef(null)
    const inputRef = useRef(null)

    var setTextFiltered = () => {
        if(response){
            textResponsed(inputRef.current.value)
        }else{
            inputRef.current.style.transition = "all .3s"
            inputRef.current.style.boxShadow = "0 0 7px red"
            setTimeout(() => {
                inputRef.current.style.boxShadow = "0 0 2px red"
            }, 1000)
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.containerHeader}>
                <p>Welcome to your manage <span>message</span></p>
                <p>write the message bellow!</p>
            </header>
            <aside className={styles.containerAside}>
                <p>Write the message</p>
                <label>
                    <span>message</span>
                    <UseValidator typeInput="text" reffer_={inputRef} placeholderInput="message stay here" response={setResponse} buttonRef={buttonRef}/>
                </label>
            </aside>
            <footer className={styles.containerFooter}>
                <button ref={buttonRef} onClick={setTextFiltered}>Submit message</button>
            </footer>
        </div>
    )
}

