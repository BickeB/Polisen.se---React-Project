import useFetchData from "./FetchData";

function TenLatestEvents() {
  const events = useFetchData();

  return (
    <>
      <div className="main-container">
        {/* Gör H3:an responsiv */}
        <div className="title-container">
          <h3 className="text-[25px] font-semibold text-[var(--blue)] border-b-2 border-[var(--yellow)] w-[300px] p-1 ml-[100px]">
            10 senaste händelserna
          </h3>
        </div>
        <div className="sections-container mb-[5rem] grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-x-12 ">
          <div className="left-container">
            <section className="section-list">
              <ul className="left-list">
                {events.slice(0, 5).map((ev) => (
                  <li
                    key={ev.id}
                    className="pt-3 pb-3 border-b border-[var(--yellow)] min-h-[100px]"
                  >
                    <h2 className="font-semibold">{ev.name}</h2>
                    <p className="">{ev.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {
            <div className="right-container">
              <section>
                <ul className="right-list">
                  {events.slice(5, 10).map((ev) => (
                    <li
                      key={ev.id}
                      className="pt-3 pb-3 border-b border-[var(--yellow)] min-h-[100px]"
                    >
                      <h2 className="font-semibold">{ev.name}</h2>
                      <p className="">{ev.summary}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default TenLatestEvents;
