import React from "react";

function Card() {
  const quotes = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
      author: "Deon",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
      author: "Deon",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
      author: "Deon",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
      author: "Deon",
    },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi praesentium reprehenderit dolorem.",
    //   author: "Deon",
    // },
  ];
  return (
    <>
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center min-h-36 sm:h-36 md:h-36 lg:h-36 p-2 rounded-md bg-main2 text-text1"
        >
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
