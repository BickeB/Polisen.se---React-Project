import { useEffect, useState } from "react";

function useFetchData() {
  const [events, setEvents] = useState<any[]>([]);
  const API_URL = "https://polisen.se/api/events";

  useEffect(() => {
    const eventData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Hämtningen av data misslyckades");
        }
        const data = await response.json();
        setEvents(data.slice(0, 50));
        console.log(data);
      } catch (error) {
        console.error(error, "Error inträffade.");
      }
    };
    eventData();
  }, []);

  return events;
}
export default useFetchData;
