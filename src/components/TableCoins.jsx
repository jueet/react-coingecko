import React from "react";
import { formatCurrency } from "../utils/FormatCurrency";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

export default function TableCoins({ coins, search, currency }) {
  let searchedCoin = search.toLowerCase();

  let filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(searchedCoin) |
      coin.symbol.includes(searchedCoin)
    );
  });

  let formatedCoins = filteredCoins.map((coin) => {
    return {
      ...coin,
      current_price: formatCurrency(coin.current_price, currency),
    };
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {formatedCoins.map((coin, index) => (
          <CoinRow coin={coin} index={index + 1} key={coin.id} />
        ))}
      </tbody>
    </table>
  );
}
