import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import CurrencySelector from "./components/CurrencySelector";
import { Spinner } from "./components/Spinner";

function App() {
  const currencies = ["USD", "EUR"];

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=25&page=1`
      );
      setCoins(res.data);
      setIsLoading(false);
    };

    getData();
  }, [currency]);

  return (
    <div className="container mt-4">
      <h1>Crypto prices</h1>
      <div>
        <div className="row my-4">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Search a crypto-coin"
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <CurrencySelector
              selectedValue={currency}
              onChange={setCurrency}
              options={currencies}
            />
          </div>
        </div>
        <div className="overflow-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <TableCoins coins={coins} currency={currency} search={search} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
