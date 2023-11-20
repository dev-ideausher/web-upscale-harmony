import React from 'react'
import Layout from '../../modules/Layout'
import InnerLayout from '../../modules/InnerLayout'
import { useRouter } from 'next/router'
import Tabs from '../../modules/Tabs'

export default function Folders() {
  const router = useRouter()
  return (
    <InnerLayout>
      <Tabs />
      <div className='container mt-50'>
        <div className='row d-align-center d-justify-space-between'>
          <div className='row d-d-align-center'>
            Breadcrumbs
          </div>
          <button className='btn btn-primary col-2'> Upload Files</button>
        </div>
        <div className='col-12 border rounded-10 mt-4'>
          <h4 className='f-600 p-4 pl-5 pr-5 bg-head col-12' style={{borderRadius:"10px 10px 0 0"}}>Fortnite</h4>
          <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
            <div className='row d-align-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7.58325 1.16669H3.49992C3.1905 1.16669 2.89375 1.2896 2.67496 1.5084C2.45617 1.72719 2.33325 2.02393 2.33325 2.33335V11.6667C2.33325 11.9761 2.45617 12.2729 2.67496 12.4916C2.89375 12.7104 3.1905 12.8334 3.49992 12.8334H10.4999C10.8093 12.8334 11.1061 12.7104 11.3249 12.4916C11.5437 12.2729 11.6666 11.9761 11.6666 11.6667V5.25002L7.58325 1.16669Z" fill="#E0E0E0" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.58325 1.16669V5.25002H11.6666" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("files")}>system.yaml</h5>
            </div>
            <h5 className='f-500 text-black'>9 months ago</h5>
          </div>
          <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
            <div className='row d-align-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7.58325 1.16669H3.49992C3.1905 1.16669 2.89375 1.2896 2.67496 1.5084C2.45617 1.72719 2.33325 2.02393 2.33325 2.33335V11.6667C2.33325 11.9761 2.45617 12.2729 2.67496 12.4916C2.89375 12.7104 3.1905 12.8334 3.49992 12.8334H10.4999C10.8093 12.8334 11.1061 12.7104 11.3249 12.4916C11.5437 12.2729 11.6666 11.9761 11.6666 11.6667V5.25002L7.58325 1.16669Z" fill="#E0E0E0" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.58325 1.16669V5.25002H11.6666" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("files")}>system.yaml</h5>
            </div>
            <h5 className='f-500 text-black'>9 months ago</h5>
          </div>
          <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
            <div className='row d-align-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7.58325 1.16669H3.49992C3.1905 1.16669 2.89375 1.2896 2.67496 1.5084C2.45617 1.72719 2.33325 2.02393 2.33325 2.33335V11.6667C2.33325 11.9761 2.45617 12.2729 2.67496 12.4916C2.89375 12.7104 3.1905 12.8334 3.49992 12.8334H10.4999C10.8093 12.8334 11.1061 12.7104 11.3249 12.4916C11.5437 12.2729 11.6666 11.9761 11.6666 11.6667V5.25002L7.58325 1.16669Z" fill="#E0E0E0" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.58325 1.16669V5.25002H11.6666" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("files")}>system.yaml</h5>
            </div>
            <h5 className='f-500 text-black'>9 months ago</h5>
          </div>
        </div>
        
      </div>
    </InnerLayout>
  )
}
