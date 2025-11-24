import { Link } from "react-router-dom"
import { Search } from "./Search"

export function Header({isSearchHidden, setSearchTerm, searchTerm}) {
    return <header className="mb-10 flex items-center justify-between">
                <Link to={`/online-notes/`}><h1>Online Notes</h1></Link>
                <Search isSearchHidden={isSearchHidden} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            </header>
}
