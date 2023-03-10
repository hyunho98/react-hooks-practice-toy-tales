import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  const toyCards = toys.map((toy) => 
    <ToyCard 
      key={toy.id} 
      id={toy.id} 
      name={toy.name} 
      img={toy.image} 
      likes={toy.likes}
      onToyDelete={handleToyDelete}
    />
  )

  function handleToyDelete(id) {
    setToys(toys.filter((toy) => toy.id !== id))
  }

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
