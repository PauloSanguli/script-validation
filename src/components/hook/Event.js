import Expressions from './libs/Expressions'
import Filter from './libs/FilterExpressions'



//Event of input has a new charater
export default function ValidateText (e) {
    const __value__ = e.target.value
    if(Filter(__value__.toLowerCase(),Expressions().start, Expressions().end, Expressions().expressions)){

        const buttonSubmit = document.getElementById('button-submit')

        buttonSubmit.style.bgColor = "red"

        console.log("Message not valid")
    }
}