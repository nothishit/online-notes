import { Link } from "react-router-dom"

export function CreateNoteForm() {
    return <form className="container mx-auto">
        <input type="title" placeholder="Заголовок" className="border border-white/15 px-2 py-1 rounded outline-0 text-white mx-auto w-full mb-3"/>
        <textarea type="description" placeholder="Начните ввод" className="border border-white/15 px-2 py-1 rounded outline-0 text-white mx-auto w-full min-h-60 mb-3"/>
        <button type="submit" className="border border-white/15 px-2 py-1 rounded outline-0 text-white">Сохранить</button>
    </form>
}
