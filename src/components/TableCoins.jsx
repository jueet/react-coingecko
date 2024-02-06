import React from "react";
import { formatCurrency } from "../utils/FormatCurrency";
import CoinRow from "./CoinRow";

const titles = [
  "#",
  "Coin",
  "Price",
  "Price Change",
  "24h Volume",
  "Market Cap",
];

export default function TableCoins({ coins, search, currency }) {
  const searchedCoin = search.toLowerCase();

  const formatedCoins = coins
    .filter(({ name, symbol }) => name.toLowerCase().includes(searchedCoin) || symbol.includes(searchedCoin))
    .map((coin) => {
      const { current_price, total_volume, market_cap } = coin;
      return {
        ...coin,
        current_price: formatCurrency(current_price, currency),
        total_volume: formatCurrency(total_volume, currency),
        market_cap: formatCurrency(market_cap, currency),
      };
    });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th scope="col" className="text-center" key={index}>
              {title}
            </th>
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
