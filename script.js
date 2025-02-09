function checkName() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  if (name === "kritika") {
    // Trigger fade-out before redirecting
    document.querySelector('.container').style.animation = 'fadeOut 0.8s ease-out forwards';
    setTimeout(() => {
      window.location.href = "no1.html";
    }, 800);
  } else {
    alert("Sorry, this page is only for Kritika! ❤️");
  }
}