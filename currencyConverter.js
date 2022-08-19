const currencyCoverter = (lang, currencyType, amount) => {

  //lang for Naira is en-NG and currencyType is NGN
  //lang for USD is en-US and currencyType is USD
  //lang for Japanese Yen is en-JP and currencyType is JPY
  //lang for Great Britain Pound is en-UK currencyType is GBP
  
  const result = new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currencyType,
  }).format(Number(amount));
  return result;
};

console.log(currencyCoverter("en-NG", "NGN", 1000))