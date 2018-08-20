const items = document.querySelector('.items')

async function main () {
  const response = await fetch('https://api.github.com/users/brantem/followers')

  const followers = await response.json()

  followers.forEach(follower => createItem(follower))
}

function createItem (follower) {
  const item = document.createElement('div')
  const media = document.createElement('div')
  const description = document.createElement('div')

  const image = document.createElement('img')
  const title = document.createElement('h3')
  const button = document.createElement('a')

  item.classList.add('item')
  media.classList.add('media')
  description.classList.add('description')
  button.classList.add('button')

  title.innerText = follower.login
  image.src = follower.avatar_url
  button.innerText = 'Go to profile'
  button.href = follower.html_url
  button.target = '_blank'

  media.appendChild(image)

  description.appendChild(title)
  description.appendChild(button)

  item.appendChild(media)
  item.appendChild(description)

  items.appendChild(item)
}

main()
