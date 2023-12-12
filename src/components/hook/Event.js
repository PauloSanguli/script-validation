import Expressions from './libs/Expressions'
import Filter from './libs/FilterExpressions'



//Event of input has a new charater
export default function ValidateText (e) {
    const __value__ = e.target.value
    if(Filter(__value__.toLowerCase(),Expressions().start, Expressions().end, Expressions().expressions)){
/* 
        document?.getElementById('button-submit').style.background = "red"

        console.log("Message not valid") */
        return false
    }
    return true
}
