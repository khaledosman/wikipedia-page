import axios from 'axios'
import { openSnackbar } from '../components/Notifier'
import { cachedGet } from './cached-get'

const cachedGetOptions = { showErrorMessage: openSnackbar }

// export async function getSummary (phrase, language) {
//   const res = await cachedGet(`https://${language}.wikipedia.org/w/api.php?action=query&explaintext&prop=extracts&format=json&titles=${encodeURIComponent(phrase)}&redirects=true&origin=${'*' || window.location.origin}`, cachedGetOptions)
//   const data = res.data

//   const pages = data.query.pages
//   return pages
// }

export async function getSummary (phrase, language) {
  const res = await cachedGet(`https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(phrase)}`, cachedGetOptions)
  return res.data
}

export function getPage (page, language) {
  return axios.get(`https://${language}.wikipedia.org/w/api.php?action=parse&format=json&page=${encodeURIComponent(page)}&prop=extracts&redirects=true&origin=${'*' || window.location.origin}`)
    .then(res => res.data)
}
