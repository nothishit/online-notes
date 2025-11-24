import { memo } from "react"
import { Link } from "react-router-dom"

function NoteCard({id, title, description}) {
    let res_title, res_description;
    if (title.length > 8) {
        res_title = title.slice(0, 9) + "..."
    } else {
        res_title = title
    } 
    if (description.length > 220) {
        res_description = description.slice(0, 221) + "..."
    } else {
        res_description = description
    }

    return <Link to={`/note/${id}`}><div className="card bg-neutral-400">
        <h1 className="card_title">{res_title}</h1>
        <p className="card_description">{res_description}</p>
    </div></Link>
}

export default memo(NoteCard)