import { Link } from "react-router-dom"

export function AddNewNoteBtn() {
    return <Link to={`/online-notes/create_note`} className="addNoteBtn"></Link>
}
