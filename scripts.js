document.addEventListener("DOMContentLoaded", ()=> {
    let e = document.getElementsByClassName("btn")
    let enterdata =  document.getElementById("email")
      
    e.addEventListener("click", emailFun(enterdata))

    function emailFun(data){
        let mail = data.email.value;
        var messageElement = document.querySelector('.message');
        if (mail){
            messageElement.innerHTML = "Thank you! Your email address <${mail}> has been added to your mailing list";
            return false;
        }
        else{ 
            messageElement.innerHTML = "Please enter a valid email address ";
            return false;
        }
    }
})