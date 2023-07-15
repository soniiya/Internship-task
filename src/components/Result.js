import React from 'react'
import './Result.css'

function Result({result}) {
  if (result.length === 0) {
    return <div>Loading...</div>;
  }
 // console.log(result)
  return (
    <div>
      <div className='container'>
      {result.map((item)=>(
        <div key={item.id} className='card'>
          <img src={item.avatar} alt='Avatar' />
          <br />
          <h2>{item.first_name + ' ' + item.last_name}</h2>
          <p>{item.email}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Result