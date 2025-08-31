document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("section img");

  images.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.background = "rgba(0,0,0,0.8)";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.zIndex = 9999;

      const imgPreview = document.createElement("img");
      imgPreview.src = img.src;
      imgPreview.style.maxWidth = "90%";
      imgPreview.style.maxHeight = "90%";
      imgPreview.style.border = "5px solid white";
      imgPreview.style.borderRadius = "10px";

      modal.appendChild(imgPreview);
      document.body.appendChild(modal);

      modal.addEventListener("click", () => modal.remove());
});
});
});