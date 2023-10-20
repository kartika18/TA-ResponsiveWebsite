const elementPlastik = document.getElementById("buttonTambahSampahPlastik");
const tujuanPlastik = document.getElementById("inputPlastik");
elementPlastik.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanPlastik.disabled = false;
});

const elementSampahMakanan = document.getElementById(
  "buttonTambahSampahMakanan"
);
const tujuanSampahMakanan = document.getElementById("inputSampahMakanan");
elementSampahMakanan.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanSampahMakanan.disabled = false;
});

const elementKertas = document.getElementById("buttonTambahKertas");
const tujuanKertas = document.getElementById("inputKertas");
elementKertas.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKertas.disabled = false;
});

const elementKarton = document.getElementById("buttonTambahKarton");
const tujuanKarton = document.getElementById("inputKarton");
elementKarton.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKarton.disabled = false;
});

const elementKaleng = document.getElementById("buttonTambahKaleng");
const tujuanKaleng = document.getElementById("inputKaleng");
elementKaleng.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKaleng.disabled = false;
});

const elementKaca = document.getElementById("buttonTambahKaca");
const tujuanKaca = document.getElementById("inputKaca");
elementKaca.addEventListener("click", (e) => {
  e.preventDefault();
  tujuanKaca.disabled = false;
});

const nama = document.getElementById("inputName");
const noHP = document.getElementById("inputNoHP");
const alamat = document.getElementById("inputAlamat");
const deskripsi = document.getElementById("inputDeskripsi");

const btnSubmit = document.getElementById("submitDataSampah");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let namaValue = nama.value;
  let NoHPValue = noHP.value;
  let alamatValue = alamat.value;
  let plastikValue = tujuanPlastik.value;
  let sampahMakananValue = tujuanSampahMakanan.value;
  let kertasValue = tujuanKertas.value;
  let kartonValue = tujuanKarton.value;
  let kalengValue = tujuanKaleng.value;
  let kacaValue = tujuanKaca.value;
  let deskripsiValue = deskripsi.value;

  if (
    namaValue !== "" &&
    NoHPValue !== "" &&
    alamatValue !== "" &&
    deskripsiValue !== ""
  ) {
    let datas = [
      {
        nama: namaValue,
      },
      {
        noHP: NoHPValue,
      },
      {
        alamat: alamatValue,
      },
      {
        name: "Plastik",
        value: plastikValue,
        image: "../assets/bottle-linear.svg",
      },
      {
        name: "Makanan",
        value: sampahMakananValue,
        image: "../assets/food-24-regular.svg",
      },
      {
        name: "Kertas",
        value: kertasValue,
        image: "../assets/paper.svg",
      },
      {
        name: "Karton",
        value: kartonValue,
        image: "../assets/box-outline.svg",
      },
      {
        name: "Kaleng",
        value: kalengValue,
        image: "../assets/can.svg",
      },
      {
        name: "Kaca",
        value: kacaValue,
        image: "../assets/mirror.svg",
      },
      {
        deskripsi: deskripsiValue,
      },
    ];
    localStorage.setItem("datas", JSON.stringify(datas));

    window.location.href = "../Pencarian-Picker/index.html";

    namaValue = "";
    NoHPValue = "";
    alamatValue = "";
    deskripsiValue = "";
  } else {
    alert("Isi Semua Data Diri dan Data Sampah");
  }
});
