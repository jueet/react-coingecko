import React from "react";

export default function CoinRow({ coin, index }) {
  let color = coin.price_change_24h > 0 ? "text-success" : "text-danger";
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name + " logo."}
          className="me-4 img"
          style={{ width: "1rem" }}
        />
        <span>{coin.name}</span>
        <span className="ms-2 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td className={color}>{coin.price_change_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
}
