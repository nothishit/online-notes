

export function Search({isSearchHidden, setSearchTerm, searchTerm}) {
    return <input type="search" value={searchTerm} onChange={e => {
            setSearchTerm(e.target.value)
            }}
            placeholder="Найти..."
            className="border border-white/15 px-2 py-1 rounded outline-0 text-white "
            hidden={isSearchHidden}
            />
}
