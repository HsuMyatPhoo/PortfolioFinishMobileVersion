let getheader = document.getElementById('header');

        function shownav(){
          getheader.classList.toggle('navheader');
        }

        let navbar = document.getElementById('navbar');
        
        function  removenav(){
            if(getheader.classList.contains('navheader')){
                // console.log("this is small size");
                getheader.className = "";
            }else {
                // console.log("This is normal");
            }
        }
    


// This is form 
const form = document.getElementById('form');
const email = document.getElementById("email");
const input = document.querySelectorAll("input");
const message = document.getElementById('message');
console.log(input[0].value);

                                                                                                  
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I expect an email, darling❤️!");
    } else {
      email.setCustomValidity("");
    }
  });

  document.querySelector('form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
 };


//   function submitform(){
//     // form.submit();
//     input[0].value = '';
//     input[1].value = '';
//     message.value = '';
// }
//   }

// function cleardata(){
  



