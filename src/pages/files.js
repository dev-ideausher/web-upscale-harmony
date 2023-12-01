import React, { useEffect, useState } from 'react'
import Layout from '../../modules/Layout'
import InnerLayout from '../../modules/InnerLayout'
import Tabs from '../../modules/Tabs'
import { useRouter } from 'next/router'
import { readFile, updateFile } from '../../utils/upscale'

export default function Files() {
  const router = useRouter()
  const [data, setData] = useState("")

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
  },[])
  return (
    <InnerLayout>
      <Tabs />
      <div className='container mt-50'>
        <div className='row d-align-center d-justify-space-between'>
          <div className='row d-d-align-center'>
            Breadcrumbs
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
