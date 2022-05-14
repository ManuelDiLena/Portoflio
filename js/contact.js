var submitBtn = null;
var formElements = null;

//Function to open the given mail tool and fill the subject and body with the values ​​of the Name and Message
var sendEmail = function(name, message) {
    window.open('mailto:manuel.dilena.29@gmail.com?subject=' + 'Contact: '
     + encodeURIComponent(name) +'&body=' + encodeURIComponent(message));
}

//Function to check the empty fields, the number of characters and the email
var validateForm = function() {
    var alphaNum = /^[a-zA-Z0-9]*$/; //alphanumeric characters only
    var validEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/; //regex with multiple email formats
    var name = '';
    var message = '';
    var isValid = true;

    for(var i = 0; i < formElements.length; i++) {
        if(formElements[i].id === 'name') {
            if(!alphaNum.test(formElements[i].value)) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Invalid characters';
                isValid = false;
            }
            name = formElements[i].value;
        }

        if(formElements[i].id === 'email') {
            if(!validEmail.test(formElements[i].value)) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Invalid Email format';
                isValid = false;
            }
        }

        if(formElements[i].id === 'message') {
            if(formElements[i].value.length < 5) {
                formElements[i].value = '';
                formElements[i].placeholder = 'Por favor ingrese más de 5 caracteres';
                isValid = false;
            }
            message = formElements[i].value;
        }   
       
    }

    (isValid) ? sendEmail(name, message) : styleBtn();
}

var styleBtn = function() {
    submitBtn.innerHTML = 'ERROR';
    submitBtn.className += 'error';
    setTimeout(errorMsg, 3000);
}

var errorMsg = function() {
    submitBtn.className = ' ';
    submitBtn.innerHTML = 'Enviar';
}

window.onload = function() {
    formElements = document.getElementsByClassName('entry');
    submitBtn = document.getElementById('submit');
    submitBtn.onclick = validateForm;
} 