export default defineEventHandler(async event => {
  const userQuery = getQuery(event)
  const {searchTerm} = userQuery
  const config = useRuntimeConfig(event)
  const {AccessToken} = config
  const movieSearchgUrl = 'https://api.themoviedb.org/3/search/movie'
  const seriesSearchgUrl = 'https://api.themoviedb.org/3/search/tv'

  const movies = await $fetch(movieSearchgUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`
    },
    query: {
      query: searchTerm
    }
  })

  const series = await $fetch(seriesSearchgUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`
    },
    query: {
      query: searchTerm
    }
  })

  return {movies, series}
})