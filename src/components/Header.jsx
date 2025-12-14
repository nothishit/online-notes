import { Link } from "react-router-dom";
import { Search } from "./Search";

export function Header({ store, isSearchHidden, setSearchTerm, searchTerm }) {
  return (
    <header className="mb-10 mt-10 flex items-center justify-between w-5xl mx-auto">
      <Link to={`/online-notes`}>
        <h1>Online Notes</h1>
      </Link>
      <div className="flex items-center justify-between space-x-5">
        {store ? store.isAuth && !store.user.is_activated ? <h3>Активируйте аккаунт!!</h3> : <></> : <></>}
        <Search
          isSearchHidden={isSearchHidden}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        {store ? store.isAuth ? <h2>{store.user.username}</h2> : <></> : <></>}
        <button
          className="border border-white/15 px-2 py-1 rounded outline-0 text-white"
          onClick={() => store.logout()}
          type="primary"
          hidden={store ? (store.isAuth ? false : true) : true}
        >
          Выйти
        </button>
      </div>
    </header>
  );
}
export default Header;
