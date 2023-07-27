import React from "react";
import back from "../assets/back.png";
import Card from "./Card";

function Categories() {
  const categories = [
    {
      name: "Emotions",
      items: [
        { text: "Love", description: "Description for Love" },
        { text: "Happiness", description: "Description for Happiness" },
        { text: "Sadness", description: "Description for Sadness" },
        { text: "Anger", description: "Description for Anger" },
      ],
    },
    {
      name: "Health",
      items: [
        { text: "Fitness", description: "Description for Fitness" },
        { text: "Nutrition", description: "Description for Nutrition" },
        { text: "Mental Health", description: "Description for Mental Health" },
        { text: "Wellness", description: "Description for Wellness" },
      ],
    },
  ];

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
        <div className="min-h-[90vh]">
          <div className="flex items-center w-full h-12 text-left text-xl p-2">
            <span className="h-12 mr-2">
              <a href="/">
                <img src={back} className="h-12" />
              </a>
            </span>
            Categories
          </div>
          {/* Category card */}
          <div className="min-h-[75vh] mt-2 border">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="h-8 text-center text-lg">
                  <p>{category.name}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col items-center justify-center text-center min-h-36 sm:h-36 md:h-36 lg:h-36 p-2 rounded-md bg-main2 text-text1"
                    >
                      <p>{item.text}</p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
