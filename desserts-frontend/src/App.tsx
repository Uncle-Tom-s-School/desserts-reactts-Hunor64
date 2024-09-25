import DessertCard, { DessertCardProps } from "./components/DessertCard";
import { useEffect, useState } from "react";

const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProps[]>([]);


  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(apiDesserts => {
        setDesserts(apiDesserts);
      });
  },[desserts]);
  return (
    <div>
      {
      desserts.map(dessert => <DessertCard {...dessert}/>)
      }
    </div>
  );
};

export default App;
