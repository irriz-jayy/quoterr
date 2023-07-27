import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import { fetchQuotes } from "../api/api";
function Homepage() {
  const [search, setSearch] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleSearch = () => {
    console.log({ search });
  };

  useEffect(() => {
    // Fetch quotes when the component mounts
    fetchQuotes(10)
      .then((response) => {
        // Update the quotes state with the fetched data
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors if needed
        console.error("Error fetching quotes:", error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-main1 font-main">
      <header className="flex items-center justify-center drop-shadow-lg h-12 px-4 bg-main1 font-logo">
        <div>
          <p className="text-text1 text-2xl">
            <span className="text-logoQ font-bold">Q</span>uoterr
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center min-h-48 justify-center p-2">
        <p className="text-xl">
          Welcome to <span className="font-logo">Quoterr</span>
        </p>
        <p className="text-center text-base">
          Discover a world of wisdom, inspiration, and thought-provoking quotes.
        </p>
        <div className="flex w-3/4 mt-2">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search category"
            className="w-3/4 h-10 pl-2 bg-main2 rounded-md mr-2 text-text1"
          />
          <button
            onClick={handleSearch}
            className="rounded-md w-1/4 bg-button hover:bg-opacity-70"
          >
            Search
          </button>
        </div>
        <div className="flex w-3/4">
          <a
            href="/categories"
            className="flex items-center justify-center cursor-pointer w-full h-10 rounded-md my-2 bg-button hover:bg-opacity-30"
          >
            Popular categories
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <Card quotes={quotes} />
      </div>
    </div>
  );
}

export default Homepage;
