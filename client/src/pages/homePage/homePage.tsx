import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import firebase from '../../firebase'
import axios from 'axios'
export default (props: any) => {
  let { history } = props
  const { state, getDataAction, dispatch }: any = useContext(GlobalContext)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api').then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <div className=''>
      <div className='py-5'>
        <div className='mt-8'>
          <button
            className='my-4 bg-green-400 hover:bg-green-500 w-full py-2 text-white'
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  state.loader = true
                  history.push('/login')
                })
            }}
          >
            Logout
          </button>
          <button
            className='my-4 bg-green-400 hover:bg-green-500 w-full py-2 text-white'
            onClick={() => getDataAction(dispatch)}
          >
            getData
          </button>
          {data.map((sin: any, index: number) => (
            <div key={index} className='flex justify-between m-4'>
              <p key={index} className='text-base mb-2 flex  font-bold w-1/4'>
                {sin.id} {sin.title}
              </p>
              <button
                className=' bg-green-400 hover:bg-green-500 w-1/3 py-2 text-white w-1/4'
                onClick={() => {
                  props.history.push(`/${sin.id}`)
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
