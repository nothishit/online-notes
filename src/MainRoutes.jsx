import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { NoteDetails } from "./pages/NoteDetails";
import CreateNote from "./pages/CreateNote";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import EditNote from "./pages/EditNote";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/online-notes" element={<App />} />
        <Route path="/online-notes/note/:id" element={<NoteDetails />} />
        <Route path="/online-notes/edit_note/:id" element={<EditNote />} />
        <Route path="/online-notes/create_note" element={<CreateNote />} />
        <Route path="/online-notes/registration" element={<Registration />} />
        <Route path="/online-notes/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
