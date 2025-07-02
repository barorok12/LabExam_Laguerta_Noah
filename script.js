function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!email || !password) {
    alert("Please fill in both fields.");
    return false;
  }
  window.location.href = "home.html";
  return false;
}
