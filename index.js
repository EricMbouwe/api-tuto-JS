// Fetch (Promises based code)

const img = document.querySelector('img')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=MA7ohxIYwTdEkW4gq9ieDD4NzeQmKE9k&s=cat', { mode: 'cors' })
.then(response => {
  return response.json()
})
.then(response => {
  img.src = response.data.images.original.url
})
.catch(e => {
  console.log(e)
})


// Fetch (Async based code)

async function getCats() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=MA7ohxIYwTdEkW4gq9ieDD4NzeQmKE9k&s=cat', { mode: 'cors' })
  .then(response => {
    return response.json()
  })
  .then(response => {
    img1.src = response.data.images.original.url
  })
}

getCats()


// Fetch (Async/Await based code version 1)

async function getCatts() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=MA7ohxIYwTdEkW4gq9ieDD4NzeQmKE9k&s=cat', { mode: 'cors' })
  response.json().then(response => {
    img2.src = response.data.images.original.url
  })
}

getCatts()


// Fetch (Async/Await based code version 2)

async function getCattts() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=MA7ohxIYwTdEkW4gq9ieDD4NzeQmKE9k&s=cat', { mode: 'cors' })
  const parseData = await response.json()
  img3.src = parseData.data.images.original.url
}

getCattts()


// Fetch (Async/Await based code version 3)

/*async function getCatttts() {
  const response = fetch('https://api.giphy.com/v1/gifs/translate?api_key=MA7ohxIYwTdEkW4gq9ieDD4NzeQmKE9k&s=cat', { mode: 'cors' })
  const parseData = response.json()
  const datas = await Promise.all([response, parseData])
  img4.src = datas.data.images.original.url
}

getCatttts()*/