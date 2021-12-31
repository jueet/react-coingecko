import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import CurrencySelector from "./components/CurrencySelector";
import { Spinner } from "./components/Spinner";

function App() {
  const currencies = ["USD", "MXN", "JPY", "KRW"];

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(currencies[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedOption.toLowerCase()}&order=market_cap_desc&per_page=25&page=1`
      );
      setCoins(res.data);
      setIsLoading(false);
    };

    getData();
  }, [selectedOption]);

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
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={currencies}
            />
          </div>
        </div>
        <div className="overflow-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <TableCoins
              coins={coins}
              currency={selectedOption}
              search={search}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
