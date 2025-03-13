document.addEventListener("DOMContentLoaded", function () {
    const anggotaButton = document.getElementById("showAnggota");
    const anggotaSection = document.getElementById("anggotaSection");
    const logoKelompok = document.getElementById("logoKelompok");

    anggotaButton.addEventListener("click", function () {
        if (anggotaSection.style.display === "none" || anggotaSection.style.display === "") {
            anggotaSection.style.display = "block";
            logoKelompok.style.display = "block";
            anggotaButton.textContent = "Sembunyikan Anggota Kelompok";
        } else {
            anggotaSection.style.display = "none";
            logoKelompok.style.display = "none";
            anggotaButton.textContent = "Tampilkan Anggota Kelompok";
        }
    });
});
