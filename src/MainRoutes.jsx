import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import { NoteDetails } from "./pages/NoteDetails"
import { CreateNote } from "./pages/CreateNote"


export function MainRoutes() {
    return <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/note/:id" element={<NoteDetails/>}/>
                <Route path="/create_note" element={<CreateNote/>}/>
            </Routes>
        </Router>
}
