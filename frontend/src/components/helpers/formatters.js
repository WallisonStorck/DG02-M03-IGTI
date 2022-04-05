const formatNumbers = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatNumbers.format(value);
}

function formatPercentage(value) {
  return `${value.toFixed(2).replace(".", ",")}%`;
}

export { formatNumber, formatPercentage };
