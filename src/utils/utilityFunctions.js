export function formatNumber(num, isDecimals) {
  let val = num.toLocaleString(undefined, {
    minimumFractionDigits: isDecimals ? 2 : 0,
  });
  return val;
}
