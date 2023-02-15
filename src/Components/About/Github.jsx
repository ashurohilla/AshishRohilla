import React from 'react'
import GithubCalendar from "react-github-calendar"

function github() {
  return (
    <div className=' justify-center items-center text-white pt-5 my-5' > 
    <h1 className='flex items-center justify-center text-sm xs:text-3xl mt-7'> 
      Days I <strong className='text-gradient'> Code</strong>
      </h1>
      <div className=' flex mx-14 mt-8 justify-center items-center'>
      <GithubCalendar 
       username="ashurohilla"
       blockSize={15}
       color="#c084f5"
       fontSize={16}
      />
      </div>
    
    
    </div>
  )
}

export default github