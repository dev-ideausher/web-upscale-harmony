import React, { useEffect, useRef, useState } from 'react'
import InnerLayout from '../../modules/InnerLayout'
import Tabs from '../../modules/Tabs'
import { useRouter } from 'next/router'
import { allFiles } from '../../utils/upscale'

export default function Dashboard() {
  const [tabs, setTabs] = useState("config")
  const router = useRouter()
  const fileRef = useRef();
  const [file,setFile] = useState('')
  const [addedFiles, setAddedFiles] = useState([])
  const coverHandler = (e) => {
    if(e.target.files[0]){
        const name = e.target.files[0].name;
        const type = name.split(".")
      // if(allowedFileExtensions.includes(e.target.files[0].name.toLowerCase())){
        if(e.target.files[0].type == "text/plain" || type[1] == "yaml" || type[1] == "yml"){
          setFile(e.target.files[0]);
          uploadFile(e.target.files[0]);
        }else{
          // toast.error("File is not supported"),{
          //     toastId:"upload-error-1"
          // }
        }
    }
    else{
        // toast.error("No file chosen"),{
        //     toastId:"upload-error-1aejdg"
        // }
    }
  }

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('files', file);
    fetch('/api/upload-file', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      getAddedFiles()
      setTabs("config")
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  const getAddedFiles = async () => {
    const res = await allFiles()
    console.log(res)
    setAddedFiles(res.files)
  }

  useEffect(()=>{
    getAddedFiles()
  },[])
  return (
    <InnerLayout>
      <Tabs />
      <div className='container mt-50'>
        {/* Upload Container */}
        { tabs == "upload" && <>
          <div className='row d-align-center d-justify-space-between'>
            <div className='row d-d-align-center'>
              <h5 className='f-600 op-07'>Dashboard </h5>
            </div>
            <button className='btn btn-primary col-2' onClick={()=> setTabs("upload")}> Upload Files</button>
          </div>
        
          <div className='upload_container bg-white row d-align-center d-justify-center mt-4'>
            <div className='col-5 row upload_inner_container d-flex-column d-align-center p-relative'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M16.25 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V11.25L16.25 2.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.25 2.5V11.25H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3 className='mt-4'> Upload Files </h3>
              <span className='font-13 mt-1'>Add files to read and edit any of the config files</span>
              <input 
                  type='file'
                  ref={fileRef}
                  multiple={false}
                  onChange={coverHandler}
                  className={`uploader`}
                  accept=".yaml, .yml, .txt"
              />
            </div>
            <div className='col-12 mt-8 row d-justify-center'>
              {/* <button className='btn btn-primary col-3' onClick={()=> setTabs("config")}> Add files </button> */}
            </div>
          </div>
        </>}

        {/* View all folders */}

        {tabs=="config" && <>
          <div className='row d-align-center d-justify-space-between'>
            <div className='row d-align-center'>
              <h5 className='cursor-pointer op-07'>All config file</h5>
              <svg className='ml-2 mr-2' xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                <path d="M1.25 8L4.75 4.5L1.25 1" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <button className='btn btn-primary col-2' onClick={()=> setTabs("upload")}> Upload Files</button>
          </div>
          <div className='row col-12 border rounded-10 mt-4'>
            <h4 className='f-600 p-4 pl-5 pr-5 bg-head col-12' style={{borderRadius:"10px 10px 0 0"}}>All config files</h4>
            {addedFiles && addedFiles.map((item, index) => <div key={index} className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
                <div className='row d-align-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7.58325 1.16669H3.49992C3.1905 1.16669 2.89375 1.2896 2.67496 1.5084C2.45617 1.72719 2.33325 2.02393 2.33325 2.33335V11.6667C2.33325 11.9761 2.45617 12.2729 2.67496 12.4916C2.89375 12.7104 3.1905 12.8334 3.49992 12.8334H10.4999C10.8093 12.8334 11.1061 12.7104 11.3249 12.4916C11.5437 12.2729 11.6666 11.9761 11.6666 11.6667V5.25002L7.58325 1.16669Z" fill="#E0E0E0" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.58325 1.16669V5.25002H11.6666" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push(`files?filename=${item}`)}>{item}</h5>
                </div>
                <h5 className='f-500 text-black'>
                  <a href={`/uploads/${item}`} className='btn btn-primary mr-2' download={true}>Download</a>
                  <a className='btn btn-secondary'>Delete</a>
                </h5>
            </div>
            )}
          </div>
        </>}
      </div>
    </InnerLayout>
  )
}
