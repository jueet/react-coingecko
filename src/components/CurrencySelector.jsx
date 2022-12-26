export default function CurrencySelector({ selectedValue, onChange, options }) {
  const handleChange = (e) => onChange(e.target.value);
  return (
    <select
      className="form-select"
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((currency_iso, index) => (
        <option key={index} value={currency_iso}>
          {currency_iso}
        </option>
      ))}
    </select>
  );
}
