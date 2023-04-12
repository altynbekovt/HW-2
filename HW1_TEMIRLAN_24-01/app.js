const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})

const fieldbuttonfieldCheck = document.querySelector(".fiel dbutton-fieldCheck");
const fieldbuttonfieldClick = document.querySelector(".fiel dbutton-fieldClick");

fieldbutton-fieldClick.addEventListener("click",()=>{
    if(RegExp.test(LoginInput.value)){
        LoginResult.innerHTML = 'все правильно';
        LoginResult.style.color = 'green';
    }else{
        LoginResult.innerHTML = 'не правильно';
        LoginResult.style.color = 'red';
    }

})


//////////

const block = document.getElementById(1);


function move(element, from, to, step) {
    const position = parseInt(element.style.left, 10);
    position = isNaN(position) ? from : position;
    if (position >= to) {
        position = from;
    } else {
        position += step;
    }
    element.style.left = position + "px";
}


setInterval(function () {
    move(block, 200, 400, 1);
}, 1000); 