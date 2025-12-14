import { Header } from "../components/Header";
import { CreateNoteForm } from "../components/CreateNoteForm";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

export function CreateNote() {
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  useEffect(() => {
    if (isCreated) {
      setIsCreated(false);
      navigate("/online-notes", { replace: true });
    }
  }, [isCreated]);

  return (
    <div className="card_details">
      <Header isSearchHidden={true} />
      <CreateNoteForm setIsCreated={setIsCreated} />
    </div>
  );
}

export default observer(CreateNote);
