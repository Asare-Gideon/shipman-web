export const formatAmount = (amount: number, prefix = "") => {
  return `${prefix}${new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount)}`;
};

export const formatQty = (qty: number, fractionDigits = 3) => {
  return `${new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  }).format(qty)}`;
};
