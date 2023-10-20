const buttonBatal = document.getElementById("btn-batalkan-picker");
buttonBatal.addEventListener("click", () => {
  if (confirm("Apakah yakin ingin dibatalkan?")) {
    window.location.href = "../Input-Data/index.html";
  }
});

const redirect = () => {
  window.location.href = "../Mendapat-Picker/index.html";
};

setTimeout(redirect, 5000);
