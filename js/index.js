const formLogin = document.getElementById("formLogin");
const error = document.getElementById("error");
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");


const login = async (email) => {
    const usersData = await fetchData("users")
    const matchFound = false;
    usersData.map((user) => {
      if (user.email === email) {
        localStorage.setItem("userData", JSON.stringify(user));
        location.replace("../pages/post.html");
        error.style.display = "none";
        matchFound = true;
        return;
      }
    });
    if (!matchFound) {
      error.style.display = "block";
    }
};

formLogin.onsubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  login(email);
};


eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash")
    eyeIcon.classList.add("fa-eye") 
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("fa-eye-slash")
    eyeIcon.classList.remove("fa-eye") 
  }})