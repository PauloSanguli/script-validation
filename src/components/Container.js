import styles from './Container.module.css'
import UseValidator from './hook/UseValidator'



export default function Container () {
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
                    <UseValidator typeInput="text" placeholderInput="message stay here" />
                </label>
            </aside>
            <footer className={styles.containerFooter}>
                <button onClick={console.log("tester button")}>Submit message</button>
            </footer>
        </div>
    )
}
