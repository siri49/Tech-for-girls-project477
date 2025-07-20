let shareCount = 0;
const shareBtn = document.getElementById("whatsappShare");
const shareCountText = document.getElementById("shareCount");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

if (localStorage.getItem("submitted") === "true") {
  form.style.display = "none";
  successMessage.classList.remove("hidden");
}

shareBtn.addEventListener("click", () => {
  if (shareCount < 5) {
    const message = encodeURIComponent("Hey Buddy, Join Tech For Girls Community 💫💜");
    window.open(https://wa.me/?text=${message}, "_blank");
    shareCount++;
    shareCountText.textContent = Click count: ${shareCount}/5;

    if (shareCount === 5) {
      shareCountText.textContent = "✅ Sharing complete. Please continue.";
    }
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (shareCount < 5) {
    alert("Please complete WhatsApp sharing before submitting!");
    return;
  }

  // You can collect data and send to Google Sheets here
  localStorage.setItem("submitted", "true");

  form.style.display = "none";
  successMessage.classList.remove("hidden");
});