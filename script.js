document.addEventListener("DOMContentLoaded", function () {
    // Sistem Tab
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Hapus class active dari semua button dan pane
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanes.forEach((pane) => pane.classList.remove("active"));

            // Tambahkan class active ke button dan pane yang diklik
            const targetTab = this.getAttribute("data-tab");
            this.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // Animasi Fade-In untuk Kutipan Inspiratif
    const kutipan = document.querySelector("#inspirasi blockquote");
    if (kutipan) {
        kutipan.style.opacity = 0;
        setTimeout(() => {
            kutipan.style.transition = "opacity 1s ease";
            kutipan.style.opacity = 1;
        }, 500);
    }

    // Animasi Hover untuk Gambar Menu Takjil
    const menuItems = document.querySelectorAll(".menu-item img");
    menuItems.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });
});