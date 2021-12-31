export function formatCurrency(amount, currency = "USD") {
  const options = { style: "currency", currency: currency };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return numberFormat.format(amount);
}
