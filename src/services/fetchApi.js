export const getDataApi = async (URL_API) => {
  const res = await fetch(URL_API)
  const data = await res.json()
  return data
}
