import React, { useEffect, useState } from 'react'
import Layout from '../../modules/Layout'
import InnerLayout from '../../modules/InnerLayout'
import Tabs from '../../modules/Tabs'
import { useRouter } from 'next/router'
import { readFile, updateFile } from '../../utils/upscale'

export default function Files() {
  const router = useRouter()
  const [data, setData] = useState("")
  const [name, setName] = useState("Files")
  const readData = async (fileName) => {
    const response = await readFile(fileName)
    setData(response.content)
  }
  const updateData = async () => {
    const response = await updateFile(router.query["filename"], data)
    router.push("/dashboard")
  }
  useEffect(()=>{
    readData(router.query["filename"])
    setName(router.query["filename"])
  },[])
  return (
    <InnerLayout>
      <Tabs />
      <div className='container mt-50'>
        <div className='row d-align-center d-justify-space-between'>
          <div className='row d-align-center'>
            <h5 className='op-07 cursor-pointer' onClick={()=> router.push("/dashboard")}>All Config Files</h5>
            <svg className='ml-2 mr-2' xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
              <path d="M1.25 8L4.75 4.5L1.25 1" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h5 className='text-primary cursor-pointer'>{name}</h5>
          </div>
          <button className='btn btn-primary col-2' onClick={updateData}> Update Files </button>
        </div>
        <div className='row col-12 mt-5'>
          <textarea className='col-12' rows="28" value={data} onChange={(e)=> setData(e.currentTarget.value)} />
        </div>
      </div>
    </InnerLayout>
  )
}
