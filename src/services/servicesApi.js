export const getDataApi = async (URL_API) => {
  const res = await fetch(URL_API)
  const data = await res.json()
  return data
}

export const postDataApi = async (URL_API, formData) => {
  const response = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const data = await response.json()
  return data
}

export const putDataApi = async (URL_API, formData) => {
  const response = await fetch(`${URL_API}/${formData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const data = await response.json()
  return data
}
export const deleteDataApi = async (URL_API, id) => {
  const response = await fetch(`${URL_API}/${id}`, {
    method: 'DELETE'
  })
  const data = response.json()
}
