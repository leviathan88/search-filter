// context
import { useContext } from "react";
import { Context } from "./context/useContext";

// components
import { Search } from "./components/Search";
import { Card } from "./components/Card";

export default function App() {
  const { before } = useContext(Context)

  return (
    <div className="main">
      <Search />
      <div className="info">
        {before.map(item =>
          <Card key={item.id}
            name={item.name}
            order={item.order} />
        )}
      </div>
    </div>
  );
}