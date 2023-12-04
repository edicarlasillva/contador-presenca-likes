let h1 = document.createElement('h1')
h1.textContent = 'Contador de Likes'
document.body.appendChild(h1)

let liskesContainer = document.createElement('div')
// liskesContainer.setAttribute('id', 'likes-container')
liskesContainer.id = 'likes-container'
document.body.appendChild(liskesContainer)

let h2 = document.createElement('h2')
h2.textContent = 'Postagem'
liskesContainer.appendChild(h2)

let contador = document.createElement('p')
contador.id = 'contador'
contador.textContent = '0'
liskesContainer.appendChild(contador)

let status = document.createElement('p')
status.id = 'status'
status.classList.add('aguardando')
status.textContent = 'Seja o primeiro a curtir.'
liskesContainer.appendChild(status)

let button = document.createElement('button')
button.type = 'button'
button.textContent = 'Curtir'
button.onclick = incrementarLikes
liskesContainer.appendChild(button)

let likes = 0
const numeroMinimo = 10

function incrementarLikes() {
  likes++
  contador.textContent = likes

  if (likes >= numeroMinimo) {
    status.textContent = 'Postagem Popular!'
    status.classList.add('postagem-popular')
  } else {
    status.textContent = 'Seja o primeiro a curtir.'
    status.classList.add('aguardando')
  }
}