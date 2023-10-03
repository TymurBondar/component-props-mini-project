export default function Article({title, date, preview, minutes}){
    let emojis = "";
    if (minutes < 30){
        emojis = `☕️`.repeat( Math.ceil(minutes / 5));
    }
    else {
        emojis = `🍱`.repeat(Math.ceil(minutes / 10));
    }
    return(
        <article>
            <h3>{title}</h3>
            {date ? <small>{date}</small> : <small>January 1, 1970</small>}
            <small> {emojis} {minutes} minutes read</small>
            <p>{preview}</p>
        </article>
    )
}