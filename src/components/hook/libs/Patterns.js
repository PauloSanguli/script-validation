import Symbols from './Symbols'
import Emojis from './Emojis'


//Create the expression regular of determinated word
export default function __GetPatterns__(textToSearch){
    const __symbols__ = Symbols()
    const __emojis__ = Emojis().emojisInPhrase

    let _firstLetter = textToSearch[0]
    let regExpr = `[${_firstLetter}]`
    let _text = textToSearch.replace(_firstLetter, "")

    for(var _char of _text){
        regExpr += `[${_char}${__symbols__}${__emojis__}]`
    }

    regExpr += `[s]?`

    return new RegExp(regExpr)
}
