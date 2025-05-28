document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("signInBtn");
    const popup = document.getElementById("signupPopup");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("closePopup");
    const signupForm = document.getElementById("signupForm");
    const formError = document.getElementById("formError");
  
   
    signInBtn.addEventListener("click", () => {
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
      overlay.style.display = "none";
      formError.textContent = "";
    });
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!username || !email || !password) {
        formError.textContent = "All fields are required!";
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        formError.textContent = "Please enter a valid email!";
        return;
      }
  
      if (password.length < 6) {
        formError.textContent = "Password must be at least 6 characters!";
        return;
      }
  
      formError.textContent = "Sign up successful!";
      // Close after success
      setTimeout(() => {
        popup.style.display = "none";
        overlay.style.display = "none";
        signupForm.reset();
      }, 1500);
    });
  });
  