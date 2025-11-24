import { Link } from "react-router-dom"

export function AddNewNoteBtn() {
    return <Link to={`/create_note`} className="addNoteBtn"></Link>
}
