import React, { useState } from "react";

const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
 
];

const Content = () => {
  const [joke, setJoke] = useState("Click the button to see a joke!");

  const showRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div>
      <p>{joke}</p>
      <button onClick={showRandomJoke}>Get a Joke</button>
    </div>
  );
};

export default Content;

