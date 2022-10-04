const changeLatter = (str) => {
  if (typeof str !== "string") return "Invalid! Input harus string.";

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "o";
      continue;
    }
      result += str[i];
  }
    return result;
};

console.log(changeLatter("Jakarta"));