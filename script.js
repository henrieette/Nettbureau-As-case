const fornavn = document.getElementById('fornavn')
const etternavn = document.getElementById('etternavn')
const bursdag = document.getElementById('bursdag')
const adresse = document.getElementById('adresse')
const postnr = document.getElementById('postnr')
const poststed = document.getElementById('poststed')
                                         
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (fornavn.value === '' || fornavn.value == null) {
    messages.push('Fyll inn navn!')
  }
    
  if (etternavn.value === '' || etternavn.value == null) {
    messages.push('Fyll inn navn!')
  }
    
      if (bursdag.value === '' || bursdag.value == null) {
    messages.push('Fyll inn navn!')
  }
    
      if (adresse.value === '' || adresse.value == null) {
    messages.push('Fyll inn adressen!')
  }
      if (postnr.value === '' || postnr.value == null) {
    messages.push('Fyll inn postnr!')
  }
      if (poststed.value === '' || poststed.value == null) {
    messages.push('Fyll inn poststed!')
  }

      if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})