import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { NOTES } from "../notes.data"
import { Header } from "../components/Header"

export function NoteDetails() {
    const { id } = useParams()

    const note = useMemo(() => {
        return NOTES.find(note => note.id === parseInt(id, 10))
    }, [id])

    return <div className="card_details">
        <Header isSearchHidden={true} />
        <h1>{note.title}</h1>
        <p>{note.description}</p>
    </div>
}
