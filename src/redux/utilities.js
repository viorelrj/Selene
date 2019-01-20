export const createUrl = (url, params) => {
  const res = new URL('https://api.unsplash.com/' + url)
  Object.keys(params).forEach(key => res.searchParams.append(key, params[key]))
  return res
}
