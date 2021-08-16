import React from 'react'
export default (props: any) => {
  return (
    <header className='flex justify-between bg-green-300 py-6 '>
      <div>
        <h1 className=''> </h1>
      </div>
      <div>
        <h1 className='text-white font-bold text-xlg'> User Details</h1>
      </div>
      <div className='mx-12'>{props?.children}</div>
    </header>
  )
}
