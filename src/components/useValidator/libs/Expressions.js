
//Get the start, middle and end of an array
function GetOptionsArray(array) {
    const start = 1
    const end = array.length
    const __middle__ = end%2==0? end/2: (end-1)/2

    return {
        "start": start,
        "end": end,
        "middle": __middle__
    }
}

//Get the expressions for filter an the text
export default function Expressions () {
    const expressions = [
        "",
        "puta",
        "cona",
        "caralho",
        "merda",
        "burro",
        "fuck",
        "porra",
        "idiota",
        "foder",
        "fodas",
        "foda",
        "burra"
    ]
    const __ordened__ = expressions.sort()
    return {
        "expressions": __ordened__,
        "start": GetOptionsArray(__ordened__).start,
        "middle": GetOptionsArray(__ordened__).middle,
        "end": GetOptionsArray(__ordened__).end
    }
}
