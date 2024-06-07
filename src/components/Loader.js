import React from 'react'
import ReactLoading from 'react-loading'

const Loader = () => {
  return (
    <div>
        <ReactLoading type='bars' color="#0000FF" height={100} width={100} />
    </div>
  )
}

export default Loader