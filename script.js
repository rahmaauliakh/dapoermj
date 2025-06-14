document.getElementById('year').textContent = new Date().getFullYear();

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  const noWA = "6289662315611";
  const url = `https://wa.me/${noWA}?text=Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
  return false;
}
