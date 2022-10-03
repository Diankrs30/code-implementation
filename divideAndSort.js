const divideAndShort = (deretAngka) => {
  if (typeof deretAngka !== "number") return "Invalid! Data harus number.";

  let deret = deretAngka
    .toString()
    .split("0")
    .map((el) => el.split("").sort().join(""))
    .join("");
  return parseInt(deret);
};

console.log(divideAndShort(595656015946605));
