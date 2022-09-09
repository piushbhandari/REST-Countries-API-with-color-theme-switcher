export function formatNumber(num, isDecimals) {
  let val = num.toLocaleString(undefined, {
    minimumFractionDigits: isDecimals ? 2 : 0,
  });
  return val;
}

export function getParams() {
  let paramObj = {};
  let currentURL = window.location.href;
  let params = currentURL.split("?")[1];
  let formattedParam = new URLSearchParams(params);
  for (const [key, value] of formattedParam) {
    paramObj = { ...paramObj, [key]: value };
  }
  return paramObj;
}
