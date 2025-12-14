
import { Context } from "../main";
import { useContext, useState } from "react";

export function EditNoteForm({id, title, description, setIsUpdated}) {
  const [new_title, setTitle] = useState(title);
  const [new_description, setDescription] = useState(description);
  const {store} = useContext(Context);
 
  return (
    <form className="container mx-auto">
      <input
        type="title"
        placeholder="Заголовок"
        className="border border-white/15 px-2 py-1 rounded outline-0 text-white mx-auto w-full mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={new_title}
      />
      <textarea
        type="description"
        placeholder="Начните ввод"
        className="border border-white/15 px-2 py-1 rounded outline-0 text-white mx-auto w-full min-h-60 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={new_description}
      />
      <button
        type="button"
        className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
        onClick={() => store.note_update(id=id, title=new_title, description=new_description, setIsUpdated=setIsUpdated)}
      >
        Сохранить
      </button>
    </form>
  );
}
