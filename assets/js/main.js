const items = document.querySelector('.items')

async function main () {
  const response = await fetch('https://swapi.co/api/people/')

  const peoples = await response.json()

  console.log('### LEVEL 0 ###')
  console.log(peoples)

  console.log('### LEVEL 1 ###')
  console.log(peoples.results)

  console.log('### LEVEL 2 ###')
  peoples.results.forEach((people, index) => {
    const item = document.createElement('div')

    item.classList.add('item')
    item.innerHTML = `
      No. ${index}<br>
      Name: ${people.name}<br>
      Height: ${people.Height}<br>
      Hair Color: ${people.hair_color}
    `

    items.appendChild(item)
  })
}

main()

