import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPeoplelList(page) {
    return apiClient.get('/people?_limit=8&_page=' + page)
  },
  getPeopleDetail(id) {
    return apiClient.get('/people/' + id)
  }
}
