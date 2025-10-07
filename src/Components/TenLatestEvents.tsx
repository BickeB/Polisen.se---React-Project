import useFetchData from "./FetchData";

function TenLatestEvents() {
  const events = useFetchData();

  return (
    <>
      <div className="main-container">
        <h3 className="text-[25px] font-semibold ml-[6.8rem] text-[var(--blue)] border-b-2 border-[var(--yellow)] w-[270px] p-1 mx-auto ">
          10 senaste händelserna
        </h3>
        <div className="sections-container flex items-center justify-around mb-[5rem] ">
          <section className="left w-[500px]">
            <ul>
              {events.slice(0, 5).map((ev) => (
                <li
                  key={ev.id}
                  className="pt-3 pb-3 border-b-1 border-[var(--yellow)]"
                >
                  <h2 className="font-semibold">{ev.name}</h2>
                  <p className="">{ev.summary}</p>
                </li>
              ))}
            </ul>
          </section>
          <section className="right w-[500px]">
            <ul>
              {events.slice(5, 10).map((ev) => (
                <li
                  key={ev.id}
                  className="pt-3 pb-3 border-b-1 border-[var(--yellow)]"
                >
                  <h2 className="font-semibold">{ev.name}</h2>
                  <p className="">{ev.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default TenLatestEvents;
