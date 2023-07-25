// import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="min-h-screen bg-main1 font-main">
        <header className="flex items-center justify-between drop-shadow-lg h-12 px-4 bg-main1 font-logo">
          <div>
            <p className="text-text1 text-2xl">
              <span className="text-logoQ font-bold">Q</span>uoterr
            </p>
          </div>
          <div>Toggler</div>
        </header>
        <div className="flex flex-col items-center min-h-48 justify-center">
          <p className="text-xl">
            Welcome to <span className="font-logo">Quoterr</span>
          </p>
          <p className="text-center text-base">
            Here Inspiration Awaits! Discover a world of wisdom, inspiration,
            and thought-provoking quotes. Whether you seek motivation, guidance,
            or a moment of reflection, Quoterr has you covered. Explore our vast
            collection of quotes from renowned authors, thinkers, and
            visionaries. Let the words of wisdom inspire and uplift you. Get
            ready to embark on a journey of enlightenment and empowerment. Start
            your day with a dash of inspiration - Quoterr awaits!
          </p>
        </div>
        <Card />
      </div>
    </>
  );
}

export default App;
