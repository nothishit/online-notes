
import { useDebounce } from "./hooks/useDebounce"
import  NoteCard  from "./components/NoteCard"
import { NOTES } from "./notes.data"
import { useMemo, useState } from "react"
import { Header } from "./components/Header"
import { AddNewNoteBtn } from "./components/AddNewNoteBtn"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const debounsedSearch = useDebounce(searchTerm, 500)

  const notes = useMemo(() => {
    return NOTES.filter(note => 
      note.title.toLowerCase().includes(debounsedSearch.toLowerCase())
    )
  }, [debounsedSearch])

  return (
    <>
      <Header isSearchHidden={false} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <main className="grid grid-cols-3 gap-6">
        {
          notes.map(note => (
            <NoteCard key={note.id} id={note.id} title={note.title} description={note.description}/>
          ))
        }
        <AddNewNoteBtn />
      </main>
    </>
  )
}

export default App
