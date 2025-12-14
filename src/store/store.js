import { makeAutoObservable, set } from "mobx";
import AuthService from "../services/AuthService";
import NoteService from "../services/NoteService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email, username, password) {
    try {
      const response = await AuthService.registration(
        email,
        username,
        password
      );
      localStorage.setItem("token", response.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async note_create(title, description, setIsCreated) {
    try {
      await NoteService.create_note(title, description);
      setIsCreated(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async note_delete(id, setDeleteId) {
    try {
      await NoteService.delete_note(id);
      setDeleteId(id);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async note_update(id, title, description, setIsUpdated) {
    try {
      await NoteService.update_note(id=id, title=title, description=description);
      setIsUpdated(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/auth/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.access_token);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
