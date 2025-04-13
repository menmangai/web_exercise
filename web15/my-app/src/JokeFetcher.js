import React, { useState, useEffect } from "react";

const JokeFetcher = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeFetcher;

