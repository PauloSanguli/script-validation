
export default function Paragraph({ textRef, text }) {
    return (
        <>
            <p ref={textRef}>{text}</p>
        </>
    )
}
