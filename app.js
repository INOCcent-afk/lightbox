const modalImage = document.querySelectorAll(".modalImg");
const modal = document.querySelector(".image-modal");
const closeModal = document.querySelector(".image-modal-closeBtn");
const modalWrapper = document.querySelector(".image-modal-swiper-wrapper");
const nextArrow = document.querySelector(".image-modal-next");
const prevArrow = document.querySelector(".image-modal-prev");

modalImage.forEach((img) => {
  const src = img.src;
  const slideDiv = document.createElement("div");
  const slideImg = document.createElement("img");
  slideImg.src = src;
  slideDiv.className = "swiper-slide image-modal-swiper-slide";
  slideDiv.appendChild(slideImg);
  modalWrapper.appendChild(slideDiv);

  img.addEventListener("click", () => {
    const slides = document.querySelectorAll(".image-modal-swiper-slide");
    modal.style.opacity = "1";
    modal.style.pointerEvents = "all";
    document.body.style.overflow = "hidden";

    if (slides.length == 1) {
      nextArrow.className = "swiper-button-hidden";
      prevArrow.className = "swiper-button-hidden";
    }
  });
});
closeModal.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
});

var myModalSwiper = new Swiper(".image-modal-swiper-container", {
  speed: 400,
  spaceBetween: 5,
  slidesPerView: 1,
  watchOverflow: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
