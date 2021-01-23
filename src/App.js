import Items from "./Components/Items";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState("");

  const url =
    "http://newsapi.org/v2/everything?q=apple&from=2021-01-22&to=2021-01-22&sortBy=popularity&apiKey=e7e18d2a534341db9813fbf838af53d4";

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const data = response.data.articles;
        setItems(data);
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };
  return (
    <div className="app">
      <Items data={items}/>
    </div>
  );
}

export default App;
