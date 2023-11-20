import React, { useState } from 'react'
import InnerLayout from '../../modules/InnerLayout'
import Tabs from '../../modules/Tabs'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [tabs, setTabs] = useState("config")
  const router = useRouter()
  return (
    <InnerLayout>
      <Tabs />

      <div className='container mt-50'>
        {/* Upload Container */}
        { tabs=="upload" && <div className='upload_container bg-white row d-align-center d-justify-center'>
          <div className='col-5 row upload_inner_container d-flex-column d-align-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M16.25 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V11.25L16.25 2.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.25 2.5V11.25H25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 className='mt-4'>Access all your config files here</h3>
            <span className='font-13 mt-1'>Add files to read and edit any of the config files</span>
          </div>
          <div className='col-12 mt-8 row d-justify-center'>
            <button className='btn btn-primary col-3' onClick={()=> setTabs("config")}> Add files </button>
          </div>
        </div>}

        {/* View all folders */}

        {tabs=="config" && <>
          <div className='row d-align-center d-justify-space-between'>
            <div className='row d-d-align-center'>
              Breadcrumbs
            </div>
            <button className='btn btn-primary col-2' onClick={()=> setTabs("upload")}> Upload Files</button>
          </div>
          <div className='col-12 border rounded-10 mt-4'>
            <h4 className='f-600 p-4 pl-5 pr-5 bg-head col-12' style={{borderRadius:"10px 10px 0 0"}}>All config files</h4>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top'>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> Router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
            <div className='col-12 bg-white row d-align-center d-justify-space-between p-4 pl-5 pr-5 border-top' style={{borderRadius:"0 0 10px 10px"}}>
              <div className='row d-align-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M12.8332 10.6104C12.8332 10.9199 12.7103 11.2166 12.4915 11.4354C12.2727 11.6542 11.9759 11.7771 11.6665 11.7771H2.33317C2.02375 11.7771 1.72701 11.6542 1.50821 11.4354C1.28942 11.2166 1.1665 10.9199 1.1665 10.6104V2.44377C1.1665 2.13435 1.28942 1.8376 1.50821 1.61881C1.72701 1.40002 2.02375 1.2771 2.33317 1.2771H5.24984L6.4165 3.0271H11.6665C11.9759 3.0271 12.2727 3.15002 12.4915 3.36881C12.7103 3.5876 12.8332 3.88435 12.8332 4.19377V10.6104Z" fill="#A7A7A7" stroke="#838383" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h5 className='f-600 text-primary cursor-pointer' onClick={()=> Router.push("/folders")}>Fortnite</h5>
              </div>
              <h5 className='f-500 text-black'>9 months ago</h5>
            </div>
          </div>
        </>}
        
      </div>
    </InnerLayout>
  )
}