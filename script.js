document.addEventListener("DOMContentLoaded", function () {
    const anggotaButton = document.getElementById("showAnggota");
    const anggotaSection = document.getElementById("anggotaSection");

    anggotaButton.addEventListener("click", function () {
        if (anggotaSection.style.display === "none" || anggotaSection.style.display === "") {
            anggotaSection.style.display = "block";
            anggotaButton.textContent = "Sembunyikan Anggota Kelompok";
        } else {
            anggotaSection.style.display = "none";
            anggotaButton.textContent = "Tampilkan Anggota Kelompok";
        }
    });
});
