import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import NoteService from "./services/NoteService";
import { useContext, useEffect, useMemo, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { Context } from "./main";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [deleteId, setDeleteId] = useState(-1);
  const debounsedSearch = useDebounce(searchTerm, 500);

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
    const init = async () => {
      if (localStorage.getItem("token") && !store.isAuth) {
        await store.checkAuth();
      }
      if (store.isAuth) {
        getNotes();
      } else {
        navigate("/online-notes/login", { replace: true });
      }
    };
    init();
  }, [store.isAuth]);

  useEffect(() => {
    if (deleteId > -1) {
      setNotes((prevNotes) =>
        prevNotes.filter((note) => {
          return note.id !== deleteId;
        })
      );
      setDeleteId(-1);
    }
  }, [deleteId]);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(debounsedSearch.toLowerCase())
    );
  }, [debounsedSearch, notes]);

  if (store.isLoading || !store.isAuth) {
    return <div></div>;
  }

  return (
    <>
      <Header
        store={store}
        isSearchHidden={false}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      {filteredNotes.length === 0 && searchTerm.length === 0 ? (
        <>
          <Link to="/online-notes/create_note">
            <button
              type="button"
              className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
            >
              Создать заметку
            </button>
          </Link>
          <h1 className="mt-5">У вас пока нет заметок.</h1>
        </>
      ) : filteredNotes.length === 0 && searchTerm.length > 0 ? (
        <>
          <h1>По вашему запросу ничего не нашлось.</h1>
        </>
      ) : (
        <>
          <Link to="/online-notes/create_note">
            <button
              type="button"
              className="border border-white/15 px-2 py-1 rounded outline-0 text-white ml-5"
            >
              Создать заметку
            </button>
          </Link>
          <main className="grid grid-cols-3 gap-6 w-full mt-8">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                setDeleteId={setDeleteId}
              />
            ))}
          </main>
        </>
      )}
    </>
  );
}

export default observer(App);
