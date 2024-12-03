const subscribeLink = document.getElementById("subscribe-link");
const popupForm = document.getElementById("newslettert-modal");
const closePopup = document.getElementById("close");

// Hiển thị popup khi nhấn vào liên kết
subscribeLink.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định
  popupForm.classList.remove("modal"); // Hiển thị popup
});

// Đóng popup khi nhấn vào nút đóng
closePopup.addEventListener("click", () => {
  popupForm.classList.add("modal"); // Ẩn popup
});

// Đóng popup khi nhấn ra ngoài nội dung
popupForm.addEventListener("click", (e) => {
  if (e.target === popupForm) {
    popupForm.classList.add("modal");
  }
});
