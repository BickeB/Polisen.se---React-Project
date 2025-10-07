import useFetchData from "./FetchData";
import { useState } from "react";

const PoliceEvents = () => {
  const events = useFetchData();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const showMoreDetails = (id: string) => {
    setSelectedEvent(selectedEvent === id ? null : id);
  };

  return (
    <section className="main-container bg-[#FAF9F6] pt-[5rem] pb-[5rem]">
      <ul className="grid grid-cols-2 justify-items-center">
        {events.map((ev) => (
          <li
            key={ev.id}
            className="flex flex-col items-start h-35 border-2 border-[var(--blue)] bg-[var(--blue)] text-white rounded-md  w-130 m-[1rem] p-[2rem]"
            onClick={() => showMoreDetails(ev.id)}
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
