export const getDataApi = async (URL_API) => {
  const res = await fetch(URL_API)
  const data = await res.json()
  return data
}

export const postDataApi = (URL_API, formData) => {
  fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Nuevo elemento creado:', data)
    })
}

export const putDataApi = (URL_API, formData) => {
  fetch(`${URL_API}${formData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Elemento actualizado:', data)
    })
}
export const deleteDataApi = (URL_API, formData) => {
  fetch(`${URL_API}${formData.id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Elemento eliminado:', data)
    })
}
