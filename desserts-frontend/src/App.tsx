import DessertCard, { DessertCardProps } from "./components/DessertCard";
import Cart from "./components/Cart";
import React, { createContext, useEffect, useState } from "react";

export type CartCtxItem = {
  cart:DessertCardProps[],
  setCart: React.Dispatch<React.SetStateAction<DessertCardProps[]>>
}

export const CartCtx = createContext<DessertCardProps |undefined>(undefined)

const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProps[]>([]);
  const [cart, setCart] = useState<DessertCardProps[]>([]);



  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(apiDesserts => {
        setDesserts(apiDesserts);
      });
  },[desserts]);
  return (
    <CartCtx.Provider value={{cart:cart,setCart:setCart}}>
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
    </CartCtx.Provider>
)}
export default App;
