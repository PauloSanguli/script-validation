import styles from './useValidator.module.css'
import ValidateText from './Event'


export default function UseValidator({ typeInput, placeholderInput }){
    return (
        <input 
            type={typeInput}
            placeholder={placeholderInput}
            className={styles.fieldMessage}
            onChange={ValidateText}
        />
    )
}