import DessertCard, { DessertCardProps } from "./components/DessertCard";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

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
    <section className="home">
    <div>
        <h1>Desserts</h1>
        <div className="dessert-grid">
            {
              desserts.map(dessert => <DessertCard {...dessert}/>)
            }
        </div>
    </div>
      <Cart/>
    </section>
  )
};

export default App;
