import { useState, useEffect } from 'react'
import { getDataApi } from '../services/servicesApi'

function useGetData(url) {
  const [data, setData] = useState()
  const refreshData = () => {
    getDataApi(url).then((data) => setData(data))
  }

  useEffect(() => {
    refreshData()
  }, [])

  return { data, refreshData }
}

export default useGetData
