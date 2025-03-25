import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/quirkyCoderAayush')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white 
        p-4 text-3xl'>Github followers: {data.followers} + Github followings: {data.following}
        <div className="flex justify-center mt-4">
            <img src={data.avatar_url} alt="Git_picture" width={300} />
        </div>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/quirkyCoderAayush')
    return response.json()
}