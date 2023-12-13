import './useValidator.css'
import ValidateText from './Event'
import { useState } from 'react'


export default function UseValidator({ typeInput, placeholderInput, response, buttonRef }){
    const [style, setStyle] = useState("fieldMessage")

    var changeStyle = (e) => {
        const response_filter = ValidateText(e)
        response(response_filter)
        
        if(!response_filter){
            setStyle("styled")
            alterButton(0.6)
        }else{
            setStyle("fieldMessage")
            alterButton(1)
        }

    }

    var alterButton = (opacity_value) => {
        buttonRef.current.style.opacity = opacity_value
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