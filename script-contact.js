const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value == '' || name.value == null) {
    messages.push('Name is required')
  }
  if (email.value == '' || email.value == null) {
    messages.push('Email is required')
  }
  if (message.value.length <= 15) {
    messages.push('Message must be longer than 15 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})