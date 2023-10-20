const rincian = document.getElementById("rincianSampah");

document.addEventListener("DOMContentLoaded", () => {
  const dataSampah = localStorage.getItem("datas");
  if (dataSampah) {
    let getRincian = JSON.parse(dataSampah);
    // console.log(getRincian);

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
                    <div>
                        <img src="${item.image}" width="36px" alt="icon ${item.name}" />
                    <p>${item.name}</p>
                    </div>
                <p>${item.value} kg</p>
                </div>
                `;
    });
  } else {
    console.log("Tidak ada data");
  }
});
