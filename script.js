const keranjang = ["Silverqueen","Kacang Garuda","Tebs"];
console.log (keranjang);

keranjang.push("Minyak Gelas");
console.log (keranjang);

keranjang.unshift("Lotak Angin");
console.log (keranjang);

keranjang.pop();
console.log (keranjang);

keranjang.shift();
console.log (keranjang);

for(let i = 0; i < keranjang.length; i++) {
    console.log('Barang: ${i + 1}. ${keranjang[i]}');
}

const produk =[
    {nama:"Silverqueen", harga: 15000},
    {nama:"Kacang Garuda", harga: 10000},
    {nama:"Tebs", harga: 5000}
];
produk.push(
    {nama:"Minyak Gelas", harga: 13000}
);

produk.pop();
console.table(produk);

function namaProduk(nama,harga){
    produk.push({nama,harga});
    
};

function hitungTotal(){
    let total = 0;
    for(let i = 0; i < produk.length; i++){
        total += produk[i].harga;
    }
    return total;
};

namaProduk("Sendal", 20000);
namaProduk("Nyam-Nyam", 2000);
console.table(produk);

if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
};

const hari = 6;
switch (hari) {
    case 0: console.log("Minggu");break;
    case 1: console.log("Senin");break;
    case 2: console.log("Selasa");break;
    case 3: console.log("Rabu");break;
    case 4: console.log("Kamis");break;
    case 5: console.log("Jumat");break;
    case 6: console.log("Sabtu");break;
    default: console.log("Kode hari tidak valid");
}
console.log(hari);