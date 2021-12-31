export default function CurrencySelector({ defaultValue, onChange, options }) {
  const handleChange = (e) => onChange(e.target.value);
  return (
    <select
      className="form-select"
      value={defaultValue}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
