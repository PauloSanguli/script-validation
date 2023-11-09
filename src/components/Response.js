import styles from './Response.module.css'


export default function () {
    return (
        <div className={styles.containerResponse}>
            <p>Text inserted</p>
            <div className={styles.responseButtons}>
                <button>See ofenses</button>
                <button>See symbols</button>
            </div>
        </div>
    )
}