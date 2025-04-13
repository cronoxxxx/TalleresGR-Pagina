
const showValidationError = (fieldId, errorMessage) => {
    const errorSpan = document.getElementById(fieldId + "Error") //emailError, apellidoError
    errorSpan.style.color="red"
    errorSpan.textContent = errorMessage;
}

const clearValidationError = (fieldId) => {
    const errorSpan = document.getElementById(fieldId + "Error")
    errorSpan.textContent = ""
}

const validateName = () => {
    
    let name = document.getElementById("nombre");
    if (name.value.length < 1 || name.value.length > 30) {
        showValidationError("nombre", "El nombre debe estar entre 1 y 30 caracteres")
        return 1
    } else {
        clearValidationError("nombre")
        return 0
    }
   
}

const validateSurname = () => {
    let surname = document.getElementById("telefono");
    if (surname.value.length < 1 || surname.value.length > 30) {
        showValidationError("telefono", "El telefono debe estar entre 1 y 11 caracteres")
        return 1
    } else if (!/^\d+$/.test(surname.value)) {
        showValidationError("telefono", "Solo se aceptan valores numéricos en esta categoría")
        return 1
    } else{
        clearValidationError("telefono")
        return 0
    }
    
}

const validateEmail = () => {
    let email = document.getElementById("email");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        showValidationError("email", "Ingrese un correo vÃ¡lido");
        return 1
    } else {
        clearValidationError("email")
        return 0
    }
    
}

const validateMessage = () => {
    let message = document.getElementById("mensaje");
    if (message.value.trim() === "") {
        showValidationError("mensaje", "Por favor, escriba un mensaje")
        return 1
    } else {
        clearValidationError("mensaje")
        return 0
    }
   
}

function action (){
    document.getElementById("join__button").addEventListener("click", validate)
}

const validate = (event) =>{
    let count = 0
    event.preventDefault()
    count+=validateName()
    count+=validateSurname()
    count+=validateEmail()
    count+=validateMessage()

    if (count ===0){
        document.getElementById("join-form").submit()
    }
}

action()
