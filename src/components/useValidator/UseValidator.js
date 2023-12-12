import './useValidator.css'
import ValidateText from './Event'
import { useState } from 'react'


export default function UseValidator({ typeInput, placeholderInput }){
    const [style, setStyle] = useState("fieldMessage")

    var changeStyle = (e) => {
        const response = ValidateText(e)
        if(!response){
            setStyle("styled")
        }else{
            setStyle("fieldMessage")
        }
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