import { Header } from "../components/Header";
import { EditNoteForm } from "../components/EditNoteForm";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import NoteService from "../services/NoteService";

export function EditNote() {
  const { id } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const [notes, setNotes] = useState([]);
  const { store } = useContext(Context);
  const navigate = useNavigate();

  async function getNotes() {
    try {
      const response = await NoteService.fetchNotes();
      setNotes(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    if (!store.isAuth && !store.isLoading) {
      navigate("/online-notes/login", { replace: true });
    } else {
      getNotes();
    }
  }, []);

  const note = useMemo(() => {
    return notes.find((note) => note.id === parseInt(id, 10));
  }, [notes]);

  useEffect(() => {
    if (isUpdated) {
      setIsUpdated(false);
      navigate("/online-notes", { replace: true });
    }
  }, [isUpdated]);

  return (
    <div className="card_details">
      <Header isSearchHidden={true} />
      {
        (note) ? (
          <EditNoteForm
          id={note.id}
          title={note.title}
          description={note.description}
          setIsUpdated={setIsUpdated}
        />
        ) : (<></>)
      }
    </div>
  );
}

export default observer(EditNote);
