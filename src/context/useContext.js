// react hooks
import { createContext, useState } from "react";
export const Context = createContext()

export const ContextStore = ({ children }) => {
  const data = [
    {
      id: 1,
      name: "Razvan Lucescu",
      order: "1565",
    },
    {
      id: 2,
      name: "Felice Mazzu",
      order: "6554",
    },
    {
      id: 3,
      name: "Ivan Juric",
      order: "8959",
    },
    {
      id: 4,
      name: "Dan Petrescu",
      order: "7853",
    },
    {
      id: 5,
      name: "Valerien Ismael",
      order: "7452",
    },
    {
      id: 6,
      name: "Marco Rose",
      order: "6126",
    },
  ]

  const [before, setBefore] = useState(data)

  const change = (e) => {
    const filteredData = data.filter(info =>
      info.name.toLowerCase().includes(e.target.value.toLowerCase())
      || info.order.includes(e.target.value))
    setBefore(filteredData)
  }

  return (
    <Context.Provider value={{ data, change, before }}>
      {children}
    </Context.Provider>
  )
}