import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import { NoteDetails } from "./pages/NoteDetails"
import { CreateNote } from "./pages/CreateNote"


export function MainRoutes() {
    return <Router>
            <Routes>
                <Route path="/online-notes/" element={<App/>}/>
                <Route path="/online-notes/note/:id" element={<NoteDetails/>}/>
                <Route path="/online-notes/create_note" element={<CreateNote/>}/>
            </Routes>
        </Router>
}
