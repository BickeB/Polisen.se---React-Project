import useFetchData from "./FetchData";
import { useState } from "react";
import SearchInputField from "./SearchInputField";

const PoliceEvents = () => {
  const events = useFetchData();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const showMoreDetails = (id: string) => {
    setSelectedEvent(selectedEvent === id ? null : id);
  };

  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(
    (ev) =>
      ev.name.toLowerCase().includes(search.toLowerCase()) ||
      ev.summary.toLowerCase().includes(search.toLowerCase()) ||
      ev.location.name.toLowerCase().includes(search.toLowerCase()) ||
      ev.datetime.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="main-container bg-[#FAF9F6] pt-[5rem] pb-[5rem]">
      <div className="filtering-buttons flex justify-center items-center gap-8 mb-[5rem]">
        <button
          type="button"
          className="Hela landet bg-[var(--blue)] hover:text-[var(--yellow)] text-white text-2xl p-3 rounded-md min-w-[150px] "
        >
          Hela landet
        </button>
        <button
          type="button"
          className="Hela landet bg-[var(--blue)] hover:text-[var(--yellow)] text-white text-2xl p-3 rounded-md min-w-[150px]"
        >
          Stockholm
        </button>
        <button
          type="button"
          className="Hela landet bg-[var(--blue)] hover:text-[var(--yellow)] text-white text-2xl p-3 rounded-md min-w-[150px]"
        >
          Nära mig
        </button>
      </div>

      <div className="search-inputfield-container mb-5">
        {/* Skickar search och setSerach som props till denna komponent (SearchInputField) */}
        <SearchInputField search={search} setSearch={setSearch} />
      </div>

      <ul className="grid grid-cols-2 justify-items-center">
        {filteredEvents.map((ev) => (
          <li
            key={ev.id}
            className="flex flex-col items-start h-35 border-2 bg-[var(--blue)] text-white rounded-md  w-130 m-[1rem] p-[2rem] hover:border-2 hover:border-blue-950 hover:scale-[1.01] transition-transform duration-100 ease-in-out"
            onClick={() => showMoreDetails(ev.id)}
          >
            <h2 className="font-semibold">{ev.name}</h2>
            <p className="">{ev.summary}</p>
            {selectedEvent === ev.id && (
              <div className="mt-2 ">
                <p>{ev.datetime}</p>
                <p>{ev.type}</p>
                <p>{ev.location.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PoliceEvents;
