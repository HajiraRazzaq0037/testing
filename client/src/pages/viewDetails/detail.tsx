import React, { useEffect, useState } from 'react'
import { getApiUrI } from '../../config'
import axios from 'axios'
const Details = (props: any) => {
  const [data, setData] = useState({
    id: '',
    title: '',
    body: ''
  })
  useEffect(() => {
    axios.get(getApiUrI).then((response: any) => {
      setData(
        response.data.find(
          (sin: any) => sin.id === parseInt(props.match.params.id)
        )
      )
    })
  }, [props.match.params.id])
  return (
    <div className=''>
      <div className='py-5'>user Detail</div>
      <p>userId: {data.id}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  )
}

export default Details
