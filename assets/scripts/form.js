// EmailJS initialization
;(() => {
    emailjs.init({
      publicKey: "YG9MQrXUuvNE5aq5z",
    })
  })()
  
  // Form validation functions
  const showValidationError = (fieldId, errorMessage) => {
    const errorSpan = document.getElementById(fieldId + "Error")
    errorSpan.style.color = "red"
    errorSpan.textContent = errorMessage
  }
  
  const clearValidationError = (fieldId) => {
    const errorSpan = document.getElementById(fieldId + "Error")
    errorSpan.textContent = ""
  }
  
  const validateName = () => {
    const name = document.getElementById("nombre")
    if (name.value.length < 1 || name.value.length > 30) {
      showValidationError("nombre", "El nombre debe estar entre 1 y 30 caracteres")
      return 1
    } else {
      clearValidationError("nombre")
      return 0
    }
  }
  
  const validateTelefono = () => {
    const telefono = document.getElementById("telefono")
    if (telefono.value.length < 1 || telefono.value.length > 11) {
      showValidationError("telefono", "El teléfono debe estar entre 1 y 11 caracteres")
      return 1
    } else if (!/^\d+$/.test(telefono.value)) {
      showValidationError("telefono", "Solo se aceptan valores numéricos en esta categoría")
      return 1
    } else {
      clearValidationError("telefono")
      return 0
    }
  }
  
  const validateEmail = () => {
    const email = document.getElementById("email")
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      showValidationError("email", "Ingrese un correo válido")
      return 1
    } else {
      clearValidationError("email")
      return 0
    }
  }
  
  const validateMessage = () => {
    const message = document.getElementById("mensaje")
    if (message.value.trim() === "") {
      showValidationError("mensaje", "Por favor, escriba un mensaje")
      return 1
    } else {
      clearValidationError("mensaje")
      return 0
    }
  }
  
  // Status message functions
  let dotsInterval = null
  
  const showStatusMessage = (type, message, icon = "") => {
    const statusMessage = document.getElementById("status-message")
    statusMessage.className = "status-message " + type
  
    // Clear any existing interval
    if (dotsInterval) {
      clearInterval(dotsInterval)
      dotsInterval = null
    }
  
    // If this is a loading message and doesn't have an icon, animate the dots
    if (type === "loading" && !icon && message.includes("Enviando mensaje")) {
      const baseMessage = "Enviando mensaje"
      let dots = ""
  
      statusMessage.innerHTML = baseMessage + dots
      statusMessage.style.display = "block"
  
      dotsInterval = setInterval(() => {
        dots = dots.length >= 3 ? "" : dots + "."
        statusMessage.innerHTML = baseMessage + dots
      }, 200) // Change dots every 500ms
    } else {
      // For other messages, just show them normally
      statusMessage.innerHTML = message + (icon ? ` <i class="${icon}"></i>` : "")
      statusMessage.style.display = "block"
    }
  }
  
  const hideStatusMessage = () => {
    const statusMessage = document.getElementById("status-message")
    statusMessage.style.display = "none"
  
    // Clear the interval when hiding the message
    if (dotsInterval) {
      clearInterval(dotsInterval)
      dotsInterval = null
    }
  }
  
  // Email sending function
  const sendMail = () => {
    const params = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      mensaje: document.getElementById("mensaje").value,
    }
  
    const serviceID = "service_fxnr0bk"
    const templateID = "template_77ai83h"
  
    // Show sending message with animated dots
    showStatusMessage("loading", "Enviando mensaje")
  
    // Disable the button while sending
    const joinButton = document.getElementById("join__button")
    if (joinButton) {
      joinButton.disabled = true
    }
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Clear the dots animation interval
        if (dotsInterval) {
          clearInterval(dotsInterval)
          dotsInterval = null
        }
  
        // Show success message
        showStatusMessage("success", "Mensaje enviado", "ri-check-line")
  
        // Clear form fields
        document.getElementById("nombre").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefono").value = ""
        document.getElementById("mensaje").value = ""
  
        console.log(res)
  
        // Re-enable the button
        if (joinButton) {
          joinButton.disabled = false
        }
      })
      .catch((err) => {
        console.log(err)
  
        // Clear the dots animation interval
        if (dotsInterval) {
          clearInterval(dotsInterval)
          dotsInterval = null
        }
  
        // Show error message
        showStatusMessage("error", "Error al enviar el mensaje")
  
        // Re-enable the button
        if (joinButton) {
          joinButton.disabled = false
        }
      })
  }
  
  // Combined validation and email sending
  const validateAndSendEmail = (event) => {
    event.preventDefault()
  
    let count = 0
    count += validateName()
    count += validateTelefono()
    count += validateEmail()
    count += validateMessage()
  
    if (count === 0) {
      // If validation passes, send the email
      sendMail()
    }
  }
  
  // Get the button and attach the event listener directly
  const joinButton = document.getElementById("join__button")
  if (joinButton) {
    joinButton.addEventListener("click", validateAndSendEmail)
  }
  