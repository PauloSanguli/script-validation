import './useValidator.module.css'
import ValidateText from './Event'
import { useState } from 'react'


export default function UseValidator({ typeInput, placeholderInput }){
    const [style, setStyle] = useState("fieldMessage")

    var changeStyle = (e) => {
        const response = ValidateText(e)
    }

    return (
        <input 
            type={typeInput}
            placeholder={placeholderInput}
            className={style}
            onChange={changeStyle}
        />
    )
}