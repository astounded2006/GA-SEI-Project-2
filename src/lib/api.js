import axios from 'axios'

export function getAllQuotes() {
  return axios.get('https://type.fit/api/quotes')
}

export function getChuckQuotes() {
  return axios.get('https://api.chucknorris.io/jokes/random')
}

export function getKanyeQuotes() {
  return axios.get('https://api.kanye.rest')
}

export function getRonQuotes() {
  return axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
}
