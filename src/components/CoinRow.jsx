import styles from "./CoinRow.module.css";

export default function CoinRow({ coin, index }) {
  let color = coin.price_change_24h > 0 ? "text-success" : "text-danger";

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name + " logo."}
          className={"me-4 " + styles.img}
        />
        <span>{coin.name}</span>
        <span className={"ms-2 text-uppercase " + styles["text-iso"]}>
          {coin.symbol}
        </span>
      </td>
      <td className="text-end">{coin.current_price}</td>
      <td className={color + " text-end"}>{coin.price_change_24h}</td>
      <td className="text-end">{coin.total_volume}</td>
      <td className="text-end">{coin.market_cap}</td>
    </tr>
  );
}
