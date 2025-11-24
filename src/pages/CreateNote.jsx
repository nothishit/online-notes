
import { Header } from "../components/Header"
import { CreateNoteForm } from "../components/CreateNoteForm"

export function CreateNote() {

    return <div className="card_details">
        <Header isSearchHidden={true} />
        <CreateNoteForm />
    </div>
}
