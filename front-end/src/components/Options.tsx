function Options({ searchState }:
  { searchState: { search: string, setSearch: (p: string) => void } }) {
  return (
    <div className="bg-blue-200 w-[80%] flex flex-row justify-between p-2">
      <button>+</button>
      <input
        type="text"
        value={searchState.search}
        onChange={({ target: { value } }) => searchState.setSearch(value)} placeholder="search" />
      <button>del</button>
    </div>
  )
}

export default Options
