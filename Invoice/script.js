document.addEventListener("DOMContentLoaded", () => {
  const dataSampah = localStorage.getItem("datas");
  if (dataSampah) {
    let getRincian = JSON.parse(dataSampah);

    const displayName = document.getElementById("forName");
    getRincian.forEach((item) => {
      if (item.nama) {
        displayName.innerHTML += `
        <p>${item.nama}</p>
      `;
      }
    });
  } else {
    console.log("Tidak ada data");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const displayPoints = document.getElementById("forPoints");
  let totalPoints = 0;

  const dataSampah = localStorage.getItem("datas");
  if (dataSampah) {
    let getRincian = JSON.parse(dataSampah);

    const poinJenisSampah = {
      Plastik: 2500,
      Makanan: 1000,
      Kertas: 1500,
      Karton: 500,
      Kaleng: 500,
      Kaca: 500,
    };

    const hitungPoin = (jenisSampah, value) => {
      return value * poinJenisSampah[jenisSampah];
    };

    getRincian.map((item) => {
      if (item.value !== "" && item.name in poinJenisSampah) {
        const poin = hitungPoin(item.name, item.value);
        totalPoints += poin;
      }
    });

    displayPoints.innerHTML += `
      <p>${totalPoints}</p>
    `;
  } else {
    console.log("Tidak ada data");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const displayDate = document.getElementById("forDate");

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  displayDate.innerHTML = `
  <p>${date}-${month}-${year}</p>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const displayTransNumber = document.getElementById("forTransNumber");

  const generateRandomNumber = (minDigits) => {
    let min = Math.pow(10, minDigits - 1);
    let max = Math.pow(10, minDigits) - 1;
    return Math.floor(Math.random() * (max - min - 1)) + min;
  };

  displayTransNumber.innerHTML = `
  <p>${generateRandomNumber(4)}</p>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const dataSampah = localStorage.getItem("datas");
  if (dataSampah) {
    let getRincian = JSON.parse(dataSampah);

    const displayRincian = document.getElementById("buatRincianSampah");

    getRincian.map((item) => {
      if (
        item.value !== "" &&
        !item.nama &&
        !item.noHP &&
        !item.alamat &&
        !item.deskripsi
      )
        displayRincian.innerHTML += `
          <div class="rincian">
            <p>${item.name}</p>
            <p>${item.value} kg</p>
          </div>
          <hr/>
          `;
    });
  } else {
    console.log("Tidak ada data");
  }
});
