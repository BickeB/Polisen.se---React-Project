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

  const cities = ["Hela landet", "Stockholm", "Göteborg", "Malmö"];
  const crimeType = [
    "Alla",
    "Trafik",
    "Brand",
    "Misshandel",
    "Inbrott",
    "Stöld",
  ];
  /*  const [selectedCity, setSelectedCity] = useState(""); */

  const handleFilterButton = (value: string) => {
    setSearch(value);
  };

  return (
    <section className="main-container w-full bg-[var(--grey)] pt-[5rem] pb-[5rem] max-sm:">
      <div className="filtering-buttons flex justify-center items-center gap-8 mb-[2.5rem]">
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            className="Hela landet bg-white hover:text-[var(--blue)]  text-black text-2xl p-3 rounded-md min-w-[150px] "
            onClick={() =>
              handleFilterButton(city === "Hela landet" ? "" : city)
            }
          >
            {city}
          </button>
        ))}
      </div>

      <div
        className="brottstyp-container flex justify-center items-center gap-6
      mb-10"
      >
        {crimeType.map((crime) => (
          <button
            key={crime}
            type="button"
            className="Hela landet bg-white hover:text-[var(--blue)] text-black text-[16px] p-3 rounded-md min-w-[90px] "
            onClick={() => handleFilterButton(crime === "Alla" ? "" : crime)}
          >
            {crime}
          </button>
        ))}
      </div>

      <div
        className="search-inputfield-container mb-5"
        onClick={() => {
          handleFilterButton("");
        }}
      >
        {/* Skickar search och setSearch som props till denna komponent (SearchInputField) */}
        <SearchInputField search={search} setSearch={setSearch} />
      </div>

      <ul className="flex flex-wrap justify-around items-start">
        {filteredEvents.map((ev) => (
          <li
            key={ev.id}
            onClick={() => showMoreDetails(ev.id)}
            className={`flex flex-col items-start bg-white text-black rounded-md w-130 m-[1rem] p-[2rem]  hover:border-blue-950 hover:scale-[1.01] transition-transform duration-300 ease-in-out
            ${
              selectedEvent === ev.id ? "h-auto" : "h-[120px] overflow-hidden"
            }`}
          >
            <h2 className="font-semibold">{ev.name}</h2>
            <p className="">{ev.summary}</p>
            {selectedEvent === ev.id && (
              <div className="mt-2">
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
