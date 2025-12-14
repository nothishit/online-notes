import $api from "../http";


export default class NoteService {
    static async fetchNotes() {
        return $api.get("/note/get_user_notes")
    }
    
    static async create_note(title, description) {
        return $api.post("/note/create_user_note", {title, description})
    }

    static async delete_note(id) {
        return $api.delete(`/note/delete_user_note/${id}`)
    }

    static async update_note(id, title, description) {
        return $api.patch(`/note/update_user_note/${id}`, {title, description})
    }
}