
const email = document.getElementById("email");
const input = document.querySelectorAll("input");
// const validityState = input.validity;

                                                                                                  
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I expect an email, darling❤️!");
    } else {
      email.setCustomValidity("");
    }
  });




