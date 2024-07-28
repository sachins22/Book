document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");

    pages.forEach((page, index) => {
        page.addEventListener("click", () => {
            if (!page.classList.contains("flipped")) {
                page.classList.add("flipped");
                page.style.transform = `rotateY(-180deg)`;
                page.style.zIndex = pages.length + 1 - index;
            }
        });
    });
});
