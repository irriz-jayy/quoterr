import React from "react";
import back from "../assets/back.png";
import Card from "./Card";

function Categories() {
  return (
    <>
      <div className="min-h-screen bg-main1 font-main">
        <header className="flex items-center justify-center drop-shadow-lg h-12 px-4 bg-main1 font-logo">
          <div>
            <p className="text-text1 text-2xl">
              <span className="text-logoQ font-bold">Q</span>uoterr
            </p>
          </div>
        </header>
        <div className="min-h-[90vh] border">
          <div className="border h-96">
            <div className="flex items-center w-full h-12 text-left text-xl p-2">
              <span className="h-12 mr-2">
                <a href="/">
                  <img src={back} className="h-12" />
                </a>
              </span>
              Categories
            </div>
            <div className="min-h-[75vh] grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
