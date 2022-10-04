const fazzfood = (price, discount, distance, tax) => {
  if (typeof price !== "number" || typeof distance !== "number") {
    return "Input price dan distance harus number";
  }
  if (typeof discount !== "string" && typeof discount !== null) {
    return "Input voucher harus string";
  }
  if (typeof tax !== "boolean") {
    return "Input tax harus boolean";
  }
  // voucher
  let promoDiskon = 0;
  if (discount === "FAZZFOOD50" && price >= 50000) {
    promoDiskon = price * 0.5;
    if (promoDiskon >= 50000) {
      promoDiskon = 50000;
    }
  }
  if (discount === "DITRAKTIR60" && price >= 25000) {
    promoDiskon = price * 0.6;
    if (promoDiskon >= 30000) {
      promoDiskon = 30000;
    }
  }
  // biaya antar
  let biayaAntar = 5000;
  if (distance > 2) {
    biayaAntar = (distance - 2) * 3000 + 5000;
  }
  // tax
  let tarifPajak = 0;
  if (tax) {
    tarifPajak = price * 0.05;
  }
  // subtotal
  const subtotal = price - promoDiskon + biayaAntar + tarifPajak;
  return `      Detail Tagihan
  Harga        : ${price}
  Potongan     : ${promoDiskon}
  Biaya antar  : ${biayaAntar}
  Pajak        : ${tarifPajak}
  ----------------------
  Subtotal     : ${subtotal}`; 
};
console.log(fazzfood(75000, "FAZZFOOD50", 5, true));