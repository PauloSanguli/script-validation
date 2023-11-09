import __GetPattern__ from './Patterns'


//call the function of filter
export default function Filter(expression, start, end, expressions) {
    return __FindWord__(start, end, expression, expressions)
}

//Filter the text, and find the expressions ofensives
function __FindWord__(start, end, expression, expressions){
    let index = start
    let RESPONSE = new Array()
    let testResponse = false
    let _response = false

    while(index!=end){
        let regExpr = __GetPattern__(expressions[index])
        
        _response = regExpr.test(expression)
        
        if(_response){
            RESPONSE.push({
                "isofensive": _response,
                "ofense": expressions[index]
            })
            testResponse = true
        }
        index++
    }
    return testResponse
}

