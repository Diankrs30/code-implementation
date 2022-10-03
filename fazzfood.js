const fazzfood = (price, discount, distance, tax) => {
  if (typeof price !== "number" || typeof distance !== "number") {
    console.log("Input price dan distance harus number") 
    return;
  };
  if (typeof discount !== "string" && typeof discount !== null) {
    console.log("Input voucher harus string") 
    return;
  };
  if (typeof tax !== "boolean") {
    console.log("Input tax harus boolean") 
  return;
};

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
  };

  // biaya antar
  let biayaAntar = 0;
  if (distance <= 2) {
    biayaAntar = 5000;
  } else {
    biayaAntar = (distance - 2) * 3000 + 5000;
  };

  // tax
  let tarifPajak = 0;
  if (tax) {
    tarifPajak = price * 0.05;
  };

  // subtotal
  const subtotal = price - promoDiskon + biayaAntar + tarifPajak;
  console.log(`  Detail Tagihan`);
  console.log(`Harga        : ${price}`);
  console.log(`Potongan     : ${promoDiskon}`);
  console.log(`Biaya antar  : ${biayaAntar}`);
  console.log(`Pajak        : ${tarifPajak}`);
  console.log(`----------------------`);
  console.log(`Subtotal     : ${subtotal}`);
};
fazzfood(75000, "FAZZFOOD50", 5, true); 

