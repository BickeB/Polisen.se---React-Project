import "./App.css";
import PoliceEvents from "./Components/PoliceEvents";
import TenLatestEvents from "./Components/TenLatestEvents";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-[var(--blue))] font-bold text-5xl text-center mt-[1rem] mb-[4rem] p-[1rem] border-b-2 border-[var(--yellow)] w-[500px] mx-auto  ">
        Polisens Händelser
      </h1>
      <TenLatestEvents />
      <PoliceEvents />
      <Footer />
    </>
  );
}

export default App;
