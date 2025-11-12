function SearchInputField({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <div>
      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className=" w-full">
          <input
            type="text"
            id="simple-search"
            className="h-[3rem] bg-gray-50 border-2 border-gray-600 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Sök efter händelse, brottstyp, plats, datum..."
            required
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
        <svg
          className="w-6 h-6 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="var(--yellow)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        {/* <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-[var(--blue)] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="var(--yellow)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button> */}
      </form>
    </div>
  );
}

export default SearchInputField;
